document.body.style.cursor = "none";

// Create a custom cursor :
const cursor = document.createElement("div");
cursor.classList.add("cursor");

const cursorFollow = document.createElement("div");
cursorFollow.classList.add("cursor_follow");

document.body.appendChild(cursor);
document.body.appendChild(cursorFollow);

// Animate the cursor when user mouse move :
window.addEventListener("mousemove", (e) => {
    [cursor.style.top, cursor.style.left] = [e.clientY + "px", e.clientX + "px"];
    [cursorFollow.style.top, cursorFollow.style.left] = [e.clientY + "px", e.clientX + "px"];
    [cursor.style.opacity, cursorFollow.style.opacity] = ["1", "1"];
});
