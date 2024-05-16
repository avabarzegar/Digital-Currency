const togglePassword = document.querySelector('#togglePassword');
  const password = document.querySelector('#reg-password-email-login');
 
  togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
  
});

const togglePasswordtwo = document.querySelector('#togglePassword-2');
  const passwordtwo = document.querySelector('#reg-password-mobile-login');
 
  togglePasswordtwo.addEventListener('click', function (e) {
    // toggle the type attribute
    const typetwo = passwordtwo.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordtwo.setAttribute('type', typetwo);
    // toggle the eye slash icon
  
});


// $(document).ready(function () {
//   //login-phone-pass-validation
//   const validatePassContentMobile = () => {
//     const passResult = $('#reg-pass-mo-result');
//     const pass = $('#id_password-2').val();
//     passResult.text('');
//     if (pass == '') {
//         passResult.text('پسورد خود را وارد کنید.');
//         passResult.css('color', 'red');
//     }
//     if (pass.length < 8) {
//         passResult.text('حداقل 8 کاراکتر وارد کنید.');
//         passResult.css('color', 'red');
//     } else if (pass.length > 15) {
//         passResult.text('حداکثر 15 کاراکتر وارد کنید.');
//         passResult.css('color', 'red');
//     }
//     return false;
// }

// $('#id_password-2').on('input', validatePassContentMobile);
// //login-phone-pass-validation



// const validateNumContentMobile = () => {
//   const numResult = $('#reg-num-mo-result');
//   const num = $('#reg-number-mobile').val();
//   numResult.text('');
//   if (num == '') {
//       numResult.text('شماره موبایل خود را وارد کنید.');
//       numResult.css('color', 'red');
//   }

//   return false;
// }

// $('#reg-number-mobile').on('input', validateNumContentMobile);





// })