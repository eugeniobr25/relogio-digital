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
const dia = document.getElementById('dia');
const mes = document.getElementById('mes');
const ano = document.getElementById('ano');

dia.textContent = calendario.getDate();
mes.textContent = (calendario.getMonth() + 1);
ano.textContent = calendario.getFullYear();
