const btn = document.getElementById("btn");
const input = document.getElementById("number");

btn.addEventListener("click", function clickevent(event) {
  event.preventDefault();
  const input = document.getElementById("number");
  console.log(input.value);

  if (input.value.length == 0) {
    alert("Enter your number")
  } else {
    function fact(n) {
      let a = 1;
      if (n == 0 || n == 1) {
        return a;
      } else {
        for (var i = n; i >= 1; i--) {
          a = a * i;
        }
        return a;
      }
    }
    let n = input.value;
    a = fact(n);
    document.getElementById("output").innerHTML = a;
  }
});
