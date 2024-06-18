import { AuthUser } from "../../types";
import axiosApi from "../../services/api/axiosApi";

class Auth {
    signIn = async (body: AuthUser): Promise<object> => {
        return axiosApi.post("/users/auth/login", body);
    }
}

export default new Auth();
