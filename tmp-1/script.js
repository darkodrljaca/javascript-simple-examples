// var i=0;
// while(i < 10) {
//     console.log("Number i is: " + i);
//     i++;	
//  }

// let i=0;
// do {
//     i += 1;
//     console.log("Number i is: " + i);
// }
// while(i<5);

// const object = { a: 1, b:2, c:3 };
// for(const property in object) {
//     console.log(`${property}: ${object[property]}`);
// }

// const number = 42;
// try {
//     number = 99;
// } catch(err) {
//     console.log(err);
// }
// console.log(number);

// var str = "Please locate where 'locate' occurs!";
// var pos = str.indexOf("locate");
// console.log("Index je " + pos);

// var str = "Please locate where 'locate' occurs!";
// var pos = str.indexOf("locate");
// var str_rest = str.substring(pos, str.length);
// console.log("Ostatak je " + str_rest);

// var str = "Apple, Banana, Kiwi";
// var res = str.substring(7,13);
// console.log(res);

// var text1 = "Hello World!";       // String
// var text2 = text1.toLowerCase();  // text2 is text1 converted to lower
// console.log(text2);
// console.log(text2.toUpperCase());

// var cars = ["Saab", "Volvo", "BMW"];
// var name = cars[0];
// console.log("Vrednost promenljive name je " + name);
// cars[0] = "Opel";
// console.log("Vrednost promenljive name je " + cars[0]);
// for(let i =0; i< cars.length; i++) {
//     console.log(cars[i]);    
// }
// console.log("------------------");
// let cars_str = "";
// for(const a in cars) {
//     cars_str += a; // izbacuje indekse
//     cars_str += " "; 
// }
// console.log("cars: " + cars_str);
// console.log("--------------------");
// for(const b of cars) {
//     console.log(b); // izbacuje vrednosti
// }

// const osoba = {ime: 'Pera', prezime: 'Peric', starost: 30, pol: 'm'};
// for(let a in osoba) {
//     console.log(a);
//     console.log(osoba[a]);
// }

var fruits = ["Apple", "Banana", "Kiwi", "Mango"];
// var index;
// for (var i = 0; i < fruits.length; i++) {
//     if (fruits[i] == "Kiwi") {
//         index = i;
//         break;
//     }
// }

// console.log("Vocka " + fruits[index] + ", se nalazi na poziciji " + index);


var i = 0;
var index;
while (i < fruits.length) {
    if (fruits[i] == "Kiwi") {
        index = i;
        break;
    }
    i++;
}

console.log("Vocka " + fruits[index] + ", se nalazi na poziciji " + index);
