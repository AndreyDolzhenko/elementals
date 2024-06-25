import axiosApi from "../../services/api/axiosApi";
import { User, CreateUser } from "../../types";

class UsersService {
    getAllUsers = async (): Promise<User[]> => {
        return axiosApi.get("/users");
    };

    createUser = async (body: CreateUser): Promise<void> => {
        return axiosApi.post("/users/auth/registration", body);
    };
};

export default new UsersService();
