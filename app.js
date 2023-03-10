var num1ele = document.getElementById('num1');
var num2ele = document.getElementById('num2');
var btn = document.querySelector('button');
var numsres = [];
var stringres = [];
function add(a, b) {
    if (typeof a === "number" && typeof b === "number")
        return a + b;
    else if (typeof a === "string" && typeof b === "string")
        return a + b;
    else {
        return +a + +b;
    }
}
function printObj(resobj) {
    console.log(resobj.val);
}
btn.addEventListener('click', function () {
    var num1 = num1ele.value;
    var num2 = num2ele.value;
    var result = add(+num1, +num2);
    var stringRes = add(num1, num2);
    numsres.push(result);
    stringres.push(stringRes);
    console.log(stringres);
    console.log(result);
    printObj({ val: result, timestamp: new Date() });
});
var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('It works!');
    }, 1000);
});
promise.then(function (result) {
    console.log(result);
});
