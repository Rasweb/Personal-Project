// Get the button that opens the modal
let btn = document.querySelectorAll("button.modal-button");
// Gets Every Modal on the Page.
// Using querySelectorAll because of multiple modals.
// querySelectorAll returns all the matches of the elements
let modals = document.querySelectorAll(".modal");
// Get the element that closes the modal
let span = document.getElementById("close");
// let span: HTMLSpanElement = document.getElementsByClassName(
//   "close"
// ) as HTMLSpanElement;
// When the user clicks the button, open the modal
for(let i = 0; i < btn.length; i++)btn[i].onclick = function(e) {
    e.preventDefault(); // Prvents the click function to toggel a clickbox
    let modal = document.querySelector(e.target.getAttribute("href")); //getAttribute returns the value of "href"
    modal.style.display = "block"; // Display block on modal
};
// When the user clicks on class="close" (x), close the modal
for(let i1 = 0; i1 < span.length; i1++)span[i1].onclick = function() {
    for(let index in modals)if (typeof modals[index].style !== "undefined") modals[index].style.display = "none";
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target.classList.contains("modal")) {
        for(let index in modals)if (typeof modals[index].style !== "undefined") modals[index].style.display = "none";
    }
};

//# sourceMappingURL=index.7191e3e1.js.map
