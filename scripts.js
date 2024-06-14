function validation1(){
    if(document.Formfill.Email.value==""){
        document.getElementById("result").innerHTML="Enter your Email*";
        return false;
    }
    else if(document.Formfill.Password.value==""){
        document.getElementById("result").innerHTML="Enter your Password";
        return false;
    }
    else if(document.Formfill.Password.value){
        popup.classList.add("open-slide")
        return false;
    }
    
}
var popup=document.getElementById('popup1');
function CloseSlide(){
    popup1.classList.remove('open-slide')
}