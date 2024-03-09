const colorButton = document.getElementById("color");
const placeButton = document.getElementById("place");
const ritualButton = document.getElementById("ritual");


function sayFavoriteColor (e) {
    e.preventDefault()
    alert('Yellow!')
}
function sayFavoritePlace (e) {
    e.preventDefault()
    alert('The Park!')
}
function sayFavoriteRitual (e) {
    e.preventDefault()
    alert('Bath Time!')
}
colorButton.addEventListener("click", sayFavoriteColor);
placeButton.addEventListener("click", sayFavoritePlace);
ritualButton.addEventListener("click", sayFavoriteRitual);
