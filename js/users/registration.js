$(document).ready(() => {
    $("#signUp").submit((event) => {
      event.preventDefault();
      var name = $("#name").val();
      var email = $("#email").val();
      var age = $("#age").val();
      var gender = $("#gender").val();
      var mobile = $("#mobile").val();
      var username = $("#username").val();
      var password = $("#password").val();
      var confirmpassword = $("#confirmpassword").val();
    
  
      $.ajax({
        url: "http://localhost:3000/users",
        method: "POST",
        required :"true",
        data: {
            name: name,
            email:  email,
            age:age,
            gender: gender,
            mobile: mobile,
            username: username,
            password:password,
            confirmpassword: confirmpassword,
        },
        success:(x)=>{
            
            window.location ="index.html";
            alert(x.firstName+" added successfully");
        },
        error:(e)=>{
            alert("error occured");
        }
      });
    });
    
  });
  
  
  