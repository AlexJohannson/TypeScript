function list(text, counter) {
    document.write("<ul>");
    for (var i = 0; i < counter; i++) {
        document.write("<li>".concat(text, "</li>"));
    }
    document.write("</ul>");
}
list('Frontend', 5);