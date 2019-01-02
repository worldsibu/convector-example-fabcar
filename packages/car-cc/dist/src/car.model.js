"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var yup = require("yup");
var convector_core_model_1 = require("@worldsibu/convector-core-model");
var Car = (function (_super) {
    tslib_1.__extends(Car, _super);
    function Car() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = 'io.worldsibu.car';
        return _this;
    }
    tslib_1.__decorate([
        convector_core_model_1.ReadOnly(), convector_core_model_1.Required()
    ], Car.prototype, "type", void 0);
    tslib_1.__decorate([
        convector_core_model_1.ReadOnly(), convector_core_model_1.Required(),
        convector_core_model_1.Validate(yup.string())
    ], Car.prototype, "make", void 0);
    tslib_1.__decorate([
        convector_core_model_1.ReadOnly(), convector_core_model_1.Required(), convector_core_model_1.Validate(yup.string())
    ], Car.prototype, "model", void 0);
    tslib_1.__decorate([
        convector_core_model_1.Required(), convector_core_model_1.Validate(yup.string())
    ], Car.prototype, "colour", void 0);
    tslib_1.__decorate([
        convector_core_model_1.Required(), convector_core_model_1.Validate(yup.string())
    ], Car.prototype, "owner", void 0);
    return Car;
}(convector_core_model_1.ConvectorModel));
exports.Car = Car;
//# sourceMappingURL=car.model.js.map