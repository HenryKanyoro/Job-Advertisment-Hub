$(document).ready(function(){
    
    $('#design').click(function(){
        $('#design-img').toggle(2000);
        $('#design-txt').toggle(2000);
    });

    $('#development').click(function(){
        $('#development-img').toggle(2000);
        $('#development-txt').toggle(2000);
    });

    $('#product').click(function(){
        $('#product-img').toggle(2000);
        $('#product-txt').toggle(2000);
    });

    var days = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'];
    days.forEach(function(day){
        $('#'+day).hover(function(){
            $('.'+day).toggle();
        });
    });

    $('form.validate').subscribe(function(event){
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