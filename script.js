let nomeUser = prompt("Digite seu nome aí fia");
let idadeUser = prompt("Digite sua idade:");
let estadoUser = prompt("Digite seu estadoo aí minha querida");

if(idadeUser  >=18 && estadoUser === "PR") {
    document.getElementById("meuDindin").innerText = "Hora de dar tchauuuuu!!!";
    document.getElementById("vish").innerText = "Agora só paciencia que o tempo te dá idade "
    document.getElementById("ceTaDoido").innertext = "Vá ajudar a pagar as contas que seus pais pagam querida,vai lá!"

} else {
    document.getElementById("meuDindin").innerText = "Acertou mizeraviii";
    document.getElementById("vish").innerText = "Tente no futuro Bb"
    document.getElementById("ceTaDoido").innerText = "Um beijo e um queijo tchau bb"


    
}