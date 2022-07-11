(function (window, $) {
  $(function () {
    /* nav dropdown */
    let navLink = $('.dropdown__menu').closest('.dropdown').children('.nav__link:first-child');

    navLink.on('click', function(e) {
      e.preventDefault();

      if($(this).hasClass('active')){
        $(this).removeClass('active')
        $(this).parent().find('.dropdown__menu').removeClass('show');
      } else {
        $(this).addClass('active')
        $(this).parent().find('.dropdown__menu').addClass('show');
      }
    })

    let toggleSidebar = $('.navbar__sidebar-toggler');
    let sidebar = $('#sidebar');


    toggleSidebar.on('click', function(e) {
      e.preventDefault();

      if($(this).hasClass('collapsed')){
        $(this).removeClass('collapsed')
        sidebar.removeClass('sidebar--collapsed');
      } else {
        $(this).addClass('collapsed')
        sidebar.addClass('sidebar--collapsed');
      }
    })

    /* Dashboard */

    $('.cd-menu').on('click', 'li', (e) => {
      e.preventDefault();

      $('#change-alert').modal('show');
      $('.custom-dropdown input[type="checkbox"]').prop('checked', false);
    });

  });
}(window, jQuery));
