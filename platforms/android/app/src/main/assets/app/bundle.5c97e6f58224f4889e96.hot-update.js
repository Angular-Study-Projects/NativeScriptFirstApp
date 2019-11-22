webpackHotUpdate("bundle",{

/***/ "./list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar title=\"Groceries\"></ActionBar>\n\n<GridLayout rows=\"auto, *\">\n\n  <GridLayout row=\"0\" columns=\"*, auto\" class=\"add-bar\">\n        <TextField #groceryTextField [(ngModel)]=\"grocery\" hint=\"Enter a grocery item\" col=\"0\"></TextField>\n        <Image src=\"~/images/add.png\" (tap)=\"add()\" col=\"1\"></Image>\n  </GridLayout>\n\n  <RadListView row=\"1\" [items]=\"groceryList\">\n    <ng-template let-item=\"item\">\n      <Label [text]=\"item.name\" class=\"p-15\"></Label>\n    </ng-template>\n  </RadListView>\n\n</GridLayout>"

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saXN0L2xpc3QuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw2akIiLCJmaWxlIjoiYnVuZGxlLjVjOTdlNmY1ODIyNGY0ODg5ZTk2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiPEFjdGlvbkJhciB0aXRsZT1cXFwiR3JvY2VyaWVzXFxcIj48L0FjdGlvbkJhcj5cXG5cXG48R3JpZExheW91dCByb3dzPVxcXCJhdXRvLCAqXFxcIj5cXG5cXG4gIDxHcmlkTGF5b3V0IHJvdz1cXFwiMFxcXCIgY29sdW1ucz1cXFwiKiwgYXV0b1xcXCIgY2xhc3M9XFxcImFkZC1iYXJcXFwiPlxcbiAgICAgICAgPFRleHRGaWVsZCAjZ3JvY2VyeVRleHRGaWVsZCBbKG5nTW9kZWwpXT1cXFwiZ3JvY2VyeVxcXCIgaGludD1cXFwiRW50ZXIgYSBncm9jZXJ5IGl0ZW1cXFwiIGNvbD1cXFwiMFxcXCI+PC9UZXh0RmllbGQ+XFxuICAgICAgICA8SW1hZ2Ugc3JjPVxcXCJ+L2ltYWdlcy9hZGQucG5nXFxcIiAodGFwKT1cXFwiYWRkKClcXFwiIGNvbD1cXFwiMVxcXCI+PC9JbWFnZT5cXG4gIDwvR3JpZExheW91dD5cXG5cXG4gIDxSYWRMaXN0VmlldyByb3c9XFxcIjFcXFwiIFtpdGVtc109XFxcImdyb2NlcnlMaXN0XFxcIj5cXG4gICAgPG5nLXRlbXBsYXRlIGxldC1pdGVtPVxcXCJpdGVtXFxcIj5cXG4gICAgICA8TGFiZWwgW3RleHRdPVxcXCJpdGVtLm5hbWVcXFwiIGNsYXNzPVxcXCJwLTE1XFxcIj48L0xhYmVsPlxcbiAgICA8L25nLXRlbXBsYXRlPlxcbiAgPC9SYWRMaXN0Vmlldz5cXG5cXG48L0dyaWRMYXlvdXQ+XCIiXSwic291cmNlUm9vdCI6IiJ9