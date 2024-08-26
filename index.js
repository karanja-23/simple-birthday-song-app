let mySubmit = document.getElementById("btn");
let userName = document.getElementById("username");
let birthdaySong = document.getElementById("my-song1");
let birthdaySong1 = document.getElementById("my-song2");
let birthdaySong2 = document.getElementById("my-song3");
let birthdaySong3 = document.getElementById("my-song4");




mySubmit.onclick = function(){

  let myName = userName.value;

 
  birthdaySong.textContent = ( `Happy Birthday to you!`);
  birthdaySong1.textContent = ( `Happy Birthday to you!`);
  birthdaySong2.textContent = ( `Happy Birthday dear ${myName}!`);
  birthdaySong3.textContent = ( `Happy Birthday to you!`);
  


}
