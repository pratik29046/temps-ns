function showerror(errorelement, errormessage) {
  document.querySelector("." + errorelement).classList.add("display-error");
  document.querySelector("." + errorelement).innerHTML = errormessage;
}


function errordisable() {
  let errors = document.querySelectorAll(".error");
  for (let error of errors) {
    error.classList.remove("display-error");
  }
}

var valid =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var numbervalids="^(?:(?:\\+|0{0,2})91(\\s*[\\-]\\s*)?|[0]?)?[6-9]\\d{9}$";


const btn = document.getElementById("btn");
btn.addEventListener("click", function handleClick(event) {
  event.preventDefault();
  const a = document.getElementById("name");
  const b = document.getElementById("email");
  const c = document.getElementById("date");
  const d = document.getElementById("number");

  console.log(a.value.length);

  errordisable();
  document.getElementById("name").style.border="2px solid #aaa";
  if (a.value.length == 0 ) {
    showerror("name-error", "! Please enter your name");
    document.getElementById("name").style.border="1px solid #FF0000";
    return false;
  }

  document.getElementById("email").style.border="2px solid #aaa";
  if (b.value.length == 0 || !b.value.match(valid)) {
    showerror("email-error", "! Please enter your email");
    document.getElementById("email").style.border="1px solid #FF0000";
    return false;
  }

  document.getElementById("date").style.border="2px solid #aaa";
  if (c.value.length == 0 ) {
    showerror("date-error", "! Please select your date");
    document.getElementById("date").style.border="1px solid #FF0000";
    return false;
  }

  document.getElementById("number").style.border="2px solid #aaa";
  if (d.value.length == 0 || !d.value.match(numbervalids)) {
    showerror("number-error", "! Please enter 10 digit valid phone number ");
    document.getElementById("number").style.border="1px solid #FF0000";
    return false;
  } else {

    localStorage.setItem("name",a);
    a.value = "";
    b.value = "";
    c.value = "";
    d.value = "";
  }

//   (d.value.length != 10)
  //   if (a.value.length == 0  || b.value.length== 0 || c.value.length==0 || d.value.length==0) {
  //     alert("Please Fill All Required Field");
  //   }else{
  //     a.value='';
  //     b.value='';
  //     c.value='';
  //     d.value='';
  //   }

  
});
