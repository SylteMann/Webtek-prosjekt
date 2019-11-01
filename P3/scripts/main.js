/* function injectHeader() {
  let navEl = document.createElement("nav");
  navEl.innerHTML = '<ul>\
    < li > <a href="home.html" class="mainLink"><img src="img/Logoer/tio_logo_ExtraLarge.png" alt="Tio logo"\
      id="hovedlogo" /></a></li >\
        <li><a href="nettsider/artikler.html">Nyheter</a></li>\
        <li><a href="nettsider/booking.html">Booking</a></li>\
        <li><a href="nettsider/merOmHyttene.html">Hytter</a></li>\
        <li><a href="nettsider/omOss.html">Turlaget</a></li>\
        <li><a href="nettsider/kontaktOss.html">Kontakt oss</a></li>\
</ul > '
}*/

let liste = [
  {
    href: "artikler.html",
    tekst: "Nyheter"
  },
  {
    href: "booking.html",
    tekst: "Booking"
  },
  {
    href: "merOmHyttene.html",
    tekst: "Hytter"
  },
  {
    href: "omOss.html",
    tekst: "Turlaget"
  },
  {
    href: "kontaktOss.html",
    tekst: "Kontakt oss"
  }
]


function injectHeader() {
  let navbar = document.getElementById("navbar")

  for (let page of liste){
    navbar.innerHTML += `<li><a href=${page.href}>${page.tekst}</a></li> `
  }
}

function injectFooter() {

}

injectHeader();
injectFooter();

