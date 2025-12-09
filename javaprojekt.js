// DARK / LIGHT MODE
document.getElementById("toggleMode").addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

document.getElementById("startQuizBtn").addEventListener("click", () => {
    document.getElementById("introBox").style.display = "none";
    document.getElementById("quizForm").style.display = "block";
    document.getElementById("submitBtn").style.display = "block";
});
