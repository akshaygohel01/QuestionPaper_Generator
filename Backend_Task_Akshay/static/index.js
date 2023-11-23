async function generate() {
    let marks = parseInt(document.querySelector("#marks").value);
    let difficulty = {};

    difficulty.easy = parseInt(document.querySelector("#easy").value);
    difficulty.medium = parseInt(document.querySelector("#medium").value);
    difficulty.hard = parseInt(document.querySelector("#hard").value);

    let body = {
        marks,
        difficulty
    }


    try {
        let res = await fetch("/generate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
        let data = await res.json();
        console.log(data)
        if (res.ok) {
            setPaper(data.paper);
        } else {
            clear()
            setError(data.err);
        }
    } catch (error) {
        console.log(error)
    }
}

function setPaper(paper) {

    let container = document.querySelector(".paper");
    let content = `<h2>Paper</h2>
    <div class="questions">
    `;

    paper.questions.forEach(question => {
        if (!question) return;
        content += `<div class="question">
        <div class="left">
            <div class="text">${question.question}</div>
            <div class="subject" title="subject">${question.subject}</div>
            <div class="topic" title="topic">${question.topic}</div>
        </div>

        <div class="right">
            <div class="marks">${question.marks}</div>
            <div class="difficulty ${question.difficulty.toLowerCase()}">${question.difficulty}</div>
        </div>
    </div>`
    })
    content += '</div>';
    container.innerHTML = content;
}

function setError(err) {
    let container = document.querySelector(".paper");
    container.innerHTML = `<h2>Error</h2>
    <div class="error">${err}</div>`;
}

function clear() {
    let container = document.querySelector(".paper");
    container.innerHTML = "";
}
function updateValue(e) {
    let indicator = e.target.nextElementSibling;
    indicator.innerText = e.target.value + "%";
}