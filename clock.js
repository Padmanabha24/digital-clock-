setInterval(function(){
  let a = new Date();
  let p = a.getHours();
  let q = a.getMinutes();
  let r = a.getSeconds();
  let d = a.getDate();
  let m = a.getMonth();
  let y = a.getFullYear();
  document.getElementById("h").innerHTML = p;
  document.getElementById("m").innerHTML = q;
  document.getElementById("s").innerHTML = r;
document.getElementById("d").innerHTML =d;
document.getElementById("mo").innerHTML=m;
document.getElementById("y").innerHTML=y;
},1000)