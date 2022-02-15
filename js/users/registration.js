$(document).ready(function (){
    $("#submitBtn").click(function (userAdd){
        var name = $("#name").val();
        var email = $("#email").val();
        var age = $("#age").val();
        var city = $("#City").val();
         var genderM = $("#male").val();
        var genderF = $("#female").val();
        var mobile = $("#mobile").val();
        var username = $("#username").val();
        var password = $("#confirmPassword").val();
        
        var jsonData={
            name:name,
            email:email,
            age:age,
            city:city,
            genderM:male,
            genderF:female,
            mobile:mobile,
            username:username,
            password:confirmPassword 
        }
        $.ajax({
            type: "POST",
            url: "http://localhost:3000/users",
            data: jsonData,
            success: function(x){
                alert("Registered successfuly");
                $jsonData.append("name: "+x.name+", email: "+x.email
                
                +", age: "+x.age+", city: "+x.city+", genderM: "+x.male+", genderF: "+x.female
                +", mobile: "+x.mobile+", username: "+x.username+", password: "+x.confirmPassword);
            },
            error: function(x){
                alert("this is error");
            }
        });
    })
})









// $("#submitBtn").click(function(){
// var name = $("#name").val();
// var email = $("#email").val();
// var age = $("#age").val();
// var city = $("#City").val();
//  var genderM = $("#male").val();
// var genderF = $("#female").val();
// var mobile = $("#mobile").val();
// var username = $("#username").val();
// var password = $("#confirmPassword").val();
// $.post("http://localhost:3000/users",{
//     name:name,
//     email:email,
//     age:age,
//     city:city,
//     genderM:male,
//     genderF:female,
//     mobile:mobile,
//     username:username,
//     password:confirmPassword

// },function(response){

//    $("#response").html("<div class= 'alert alert-success>"+response.message+"</div>")
//    clearfield();

// })

// })