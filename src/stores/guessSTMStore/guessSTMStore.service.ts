import axiosApi from "../../services/api/axiosApi";
import { CreateLastTry, LastTryResult, UserId } from "../../types/GuessSTM";

class GuessSTMService {
    createLastTry = async (body: CreateLastTry): Promise<void> => {
        return axiosApi.post("/guess-stm/last-try", body);
    };

    lastTryResult = async (body: UserId): Promise<LastTryResult> => {
        return axiosApi.post("/guess-stm/last-try/data", body);
    }
};

export default new GuessSTMService();
