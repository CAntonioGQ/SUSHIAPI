"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Price = void 0;
const typeorm_1 = require("typeorm");
const product_entity_1 = require("./product.entity");
let Price = class Price {
};
exports.Price = Price;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_price', type: "integer" }),
    __metadata("design:type", Number)
], Price.prototype, "idPrice", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'price', type: "varchar" }),
    __metadata("design:type", String)
], Price.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => product_entity_1.Product, product => product.price),
    __metadata("design:type", Array)
], Price.prototype, "products", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'status', type: 'integer' }),
    __metadata("design:type", Number)
], Price.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Price.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Price.prototype, "updatedAt", void 0);
exports.Price = Price = __decorate([
    (0, typeorm_1.Entity)({ name: 'prices' })
], Price);
