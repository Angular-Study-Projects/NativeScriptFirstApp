webpackHotUpdate("bundle",{

/***/ "./shared/grocery/grocery.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroceryService", function() { return GroceryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@angular/common/http");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./shared/config.ts");
/* harmony import */ var _grocery_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./shared/grocery/grocery.model.ts");






var GroceryService = /** @class */ (function () {
    function GroceryService(http) {
        this.http = http;
        this.baseUrl = _config__WEBPACK_IMPORTED_MODULE_4__["Config"].apiUrl + "appdata/" + _config__WEBPACK_IMPORTED_MODULE_4__["Config"].appKey + "/Groceries";
    }
    GroceryService.prototype.add = function (name) {
        return this.http.post(this.baseUrl, JSON.stringify({ Name: name }), { headers: this.getCommonHeaders() }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            return new _grocery_model__WEBPACK_IMPORTED_MODULE_5__["Grocery"](data._id, name);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleErrors));
    };
    GroceryService.prototype.delete = function (id) {
        return this.http.delete(this.baseUrl + "/" + id, { headers: this.getCommonHeaders() }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleErrors));
    };
    GroceryService.prototype.load = function () {
        // Kinvey-specific syntax to sort the groceries by last modified time. Don’t worry about the details here.
        var params = {
            "sort": "{\"_kmd.lmt\": 1}"
        };
        return this.http.get(this.baseUrl, {
            headers: this.getCommonHeaders(),
            params: params
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            var groceryList = [];
            data.forEach(function (grocery) {
                groceryList.push(new _grocery_model__WEBPACK_IMPORTED_MODULE_5__["Grocery"](grocery._id, grocery.Name));
            });
            return groceryList;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleErrors));
    };
    GroceryService.prototype.getCommonHeaders = function () {
        return {
            "Content-Type": "application/json",
            "Authorization": "Kinvey " + _config__WEBPACK_IMPORTED_MODULE_4__["Config"].token
        };
    };
    GroceryService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
    };
    GroceryService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    GroceryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GroceryService);
    return GroceryService;
}());



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zaGFyZWQvZ3JvY2VyeS9ncm9jZXJ5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJDO0FBQ2tDO0FBQy9CO0FBQ1E7QUFFbkI7QUFDTztBQUcxQztJQUdJLHdCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBRnBDLFlBQU8sR0FBRyw4Q0FBTSxDQUFDLE1BQU0sR0FBRyxVQUFVLEdBQUcsOENBQU0sQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDO0lBRTVCLENBQUM7SUFFekMsNEJBQUcsR0FBSCxVQUFJLElBQVk7UUFDWixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUNqQixJQUFJLENBQUMsT0FBTyxFQUNaLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFDOUIsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLEVBQUUsQ0FDdkMsQ0FBQyxJQUFJLENBQ0YsMERBQUcsQ0FBQyxjQUFJO1lBQ0osT0FBTyxJQUFJLHNEQUFPLENBQU8sSUFBSyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM5QyxDQUFDLENBQUMsRUFDRixpRUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FDaEMsQ0FBQztJQUNOLENBQUM7SUFFRCwrQkFBTSxHQUFOLFVBQU8sRUFBVTtRQUNiLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQ25CLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxHQUFHLEVBQUUsRUFDdkIsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLEVBQUUsQ0FDdkMsQ0FBQyxJQUFJLENBQ0YsaUVBQVUsQ0FBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQ2pDLENBQUM7SUFDTixDQUFDO0lBRUQsNkJBQUksR0FBSjtRQUNJLDBHQUEwRztRQUMxRyxJQUFJLE1BQU0sR0FBRztZQUNULE1BQU0sRUFBRSxtQkFBbUI7U0FDOUI7UUFFRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDL0IsT0FBTyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUNoQyxNQUFNLEVBQUUsTUFBTTtTQUNqQixDQUFDLENBQUMsSUFBSSxDQUNILDBEQUFHLENBQUMsVUFBQyxJQUFRO1lBQ1QsSUFBSSxXQUFXLEdBQUcsRUFBRSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQyxPQUFPO2dCQUNqQixXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksc0RBQU8sQ0FBTyxPQUFRLENBQUMsR0FBRyxFQUFRLE9BQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzNFLENBQUMsQ0FBQyxDQUFDO1lBQ0gsT0FBTyxXQUFXLENBQUM7UUFDdkIsQ0FBQyxDQUFDLEVBQ0YsaUVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQ2hDLENBQUM7SUFDTixDQUFDO0lBRUQseUNBQWdCLEdBQWhCO1FBQ0ksT0FBTztZQUNILGNBQWMsRUFBRSxrQkFBa0I7WUFDbEMsZUFBZSxFQUFFLFNBQVMsR0FBRyw4Q0FBTSxDQUFDLEtBQUs7U0FDNUM7SUFDTCxDQUFDO0lBRUQscUNBQVksR0FBWixVQUFhLEtBQWU7UUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDbkMsT0FBTyx1REFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdCLENBQUM7O2dCQXZEeUIsK0RBQVU7O0lBSDNCLGNBQWM7UUFEMUIsZ0VBQVUsRUFBRTt5Q0FJaUIsK0RBQVU7T0FIM0IsY0FBYyxDQTJEMUI7SUFBRCxxQkFBQztDQUFBO0FBM0QwQiIsImZpbGUiOiJidW5kbGUuMTgxZDEwODU1ZTVlODViNzg4ZDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIHRocm93RXJyb3IgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAsIHRhcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xyXG5pbXBvcnQgeyBHcm9jZXJ5IH0gZnJvbSBcIi4vZ3JvY2VyeS5tb2RlbFwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgR3JvY2VyeVNlcnZpY2Uge1xyXG4gICAgYmFzZVVybCA9IENvbmZpZy5hcGlVcmwgKyBcImFwcGRhdGEvXCIgKyBDb25maWcuYXBwS2V5ICsgXCIvR3JvY2VyaWVzXCI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cclxuXHJcbiAgICBhZGQobmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KFxyXG4gICAgICAgICAgICB0aGlzLmJhc2VVcmwsXHJcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHsgTmFtZTogbmFtZSB9KSxcclxuICAgICAgICAgICAgeyBoZWFkZXJzOiB0aGlzLmdldENvbW1vbkhlYWRlcnMoKSB9XHJcbiAgICAgICAgKS5waXBlKFxyXG4gICAgICAgICAgICBtYXAoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEdyb2NlcnkoKDxhbnk+ZGF0YSkuX2lkLCBuYW1lKTtcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcnMpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGUoaWQ6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKFxyXG4gICAgICAgICAgICB0aGlzLmJhc2VVcmwgKyBcIi9cIiArIGlkLFxyXG4gICAgICAgICAgICB7IGhlYWRlcnM6IHRoaXMuZ2V0Q29tbW9uSGVhZGVycygpIH1cclxuICAgICAgICApLnBpcGUoXHJcbiAgICAgICAgICAgIGNhdGNoRXJyb3IgKHRoaXMuaGFuZGxlRXJyb3JzKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZCgpIHtcclxuICAgICAgICAvLyBLaW52ZXktc3BlY2lmaWMgc3ludGF4IHRvIHNvcnQgdGhlIGdyb2NlcmllcyBieSBsYXN0IG1vZGlmaWVkIHRpbWUuIERvbuKAmXQgd29ycnkgYWJvdXQgdGhlIGRldGFpbHMgaGVyZS5cclxuICAgICAgICBsZXQgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICBcInNvcnRcIjogXCJ7XFxcIl9rbWQubG10XFxcIjogMX1cIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5iYXNlVXJsLCB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHRoaXMuZ2V0Q29tbW9uSGVhZGVycygpLFxyXG4gICAgICAgICAgICBwYXJhbXM6IHBhcmFtc1xyXG4gICAgICAgIH0pLnBpcGUoXHJcbiAgICAgICAgICAgIG1hcCgoZGF0YTogW10pID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBncm9jZXJ5TGlzdCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZGF0YS5mb3JFYWNoKChncm9jZXJ5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JvY2VyeUxpc3QucHVzaChuZXcgR3JvY2VyeSgoPGFueT5ncm9jZXJ5KS5faWQsICg8YW55Pmdyb2NlcnkpLk5hbWUpKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGdyb2NlcnlMaXN0O1xyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9ycylcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENvbW1vbkhlYWRlcnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBcIktpbnZleSBcIiArIENvbmZpZy50b2tlblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVFcnJvcnMoZXJyb3I6IFJlc3BvbnNlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXJyb3IpKTtcclxuICAgICAgICByZXR1cm4gdGhyb3dFcnJvcihlcnJvcik7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9