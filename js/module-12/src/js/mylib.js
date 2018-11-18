function log(...str) {
    console.log(...str);
}
function element(str, scope = document) {
    return scope.querySelector(str);
}

function elements(str, scope = document) {
    return scope.querySelectorAll(str);
}

export {log, element, elements};

