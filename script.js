
$(window).load(function() {
    $(".loader").fadeOut("slow");
});


$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
}
)

function promo() {
    $('#descripcion-dire').val('Promo Aplicada: "Piquibola" \n -----------------------------------------\n')
}
