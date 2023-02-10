//validation
var form = document.getElementById("form");
var check   =  [document.getElementById("checkN"), 
                document.getElementById("checkE"), 
                document.getElementById("checkA")];
var cnt = document.getElementById("cnt");
cnt.innerHTML= "0/30";
form.area.oninput = function() {
    cnt.innerHTML=  form.area.value.length + "/30";
}
form.onsubmit = function ()
{
    for (var i=0 ; i< check.length ; i++)
    {
        check[i].innerHTML = "";
    }

    if (form.name.value == "") {
        check[0].innerHTML= "Cannot be blank!" ;
        form.name.focus();
        return false;
    }
    if ( !(form.name.value.match(/^[a-zA-Z\s]*$/)) )
    {
        check[0].innerHTML= "Please Enter Only Letters!" ;
        form.name.focus();
        return false;
    }

    if (form.email.value == "") {
        check[1].innerHTML= "Cannot be blank!" ;
        form.email.focus();
        return false;
    }

    if (form.area.value.length < 30) {
        check[2].innerHTML= "Enter at least 30 character!";
        form.area.focus();
        return false;
    }
    alert("Done! Thank you for choosing us.");
}