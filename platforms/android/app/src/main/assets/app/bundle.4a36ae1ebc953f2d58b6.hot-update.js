webpackHotUpdate("bundle",{

/***/ "./list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar title=\"Groceries\"></ActionBar>\n\n<GridLayout rows=\"auto, *\">\n\n  <GridLayout row=\"0\" columns=\"*, auto\" class=\"add-bar\">\n    <TextField #groceryTextField hint=\"Enter a grocery item\" col=\"0\"></TextField>\n    <Image src=\"~/images/add.png\" col=\"1\"></Image>\n  </GridLayout>\n\n  <RadListView row=\"1\" [items]=\"groceryList\">\n    <ng-template let-item=\"item\">\n      <Label [text]=\"item.name\" class=\"p-15\"></Label>\n    </ng-template>\n  </RadListView>\n\n</GridLayout>"

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saXN0L2xpc3QuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw2Z0IiLCJmaWxlIjoiYnVuZGxlLjRhMzZhZTFlYmM5NTNmMmQ1OGI2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiPEFjdGlvbkJhciB0aXRsZT1cXFwiR3JvY2VyaWVzXFxcIj48L0FjdGlvbkJhcj5cXG5cXG48R3JpZExheW91dCByb3dzPVxcXCJhdXRvLCAqXFxcIj5cXG5cXG4gIDxHcmlkTGF5b3V0IHJvdz1cXFwiMFxcXCIgY29sdW1ucz1cXFwiKiwgYXV0b1xcXCIgY2xhc3M9XFxcImFkZC1iYXJcXFwiPlxcbiAgICA8VGV4dEZpZWxkICNncm9jZXJ5VGV4dEZpZWxkIGhpbnQ9XFxcIkVudGVyIGEgZ3JvY2VyeSBpdGVtXFxcIiBjb2w9XFxcIjBcXFwiPjwvVGV4dEZpZWxkPlxcbiAgICA8SW1hZ2Ugc3JjPVxcXCJ+L2ltYWdlcy9hZGQucG5nXFxcIiBjb2w9XFxcIjFcXFwiPjwvSW1hZ2U+XFxuICA8L0dyaWRMYXlvdXQ+XFxuXFxuICA8UmFkTGlzdFZpZXcgcm93PVxcXCIxXFxcIiBbaXRlbXNdPVxcXCJncm9jZXJ5TGlzdFxcXCI+XFxuICAgIDxuZy10ZW1wbGF0ZSBsZXQtaXRlbT1cXFwiaXRlbVxcXCI+XFxuICAgICAgPExhYmVsIFt0ZXh0XT1cXFwiaXRlbS5uYW1lXFxcIiBjbGFzcz1cXFwicC0xNVxcXCI+PC9MYWJlbD5cXG4gICAgPC9uZy10ZW1wbGF0ZT5cXG4gIDwvUmFkTGlzdFZpZXc+XFxuXFxuPC9HcmlkTGF5b3V0PlwiIl0sInNvdXJjZVJvb3QiOiIifQ==