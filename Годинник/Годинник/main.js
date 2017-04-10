var hp=document.getElementById('hour');
var mp=document.getElementById('min');
var sp=document.getElementById('sec');    
var clock =setInterval(function() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    if (h < 10) {
        h = "0" + h;
    }
    
    if (m < 10)
    { m = "0" + m;
    }
    if (s < 10) 
    {s = "0" + s;
    }
    hp.innerHTML = h + ":";
    hp.style.fontSize="150px";
        hp.style.textAlign="center";
    mp.innerHTML = m + ":";
    mp.style.fontSize="150px";
     mp.style.textAlign="center";
     sp.innerHTML = s ;
    sp.style.fontSize="150px";
     sp.style.textAlign="center";
    
   } , 1000);
  

