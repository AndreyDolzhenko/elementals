import axiosApi from "../../services/api/axiosApi";
import { CreateLastTry, LastTryResult, UserId } from "../../types/GuessSTM";

class GuessSTMService {
    createLastTry = async (body: CreateLastTry): Promise<void> => {
        return axiosApi.post("/guess-stm/last-try", body);
    };

    getLastTryResults = async (userId: number): Promise<LastTryResult[]> => {
        return axiosApi.get("/guess-stm/last-try", {params: {userId}});
    }
};

export default new GuessSTMService();
