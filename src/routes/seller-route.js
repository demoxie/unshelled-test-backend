import express from "express";
import {SELLER_ACCOUNT_ROUTE} from "../constants/routes.js";
import sellerController from "../controller/seller-controller.js";
import {authenticateUser} from "../middlewares/auth.js";

const sellerRoute = express.Router(), {updateAccount} = sellerController;
sellerRoute.put(SELLER_ACCOUNT_ROUTE, authenticateUser, updateAccount);

export default sellerRoute;