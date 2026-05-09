const res = document.getElementById("result")
function valname(name){
    const nameRE = name.value.match(/[a-z]{2,15}\s[a-z]{2,15}/i)
    if(name.value==nameRE){
        res.innerHTML = "<br><br>"
        return true
    }
    else{
        res.innerHTML = "Enter valid name<br>Alphabets allowed: atleast 4, upto 30 characters"
        name.focus()
        return false
    }
}
function valgen(rad){
    const gensel = document.querySelectorAll("[name=r]:checked").length
    if(gensel==1){
        res.innerHTML = "<br><br>"
        return true
    }
    else{
        res.innerHTML = "Select gender"
        rad.focus()
        return false
    }
}
function valmail(mail){
    const mailRE = mail.value.match(/[\w]{3,}@[a-z]{3,10}.com/i)
    if(mail.value==mailRE && mail.value.length<=50){
        res.innerHTML = "<br><br>"
        return true
    }
    else{
        res.innerHTML = "Enter valid email id<br>Alphabets, numbers and underscores allowed: upto 50 characters"
        mail.focus()
        return false
    }
}
function valnum(number){
    const numRE = number.value.match(/\d{10}/)
    if(number.value==numRE){
        res.innerHTML = "<br><br>"
        return true
    }
    else{
        res.innerHTML = "Enter valid mobile number<br>10 digits required: no country code"
        number.focus()
        return false
    }
}
function valusn(usrnm){
    const usrRE = usrnm.value.match(/\w{5,20}/i)
    if(usrnm.value==usrRE){
        res.innerHTML = "<br><br>"
        return true
    }
    else{
        res.innerHTML = "Enter valid username<br>Alphabets, numbers and underscores allowed: atleast 5, upto 20 characters"
        usrnm.focus()
        return false
    }
}
function valpass1(pass1){
    const passRE = pass1.value.match(/.{8,}/)
    if(pass1.value==passRE){
        res.innerHTML = "<br><br>"
        return true
    }
    else{
        res.innerHTML = "Enter valid password<br>More than 8 characters required: special characters are allowed"
        pass1.focus()
        return false
    }
}
function valpass2(pass2){
    if(pass1.value==pass2.value){
        res.innerHTML = "<br><br>"
        return true
    }
    else{
        res.innerHTML = "Passwords should match<br>Passwords are case-sensitive"
        pass2.focus()
        return false
    }
}
function vis(ck){
    if(ck.checked){
        document.getElementById("pass1").type = "text"
    }
    else{
        document.getElementById("pass1").type = "password"
    }
}
function subm(){
    a = valname(document.getElementById("nm")) && valgen(document.getElementById("r1")) && valmail(document.getElementById("ml")) 
    && valnum(document.getElementById("num")) && valusn(document.getElementById("usn")) 
    && valpass1(document.getElementById("pass1")) && valpass2(document.getElementById("pass2")) 
    if(a){
        alert("Information submitted successfully")
        return true
    }
    else{
        alert("Error: fill all fields with valid input")
        return false
    }
}