
let toggle = false;
let isListing = false;



document.getElementById("opnbtn").addEventListener("click", function () {
  if (toggle == false) {
    document.getElementById("orSidenav").style.width = "250px";
    toggle = true;
  } else if (toggle == true) {
    document.getElementById("orSidenav").style.width = "0";
    toggle = false;
  }

})
document.getElementById("blg").addEventListener("click", function () {
  if (!isListing) {
    const traingle = this.querySelector(".unicode");
    traingle.classList.toggle("animate");
    const target = document.getElementById("blg");
    const el = ['<li><a href="BlogProt3.html">12/10/24</a></li>', '<li><a href="BlogPrto2.html">10/20/24</a></li>'];
    el.forEach(list => {
      target.insertAdjacentHTML("afterend", list);
    })

    // alert("clicking the blogds");
    isListing = true;
  } else if (isListing) {
    const nav = document.getElementById('orSidenav');
    const list = nav.querySelectorAll('li');
    const traingle = this.querySelector(".unicode");
    traingle.classList.toggle("animate");
    list.forEach(p => {
      p.remove();
    })
    isListing = false;
  }
})