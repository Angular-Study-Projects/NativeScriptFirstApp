webpackHotUpdate("bundle",{

/***/ "./list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar title=\"Groceries\"></ActionBar>\r\n\r\n<GridLayout rows=\"auto, *\">\r\n\r\n  <GridLayout row=\"0\" columns=\"*, auto\" class=\"add-bar\">\r\n    <TextField #groceryTextField hint=\"Enter a grocery item\" col=\"0\"></TextField>\r\n    <Image src=\"~/images/add.png\" col=\"1\"></Image>\r\n  </GridLayout>\r\n\r\n  <RadListView row=\"2\" [items]=\"groceryList\">\r\n    <ng-template let-item=\"item\">\r\n      <Label [text]=\"item.name\" class=\"p-15\"></Label>\r\n    </ng-template>\r\n  </RadListView>\r\n\r\n</GridLayout>"

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saXN0L2xpc3QuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSwyaUIiLCJmaWxlIjoiYnVuZGxlLmU3ZjljYWZlYmYzZTMyMTE2OGQyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiPEFjdGlvbkJhciB0aXRsZT1cXFwiR3JvY2VyaWVzXFxcIj48L0FjdGlvbkJhcj5cXHJcXG5cXHJcXG48R3JpZExheW91dCByb3dzPVxcXCJhdXRvLCAqXFxcIj5cXHJcXG5cXHJcXG4gIDxHcmlkTGF5b3V0IHJvdz1cXFwiMFxcXCIgY29sdW1ucz1cXFwiKiwgYXV0b1xcXCIgY2xhc3M9XFxcImFkZC1iYXJcXFwiPlxcclxcbiAgICA8VGV4dEZpZWxkICNncm9jZXJ5VGV4dEZpZWxkIGhpbnQ9XFxcIkVudGVyIGEgZ3JvY2VyeSBpdGVtXFxcIiBjb2w9XFxcIjBcXFwiPjwvVGV4dEZpZWxkPlxcclxcbiAgICA8SW1hZ2Ugc3JjPVxcXCJ+L2ltYWdlcy9hZGQucG5nXFxcIiBjb2w9XFxcIjFcXFwiPjwvSW1hZ2U+XFxyXFxuICA8L0dyaWRMYXlvdXQ+XFxyXFxuXFxyXFxuICA8UmFkTGlzdFZpZXcgcm93PVxcXCIyXFxcIiBbaXRlbXNdPVxcXCJncm9jZXJ5TGlzdFxcXCI+XFxyXFxuICAgIDxuZy10ZW1wbGF0ZSBsZXQtaXRlbT1cXFwiaXRlbVxcXCI+XFxyXFxuICAgICAgPExhYmVsIFt0ZXh0XT1cXFwiaXRlbS5uYW1lXFxcIiBjbGFzcz1cXFwicC0xNVxcXCI+PC9MYWJlbD5cXHJcXG4gICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gIDwvUmFkTGlzdFZpZXc+XFxyXFxuXFxyXFxuPC9HcmlkTGF5b3V0PlwiIl0sInNvdXJjZVJvb3QiOiIifQ==