// hoisting
// console.log(a);
//  var a=10;
// console.log(a);

// console.log(b);

// let b=15;
// const c=3.5;

// console.log(b);
// console.log(c);


// hoist()
// function hoist() {//normal 

//     let x=50;
//     console.log(x);
    
    
// }
// arrowfun()

// const arrowfun=()=>{//arrow

//     console.log(Aadvik);
    
// // }

// let a=10;//global scope

// function scope(){
//     let b=15;
//     console.log(b);
//     console.log(a);
    
// if(a>5){
//     let d=50;//local scope
//     console.log(d);
    
// }

//     //function
//   function nestfun(){
//        let c=20;//local
//        console.log(a);
//        console.log(b);
       
       
// }
// nestfun()
// console.log(c);

// }

// scope()
// console.log(a);
// console.log(b);



// function top(){

//     console.log("top fun");

    

//     function bottom(){
         
//      console.log("bot fun");
//       }
//       //bottom()
// }
//  top()
 
///Array

let val=[100,150,200,250,300]

console.log(val[4]);
console.log(val.length);

//push& pop

val.push(500)
console.log(val);

val.pop()
console.log(val);


//shift  unshift
val.unshift(777)
console.log(val);

val.shift()
console.log(val);

//slice & splice

const slice=val.slice(1,3)//1-150,3-250 3-1=2 (n-1)concept 2-200
console.log(slice);
console.log(val);


const splice=val.splice(1,3)
console.log(splice);
console.log(val);

var a=25;
console.log(a);
 
function name(mark) {

 console.log(25);
 
    
}
name()

