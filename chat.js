async function sendMessage() {
    const input = document.getElementById("messageInput");
    const content = input.value;

    if (!content) return;

    await fetch(
        `http://127.0.0.1:8000/messages/${ROOM_ID}?sender=${SENDER}&content=${encodeURIComponent(content)}`,
        { method: "POST" }
    );

    input.value = "";
    loadMessages();
}

async function loadMessages() {
    const res = await fetch(
        `http://127.0.0.1:8000/messages/${ROOM_ID}`
    );
    const data = await res.json();

    const box = document.getElementById("messages");
    box.innerHTML = "";

    data.forEach(msg => {
        box.innerHTML += `<p><b>${msg.sender}:</b> ${msg.content}</p>`;
    });
}

setInterval(loadMessages, 1500);

//real time websocket
// const socket = new WebSocket("ws://127.0.0.1:8000/ws/support-123");
const socket = new WebSocket("ws://localhost:8000/ws/chat/");

socket.onmessage = (event) => {
  const msg = JSON.parse(event.data);
  console.log(msg);
};

function sendMessage(text) {
  socket.send(JSON.stringify({
    sender: "customer",
    content: text,
    room_id: "support-123"
  }));
}

console.log("Chat JS loaded");

const socket = new WebSocket("ws://127.0.0.1:8000/ws/chat");

socket.onopen = () => {
  console.log("✅ WebSocket connected");
};

socket.onmessage = (event) => {
  console.log("📩 Message:", event.data);
};

socket.onerror = (err) => {
  console.log("❌ WebSocket error", err);
};

socket.onclose = () => {
  console.log("🔌 WebSocket closed");
};
