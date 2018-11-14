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
                            new car_model_1.Car('1').init('Toyota', 'Prius', 'blue', 'Tomoko'),
                            new car_model_1.Car('2').init('Ford', 'Mustang', 'red', 'Brad'),
                            new car_model_1.Car('3').init('Hyundai', 'Tucson', 'green', 'Jin Soo'),
                            new car_model_1.Car('4').init('Volkswagen', 'Passat', 'yellow', 'Max'),
                            new car_model_1.Car('5').init('Tesla', 'S', 'black', 'Adriana'),
                            new car_model_1.Car('6').init('Peugeot', '205', 'purple', 'Michel'),
                            new car_model_1.Car('7').init('Chery', 'S22L', 'white', 'Aarav'),
                            new car_model_1.Car('8').init('Fiat', 'Punto', 'violet', 'Pari'),
                            new car_model_1.Car('9').init('Tata', 'Nano', 'indigo', 'Valeria'),
                            new car_model_1.Car('10').init('Holden', 'Barina', 'brown', 'Shotaro')
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