webpackHotUpdate("bundle",{

/***/ "./list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

var ListComponent = /** @class */ (function () {
    function ListComponent() {
        this.groceryList = [];
    }
    ListComponent.prototype.ngOnInit = function () {
        this.groceryList.push({ name: "Apples" });
        this.groceryList.push({ name: "Bananas" });
        this.groceryList.push({ name: "Oranges" });
    };
    ListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "gr-list",
            template: __importDefault(__webpack_require__("./list/list.component.html")).default,
            styles: [__importDefault(__webpack_require__("./list/list.component.css")).default]
        })
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./shared/grocery/grocery.model.ts":
false,

/***/ "./shared/grocery/grocery.service.ts":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saXN0L2xpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlFO0FBUXpFO0lBTkE7UUFPRSxnQkFBVyxHQUFrQixFQUFFLENBQUM7SUFPbEMsQ0FBQztJQUxDLGdDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBUFUsYUFBYTtRQU56QiwrREFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFNBQVM7WUFFbkIsb0ZBQW9DOztTQUVyQyxDQUFDO09BQ1csYUFBYSxDQVF6QjtJQUFELG9CQUFDO0NBQUE7QUFSeUIiLCJmaWxlIjoiYnVuZGxlLmFmNTk0YmJjZWI2MzRhZmUxY2RlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcImdyLWxpc3RcIixcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vbGlzdC5jb21wb25lbnQuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiLi9saXN0LmNvbXBvbmVudC5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGdyb2NlcnlMaXN0OiBBcnJheTxPYmplY3Q+ID0gW107XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5ncm9jZXJ5TGlzdC5wdXNoKHsgbmFtZTogXCJBcHBsZXNcIiB9KTtcclxuICAgIHRoaXMuZ3JvY2VyeUxpc3QucHVzaCh7IG5hbWU6IFwiQmFuYW5hc1wiIH0pO1xyXG4gICAgdGhpcy5ncm9jZXJ5TGlzdC5wdXNoKHsgbmFtZTogXCJPcmFuZ2VzXCIgfSk7XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==