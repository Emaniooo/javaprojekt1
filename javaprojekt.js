// DARK / LIGHT MODE
document.getElementById("toggleMode").addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

document.getElementById("startQuizBtn").addEventListener("click", () => {
    document.getElementById("introBox").style.display = "none";
    document.getElementById("quizForm").style.display = "block";
    document.getElementById("submitBtn").style.display = "block";
});

// RÄKNA RESULTAT (DRY)
const submitBtn = document.getElementById("submitBtn");
const resultDiv = document.getElementById("result");

submitBtn.addEventListener("click", () => {
    let score = 0;

    // Hämta alla frågor
    const questions = document.querySelectorAll(".question");

    questions.forEach((q) => {
        const type = q.dataset.type;          // tf, mc, cb
        const correct = q.dataset.correct;    // t.ex. "1", "sant", "0,2,3"
        const labels = q.querySelectorAll("label");

    });




    
});
