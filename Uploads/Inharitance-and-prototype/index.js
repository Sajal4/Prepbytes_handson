console.log("Hello!");

//Que.1--Create 2 objects - parent and child. Attach methods to parent and use those methods in child object using parents prototype.

let parent = {
    fname:"Atul",
    lname : "Pandey",
    showDetails : function(){
        console.log(this.fname + " "+this.lname + " "+ this.gender + " "+ this.age);

    }
}

parent.showDetails()
let child = {
    fname : "Rahul",
    age : 25,
    gender: "male"
}
 
child.__proto__=parent;
child.showDetails();


//Que-2--Write code to explain prototype chaining.

let arr = [1,2,2,4,5];
let add = function(){
    console.log("pandey");
}

console.log(add.__proto__);
console.log(add.__proto__.__proto__);       //now its prototype is same as object perototype
console.log(arr.__proto__);     
console.log(arr.__proto__.__proto__);     // now its prototype is same as object perototype.
console.log(Object.prototype);///Object Prototype


//Que-3- Add a method to calculate sum of all elements in Array in array's protype, use that method to calculate sum for multiple arrays.

let array = [1,2,3,5,6,7];
let arr2 = {
    getName:function(){
        
        let result = array.reduce((acc,cur) => acc = acc + cur,0);
        console.log(result);
        
    }
}
arr2.getName();