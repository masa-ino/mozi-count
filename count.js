$('#textBox').keyup(function () {
  var all = $(this).val().length
  var space = $(this).val().replace(/\n/g, '').length
  var text = $(this)
    .val()
    .replace(/[\n\s　]/g, '').length
  $('.allCnt').text(all)
  $('.spaceCnt').text(space)
  $('.textCnt').text(text)
});

$(function () {
  $('.clear-button').on('click', function () {
    $('#textBox').val('')
    $('.allCnt').text(0)
    $('.spaceCnt').text(0)
    $('.textCnt').text(0)
  })
})
