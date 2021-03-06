import { apiHelper } from "../utils/helpers";

export default {
  userLogin(loginData) {
    return apiHelper.post("/users/signin", loginData);
  },
  adminLogin(loginData) {
    return apiHelper.post("/admin/login", loginData);
  },
  userRegister(registerData) {
    return apiHelper.post("/users", { ...registerData });
  },
};