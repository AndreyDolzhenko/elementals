import axiosApi from "../../services/api/axiosApi";
import { CreateLastTry, LastTryResult, UserId, CreateAttempts, GetAttempts } from "../../types/GuessSTM";

class GuessSTMService {
    createLastTry = async (body: CreateLastTry): Promise<void> => {
        return axiosApi.post("/guess-stm/last-try", body);
    };

    createAttempts = async (body: CreateAttempts): Promise<void> => {
        return axiosApi.post("/guess-stm/attempts", body);
    };

    getLastTryResults = async (userId: number): Promise<LastTryResult[]> => {
        return axiosApi.get("/guess-stm/last-try", {params: {userId}});
    }

    deleteLastTryResults = async (userId: number): Promise<void> => {
        return axiosApi.delete("/guess-stm/last-try", {params: {userId}});
    }

    getAttempts = async (userId: number): Promise<GetAttempts[]> => {
        return axiosApi.get("/guess-stm/attempts", {params: {userId}});
    }
};

export default new GuessSTMService();
