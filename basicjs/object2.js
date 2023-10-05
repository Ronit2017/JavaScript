// object literal;

const muSym = Symbol("key2")

const JsUser = {
    name : "honey",
    age : 20,
    location : "delhi",
    [muSym] : "myKey2",
    email:"honeychauhan@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["monday","tuesday"],

}
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser[muSym]);

JsUser.email= "honeychauhan2127@gmail.com"
Object.freeze(JsUser)
// JsUser.email= "ronitchauhan@gmail.com"
console.log(JsUser);
