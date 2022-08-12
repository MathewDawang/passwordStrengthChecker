let timeOut;
let password = document.getElementById('passentry');
let strengthBadge = document.getElementById('weak');
let strongPassword = new RegExp('(?=.*[a-z]) (?=.*[A-Z])(?=.*[0-9]) (?=.*[^A-Za-z0-9]) (?=.{8,})');
let mediumPassword = new RegExp ('((?=.*[a-z]) (?=.*[A-Z]) (?=.*[^A-Za-z0-9]) (?=.{8,}))|((?=.*[a-z]) (?=.*[A-Z]) (?=.*[^A-Za-z0-9]) (?=.*[0-9])(?=.{6,}))');

function strengthChecker(passwordParameter){
    if(strongPassword.test(passwordParameter)){
        strengthBadge.style.backgroundColor = 'green'
        strengthBadge.textContent = 'Your password is very strong';
    }else if(mediumPassword.test(passwordParameter)){
        strengthBadge.style.backgroundColor = 'blue';
        strengthBadge.textContent = 'Moderayely strong password';
    }else{
        strengthBadge.style.backgroundColor = 'red';
        strengthBadge.textContent = 'Very weak password';
        
    }

}
password.addEventListener('input', ()=>{
    strengthBadge.style.display = 'bolck';
    clearTimeOut(timeOut);

    timeOut = setTimeOut(() => strengthChecker(password.value), 500);
    if(password.value.length !==0){
        strengthBadge.style.display != 'block';

    }else{
        strengthBadge.style.display = 'none';
    }
});