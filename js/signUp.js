$(document).ready(function () {
    function Sign(email1, pass1, rpass1) {
        this.email1 = email1
        this.pass1 = pass1
        this.rpass1 = rpass1

    };
    var newSignUp = [];

    $("#proceed").submit(function (event) {
        event.preventDefault();
        // const form = new FormData(event.target);
        var email1 = $("#email1").val();
        var pass1 = $("#pass1").val();
        var rpass1 = $("#rpass1").val();
        var name1 = $("#name1").val();


        const newSign = new Sign(email1, pass1, rpass1, name1)
        newSignUp.push(Sign)

      $("#name1").val("");
      $("#pass1").val("");
      $("#rpass1").val("");
      $("#email1").val("");
        if (email1 === "") {
            alert("Please Insert your email")
        } else if (pass1 === "") {
            alert("Enter a strong password")
        } else if (rpass1 === "") {
            alert("Please insert your password again!")
        } else if (pass1 != rpass1) {
            alert("Password does Not match")
        } else if (name1 === "") {
            alert("Please insert your name")
        } else {

            alert(' Dear ' + name1 + ' we have received your message successfully. ' + ' You are now free to sign in ');
        }
    });      

});

$(document).ready(function () {
   function Login(name2,pass2){
    this.name2 = name2
    this.pass2 = pass2
    };
    var newLogin=[];

    $("#checkout").submit(function (event) {
        event.preventDefault();
        var name2 = $("#name2").val();
        var pass2= $("#pass2").val();

        const newlogin = new Login(name2,pass2)

        $("#name2").val("");
      $("#pass2").val("");

        // console.log(newLogin)
        newLogin.push(newlogin)

        if (name2 === "") {
            alert("Please insert your name")
        } else if (pass2 === ""){
            alert("Please insert a password")
        }else{
            alert(' Dear ' + name2 + ' we have received your message successfully. ' + ' Feel free to interact with our website. ')
        }
    });
 
});


