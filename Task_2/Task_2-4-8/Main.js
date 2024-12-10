function array(arrayOfPrimitive) {
    document.write("<ul>");
    for (var _i = 0, arrayOfPrimitive_1 = arrayOfPrimitive; _i < arrayOfPrimitive_1.length; _i++) {
        var item = arrayOfPrimitive_1[_i];
        document.write("<li>".concat(item, "</li>"));
    }
    document.write("</ul>");
}
array([1, 0, 'typescript', false, 'okten', -567, 'java']);
