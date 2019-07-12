import {singleton} from "@fusion.io/framework";

@singleton()
export default class Repository {
    constructor() {
        this.users = {
            userLogin: [
                {id: 1, username: "linh", password: "123"},
                {id: 2, username: "linh2", password: "123"}
            ]
        }
    }

    get() {
        return this.users.userLogin;
    }

    getbyId(id) {
        var users = [];
        this.users.userLogin.forEach((user, index) => {
            if (user.id == id) {
                users = this.users.userLogin[index];
            }
        });
        return users;
    }

    create(id, name, password) {
        return this.users.userLogin.push({
            id, name, password
        });
    }

    update(id, name, password) {
        return this.users.userLogin.forEach((user, index) => {
            if (user.id == id) {
                this.users.userLogin[index] = {
                    id: id,
                    name: name,
                    password
                };
            }
        });
    }

    delete(id) {
        this.users.userLogin.forEach((user, index) => {
            if (user.id == id) {
                this.users.userLogin.splice(index, 1);
            }
        });
        return this.users.userLogin;
    }
}
