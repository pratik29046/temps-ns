

$(document).ready(function () {
  $.validator.addMethod(
    "email",
    function (value, element) {
      return (
        this.optional(element) ||
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z.]{2,5}$/i.test(value)
      );
    },
    "Please enter a valid email address."
  );

  $.validator.addMethod(
    "password",
    function (value, element) {
      return (
        this.optional(element) || /^[A-Za-z0-9!@#$%^&*()_]{6,16}$/i.test(value)
      );
    },
    "Passwords are 6-16 characters"
  );

//   $.validator.addMethod(
//     "phone",
//     function (value, element) {
//       return (
//         this.optional(element) || "/^(?:(?:\\+|0{0,2})91(\\s*[\\-]\\s*)?|[0]?)?[6-9]$"/i.test(value)
//       );
//     },
//     "enter 10 digit phone number"
//   );

});


$("#frm").validate({
    rules: {
      name: "required",
      // email: {
      //   required: true,
      //   email: true,
      // },
  
      email: "required",
      date: "required",
      phone: "required",
      password: "required",

      phone: {
        required: true,
        digits: true,
        minlength: 10,
        maxlength: 10,
      },
  
    //   password: {
    //     required: true,
    //     minlength: 5,
    //     maxlength: 10,
    //     digits: true,
    //   },


    }
  });


