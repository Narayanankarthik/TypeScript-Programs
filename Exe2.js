"use strict";
var HelloWorld = (function () {
    function HelloWorld() {
    }
    HelloWorld.prototype.get = function () {
        console.log("Hello World!!!");
    };
    return HelloWorld;
}());
var obj = new HelloWorld();
obj.get();
