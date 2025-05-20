module.exports = (io) =>{
    io.on("connection", (socket) =>{
        console.log("Websocket has been connected")

        socket.emit("Connection achieved", { status: "connected" });

        socket.on("new_incident", async(incident_object) =>{
            await fetch('http://localhost:8080/api/new_incident', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ incident_object })
            })
        })
    })
}