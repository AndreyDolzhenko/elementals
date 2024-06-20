import { AuthUser, SignIn } from "../../types";
import axiosApi from "../../services/api/axiosApi";

class Auth {
    signIn = async (body: AuthUser): Promise<SignIn> => {
        return axiosApi.post("/users/auth/login", body);
    }
}

export default new Auth();
