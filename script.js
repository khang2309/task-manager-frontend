// Hàm gửi dữ liệu sang API Node.js Backend
async function addTask() {
    const taskInput = document.getElementById("task-input");
    const taskValue = taskInput.value;
    if (!taskValue.trim()) return;

    const response = await fetch("http://localhost:3000/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: taskValue })
    });

    if (response.ok) {
        const ul = document.getElementById("task-list");
        const li = document.createElement("li");
        li.textContent = taskValue;
        ul.appendChild(li);
        taskInput.value = "";
    } else {
        alert("Lỗi kết nối Backend!");
    }
}