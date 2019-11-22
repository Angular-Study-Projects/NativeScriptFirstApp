webpackHotUpdate("bundle",{

/***/ "./list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_grocery_grocery_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./shared/grocery/grocery.service.ts");


var ListComponent = /** @class */ (function () {
    function ListComponent(groceryService) {
        this.groceryService = groceryService;
        this.groceryList = [];
        this.grocery = "";
        this.isLoading = false;
        this.listLoaded = false;
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.groceryService.load()
            .subscribe(function (loadedGroceries) {
            loadedGroceries.forEach(function (groceryObject) {
                _this.groceryList.unshift(groceryObject);
            });
            _this.isLoading = false;
            _this.listLoaded = true;
        });
    };
    ListComponent.prototype.add = function () {
        var _this = this;
        if (this.grocery.trim() === "") {
            alert("Enter a grocery item");
            return;
        }
        // Dismiss the keyboard
        var textField = this.groceryTextField.nativeElement;
        textField.dismissSoftInput();
        this.groceryService.add(this.grocery)
            .subscribe(function (groceryObject) {
            _this.groceryList.unshift(groceryObject);
            _this.grocery = "";
        }, function () {
            alert({
                message: "An error occurred while adding an item to your list.",
                okButtonText: "OK"
            });
            _this.grocery = "";
        });
    };
    ListComponent.prototype.onSwipeCellStarted = function (args) {
        var swipeLimits = args.data.swipeLimits;
        var swipeView = args.object;
        var rightItem = swipeView.getViewById("delete-view");
        swipeLimits.right = rightItem.getMeasuredWidth();
        swipeLimits.left = 0;
        swipeLimits.threshold = rightItem.getMeasuredWidth() / 2;
    };
    ListComponent.prototype.delete = function (args) {
        var _this = this;
        var grocery = args.object.bindingContext;
        this.groceryService.delete(grocery.id)
            .subscribe(function () {
            var index = _this.groceryList.indexOf(grocery);
            _this.groceryList.splice(index, 1);
        });
    };
    ListComponent.ctorParameters = function () { return [
        { type: _shared_grocery_grocery_service__WEBPACK_IMPORTED_MODULE_1__["GroceryService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("groceryTextField", { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ListComponent.prototype, "groceryTextField", void 0);
    ListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "gr-list",
            template: __importDefault(__webpack_require__("./list/list.component.html")).default,
            providers: [_shared_grocery_grocery_service__WEBPACK_IMPORTED_MODULE_1__["GroceryService"]],
            styles: [__importDefault(__webpack_require__("./list/list.component.css")).default]
        }),
        __metadata("design:paramtypes", [_shared_grocery_grocery_service__WEBPACK_IMPORTED_MODULE_1__["GroceryService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saXN0L2xpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUU7QUFFTjtBQVluRTtJQVFFLHVCQUFvQixjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFQbEQsZ0JBQVcsR0FBbUIsRUFBRSxDQUFDO1FBRWpDLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFDYixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGVBQVUsR0FBRyxLQUFLLENBQUM7SUFLbkIsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFBQSxpQkFVQztRQVRDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFO2FBQ3ZCLFNBQVMsQ0FBQyxVQUFDLGVBQW1CO1lBQzdCLGVBQWUsQ0FBQyxPQUFPLENBQUMsVUFBQyxhQUFhO2dCQUNwQyxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUMxQyxDQUFDLENBQUMsQ0FBQztZQUNILEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELDJCQUFHLEdBQUg7UUFBQSxpQkF3QkM7UUF2QkMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUM5QixLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQztZQUM5QixPQUFPO1NBQ1I7UUFFRCx1QkFBdUI7UUFDdkIsSUFBSSxTQUFTLEdBQWMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQztRQUMvRCxTQUFTLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUU3QixJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2FBQ2xDLFNBQVMsQ0FDUixVQUFDLGFBQXNCO1lBQ3JCLEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3hDLEtBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLENBQUMsRUFDRDtZQUNFLEtBQUssQ0FBQztnQkFDSixPQUFPLEVBQUUsc0RBQXNEO2dCQUMvRCxZQUFZLEVBQUUsSUFBSTthQUNuQixDQUFDLENBQUM7WUFDSCxLQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNwQixDQUFDLENBQ0Y7SUFDTCxDQUFDO0lBRUQsMENBQWtCLEdBQWxCLFVBQW1CLElBQXVCO1FBQ3hDLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ3hDLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDNUIsSUFBSSxTQUFTLEdBQUcsU0FBUyxDQUFDLFdBQVcsQ0FBTyxhQUFhLENBQUMsQ0FBQztRQUMzRCxXQUFXLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ2pELFdBQVcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLFdBQVcsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLGdCQUFnQixFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRCw4QkFBTSxHQUFOLFVBQU8sSUFBdUI7UUFBOUIsaUJBT0M7UUFOQyxJQUFJLE9BQU8sR0FBWSxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQztRQUNsRCxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO2FBQ25DLFNBQVMsQ0FBQztZQUNULElBQUksS0FBSyxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzlDLEtBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNwQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7O2dCQTFEbUMsOEVBQWM7O0lBRkE7UUFBakQsK0RBQVMsQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQztrQ0FBbUIsd0RBQVU7MkRBQUM7SUFOcEUsYUFBYTtRQVB6QiwrREFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFNBQVM7WUFFbkIsb0ZBQW9DO1lBRXBDLFNBQVMsRUFBRSxDQUFDLDhFQUFjLENBQUM7O1NBQzVCLENBQUM7eUNBU29DLDhFQUFjO09BUnZDLGFBQWEsQ0FtRXpCO0lBQUQsb0JBQUM7Q0FBQTtBQW5FeUIiLCJmaWxlIjoiYnVuZGxlLjdhOGY4Y2ZkYWFiMjZhMWYxYzljLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgR3JvY2VyeSB9IGZyb20gXCIuLi9zaGFyZWQvZ3JvY2VyeS9ncm9jZXJ5Lm1vZGVsXCI7XHJcbmltcG9ydCB7IEdyb2NlcnlTZXJ2aWNlIH0gZnJvbSBcIi4uL3NoYXJlZC9ncm9jZXJ5L2dyb2Nlcnkuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS90ZXh0LWZpZWxkXCI7XHJcbmltcG9ydCB7IExpc3RWaWV3RXZlbnREYXRhLCBSYWRMaXN0VmlldyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXdcIjtcclxuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2NvcmUvdmlld1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwiZ3ItbGlzdFwiLFxyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9saXN0LmNvbXBvbmVudC5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbXCIuL2xpc3QuY29tcG9uZW50LmNzc1wiXSxcclxuICBwcm92aWRlcnM6IFtHcm9jZXJ5U2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGdyb2NlcnlMaXN0OiBBcnJheTxHcm9jZXJ5PiA9IFtdO1xyXG5cclxuICBncm9jZXJ5ID0gXCJcIjtcclxuICBpc0xvYWRpbmcgPSBmYWxzZTtcclxuICBsaXN0TG9hZGVkID0gZmFsc2U7XHJcbiAgQFZpZXdDaGlsZChcImdyb2NlcnlUZXh0RmllbGRcIiwgeyBzdGF0aWM6IGZhbHNlIH0pIGdyb2NlcnlUZXh0RmllbGQ6IEVsZW1lbnRSZWY7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZ3JvY2VyeVNlcnZpY2U6IEdyb2NlcnlTZXJ2aWNlKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XHJcbiAgICB0aGlzLmdyb2NlcnlTZXJ2aWNlLmxvYWQoKVxyXG4gICAgICAuc3Vic2NyaWJlKChsb2FkZWRHcm9jZXJpZXM6IFtdKSA9PiB7XHJcbiAgICAgICAgbG9hZGVkR3JvY2VyaWVzLmZvckVhY2goKGdyb2NlcnlPYmplY3QpID0+IHtcclxuICAgICAgICAgIHRoaXMuZ3JvY2VyeUxpc3QudW5zaGlmdChncm9jZXJ5T2JqZWN0KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubGlzdExvYWRlZCA9IHRydWU7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYWRkKCkge1xyXG4gICAgaWYgKHRoaXMuZ3JvY2VyeS50cmltKCkgPT09IFwiXCIpIHtcclxuICAgICAgYWxlcnQoXCJFbnRlciBhIGdyb2NlcnkgaXRlbVwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLy8gRGlzbWlzcyB0aGUga2V5Ym9hcmRcclxuICAgIGxldCB0ZXh0RmllbGQgPSA8VGV4dEZpZWxkPnRoaXMuZ3JvY2VyeVRleHRGaWVsZC5uYXRpdmVFbGVtZW50O1xyXG4gICAgdGV4dEZpZWxkLmRpc21pc3NTb2Z0SW5wdXQoKTtcclxuICBcclxuICAgIHRoaXMuZ3JvY2VyeVNlcnZpY2UuYWRkKHRoaXMuZ3JvY2VyeSlcclxuICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAoZ3JvY2VyeU9iamVjdDogR3JvY2VyeSkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5ncm9jZXJ5TGlzdC51bnNoaWZ0KGdyb2NlcnlPYmplY3QpO1xyXG4gICAgICAgICAgdGhpcy5ncm9jZXJ5ID0gXCJcIjtcclxuICAgICAgICB9LFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgIGFsZXJ0KHtcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBhZGRpbmcgYW4gaXRlbSB0byB5b3VyIGxpc3QuXCIsXHJcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHRoaXMuZ3JvY2VyeSA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICApXHJcbiAgfVxyXG5cclxuICBvblN3aXBlQ2VsbFN0YXJ0ZWQoYXJnczogTGlzdFZpZXdFdmVudERhdGEpIHtcclxuICAgIHZhciBzd2lwZUxpbWl0cyA9IGFyZ3MuZGF0YS5zd2lwZUxpbWl0cztcclxuICAgIHZhciBzd2lwZVZpZXcgPSBhcmdzLm9iamVjdDtcclxuICAgIHZhciByaWdodEl0ZW0gPSBzd2lwZVZpZXcuZ2V0Vmlld0J5SWQ8Vmlldz4oXCJkZWxldGUtdmlld1wiKTtcclxuICAgIHN3aXBlTGltaXRzLnJpZ2h0ID0gcmlnaHRJdGVtLmdldE1lYXN1cmVkV2lkdGgoKTtcclxuICAgIHN3aXBlTGltaXRzLmxlZnQgPSAwO1xyXG4gICAgc3dpcGVMaW1pdHMudGhyZXNob2xkID0gcmlnaHRJdGVtLmdldE1lYXN1cmVkV2lkdGgoKSAvIDI7XHJcbiAgfVxyXG4gIFxyXG4gIGRlbGV0ZShhcmdzOiBMaXN0Vmlld0V2ZW50RGF0YSkge1xyXG4gICAgbGV0IGdyb2NlcnkgPSA8R3JvY2VyeT5hcmdzLm9iamVjdC5iaW5kaW5nQ29udGV4dDtcclxuICAgIHRoaXMuZ3JvY2VyeVNlcnZpY2UuZGVsZXRlKGdyb2NlcnkuaWQpXHJcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuZ3JvY2VyeUxpc3QuaW5kZXhPZihncm9jZXJ5KTtcclxuICAgICAgICB0aGlzLmdyb2NlcnlMaXN0LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=