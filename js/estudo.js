function mensagem(){
    alert("cu");
}

imprime = (msg) => console.log(msg);

function sorteia(){
    let num1 = document.getElementById("inicio").value;
    let num2 = document.getElementById("fim").value;
    num2 = Number(num2)+1;
    let sorteio = Math.floor(Math.random(inicio, fim+1)* (Number(num2) - Number(num1)));

    document.getElementById("resultado").innerHTML = sorteio;
}
function escolher_aba(btn){
    for(let i = 1; i<= 4; i++){
        let id_btn = "btn"+i;
        document.getElementById(id_btn).style.backgroundColor = "blue";
        document.getElementById(id_btn).disabled = false;
        document.getElementsById(class_aba).style.display = "none";
    }
    if(btn== "1"){ 
        document.getElementById("btn1").style.backgroundColor = "black";
        document.getElementById("btn1").disabled = true;
        document.getElementsById(class_aba).style.display = "block";
    }
    if(btn== "2"){ 
        document.getElementById("btn2").style.backgroundColor = "red";
        document.getElementById("btn2").disabled = true;
        document.getElementsById(class_aba).style.display = "block";
    }
    if(btn== "3"){ 
    document.getElementById("btn3").style.backgroundColor = "purple";
    document.getElementById("btn3").disabled = true;
    document.getElementsById(class_aba).style.display = "block";
    }
    if(btn== "4"){ 
    document.getElementById("btn4").style.backgroundColor = "yellow";
    document.getElementById("btn4").disabled = true;
    document.getElementsById(class_aba).style.display = "block";
    }
}