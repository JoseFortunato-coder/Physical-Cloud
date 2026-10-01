const socket = new WebSocket('ws://localhost:3000')
const telaDeCodigo = document.getElementById("modal-codigo");
const codigoTexto = document.getElementById("codigo-texto");
const fecharModal = document.getElementById("btn-fechar-modal");
document.getElementById("btn-conectar").addEventListener("click", () => {
    socket.send(JSON.stringify({ type: 'tornar-servidor'}));
})
 socket.addEventListener("message", (event) => {
        const dados = JSON.parse(event.data);
         telaDeCodigo.classList.add("active");
         codigoTexto.textContent = dados.codigo;
         codigoTexto.classList.add("codigo-display");
         fecharModal.classList.add("modal-close");
         fecharModal.addEventListener("click", () => {
            telaDeCodigo.classList.remove("active");
         });
    });