const socket = new WebSocket('ws://localhost:3000')
const telaDeCodigo = document.getElementById("modal-codigo");
const codigoTexto = document.getElementById("codigo-texto");
const fecharModal = document.getElementById("btn-fechar-modal");
const telaDeConectar = document.getElementById("modal-conectar");
const fecharModalConectar = document.getElementById("btn-fechar-conectar");
const inserirCodigo = document.getElementById("inserir-Codigo");
document.getElementById("btn-tornar-servidor").addEventListener("click", () => {
    socket.send(JSON.stringify({ type: 'tornar-servidor'}));
    telaDeCodigo.classList.remove("active");
})
document.getElementById("btn-conectar").addEventListener("click", () => {
    telaDeConectar.classList.add("active");
    console.log("Conectar button clicked");
inserirCodigo.classList.add("code-input-container");
fecharModalConectar.classList.add("modal-close");
    fecharModalConectar.addEventListener("click", () => {
    telaDeConectar.classList.remove("active");

});
    });

socket.addEventListener("message", (event) => {
    const dados = JSON.parse(event.data);
    console.log("Mensagem recebida do servidor:", dados);
    if (dados.type === "codigo-gerado") {
    telaDeCodigo.classList.add("active");
    codigoTexto.textContent = dados.codigo;
    codigoTexto.classList.add("codigo-display");
    fecharModal.classList.add("modal-close");
    fecharModal.addEventListener("click", () => {
        telaDeCodigo.classList.remove("active");
    });
}
 
if (dados.type === "conectado") {

}
});
