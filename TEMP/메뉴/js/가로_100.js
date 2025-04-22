$(function() {
    const mainMenu = $('.main-menu > .menu-item, #back')
    
    mainMenu.on('mouseover',function() {
        $('.submenu').stop().slideDown()
        $('#back').stop().slideDown()
    })
    mainMenu.on('mouseout',function() {
        $('.submenu').stop().slideUp()
        $('#back').stop().slideUp()
    })

    // mainMenu.hover(
    //     function() {
    //         $('.submenu').stop().slideDown()
    //         $('#back').stop().slideDown()
    //     },
    //     function() {
    //         $('.submenu').stop().slideUp()
    //         $('#back').stop().slideUp()
    //     }
    // )

})