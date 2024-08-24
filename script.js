
let name = prompt("Enter your userName: (iftekhar)");
let pass = prompt("Enter your passWord: (12345)");

if (name === "iftekhar") {
    if (pass === "12345") {
        console.log("Welcome to your Profile");   
    } else {
        console.log("Invalid Password");  
    }
} else {
    console.log("Acess Denied");
}


let on = document.querySelector('.on');
let off = document.querySelector('.off');
let img = document.querySelector('.img');
let body = document.querySelector('body');

on.addEventListener('click' , function(){
    img.src = "https://www.w3schools.com/js/pic_bulbon.gif";
    body.style.backgroundImage = "url('https://t3.ftcdn.net/jpg/02/95/78/16/360_F_295781609_oFI1rBGHyuSIvjunACQXfoRjsozvgyuK.jpg')";
});

off.addEventListener('click' , function(){
    img.src = "https://www.w3schools.com/js/pic_bulboff.gif";
    body.style.backgroundImage ="url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW4A0P8yAM_-9cgYPj3lbi_RtIvkMFyMIjOA&s')"
});

// on.addEventListener('click', function(){
// }) 