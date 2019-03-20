// console.log('got here')

const onMoonClick = function () {
  //  console.log('got into function')
    $('#message').text('Climate change is affecting our community.')
    $('#message').css('background-Color', 'purple')
    setTimeout(() => $('#message').text('Learn ways that you can help'), 3000)
    $('.container').addClass('animated rollOut');
    $('#welcomePage').addClass('animated rollIn')
  }

const addHandlers = () => {
    $('#nextView').on('click', onMoonClick)
  }

  $(() => {
    addHandlers()
  })
