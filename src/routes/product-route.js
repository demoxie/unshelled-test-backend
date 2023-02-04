import express from "express";
import {DELETE_PRODUCT_ROUTE, EDIT_PRODUCT_ROUTE, FETCH_PRODUCTS_ROUTE} from "../constants/routes.js";
import {authenticateUser} from "../middlewares/auth.js";
import controllers from "../controller/index.js";

const productRoute = express.Router();
const {productController: {findAll, edit,remove}} = controllers;
productRoute.get(FETCH_PRODUCTS_ROUTE, authenticateUser, findAll);
productRoute.put(EDIT_PRODUCT_ROUTE, authenticateUser, edit);
productRoute.delete(DELETE_PRODUCT_ROUTE, authenticateUser, remove);

export default productRoute;