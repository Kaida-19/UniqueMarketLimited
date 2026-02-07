// let socket;

// const API_BASE = "https://chat-system-fastapi-1.onrender.com";

// function connectSocket() {
//   socket = new WebSocket(`ws://127.0.0.1:8000/ws/${ROOM_ID}`);

//   socket.onmessage = (event) => {
//     const msg = JSON.parse(event.data);
//     renderMessage(msg);
//   };
// }

// function renderMessage(msg) {
//   const box = document.getElementById("messages");

//   const div = document.createElement("div");
//   div.className = "msg " + msg.sender;
//   div.textContent = msg.content;

//   box.appendChild(div);
//   box.scrollTop = box.scrollHeight;
// }

// async function sendMessage() {
//   const input = document.getElementById("messageInput");
//   const content = input.value.trim();
//   if (!content) return;

//   await fetch(
//     `${API_BASE}/messages/${ROOM_ID}?sender=${SENDER}&content=${encodeURIComponent(content)}`,
//     { method: "POST" }
//   );

//   input.value = "";
// }

// async function loadMessages() {
//   const res = await fetch(`${API_BASE}/messages/${ROOM_ID}`);
//   const data = await res.json();

//   const box = document.getElementById("messages");
//   box.innerHTML = "";

//   data.forEach(renderMessage);
// }

// loadMessages();
// connectSocket(); 
let socket;

const API_BASE = "https://chat-system-fastapi-1.onrender.com";
const WS_BASE  = "wss://chat-system-fastapi-1.onrender.com";

function connectSocket() {
  socket = new WebSocket(`${WS_BASE}/ws/chat/${ROOM_ID}`);

  socket.onopen = () => {
    console.log("✅ WebSocket connected");
  };

  socket.onmessage = (event) => {
    const msg = JSON.parse(event.data);
    renderMessage(msg);
  };

  socket.onerror = (err) => {
    console.error("❌ WebSocket error", err);
  };

  socket.onclose = () => {
    console.warn("⚠️ WebSocket closed");
  };
}

function renderMessage(msg) {
  const box = document.getElementById("messages");

  const div = document.createElement("div");
  div.className = "msg " + msg.sender;
  div.textContent = msg.content;

  box.appendChild(div);
  box.scrollTop = box.scrollHeight;
}

async function sendMessage() {
  const input = document.getElementById("messageInput");
  const content = input.value.trim();
  if (!content) return;

  await fetch(
    `${API_BASE}/messages/${ROOM_ID}?sender=${SENDER}&content=${encodeURIComponent(content)}`,
    { method: "POST" }
  );

  input.value = "";
}

async function loadMessages() {
  const res = await fetch(`${API_BASE}/messages/${ROOM_ID}`);
  const data = await res.json();

  const box = document.getElementById("messages");
  box.innerHTML = "";

  data.forEach(renderMessage);
}

loadMessages();
connectSocket();
