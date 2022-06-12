
const userDataBase = {
    "Yusuf130": {
  firstName: "Yusuf",
  lastName:"Aniki",
  email:"anikiyusuf130@gmail.com",
  accountActivated:true,
  password:"enter111"
    },
    "pacho": {
        firstName: "Yusuf",
        lastName:"Aniki",
        email:"anikiyusuf130@gmail.com",
        accountActivated:true,
        password:"enter111"
          },
          "Yusuf130": {
            firstName: "Yusuf",
            lastName:"Aniki",
            email:"anikiyusuf130@gmail.com",
            accountActivated:true,
            password:"enter111"
            
              },
              "Yusuf130": {
                firstName: "Yusuf",
                lastName:"Aniki",
                email:"anikiyusuf130@gmail.com",
                accountActivated:true,
                password:"enter111"
                  },
}




















/*


let userName= prompt("Enter your name")


while  (validateUserName(userName) = false){
    userName= prompt("Username not valid.Please enter a valid username");
}






let password = prompt("Enter your password");


while(validatePassword(password) === false){
    password = prompt("Enter your password.Please enter a valid password");
}
console.log(userName,password);
alert("You are here! everything is valid");
alert ("You have come to the end of this program! Goodbye");


*/




function displayUserDetails(){
    let userName= prompt("Enter your name")


while  (validateUserName(userName) = false){
    userName= prompt("Username not valid.Please enter a valid username");
}



if (userName === null){
    return 
}


let password = prompt("Enter your password");

while(validatePassword(password) === false){
    password = prompt("Enter your password.Please enter a valid password");
}

if (password === null){
    return 
}
// confirm password 
let passwordConfirm = prompt("Confirm password");
 while (passwordConfirm !== password ){
    passwordConfirm = prompt("Enter a valid password please!")
 }

 

if (passwordConfirm === null){
    return 
}

const user =  userDataBase(userName)
 if (user === undefined){
    alert("User not found! Please register on the app")
    return
 }

alert(`
  User found with the following details:
  First Name :  ${user.firstName}
  Last Name :  ${user.lastName}
  Email :  ${user.email}
  Account Activated :  ${user.accountActivated}
`)
//console.log(userName,password,passwordConfirm)
}

displayUserDetails()
alert ("You have come to the end of this program! Goodbye");

function validateUserName(userName){
  if (userName === null){
    return true
}
    if( userName.length > 10){
        return false;
    }else {
        return true ;
    }

}



function validatePassword(password){
    if (password  === null){
        return true 
    }
        if( password.length < 6){
            return false;
        }else {
            return true ;
        } 
}

