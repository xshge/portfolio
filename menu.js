
let toggle = false;




document.getElementById("opnbtn").addEventListener("click", function(){
      if(toggle == false){
        document.getElementById("orSidenav").style.width = "250px";
        toggle = true;
    }else if (toggle == true){
         document.getElementById("orSidenav").style.width = "0";
         toggle = false;
    }
    
})