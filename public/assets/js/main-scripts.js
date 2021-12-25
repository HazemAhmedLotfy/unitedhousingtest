// function openCity(evt, cityName) {
//     var i, tabcontent, tablinks;
//     tabcontent = document.getElementsByClassName("tabcontent");
//     for (i = 0; i < tabcontent.length; i++) {
//       tabcontent[i].style.display = "none";
//     }
//     tablinks = document.getElementsByClassName("tablinks");
//     for (i = 0; i < tablinks.length; i++) {
//       tablinks[i].className = tablinks[i].className.replace(" active", "");
//     }
//     document.getElementById(cityName).style.display = "block";
//     evt.currentTarget.className += " active";
// }


// // Get the element with id="defaultOpen" and click on it
// document.getElementById("defaultOpen").click();

// var tabChange = function(){
//     var tabs = $('.nav-pills > li');
//     var active = tabs.filter('.active');
//     var next = active.next('li').length? active.next('li').find('a') : tabs.filter(':first-child').find('a');
//     // Bootsrap tab show, para ativar a tab
//     next.tab('show')
// }
// // Tab Cycle function
// var tabCycle = setInterval(tabChange, 1000)
// // Tab click event handler
// $(function(){
//     $('.nav-tabs a').click(function(e) {
//         e.preventDefault();
//         // Parar o loop
//         clearInterval(tabCycle);
//         // mosta o tab clicado, default bootstrap
//         $(this).tab('show')
//         // Inicia o ciclo outra vez
//         setTimeout(function(){
//             tabCycle = setInterval(tabChange, 1000)//quando recomeça assume este timing
//         }, 1000);
//     });
// });

// //////////////////////////////////////////////

// $('#intSlider').owlCarousel({
//     loop: true,
//     margin: 15,
//     // autoplay: true,
//     // autoplayTimeout: 3000,
//     smartSpeed: 500,
//     nav: true,
//     dots: true,
//     navText: ['<i class="icon-arrow"></i>','<i class="icon-arrow"></i>'],
//     lazyLoad:true,
//     items:1,
// });

// //////////////////////////////////////////////////
// $('.resSlider').owlCarousel({
//     loop: true,
//     margin: 0,
//     // autoplay: true,
//     // autoplayTimeout: 3000,
//     smartSpeed: 500,
//     nav: true,
//     dots: true,
//     navText: ['<i class="icon-arrow"></i>','<i class="icon-arrow"></i>'],
//     lazyLoad:true,
//     items:4,
// });

// $('.commSlider').owlCarousel({
//     loop: true,
//     margin: 0,
//     // autoplay: true,
//     // autoplayTimeout: 3000,
//     smartSpeed: 500,
//     nav: true,
//     dots: true,
//     navText: ['<i class="icon-arrow"></i>','<i class="icon-arrow"></i>'],
//     lazyLoad:true,
//     items:4,
// });

// $('.clientsSlider').owlCarousel({
//     loop: true,
//     margin: 15,
//     // autoplay: true,
//     // autoplayTimeout: 3000,
//     smartSpeed: 500,
//     nav: false,
//     dots: false,
//     navText: ['<i class="icon-arrow"></i>','<i class="icon-arrow"></i>'],
//     lazyLoad:true,
//     items:5,
// });

/////////////////////////////////////////////////

// function openProject(evt, proName) {
//     var j, tabcontents, tablinkss;
//     tabcontents = document.getElementsByClassName("proTabcontent");
//     for (j = 0; j < tabcontents.length; j++) {
//       tabcontents[j].style.display = "none";
//     }
//     tablinkss = document.getElementsByClassName("proTab");
//     for (j = 0; j < tablinkss.length; j++) {
//       tablinkss[j].className = tablinkss[j].className.replace(" active", "");
//     }
//     document.getElementById(proName).style.display = "block";
//     evt.currentTarget.className += " active";
// }


// // Get the element with id="defaultOpen" and click on it
// document.getElementById("defaultOpenProject").click();

////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 650) {
        document.getElementById('navbar_top').classList.add('fixed-top');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar_top').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
});

$( '#topHeader .navbar-nav a' ).on( 'click', function () {
	$( '#topHeader .navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
	$( this ).parent( 'li' ).addClass( 'active' );
});

// AOS.init();