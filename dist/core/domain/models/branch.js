"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BranchModel = void 0;
class BranchModel {
    get getIdBranch() {
        return this.idBranch;
    }
    set setIdBranch(idBranch) {
        this.idBranch = idBranch;
    }
    get getIdSector() {
        return this.idSector;
    }
    set setIdSector(idSector) {
        this.idSector = idSector;
    }
    get getBranch() {
        return this.branchName;
    }
    set setBranch(branchName) {
        this.branchName = branchName;
    }
    get getStatus() {
        return this.status;
    }
    set setStatus(status) {
        this.status = status;
    }
}
exports.BranchModel = BranchModel;
BranchModel.ENABLE = 1;
BranchModel.DISABLE = 2;
BranchModel.LOCK = 3;
BranchModel.PENDING = 4;
BranchModel.DELETE = 99;