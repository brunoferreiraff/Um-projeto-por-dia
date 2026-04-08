const mobileBtn = document.querySelector('.btn-mobile'); //selecionou o botão .btn-mobile e criou a variável
const navLinks = document.getElementById('nav-links');
const icon = document.querySelector('.btn-mobile i');


mobileBtn.addEventListener('click', () => { //a variável tem um evento de escutar o click e joga para a função que faz o comando.
    navLinks.classList.toggle('show'); //adiciona o atributo show
    icon.classList.toggle('fa-times'); //troca o ícone para o x
    icon.classList.toggle('fa-bars'); // tira a classe das barras e coloca a classe do x
   
})