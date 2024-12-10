var array = [1, 45, 'Javascript', true, false, -567, 'Node.js'];
var list = function (arrayOfItem) {
    document.write("<ul>");
    for (var _i = 0, arrayOfItem_1 = arrayOfItem; _i < arrayOfItem_1.length; _i++) {
        var item = arrayOfItem_1[_i];
        document.write("<li>".concat(item, "</li>"));
    }
    document.write("</ul>");
};
list(array);
