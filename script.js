let quadradinhos = document.querySelectorAll("div");
let resposta = document.querySelector("h2");
let botao = document.querySelector("button");
let cores = ["red", "blue", "yellow"];

function gerarCor(){
    let aleatorio = Math.floor(Math.random()* cores.length);
    this.style.backgroundColor = cores[aleatorio];
    verificarFinal();
}

for(let quadrado of quadradinhos){
    quadrado.onclick = gerarCor;
}

function verificarFinal(){
    if(quadradinhos[0].style.backgroundColor == quadradinhos[1].style.backgroundColor && quadradinhos[1].style.backgroundColor == quadradinhos[2].style.backgroundColor && quadradinhos[2].style.backgroundColor == quadradinhos[3].style.backgroundColor){
        resposta.innerHTML = "!!! VOCÊ VENCEU !!!";
        
        for(let quadrado of quadradinhos){
            quadrado.onclick = null;
            setTimeout(() => {
                quadrado.classList.add("virarQuadradinho");
            }, 1000);
        }  
    }
    else{
        resposta.innerHTML= "Ainda não foi !!";
    }
}

function resetarJogo(){
    for(let quadrado of quadradinhos){
        quadrado.style.backgroundColor = "unset";
        quadrado.onclick = gerarCor;        
    }
    resposta.innerHTML = "Jogo resetado !";
}

botao.ondblclick = resetarJogo;