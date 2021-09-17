// elements
const msg = document.querySelector("#message");
const button = document.querySelector("#button");

async function fetchData() {
    const response = await fetch("/hello")
        .then((body) => body.text())
        .then((data) => {
            msg.textContent = data;
        })
        .catch((_) => {
            console.error("error occurred");
        });
}

// handle button click
button.addEventListener("click", fetchData);
