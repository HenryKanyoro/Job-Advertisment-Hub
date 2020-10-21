$(document).ready(function(){
function Sign(email1,pass1,rpass1){
this.email1 = email1
this.pass1 = pass1
this.rpass1 = rpass1
};
function Login(email2,pass2,rpass2){



};



$("#proceed").submit(function(event){
event.preventDefault();
const form = new FormData(event.target);
const email = form.get("email1");
const pass1 = form.get("pass1");
const rpass1 = form.get("rpass1");

})


});