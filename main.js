const onBounceClick = function () {
    $('#message').text('rollOut.')
    $('#message').css('background-Color', 'blue')
    setTimeout(() => $('#message').text(''), 3000)
    $('.bounceDiv').addClass('animated bounce');
  }

  const onFlashClick = function () {
     $('#message').text('rollOut.')
     $('#message').css('background-Color', 'blue')
     setTimeout(() => $('#message').text(''), 3000)
     $('.flashDiv').addClass('animated flash');
   }

   const onPulseClick = function () {
    $('#message').text('rollOut.')
    $('#message').css('background-Color', 'blue')
    setTimeout(() => $('#message').text(''), 3000)
    $('.pulseDiv').addClass('animated pulse');
  }

  const onRubberBandClick = function () {
    $('#message').text('rollOut.')
    $('#message').css('background-Color', 'blue')
    setTimeout(() => $('#message').text(''), 3000)
    $('.rubberBandDiv').addClass('animated rubberBand');
  }

  const onShakeClick = function () {
    $('#message').text('rollOut.')
    $('#message').css('background-Color', 'blue')
    setTimeout(() => $('#message').text(''), 3000)
    $('.shakeDiv').addClass('animated shake');
  }

  const onSwingClick = function () {
    $('#message').text('rollOut.')
    $('#message').css('background-Color', 'blue')
    setTimeout(() => $('#message').text(''), 3000)
    $('.swingDiv').addClass('animated swing');
  }

  const onTadaClick = function () {
    $('#message').text('rollOut.')
    $('#message').css('background-Color', 'blue')
    setTimeout(() => $('#message').text(''), 3000)
    $('.tadaDiv').addClass('animated tada');
  }
  const onWobbleClick = function () {
    $('#message').text('rollOut.')
    $('#message').css('background-Color', 'blue')
    setTimeout(() => $('#message').text(''), 3000)
    $('.wobbleDiv').addClass('animated wobble');
  }

  const onJelloClick = function () {
    $('#message').text('rollOut.')
    $('#message').css('background-Color', 'blue')
    setTimeout(() => $('#message').text(''), 3000)
    $('.jelloDiv').addClass('animated jello');
  }

const addHandlers = () => {
    $('.bounce').on('click', onBounceClick)
    $('.flash').on('click', onFlashClick)
    $('.pulse').on('click', onPulseClick)
    $('.rubberBand').on('click', onRubberBandClick)
    $('.shake').on('click', onShakeClick)
    $('.swing').on('click', onSwingClick)
    $('.tada').on('click', onTadaClick)
    $('.wobble').on('click', onWobbleClick)
    $('.jello').on('click', onJelloClick)
  
  }

  $(() => {
    addHandlers()
  })
