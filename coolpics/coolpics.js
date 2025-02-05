const menuButton = document.querySelector(".menu-button");


function toggleMenu() {

    const menu = document.querySelector(".menu");
    menu.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);

let width = innerWidth;

function handleResize() {
    if (window.innerWidth > 1000) {
        menu.classList.remove("hide");
    }
    else {
        menu.classList.add("hide");
    }
}

window.addEventListener("resize", handleResize);

// function viewerTemplate(src ="norris-full.jpeg", alt="picture enlarged") {
//        return ` <div class="viewer">
//             <button class="close">X</button>
//             <img src="norris-full.jpeg" class="enlarged" alt="picture enlarged">
//         </div>`;
//         }

function viewerTemplate(pic, alt) {
    return `<div class="viewer">
    <button class="close">X</button>
    <img src="${pic}" alt="${alt}">
    </div>`;
}

function viewHandler(event) {
    // create a variable to hold the element that was clicked on from event.target
    let clicked = event.target;

    // get the src attribute from that element and 'split' it on the "-"
    if (clicked.tagName ==="IMG") {
        let imgsrc = clicked.src;

    let Splitsrc = imgsrc.split("-");

    // construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step

    let newImgsrc = Splitsrc[0] + "-full.jpeg";
    // insert the viewerTemplate into the top of the body element
    // (element.insertAdjacentHTML("afterbegin", htmltoinsert))

    document.body.insertAdjacentHTML("afterbegin", viewerTemplate(newImgsrc, clicked.alt));

    // add a listener to the close button (X) that calls a function called closeViewer when clicked

    document.querySelector(".close").addEventListener("click", closeViewer);
    }
}

function closeViewer(){
    document.querySelector(".viewer").remove();
}

let gallery= document.getElementById("gallery");

gallery.addEventListener("click", viewHandler);