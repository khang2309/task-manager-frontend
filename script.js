async function addTask() {
    const taskInput = document.getElementById("task-input");
    const taskValue = taskInput.value;
    if (!taskValue.trim()) return;

    try {
        // Gọi API truyền dữ liệu sang cổng 3000
        const response = await fetch("http://localhost:3000/tasks", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title: taskValue })
        });

        // Kiểm tra xem phản hồi từ server có thành công hay không
        if (response.ok || response.status === 200) {
            const ul = document.getElementById("task-list");
            const li = document.createElement("li");
            li.textContent = taskValue;
            ul.appendChild(li);
            taskInput.value = ""; // Xóa sạch ô nhập liệu sau khi thêm
        } else {
            alert("Server tiếp nhận nhưng phản hồi mã lỗi!");
        }
    } catch (error) {
        alert("Lỗi đường truyền hoặc server chưa khởi chạy!");
    }
}