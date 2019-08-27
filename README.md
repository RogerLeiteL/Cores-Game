# JOGO DAS CORES

## Linguagens utilizadas
- HTML
- CSS
- JAVASCRIPT
---
### Ferramentas das linguagens 

- Utilizamos em `CSS` display Flex e propriedades simples de edição
- Em `Javascript`, utilizamos `FOR`, `MATH` e `FUNCTION`.
---
**Ex: Função Resetar Jogo**
~~~
function resetarJogo(){
    for(let quadrado of quadradinhos){
        quadrado.style.backgroundColor = "unset";
    }
    resposta.innerHTML = "Jogo resetado !";
}

botao.ondblclick = resetarJogo;
~~~
### Como Jogar
Clique nos quadrados para mudar de cor, quando todas as cores forem iguais você ganhará, tente clickar 2 vezes em resetar para resetar.