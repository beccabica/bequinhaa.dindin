let nomeUser = prompt("Digite seu nome aí fia");
let idadeUser = prompt("Digite sua idade:");
let estadoUser = prompt("Digite seu estadoo aí minha querida").toUpperCase();

if(idadeUser  >=18 && estadoUser === "PR") {
    document.getElementById("meuDinDin").innerText = "Hora de dar tchauuuuu!!!";
    document.getElementById("vish").innerText = "Agora só paciencia que o tempo te dá idade ";
    document.getElementById("ceTaDoido").innerText = "Vá ajudar a pagar as contas que seus pais pagam querida,vai lá!";
    document.getElementById("dominique").src = "https://external-preview.redd.it/hvvjislTBrCdjJzZFBWjB-YJULnd_ctB2tYINq2RzNs.jpg?auto=webp&s=e7ca588ff24cfee4429f30d07c88be9a927ee663";


} else {
    document.getElementById("meuDinDin").innerText = "Acertou mizeraviii";
    document.getElementById("vish").innerText = "Tente no futuro Bb";
    document.getElementById("ceTaDoido").innerText = "Usa essa mente aí pra estudar! pra ser alguém na vida"  ; 
    document.getElementById("dominique").src = "https://chc.org.br/wp-content/uploads/2012/12/flickr-por-alvin-trusty-600x400.jpg";
}
