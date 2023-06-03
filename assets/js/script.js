const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let mim = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;

    if (mim < 10) mim = '0' + mim;

    if (s < 10) s = '0' + s;

    horas.textContent = hr
    minutos.textContent = mim
    segundos.textContent = s
})

const calendario = new Date;

let textdia = calendario.getDate();
if (textdia < 10) {
    textdia = "0" + textdia;
} 
else {
    textdia = textdia;
}

let textmes = (calendario.getMonth() + 1);
if (textmes < 10) {
    textmes = "0" + textmes;
} 
else {
    textmes = textmes;
}
const dia = document.getElementById('dia');
const mes = document.getElementById('mes');
const ano = document.getElementById('ano');

dia.textContent = textdia;
mes.textContent = textmes;
ano.textContent = calendario.getFullYear();
