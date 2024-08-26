let username=document.getElementById('username')
let password=document.getElementById('password')
let userError=document.getElementById('usererror')
let passerror=document.getElementById('passerror')
let flag=1;
function formValidate(){
flag = 1; 
if(username.value==""){
    userError.innerHTML="Username should not be empty"
    flag=0;
   
} else if (username.value.length < 3) { 
userError.innerHTML = "Username should be at least 3 characters";
flag =0;
} 
else{
    userError.innerHTML="";
}
 if(password.value==""){
    passerror.innerHTML="Password should not be empty"
    flag=0;
}else if (password.value.length < 6) { 
passerror.innerHTML = "Incorrect! Password should be at least 6 characters";
flag =0;}

else{
    passerror.innerHTML="";
  
}

if(flag){
    return true;
}else{
    return false;
}
}