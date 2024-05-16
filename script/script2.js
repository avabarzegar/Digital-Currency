// register-page 


$(document).ready(function () {
    const emailSubmit = $('#register-email-submit');
    const mobileSubmit = $('#register-mobile-submit');
    const emailSubmitLogin = $('#login-email-submit');
    const mobileSubmitLogin = $('#login-mobile-submit');
    const validateEmail = (email) => {
        return email.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };
    // register-email 
    const validateEmailContent = () => {
        const emailResult = $('#reg-email-result');
        const email = $('#reg-mail').val();
        emailResult.text('');
        if (validateEmail(email)) {
            return true;
        } else if (email == '') {
            emailResult.text('ایمیل خود را وارد کنید.');
            emailResult.css('color', 'red');
        } else {
            emailResult.text('ایمیل صحیح وارد کنید.');
            emailResult.css('color', 'red');
        }
        return false;
    }

    // $('#reg-mail').on('input', validateEmailContent);
    emailSubmit.on('click', validateEmailContent);
    // /register-email 
    // login-email 
    const validateEmailContentlogin = () => {
        const emailResult = $('#reg-email-result-login');
        const email = $('#reg-mail-login').val();
        emailResult.text('');
        if (validateEmail(email)) {
            return true;
        } else if (email == '') {
            emailResult.text('ایمیل خود را وارد کنید.');
            emailResult.css('color', 'red');
        } else {
            emailResult.text('ایمیل صحیح وارد کنید.');
            emailResult.css('color', 'red');
        }
        return false;
    }

    // $('#reg-mail-login').on('input', validateEmailContent);
    emailSubmitLogin.on('click', validateEmailContentlogin);
    // /login-email 


    // register-pass 
    const validatePassContent = () => {
        const passResult = $('#reg-pass-em-result');
        const pass = $('#reg-password-email').val();
        passResult.text('');
        if (pass == '') {
            passResult.text('پسورد خود را وارد کنید.');
            passResult.css('color', 'red');
        }
        if (pass.length < 8) {
            passResult.text('حداقل 8 کاراکتر وارد کنید.');
            passResult.css('color', 'red');
        } else if (pass.length > 15) {
            passResult.text('حداکثر 15 کاراکتر وارد کنید.');
            passResult.css('color', 'red');
        }
        return false;
    }

    // $('#reg-password-email').on('input', validatePassContent);
    emailSubmit.on('click', validatePassContent);

    // mobile 
    const validatePassContentMobile = () => {
        const passResult = $('#reg-pass-mo-result');
        const pass = $('#reg-password-mobile').val();
        passResult.text('');
        if (pass == '') {
            passResult.text('پسورد خود را وارد کنید.');
            passResult.css('color', 'red');
        }
        if (pass.length < 8) {
            passResult.text('حداقل 8 کاراکتر وارد کنید.');
            passResult.css('color', 'red');
        } else if (pass.length > 15) {
            passResult.text('حداکثر 15 کاراکتر وارد کنید.');
            passResult.css('color', 'red');
        }
        return false;
    }

    // $('#reg-password-mobile').on('input', validatePassContentMobile);
    mobileSubmit.on('click', validatePassContentMobile);
    // /mobile 

    // /register-pass 

    // login-pass 
    const validatePassContentLogin = () => {
        const passResult = $('#reg-pass-em-result-login');
        const pass = $('#reg-password-email-login').val();
        passResult.text('');
        if (pass == '') {
            passResult.text('پسورد خود را وارد کنید.');
            passResult.css('color', 'red');
        }
        if (pass.length < 8) {
            passResult.text('حداقل 8 کاراکتر وارد کنید.');
            passResult.css('color', 'red');
        } else if (pass.length > 15) {
            passResult.text('حداکثر 15 کاراکتر وارد کنید.');
            passResult.css('color', 'red');
        }
        return false;
    }

    // $('#reg-password-email').on('input', validatePassContentLogin);
    emailSubmitLogin.on('click', validatePassContentLogin);

    // mobile 
    const validatePassContentMobileLogin = () => {
        const passResult = $('#reg-pass-mo-result-login');
        const pass = $('#reg-password-mobile-login').val();
        passResult.text('');
        if (pass == '') {
            passResult.text('پسورد خود را وارد کنید.');
            passResult.css('color', 'red');
        }
        if (pass.length < 8) {
            passResult.text('حداقل 8 کاراکتر وارد کنید.');
            passResult.css('color', 'red');
        } else if (pass.length > 15) {
            passResult.text('حداکثر 15 کاراکتر وارد کنید.');
            passResult.css('color', 'red');
        }
        return false;
    }

    // $('#reg-password-mobile').on('input', validatePassContentMobileLogin);
    mobileSubmitLogin.on('click', validatePassContentMobileLogin);
    // /mobile 

    // /login-pass 


    // register-number 
    const validateNumContentMobile = () => {
        const numResult = $('#reg-num-mo-result');
        const num = $('#reg-number-mobile').val();
        numResult.text('');
        if (num == '') {
            numResult.text('شماره موبایل خود را وارد کنید.');
            numResult.css('color', 'red');
            return false;
        }

        if (num.length != 11) {
            numResult.text("شماره شما باید 11 رقم باشد");
            numResult.css('color', 'red');
            return false;
        } 
        else if (isNaN(num) || num.indexOf(" ") != -1) {
            numResult.text("یک مقدار عددی وارد کنید");
            numResult.css('color', 'red');
            return false;
        } 
        else if ((num.charAt(0) + num.charAt(1)) != "09") {
            numResult.text("شماره شما باید با 09 شروع شود");
            numResult.css('color', 'red');
            return false;
        }
        
        return true;

    }

    mobileSubmit.on('click', validateNumContentMobile);
    // /register-number 

    // login-number 
    const validateNumContentMobileLogin = () => {
        const numResult = $('#reg-num-mo-result-login');
        const num = $('#reg-number-mobile-login').val();
        numResult.text('');
        if (num == '') {
            numResult.text('شماره موبایل خود را وارد کنید.');
            numResult.css('color', 'red');
            return false;
        }

        if (num.length != 11) {
            numResult.text("شماره شما باید 11 رقم باشد");
            numResult.css('color', 'red');
            return false;
        } 
        else if (isNaN(num) || num.indexOf(" ") != -1) {
            numResult.text("یک مقدار عددی وارد کنید");
            numResult.css('color', 'red');
            return false;
        } 
        else if ((num.charAt(0) + num.charAt(1)) != "09") {
            numResult.text("شماره شما باید با 09 شروع شود");
            numResult.css('color', 'red');
            return false;
        }
        
        return true;


    }

    mobileSubmitLogin.on('click', validateNumContentMobileLogin);
    // /login-number 

    // forget-number 
    const validateNumContentMobileForget = () => {
        const numResult = $('#reg-num-mo-result-forget');
        const num = $('#reg-number-mobile-forget').val();
        numResult.text('');
        if (num == '') {
            numResult.text('شماره موبایل خود را وارد کنید.');
            numResult.css('color', 'red');
            return false;
        }

        if (num.length != 11) {
            numResult.text("شماره شما باید 11 رقم باشد");
            numResult.css('color', 'red');
            return false;
        } 
        else if (isNaN(num) || num.indexOf(" ") != -1) {
            numResult.text("یک مقدار عددی وارد کنید");
            numResult.css('color', 'red');
            return false;
        } 
        else if ((num.charAt(0) + num.charAt(1)) != "09") {
            numResult.text("شماره شما باید با 09 شروع شود");
            numResult.css('color', 'red');
            return false;
        }
        
        return true;

    }



    // $('#reg-number-mobile').on('input', validateNumContentMobile);

    $('#forgetBtn').on('click', validateNumContentMobileForget)

    // /forget-number 

    // register-name 
    const validateNameContentEmail = () => {
        const nameResult = $('#reg-name-result');
        const name = $('#reg-email-name').val();
        nameResult.text('');
        if (name == '') {
            nameResult.text('نام خود را وارد کنید.');
            nameResult.css('color', 'red');
        }

        return false;
    }

    // $('#reg-email-name').on('input', validateNameContentEmail);
    emailSubmit.on('click', validateNameContentEmail);
    // /register-name 

    const validateNameContentMobile = () => {
        const nameResult = $('#reg-name-mo-result');
        const name = $('#reg-name-mobile').val();
        nameResult.text('');
        if (name == '') {
            nameResult.text('نام خود را وارد کنید.');
            nameResult.css('color', 'red');
        }

        return false;
    }

    mobileSubmit.on('click', validateNameContentMobile);
})