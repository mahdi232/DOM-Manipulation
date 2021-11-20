
document.getElementById('Login').addEventListener("click",function(){
    form.style = "display: contents"
})

document.getElementById('form').addEventListener('submit',function(event){
    event.preventDefault()
    var mail = document.getElementById('email');
    var password = document.getElementById('password');
    console.log(mail.value);
    console.log(password.value);
    if ((mail.value=="smu@smu.tn")&&(password.value=="123456")){
        
        alert("Welcome!! 🔥🔥🔥🔥");
     }
    else if((mail.value!="smu@smu.tn")&&(password.value=="123456")){
        alert("Wrong Email!");
    }
    else if((password.value!="123456")&&(mail.value=="smu@smu.tn")){
        alert("Wrong Password!");
    }
    else {
        alert("Wrong mail and Wrong password");
    }
});
