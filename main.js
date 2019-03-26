// console.log('got here')

const onButtonClick = function () {
  //  console.log('got into function')
    $('#message').text('Climate change is affecting our community.')
    $('#message').css('background-Color', 'purple')
    setTimeout(() => $('#message').text('Learn ways that you can help'), 3000)
    $('#nextView').text('You have made a great choice.');
    $('.container').addClass('animated rollOut');
    $('.container').hide();
    $('#welcomePage').addClass('animated rollIn')
  }

const addHandlers = () => {
    $('#nextView').on('click', onButtonClick)
  }

  $(() => {
    addHandlers()
  })
