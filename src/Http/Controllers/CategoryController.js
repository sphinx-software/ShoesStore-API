import {get, post, put, del, singleton} from '@fusion.io/framework';
import Repository from "../../ShoesStore/Categories/Repository";

@singleton(Repository)
export default class CategoryController {
    constructor(repos) {
        this.repos = repos;
    }

    @get('/categories')
    async get(context) {
        context.body = await this.repos.get();
    }

    @get('/categories/:id')
    async getById(context) {
        let result = await this.repos.getbyId(context.params.id);
        if (!result.id) {
            context.status = 404;
            return context.body = {
                message: "ID_NOT_FOUND"
            }
        }
        context.body = result;
    }

    @post('/categories')
    async create(context) {
        if (!context.request.body.id || !context.request.body.name) {
            context.status = 400;
            return context.body = {
                message: "ID_OR_NAME_NOT_NULL"
            }
        }
        context.status = 201;
        await this.repos.create(context.request.body.id, context.request.body.name);
        context.body = await this.repos.get();
    }

    @put('/categories/:id')
    async update(context) {
        let result = await this.repos.getbyId(context.params.id);
        if (!result.id) {
            context.status = 404;
            return context.body = {
                message: "ID_NOT_FOUND"
            }
        }
        context.status = 200;
        await this.repos.update(context.params.id, context.request.body.name);
        context.body = await this.repos.getbyId(context.params.id);
    }

    @del('/categories/:id')
    async del(context) {
        let result = await this.repos.getbyId(context.params.id);
        if (!result.id) {
            context.status = 404;
            return context.body = {
                message: "ID_NOT_FOUND"
            }
        }
        context.status = 200;
        await this.repos.delete(context.params.id);
        context.body = await this.repos.get();
    }
}