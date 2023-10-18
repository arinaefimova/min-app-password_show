let eyeIcon =document.querySelector('#eyeicon');
let password =document.querySelector('#password');
password.onfocus=function(){
    password.placeholder='';
}
password.onblur = function() {
    if (password.value === '') {
        password.placeholder = 'password.';
    }
};

eyeIcon.addEventListener('click',function(){
    if(password.type == 'password'){
        password.type ='text';
        eyeIcon.src ='../img/eye-open.png';
    }
    else{
        password.type = 'password';
        eyeIcon.src ='./img/eye-close.png'
    }
})

