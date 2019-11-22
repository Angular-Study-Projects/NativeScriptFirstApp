webpackHotUpdate("bundle",{

/***/ "./list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar title=\"Groceries\"></ActionBar>\r\n\r\n<GridLayout rows=\"auto, *\">\r\n\r\n  <GridLayout row=\"0\" columns=\"*, auto\" class=\"add-bar\">\r\n    <TextField #groceryTextField [(ngModel)]=\"grocery\" hint=\"Enter a grocery item\" col=\"0\"></TextField>\r\n    <Image src=\"~/images/add.png\" (tap)=\"add()\" col=\"1\"></Image>\r\n  </GridLayout>\r\n\r\n  <RadListView row=\"1\" [items]=\"groceryList\" class=\"items\"\r\n    swipeActions=\"true\" (itemSwipeProgressStarted)=\"onSwipeCellStarted($event)\">\r\n\r\n    <ng-template let-item=\"item\">\r\n      <Label [text]=\"item.name\" class=\"single p-15\"></Label>\r\n    </ng-template>\r\n\r\n    <GridLayout *tkListItemSwipeTemplate columns=\"*, auto\">\r\n      <StackLayout id=\"delete-view\" col=\"1\" (tap)=\"delete($event)\" class=\"delete-view\">\r\n        <Image src=\"~/images/delete.png\"></Image>\r\n      </StackLayout>\r\n    </GridLayout>\r\n\r\n  </RadListView>\r\n\r\n</GridLayout>"

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saXN0L2xpc3QuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxxOUIiLCJmaWxlIjoiYnVuZGxlLjllNTIwOWI0YTcyZDc4OWNkNjNkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiPEFjdGlvbkJhciB0aXRsZT1cXFwiR3JvY2VyaWVzXFxcIj48L0FjdGlvbkJhcj5cXHJcXG5cXHJcXG48R3JpZExheW91dCByb3dzPVxcXCJhdXRvLCAqXFxcIj5cXHJcXG5cXHJcXG4gIDxHcmlkTGF5b3V0IHJvdz1cXFwiMFxcXCIgY29sdW1ucz1cXFwiKiwgYXV0b1xcXCIgY2xhc3M9XFxcImFkZC1iYXJcXFwiPlxcclxcbiAgICA8VGV4dEZpZWxkICNncm9jZXJ5VGV4dEZpZWxkIFsobmdNb2RlbCldPVxcXCJncm9jZXJ5XFxcIiBoaW50PVxcXCJFbnRlciBhIGdyb2NlcnkgaXRlbVxcXCIgY29sPVxcXCIwXFxcIj48L1RleHRGaWVsZD5cXHJcXG4gICAgPEltYWdlIHNyYz1cXFwifi9pbWFnZXMvYWRkLnBuZ1xcXCIgKHRhcCk9XFxcImFkZCgpXFxcIiBjb2w9XFxcIjFcXFwiPjwvSW1hZ2U+XFxyXFxuICA8L0dyaWRMYXlvdXQ+XFxyXFxuXFxyXFxuICA8UmFkTGlzdFZpZXcgcm93PVxcXCIxXFxcIiBbaXRlbXNdPVxcXCJncm9jZXJ5TGlzdFxcXCIgY2xhc3M9XFxcIml0ZW1zXFxcIlxcclxcbiAgICBzd2lwZUFjdGlvbnM9XFxcInRydWVcXFwiIChpdGVtU3dpcGVQcm9ncmVzc1N0YXJ0ZWQpPVxcXCJvblN3aXBlQ2VsbFN0YXJ0ZWQoJGV2ZW50KVxcXCI+XFxyXFxuXFxyXFxuICAgIDxuZy10ZW1wbGF0ZSBsZXQtaXRlbT1cXFwiaXRlbVxcXCI+XFxyXFxuICAgICAgPExhYmVsIFt0ZXh0XT1cXFwiaXRlbS5uYW1lXFxcIiBjbGFzcz1cXFwic2luZ2xlIHAtMTVcXFwiPjwvTGFiZWw+XFxyXFxuICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuXFxyXFxuICAgIDxHcmlkTGF5b3V0ICp0a0xpc3RJdGVtU3dpcGVUZW1wbGF0ZSBjb2x1bW5zPVxcXCIqLCBhdXRvXFxcIj5cXHJcXG4gICAgICA8U3RhY2tMYXlvdXQgaWQ9XFxcImRlbGV0ZS12aWV3XFxcIiBjb2w9XFxcIjFcXFwiICh0YXApPVxcXCJkZWxldGUoJGV2ZW50KVxcXCIgY2xhc3M9XFxcImRlbGV0ZS12aWV3XFxcIj5cXHJcXG4gICAgICAgIDxJbWFnZSBzcmM9XFxcIn4vaW1hZ2VzL2RlbGV0ZS5wbmdcXFwiPjwvSW1hZ2U+XFxyXFxuICAgICAgPC9TdGFja0xheW91dD5cXHJcXG4gICAgPC9HcmlkTGF5b3V0PlxcclxcblxcclxcbiAgPC9SYWRMaXN0Vmlldz5cXHJcXG5cXHJcXG48L0dyaWRMYXlvdXQ+XCIiXSwic291cmNlUm9vdCI6IiJ9