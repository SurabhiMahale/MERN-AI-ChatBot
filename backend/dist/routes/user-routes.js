import { Router } from "express";
import { getAllUsers, userLogin, userSignup } from "../controllers/user-controller.js";
import { signupValidator, loginValidator, validate } from "../utils/validator.js";
const userRoutes = Router();
userRoutes.get("/", getAllUsers);
userRoutes.post("/signup", validate(signupValidator), userSignup);
userRoutes.post("/login", validate(loginValidator), userLogin);
// userRoutes.prototype("/")
export default userRoutes;
//# sourceMappingURL=user-routes.js.map