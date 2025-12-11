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

        // Rensa tidigare färger
        labels.forEach(label => label.classList.remove("right", "wrong"));

        // SANT/FALSKT + MULTIPLE CHOICE
        if (type === "tf" || type === "mc") {
            const selected = q.querySelector("input:checked");
            if (!selected) return; // inget svar

            labels.forEach(label => {
                const input = label.querySelector("input");

                if (input.value === correct) {
                    label.classList.add("right");
                }

                if (input.checked && input.value !== correct) {
                    label.classList.add("wrong");
                }
            });

            if (selected.value === correct) score++;
        }

        // CHECKBOX-FRÅGOR
        if (type === "checkbox") {
            const correctArr = correct.split(","); // ["0","2","3"]
            const selected = [...q.querySelectorAll("input:checked")].map(i => i.value);

            labels.forEach(label => {
                const input = label.querySelector("input");

                if (correctArr.includes(input.value)) {
                    label.classList.add("right");
                }

                if (input.checked && !correctArr.includes(input.value)) {
                    label.classList.add("wrong");
                }
            });

            // Rätt om exakt rätt kombination
            if (selected.sort().toString() === correctArr.sort().toString()) {
                score++;
            }
        }
    });

    // VISA RESULTAT
    resultDiv.innerHTML = `Du fick <strong>${score}</strong> rätt av <strong>${questions.length}</strong>!`;

// PROCENT + FÄRG + IKONER
    const percent = (score / questions.length) * 100;

    const resultBox = document.getElementById("final-result-container");
    const gradeText = document.getElementById("grade");

    const imgExcellent = document.getElementById("excellent");
    const imgGood = document.getElementById("good");
    const imgBad = document.getElementById("bad");





});