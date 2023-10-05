const regular = {
    email:"honeychauhan@gmail.com",
    fullname: {
        userfullname: {
            firstname : "honey",
            lastname : "chauhan"
        }
    }
}
console.log(regular.fullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1 , obj2}
const obj3 = Object.assign(obj1 ,obj2)
console.log(obj3);
console.log(Object.keys(regular));
console.log(Object.values(regular));
// console.log(Object.entries(regular));
