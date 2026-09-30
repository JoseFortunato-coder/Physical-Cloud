const socket = new WebSocket('ws://localhost:3000')
document.getElementById("btn-conectar").addEventListener("click", () => {
    socket.send(JSON.stringify({ type: 'tornar-servidor', message: 'Conectado ao servidor' }));
    socket.onmessage = function(event) {
    const codigoRecebido = event.data;
    }
})