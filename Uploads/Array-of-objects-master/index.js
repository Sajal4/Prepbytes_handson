console.log("Hello!!");

let studentRecords = [{ name: 'John', id: 123, marks: 98 },
{ name: 'Baba', id: 101, marks: 23 },
{ name: 'yaga', id: 200, marks: 45 },
{ name: 'Wick', id: 115, marks: 75 }]


// Q.1=>
let upper = [studentRecords[0].name.toUpperCase(),
studentRecords[1].name.toUpperCase(),
studentRecords[2].name.toUpperCase(),
studentRecords[3].name.toUpperCase(),
];
console.log(upper);


// Q.2=>
for (let i = 0; i < studentRecords.length; i++) {
    let gotit = studentRecords[i].marks;
    if (gotit > 50) {
        console.log(studentRecords[i]);
    }
}


// Q.3=>
for (let j = 0; j < studentRecords.length; j++) {
    let gotit = studentRecords[j].marks;
    let getit = studentRecords[j].id;
    if ((gotit > 50) && (getit > 120)) {
        console.log(studentRecords[j]);
    }
}


// Q.4=>
let add = 0;
for (let i = 0; i < studentRecords.length; i++) {
    add = add + studentRecords[i].marks;
}
console.log(add);


// Q.5=>
for (let i = 0; i < studentRecords.length; i++) {
    let gotit = studentRecords[i].marks;
    if (gotit > 50) {
        console.log(studentRecords[i].name);        // only name 
    }
}

// Q.6=>
for (i = 0; i < studentRecords.length; i++) {
    let gotit = studentRecords[i].id;
    let getit = studentRecords[i].marks;
    if ((gotit > 120) && (getit > 50)) {
        console.log(studentRecords[i]);             //prints marks greater than 50 and id is greater than 120
    }
}


// Q.8 =>
let obj1 = {
    name: "Ravi",
    class: "10th",
    rNo: 1212
}
let obj2 = {
    name: "Shyam",
    class: "9th",
    rNo: 1002
}
let obj3 = {
    name: "Lekha",
    class: "10th",
    rNo: 1015
}
let obj4 = {
    name: "Arvind",
    class: "12th",
    rNo: 1910
}
let obj5 = {
    name: "Rajat",
    class: "5th",
    rNo: 1170
}
let obj6 = {
    name: "Abhishek",
    class: "11th",
    rNo: 1000
}

let Allobject = [{ ...obj1 }, { ...obj2 }, { ...obj3 }, { ...obj4 }, { ...obj4 }, { ...obj5 }, { ...obj6 }]
console.log(Allobject);

