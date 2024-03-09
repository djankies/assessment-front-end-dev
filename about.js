console.log("hello world");

function handleSubmit(evt) {
    evt.preventDefault();
    alert("Check your junk folder!");
}

function noTouchy(e) {
    e.preventDefault();
	alert(`Don't touch me there!!`)
}

let form = document.querySelector("#contact");
let duckMan = document.querySelector("img");

duckMan.addEventListener("mouseover", noTouchy);
form.addEventListener("submit", handleSubmit);
