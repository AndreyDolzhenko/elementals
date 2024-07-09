import axiosApi from "../../services/api/axiosApi";
import { CreateLastTry } from "../../types";

class GuessSTMService {
    createLastTry = async (body: CreateLastTry): Promise<void> => {
        return axiosApi.post("/guess-stm/last-try", body);
    };
};

export default new GuessSTMService();
