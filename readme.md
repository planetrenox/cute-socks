```javascript
const { $, $$, _ } = require('cute-socks');

// Selecting a single element and using various operations
$('selector')
$('.selector').hide();
$('.selector').show();
$('.selector').toggle();
$('.selector').on('click', () => console.log('Element clicked'));
$('#selector').addClass('new-class');
$('#selector').removeClass('old-class');
$('#selector').hasClass('some-class'); // true or false
$('#selector').attr('data-custom', 'value');
$('#selector').css('background-color', 'red');
$('selector').remove();
$('selector').scrollTo({behavior: 'smooth'});
$('#selector').id();

// console.log();
_('print this');

// Selecting multiple elements and operating on them
$$('selector')
$$('.selector').hide();
$$('.selector').show();

