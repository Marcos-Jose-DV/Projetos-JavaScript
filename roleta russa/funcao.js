let res = document.getElementById('res')
let bala = document.getElementById('bala')
let placar = document.getElementById('placar')
let pontos = document.getElementById('pontos')
let play = 1
let fodeu;
let cont = 0
function clicar() {
    fodeu = Math.floor(Math.random() * 6 + 1)
    if (fodeu === 6) {
        res.style.color = "red"
        pontos.innerHTML = `Rounds vivo = ${cont}`
        placar.innerHTML = '0'
        cont = 0
        res.innerHTML = 'Morreu meu chapa'
        bala.innerHTML = `bala de numero ${fodeu}`
    } else {
        pontos.innerHTML = ''
        cont++
        placar.innerHTML = cont + 0
        res.style.color = "black"
        res.innerHTML = 'Viveu meu chapa'
        bala.innerHTML = `bala de numero ${fodeu}`
    }
}
