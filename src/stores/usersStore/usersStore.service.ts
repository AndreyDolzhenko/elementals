import axiosApi from "../../services/api/axiosApi";
import { User, CreateUser, UpdateUser } from "../../types";

class UsersService {
    getAllUsers = async (): Promise<User[]> => {
        return axiosApi.get("/users");
    };

    createUser = async (body: CreateUser): Promise<void> => {
        return axiosApi.post("/users/auth/registration", body);
    };

    updateUser = async (body: UpdateUser, id: number): Promise<void> => {
        return axiosApi.put(`/users/${id}`, body);
    };
};

export default new UsersService();
