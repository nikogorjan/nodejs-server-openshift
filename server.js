const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8082 });

console.log("listening on port 8082");

wss.on("connection", ws=>{
    console.log("new client connected");

    

    ws.on("close", () => {
        console.log("client disconected");
    })
});

