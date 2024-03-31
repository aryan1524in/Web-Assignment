document.getElementById("quiz-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    let score = 0;
    let answers = [];

    formData.forEach((value, key) => {
        if (key.startsWith("q")) {
            const questionNumber = key.replace("q", "");
            const correctAnswer = correctAnswers[questionNumber].answer;

            if (value === correctAnswer) {
                score++;
            }
            answers.push({ question: key, response: value });
        }
    });

    // Display results
    const quizResults = document.getElementById("quiz-results");
    quizResults.innerHTML = `<h2>Quiz Results</h2>`;
    quizResults.innerHTML += `<p>Your score: ${score} out of 10</p>`;

    // Display correct answers
    answers.forEach((item) => {
        const questionNumber = item.question.replace("q", "");
        const correctAnswer = correctAnswers[questionNumber].answer;
        const explanation = correctAnswers[questionNumber].explanation;

        quizResults.innerHTML += `<p>Question ${questionNumber}: Your answer - ${item.response}, Correct answer - ${correctAnswer}</p>`;
    });
});

const correctAnswers = {
    "1": { answer: "b"  },
    "2": { answer: "c" },
    "3": { answer: "b" },
    "4": { answer: "b" },
    "5": { answer: "c" },
    "6": { answer: "b" },
    "7": { answer: "d" },
    "8": { answer: "b" },
    "9": { answer: "c" },
    "10": { answer: "a"}
};
