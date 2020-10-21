function checkNotNull(value){
    if(value == ""){
        return true;
    }else{
        return false;
    }
}

function danger(user, email, message){
    if(checkNotNull(user)){
        $('#username').addClass('danger');
    }else{
        $('#username').removeClass('danger');
    }
    if(checkNotNull(email)){
        $('#email').addClass('danger');
    }else{
        $('#email').removeClass('danger');
    }
    if(checkNotNull(message)){
        $('#message').addClass('danger');
    }else{
        $('#message').removeClass('danger');
    }
}

function removeDanger(){
    $('#username').removeClass('danger');
    $('#email').removeClass('danger');
    $('#message').removeClass('danger');
}

$(document).ready(function(){
    
    $('#design').click(function(){
        $('#design-img').toggle();
        $('#design-txt').toggle();
    });

    $('#development').click(function(){
        $('#development-img').toggle();
        $('#development-txt').toggle();
    });

    $('#product').click(function(){
        $('#product-img').toggle();
        $('#product-txt').toggle();
    });

    var days = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'];
    days.forEach(function(day){
        $('#'+day).hover(function(){
            $('.'+day).toggle();
        });
    });

    $('form.validate').submit(function(event){
        var user = document.getElementById('username').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;

        if(checkNotNull(user) || checkNotNull(email) || checkNotNull(message)){
            danger(user, email, message);
        }else{
            removeDanger();
            alert('Thank you '+user+' for reaching out. We will get back to you.');
        }
    });
});