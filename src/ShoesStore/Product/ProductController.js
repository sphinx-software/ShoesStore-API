import {get, post,put,del, singleton, middleware}   from "@fusion.io/framework";
import ProductResource                              from "./ProductResource";
import ProductForm                                  from "./ProductForm";
import Product                                      from "./Product";
import ProductRequired                              from "./ProductRequired";
import CollectionProductResource                    from "./CollectionProductResource";


@singleton()
export default class ProductController {

    @get('/products')
    async get(context) {
        const products = await Product
            .query()
            .select('products.*', 'models.name',
                'models.description','models.images',
                'models.status','models.tags','models.slug',
                'collections.parent_id', 'collections.name as collection_name',
                'collections.slug as collection_slug', 'collections.related_slugs')
            .includeTrash()
            .join('models', 'products.model_id', 'models.id' )
            .join('collections', 'models.collection_id', 'collections.id')
            .where('products.deletedAt', null)

        ;
        context.status = 200;
        return await context.render(CollectionProductResource, products);
    }

    @middleware(ProductRequired)
    @get('/products/:id')
    async detail(context) {
        return await context.render(ProductResource, context.product)
    }

    @middleware(ProductForm)
    @post('/products')
    async create(context) {
        const product = await Product.query().insert(context.productForm);

        context.status = 201;
        return await context.render(ProductResource, product)
    }

    @middleware(ProductRequired,ProductForm)
    @put('/products/:id')
    async update(context) {
        const product = context.product;
        await product.$query().patch(context.productForm);
        return  await context.render(ProductResource, product);
    }

    // @middleware(ProductRequired)
    @del('/products/:id')
    async del(context) {
        const product = context.product;
        await product.$query().delete();

        return await context.render(ProductResource, product);
    }}

