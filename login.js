function validation() {

    var password = document.getElementById('form2').value;
var email = document.getElementById('form1').value;

    if (password == "") {
      document.getElementById('form2').innerHTML =" ** Enter Password"
      return false;
    }else if (password == user) {
      document.getElementById('form2').innerHTML =" ** Password cant'be your FirstName or LastName"
      return false;
    }else if ((password.length <=6)  ||  (password.length >=20)) {
      document.getElementById('form2').innerHTML =" ** user password should be between 6 to 20 characters "
      return false;
    }



    if (email == "") {
      document.getElementById('form1').innerHTML = " ** Enter Email ID"
      return false;
    }else if (email.indexOf('@') <= 0) {
      document.getElementById('form1').innerHTML = " **  @ Invalid Position"
      return false;
    }
    }

