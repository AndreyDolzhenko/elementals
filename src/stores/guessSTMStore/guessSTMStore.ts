import { makeObservable, observable, runInAction, action } from "mobx";

import guessSTMService from "./guessSTMStore.service";
import { CreateLastTry } from "../../types";

class GuessSTMStore {
    isLoading = true;

    isError = false;

    constructor() {
        makeObservable(this, {            
            createLastTry: action.bound,
        });
    }

    setLoading = () => {
        this.isLoading = true;
        this.isError = false;
    };

    createLastTry = async (body: CreateLastTry) => {
        this.setLoading();

        try {
            await guessSTMService.createLastTry(body);
        } catch(e) {
            this.isError = true;
            console.error(e);
        } finally {
            this.isLoading = false;
        }    
    }

}

export default new GuessSTMStore();
