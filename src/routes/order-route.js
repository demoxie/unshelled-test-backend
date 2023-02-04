import express from "express";
import {DELETE_ORDER_ROUTE, FETCH_ALL_ORDER_ROUTE} from "../constants/routes.js";
import controllers from "../controller/index.js";
import {authenticateUser} from "../middlewares/auth.js";

const orderRoute = express.Router(), {orderController: {findAll, remove}} = controllers;

orderRoute.get(FETCH_ALL_ORDER_ROUTE,authenticateUser,findAll)
orderRoute.delete(DELETE_ORDER_ROUTE,authenticateUser,remove)
export default orderRoute