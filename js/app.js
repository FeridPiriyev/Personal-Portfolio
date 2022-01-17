/*Home metin*/

var typed = new Typed(".typing",{
    strings:['Farid Piriyev','Front-End Develepor'],
    typeSpeed:50,
    backSpeed:50,
    loop:true
})

/*portfolio*/

$(document).ready(function(){

    $('.category').click(function(){

        $(this).addClass('active').siblings().removeClass('active');

        let filter = $(this).attr('data-filter');

        if(filter == 'all'){
            $('.image').show(500);
        }
        else{
            $('.image').not('.'+filter).hide(400);
            $('.image').filter('.'+filter).show(500);
        }
    });
});

/*Contact*/
function sendEmail(){
    Email.send({
        Host : "smtp.google.com",
        Username : "Ferid",
        Password : "Ferid10",
        To : 'brolaroyun01@gmail.com',
        From : document.getElementById("email").value,
        Subject : document.getElementById("subject").value,
        Body : document.getElementById("message").value,
    }).then(
      message => alert(message)
    );
} 

/*Sticky navbar*/
const navbar = document.querySelector('.container');
let sticky = navbar.offsetTop;
const navbarScroll = () => {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky')
  } else {
    navbar.classList.remove('sticky');
  }
};

window.onscroll = navbarScroll;


/*Scroll to top when arrow up clicked BEGIN*/
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});
$(document).ready(function() {
    $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});

 /*Scroll to top when arrow up clicked END*/

 /*Loader */
 setTimeout(function(){
    $('.loader_bg').fadeToggle();
}, 3000);



