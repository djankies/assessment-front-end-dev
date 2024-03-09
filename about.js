const duckSass = [
    `Don't touch me there!!`,
    `Woah hey there, slow down, buddy.`,
    `That's so inappropriate!`,
    `GET your hands off me 😡`,
    `No touchy or no pizza. Pick one.`,
    `Who the HELL do you think you are!`,
];

console.log("hello world");

function handleSubmit(evt) {
    evt.preventDefault();
    alert("Check your junk folder!");
}

function noTouchy(e) {
    e.preventDefault();
    const sass = duckSass[Math.floor(Math.random() * duckSass.length)];
    console.log(sass);
    alert(sass);
}

const form = document.querySelector("#contact");
const duckMan = document.querySelector("img");

duckMan.addEventListener("mouseover", noTouchy);

form.addEventListener("submit", handleSubmit);

for (let i = 0; i < 10; i++) {
    console.log(atob("ICAgIF9fCl9fXyggbyk+ClwgPF8uICkKIGAtLS0nICAgCk9IIERVQ0sh"));
    console.log('');
}
