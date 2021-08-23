function subirTela(){
    window.scrollTo({
        top:0,
        behavior: 'smooth'
    });
}

function decidirBotaoScroll(){
    if(window.scrollY === 0){
        //Oculta botao
        document.querySelector('.scroll').style.display = 'none';
    }else{
        //mostra botao
        document.querySelector('.scroll').style.display = 'block';
    }
}
window.addEventListener('scroll', decidirBotaoScroll);