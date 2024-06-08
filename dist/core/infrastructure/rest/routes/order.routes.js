"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const order_controller_1 = require("../controller/order.controller");
const order_repository_adapter_1 = require("../../adapters/order.repository.adapter");
const orderRouter = (0, express_1.Router)();
const controller = new order_controller_1.OrderController(new order_repository_adapter_1.OrderAdapterRepository());
orderRouter.post("/orden", controller.create.bind(controller));
orderRouter.get("/orden", controller.list.bind(controller));
orderRouter.get("/orden/:ordenId", controller.get.bind(controller));
orderRouter.put("/orden/:ordenId", controller.update.bind(controller));
orderRouter.delete("/orden/:ordenId", controller.remove.bind(controller));
exports.default = orderRouter;
