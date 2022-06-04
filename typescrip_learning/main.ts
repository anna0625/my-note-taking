// Learning from Youtube [https://www.youtube.com/watch?v=NjN00cM18Z4]
// * Strong typing, Object-oriented features, Compile-time errors, Great tooling
// TypeScript  transpile -> Javascript


// Variable in TS
let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number [] = [1, 2, 3];
let f: any [] = [1, true, 'a', false];

const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;

//enum Color { Red=0, Green=1, Blue=2 };
//let backgroundColor = Color.Red;

let message = "Hello World!";

let log = function(message) {
    console.log(message);
}

let doLog = (message) => {
    console.log(message);
}

//
interface Point {
    x: number,
    y: number
}

let drawPoint = (point: Point) => {
    // ...
}

drawPoint({
    x: 1, 
    y: 2
})