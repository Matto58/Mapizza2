var cenaDohromady = 0
var kosik = 0
alert('Thanks for visiting Mapizza 2! You have 100 CZK as a bonus to spend.')
var penize = 100
function koupit() {
  var produkt = prompt('Pizza ID:')
  if (produkt === '24491' && penize > 19.89) {
    cenaDohromady = cenaDohromady + 19.90
    kosik = kosik + 1
    penize = penize - 19.90
    alert('Successfully bought ' + produkt + ' with the price 19.90 to basket, now you have  ' + kosik + ' pizzas with a total price of ' + cenaDohromady + ' CZK')
  } else if (produkt === '38836' && penize > 16.89) {
    cenaDohromady = cenaDohromady + 16.90
    kosik = kosik + 1
    penize = penize - 16.90
    alert('Successfully bought ' + produkt + ' with the price 16.90 to basket, now you have  ' + kosik + ' pizzas with a total price of ' + cenaDohromady + ' CZK')
  } else if (produkt === '48832' && penize > 21.89) {
    cenaDohromady = cenaDohromady + 21.90
    kosik = kosik + 1
    penize = penize - 21.90
    alert('Successfully bought ' + produkt + ' with the price 21.90 to basket, now you have  ' + kosik + ' pizzas with a total price of ' + cenaDohromady + ' CZK')
  } else if (produkt === '00000' && penize > 18.89) {
    cenaDohromady = cenaDohromady + 18.90
    kosik = kosik + 1
    penize = penize - 21.90
    var vlastni = prompt('Ingredients of your custom pizza:')
    alert('Successfully bought ' + produkt + ' with the price 18.90 to basket, now you have  ' + kosik + ' pizzas with a total price of ' + cenaDohromady + ' CZK')
  } else if (produkt === '') {
    return
  } else if (produkt === undefined) {
    return
  } else {
    alert('Not enough money (you have ' + penize + ' CZK) or unknown ID.')
  }
}
function dokoncit() {
  var kreditka = prompt('Your credit card number:')
  alert(cenaDohromady + 'CZK will be spent on pizzas from credit card with number ' + kreditka + '.')
  alert('Spent ' + cenaDohromady + ' Kč.')
  window.open('pladbaDokoncena.html')
}
function zobrazitKc() {
  alert('You have ' + penize + ' CZK!')
}
