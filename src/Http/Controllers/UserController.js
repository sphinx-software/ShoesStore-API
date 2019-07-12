import {singleton, get, post, put, del} from '@fusion.io/framework';
import Repository from "../../ShoesStore/Users/Repository";
import Re from "../../ShoesStore/Categories/Repository"
@singleton(Repository,Re)
export default class UserController {
    constructor(repos) {
        this.repos = repos;
    }

    @get('/users')
    async get(context) {
        console.log(this.repos,"1");
        console.log(Repository,"2");
        console.log(Re,"3");
        context.body = await this.repos.get();
    }

    @get('/users/:id')
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

    @post('/users')
    async create(context) {
        if (!context.request.body.id || !context.request.body.name || !context.request.body.password) {
            context.status = 400;
            return context.body = {
                message: "ID_OR_NAME_OR_PASSWORD_NOT_NULL"
            }
        }
        context.status = 201;
        await this.repos.create(context.request.body.id, context.request.body.name, context.request.body.password);
        context.body = await this.repos.get();
    }

    @put('/users/:id')
    async update(context) {
        let result = await this.repos.getbyId(context.params.id);
        if (!result.id) {
            context.status = 404;
            return context.body = {
                message: "ID_NOT_FOUND"
            }
        }
        context.status = 200;
        await this.repos.update(context.params.id, context.request.body.name, context.request.body.password);
        context.body = await this.repos.getbyId(context.params.id);
    }

    @del('/users/:id')
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