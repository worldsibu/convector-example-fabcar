"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var yup = require("yup");
var convector_core_controller_1 = require("@worldsibu/convector-core-controller");
var car_model_1 = require("./car.model");
var CarController = (function (_super) {
    tslib_1.__extends(CarController, _super);
    function CarController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CarController.prototype.init = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var mockData;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        mockData = [
                            new car_model_1.Car({ id: '1', make: 'Toyota', model: 'Prius', colour: 'blue', owner: 'Tomoko' }),
                            new car_model_1.Car({ id: '2', make: 'Ford', model: 'Mustang', colour: 'red', owner: 'Brad' }),
                            new car_model_1.Car({ id: '3', make: 'Hyundai', model: 'Tucson', colour: 'green', owner: 'Jin Soo' }),
                            new car_model_1.Car({ id: '4', make: 'Volkswagen', model: 'Passat', colour: 'yellow', owner: 'Max' }),
                            new car_model_1.Car({ id: '5', make: 'Tesla', model: 'S', colour: 'black', owner: 'Adriana' }),
                            new car_model_1.Car({ id: '6', make: 'Peugeot', model: '205', colour: 'purple', owner: 'Michel' }),
                            new car_model_1.Car({ id: '7', make: 'Chery', model: 'S22L', colour: 'white', owner: 'Aarav' }),
                            new car_model_1.Car({ id: '8', make: 'Fiat', model: 'Punto', colour: 'violet', owner: 'Pari' }),
                            new car_model_1.Car({ id: '9', make: 'Tata', model: 'Nano', colour: 'indigo', owner: 'Valeria' }),
                            new car_model_1.Car({ id: '10', make: 'Holden', model: 'Barina', colour: 'brown', owner: 'Shotaro' })
                        ];
                        return [4, Promise.all(mockData.map(function (car) { return car.save(); }))];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    CarController.prototype.query = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2, car_model_1.Car.getOne(id)];
            });
        });
    };
    CarController.prototype.queryAll = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2, car_model_1.Car.getAll()];
            });
        });
    };
    CarController.prototype.create = function (car) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, car.save()];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    CarController.prototype.changeOwner = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var car;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, car_model_1.Car.getOne(id)];
                    case 1:
                        car = _a.sent();
                        return [4, car.save()];
                    case 2:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    tslib_1.__decorate([
        convector_core_controller_1.Invokable()
    ], CarController.prototype, "init", null);
    tslib_1.__decorate([
        convector_core_controller_1.Invokable(),
        tslib_1.__param(0, convector_core_controller_1.Param(yup.string()))
    ], CarController.prototype, "query", null);
    tslib_1.__decorate([
        convector_core_controller_1.Invokable()
    ], CarController.prototype, "queryAll", null);
    tslib_1.__decorate([
        convector_core_controller_1.Invokable(),
        tslib_1.__param(0, convector_core_controller_1.Param(car_model_1.Car))
    ], CarController.prototype, "create", null);
    tslib_1.__decorate([
        convector_core_controller_1.Invokable(),
        tslib_1.__param(0, convector_core_controller_1.Param(yup.string()))
    ], CarController.prototype, "changeOwner", null);
    CarController = tslib_1.__decorate([
        convector_core_controller_1.Controller('car')
    ], CarController);
    return CarController;
}(convector_core_controller_1.ConvectorController));
exports.CarController = CarController;
//# sourceMappingURL=car.controller.js.map