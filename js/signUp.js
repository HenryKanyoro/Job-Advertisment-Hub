$(document).ready(function(){
function Sign(email1,pass1,rpass1){
this.email1 = email1
this.pass1 = pass1
this.rpass1 = rpass1

var newSignUp = [];    
};
  
// function Login(name2,pass2){
// this.name2 = name2
// this.pass2 = pass2
// };

$("#proceed").submit(function(event){
event.preventDefault();
// const form = new FormData(event.target);
var email1 = $("#email1").val();
var email1 = $("#pass1").val();
var email1 = $("#rpass1").val();
var name1 = $("#name1").val();


const newSign = new Sign(email1,pass1,rpass1,name1)
newSignUp.push(Sign)

if (email1 === "") {
    alert("Please Insert your email")
  } else if (pass1 === "") {
    alert("Enter a strong password")
  } else if (rpass1 === "") {
    alert("Please insert your the password again!")
  } else if (pass1 === "repeat"){
      alert("Password does Not match")
  }else if (name1 === "") {
    alert("Please insert your name")
   } else{

    alert(' Dear ' + name1 + ' we have received your message successfully. ' + ' You are now free to sign in ');
  }
})


});


// //Login Form
// function form1(){
// 	var username=document.forms["loginform"]["username"].value;
// 	     var pwd=document.forms["loginform"]["pwd"].value;


// if(username==null || username==""){
// 	document.getElementById("errorbox").innerHTML = "Enter the Usename";
// 	return false;
// }

// if(pwd==null || pwd==""){
// 	document.getElementById("errorbox").innerHTML = "Enter the Password";
// 	return false;
// }

// if(username != '' && pwd != ''){
// 	alert("Login successfully");
// }
// }


// //Signup Form

// function form2(){


// 	var signup_username=document.forms["signupform"]["signup_username"].value;
// 	var signup_useremail=document.forms["signupform"]["signup_useremail"].value;
// 	var signup_pwd=document.forms["signupform"]["signup_pwd"].value;
// 	var repwd=document.forms["signupform"]["repwd"].value;



	 
// 	if(signup_username==null || signup_username=="" ){
//                   document.getElementById("errorbox").innerHTML = "Enter the User Name";
//                  return false;
//         }

//         if(signup_useremail==null || signup_useremail==""){
//                   document.getElementById("errorbox").innerHTML =
//                    "Enter the E-mail";
//                  return false;
//         }

//         if(signup_pwd==null || signup_pwd==""){
//                   document.getElementById("errorbox").innerHTML =
//                    "Enter the Password";
//                  return false;
//         }

//         if(repwd==null || repwd==""){
//                   document.getElementById("errorbox").innerHTML =
//                    "Enter the Retype Password";
//                  return false;
//              }

//  		if(signup_pwd != repwd){
//                   document.getElementById("errorbox").innerHTML = "Password Don't Match";
//                  return false;
//              }
        

//         if (signup_username != '' && signup_useremail != '' && signup_pwd != '' && repwd != '' && signup_pwd == repwd)


//           alert("Register/Signup Successfull");
                         

// }