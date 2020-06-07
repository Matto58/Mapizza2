var cenaDohromady = 0
var kosik = 0
alert('Děkuji, že jste si chtěli objednat pizzu Mapizza 2! Tady máte 100 Kč na uhrazení.')
var penize = 100
function koupit() {
  var produkt = prompt('ID pizzy:')
  if (produkt === '24491' && penize > 19.89) {
    cenaDohromady = cenaDohromady + 19.90
    kosik = kosik + 1
    penize = penize - 19.90
    alert('Úspěšně zakoupeno ' + produkt + ' z cenou 19.90 a v košiků máte ' + kosik + 'x pizzy z cenou ' + cenaDohromady + ' Kč')
  } else if (produkt === '38836' && penize > 16.89) {
    cenaDohromady = cenaDohromady + 16.90
    kosik = kosik + 1
    penize = penize - 16.90
    alert('Úspěšně zakoupeno ' + produkt + ' z cenou 16.90 a v košiků máte ' + kosik + 'x pizzy z cenou ' + cenaDohromady + ' Kč')
  } else if (produkt === '48832' && penize > 21.89) {
    cenaDohromady = cenaDohromady + 21.90
    kosik = kosik + 1
    penize = penize - 21.90
    alert('Úspěšně zakoupeno ' + produkt + ' z cenou 18.90 a v košiků máte ' + kosik + 'x pizzy z cenou ' + cenaDohromady + ' Kč')
  } else if (produkt === '00000' && penize > 18.89) {
    cenaDohromady = cenaDohromady + 18.90
    kosik = kosik + 1
    penize = penize - 21.90
    var vlastni = prompt('Ingredience pizzy:')
    alert('Úspěšně zakoupeno ' + produkt + ' z cenou 21.90 a v košiků máte ' + kosik + 'x pizzy z cenou ' + cenaDohromady + ' Kč')
  } else if (produkt === '') {
    return
  } else if (produkt === undefined) {
    return
  } else {
    alert('Nedostatek peněz (máte ' + penize + ' Kč) nebo neplatné ID.')
  }
}
function dokoncit() {
  var kreditka = prompt('Vaše číslo kreditní karty:')
  alert('Bude uhrazeno ' + cenaDohromady + ' Kč z kreditní karty s číslem ' + kreditka + '.')
  alert('Uhrazeno ' + cenaDohromady + ' Kč.')
  window.open('pladbaDokoncena.html')
}
function zobrazitKc() {
  alert('Máte ' + penize + ' Kč!')
}
