let thisIsANumber = 5;
let thisIsAString = "This is a text";
let thisIsBoolean = true;
let thisIsNull = null;
let thisIsUndefined;



function thisIsAFunction() {
    // ez a fuggveny torzsi
    console.log('this is a function call');
}

const thisIsAlsoAFunction = function () {
    console.log('hahahaha');
}

thisIsAFunction();
thisIsAlsoAFunction();

const thisIsAnArrowFunction = () => {
    console.log('ploploplo');
}

const duplicate = x => 2 * x;
console.log(duplicate(3274));

(function () {
    console.log('csumicsa');
})()

