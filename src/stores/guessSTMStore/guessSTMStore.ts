import { makeObservable, observable, runInAction, action } from "mobx";

import guessSTMService from "./guessSTMStore.service";
import { CreateLastTry } from "../../types";
import { CreateAttempts } from "../../types/GuessSTM";

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
    } catch (e) {
      this.isError = true;
      console.error(e);
    } finally {
      this.isLoading = false;
    }
  };

  getLastTryResults = async (userId: number) => {
    this.setLoading();

    try {
      const result = await guessSTMService.getLastTryResults(userId);
      return result;
    } catch (e) {
      this.isError = true;
      console.error(e);
    } finally {
      this.isLoading = false;
    }
  };

  deleteLastTryResults = async (userId: number) => {
    this.setLoading();
    try {
      await guessSTMService.deleteLastTryResults(userId);      
    } catch (e) {
      this.isError = true;
      console.error(e);
    } finally {
      this.isLoading = false;
    }
  };

  createAttempts = async (body: CreateAttempts) => {
    this.setLoading();

    try {
      await guessSTMService.createAttempts(body);
    } catch (e) {
      this.isError = true;
      console.error(e);
    } finally {
      this.isLoading = false;
    }
  };

  getAttempts = async (userId: number) => {
    this.setLoading();
    try {
      const result = guessSTMService.getAttempts(userId);
      return result;
    } catch (e) {
      this.isError = true;
      console.log(e);
    } finally {
      this.isLoading = false;
    }
  };
}

export default new GuessSTMStore();
