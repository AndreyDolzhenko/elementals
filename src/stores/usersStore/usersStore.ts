import { makeObservable, observable, runInAction, action } from "mobx";

import usersService from "./usersStore.service";
import { User, CreateUser } from "../../types";

class UsersStore {
    users: User[] = [];

    isLoading = true;

    isError = false;
    
    constructor() {
        makeObservable(this, {
            users: observable,
            fetchAllUsers: action.bound,
        });
    };   
    
    setLoading = () => {
        this.isLoading = true;
        this.isError = false;
    };

    fetchAllUsers = async () => {
        this.setLoading();

        try {
            const users = await usersService.getAllUsers();
            runInAction(() => {
                this.users = users;
            });            
        } catch (e) {
            this.isError = true;
            console.error("Error fetching users: ", e);
        } finally {
            this.isLoading = false;
        }
    };
    
    createUser = async (body: CreateUser) => {
        this.setLoading();

        try {
            await usersService.createUser(body);
            const users = await usersService.getAllUsers();
            runInAction(() => {
                this.users = users;
            });            
        } catch (e) {
            this.isError = true;
            console.error("Error fetching users: ", e);
        } finally {
            this.isLoading = false;
        }
    };
};

export default new UsersStore();
