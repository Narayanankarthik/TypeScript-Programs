var person = {
    firstName: "Tom",
    lastName: "Jerry",
    sayHello: function () { } //Type template 
};
person.sayHello = function () {
    console.log("hello " + person.firstName);
};
person.sayHello();
/*objects as Function parameters*/
var person = {
    firstname: "Tom",
    lastname: "Hanks"
};
var invokeperson = function (obj) {
    console.log("first name :" + obj.firstname);
    console.log("last name :" + obj.lastname);
};
invokeperson(person);
/* Anonymous Object */
var invokeperson = function (obj) {
    console.log("first name :" + obj.firstname);
    console.log("last name :" + obj.lastname);
};
invokeperson({ firstname: "Sachin", lastname: "Tendulkar" });
function addPoints(p1, p2) {
    var x = p1.x + p2.x;
    var y = p1.y + p2.y;
    return { x: x, y: y };
}
// Valid 
var newPoint = addPoints({ x: 3, y: 4 }, { x: 5, y: 1 });
// Error 
var newPoint2 = addPoints({ x: 1 }, { x: 4, y: 3 });
