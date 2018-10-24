console.log('got here')

const onMoonClick = function () {
   console.log('got into function')
    $('#message').text('Welcome to the moon.')
    $('#message').css('background-Color', 'blue')
    setTimeout(() => $('#message').text(''), 3000)
    $('#welcomeContainer').hide()
    $('#firstPage').show()
  }

const addHandlers = () => {
    $('#nextView').on('click', onMoonClick)
  }

  $(() => {
    addHandlers()
  })
