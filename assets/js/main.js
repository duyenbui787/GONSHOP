$(document).ready(function(){
    $('.box-tab').hide()
    $('.box-tab:eq(0)').show()
    $('.tab-title h4').click(function(){
        var n = $('.tab-title h4.title').index(this)
        $('.tab-title h4').removeClass('active')
        $(this).addClass('active')
        $('.box-tab').hide()
        $('.box-tab:eq('+n+')').fadeIn()
    })

    $('.icon-arrow-right').click(function(){

        $('.tab-title h4').each(function(Key, Value) {
            console.log(Key,Value)
           
        });

    })
})