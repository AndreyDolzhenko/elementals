import axiosApi from "../../services/api/axiosApi";
import { User } from "../../types";

class UsersService {
    getAllUsers = async (): Promise<User[]> => {
        return axiosApi.get("/users");
    };
};

export default new UsersService();
