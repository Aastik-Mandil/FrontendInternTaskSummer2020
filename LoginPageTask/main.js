/* ========================WRITE YOUR JS FROM HERE======================== */
$(document).ready(function(){
    $("#submit").on("click", function(){
        var username = $("#username").val();
        var email = $("#email").val();
        var password = $("#password").val();
        var conformpassword = $("#conformpassword").val();
        var message = $("#message").val();
        var age = $("input[name='age']:checked").val();
        if(username!="" && email!="" && password!="" && conformpassword!="" && message!="" && age!=""){
            if(password==conformpassword){
                document.getElementsById("#alert").innerHTML(
                <div class="alert alert-success" role="alert">
                    <strong>Success! </strong>Data inserted successfully
                </div>);
            }
            else{
                document.getElementsById("#alert").innerHTML(
                <div class="alert alert-danger" role="alert">
                    <strong>Danger! </strong>Please enter correct password
                </div>);
            }
        }
        else{
            document.getElementsById("#alert").innerHTML(
            <div class="alert alert-warning" role="alert">
                <strong>Warning! </strong>Please fill all the details
            </div>);
        }
    });
});
