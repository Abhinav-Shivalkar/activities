function myfun() {

    var name = document.myform.fname.value;
    var password = document.myform.pass.value;

    let regex_mail = new RegExp('[a-zA-Z0-9_.-]+@[a-zA-Z0-9]+.[a-z]{2,3}');
    var flag = 0;
    let isvalid = regex_mail.test(name);
    document.getElementById("message").innerHTML = isvalid;
    if (isvalid == false) {
        document.getElementById("message1").innerHTML = "";

        if (name.length == 0) {
            document.getElementById("message").innerHTML = "Please enter your Email";
            document.getElementById("message").style.color = "red";
            document.getElementById("message").style.fontSize = "small";
            return false;
        }
        else if (name.indexOf('@') == 0) {
            document.getElementById("message").innerHTML = "@ should not be present at first place";
            document.getElementById("message").style.color = "red";
            document.getElementById("message").style.fontSize = "small";
            return false;
        }
        else if (name.includes("@") == false) {
            document.getElementById("message").innerHTML = "@ is missing";
            document.getElementById("message").style.color = "red";
            document.getElementById("message").style.fontSize = "small";
            return false;
        }
        else if (name.charAt(name.length - 2) == '.' || name.charAt(name.length - 1) == '.') {
            document.getElementById("message").innerHTML = "Please enter a valid email";
            document.getElementById("message").style.color = "red";
            document.getElementById("message").style.fontSize = "small";
            return false;
        }
        else {
            document.getElementById("message").innerHTML = "Please enter a valid email";
            document.getElementById("message").style.color = "red";
            document.getElementById("message").style.fontSize = "small";
            return false;
        }
    }
    else if (name == "abhinav.s@gmail.com") {
        flag = 1;
        document.getElementById("message").innerHTML = "";
    }
    else {
        
        document.getElementById("message").innerHTML = "Please Check Your Email Id";
        document.getElementById("message").style.color = "red";
        document.getElementById("message").style.fontSize = "small";
        document.getElementById("message1").innerHTML = "";
        
        return false;
    }



    if (password.length < 8) {

        if (password.length == 0) {
            document.getElementById("message1").innerHTML = "Please enter your password";
            document.getElementById("message1").style.color = "red";
            document.getElementById("message1").style.fontSize = "small";
            return false;
        }
        else {
            document.getElementById("message1").innerHTML = "Password should contain minimum 8 characters";
            document.getElementById("message1").style.color = "red";
            document.getElementById("message1").style.fontSize = "small";
            return false;
        }

    }
    else if (password == "123456789" && flag == 1) {
        document.getElementById("message1").innerHTML = "Login Successful";
        document.getElementById("message1").style.color = "blue";
        document.getElementById("message1").style.fontSize = "small";

    }

    else {
        document.getElementById("message1").innerHTML = "Please check your password";
        document.getElementById("message1").style.color = "red";
        document.getElementById("message1").style.fontSize = "small";
    }

}