const btn = document.getElementById("btn");

btn.addEventListener("click", function handleClick(event) {
  event.preventDefault();

  const a = document.getElementById("name");
  const b = document.getElementById("email");
  const c = document.getElementById("date");
  const d = document.getElementById("number");

  console.log(a.value.length);

  if (a.value.length == 0  || b.value.length== 0 || c.value.length==0 || d.value.length==0) {
    alert("Please Fill All Required Field");
  }else{
    a.value='';
    b.value='';
    c.value='';
    d.value='';
  }


});
