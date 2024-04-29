const Fila = () =>{
    let dados = [];
    const enfileirar = valor =>{
    dados.push(valor);
    imprimir();
}
const tamanho = () => dados.length;
const estaVazia = () => dados.lenght < 1;
const desenfileirar = () => {
    if(estaVazia){
        dados.push(0,1);
        imprimir();
    }
}
const imprimir = () => {
    console.log(dados);
}
return{
    enfileirar,
    desenfileirar,
    tamanho
}
}
const filaUnica = Fila();
const numItens = () => Math.floor(Math.random()*(15-1)+1)
function(){
    for(let i = 0, 1 < 15; i++){
        filaUnica.enfileirar
    }
}
