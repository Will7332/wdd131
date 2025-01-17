const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

const newimg = document.createElement("IMG")
newimg.setAttribute("src", "https://picsum.photos/200")
newimg.setAttribute("alt", "Random image")
document.body.appendChild(newimg)

const newsection = document.createElement("section")

const Newh2 = document.createElement("h2")
Newh2.innerText = "DOM Basics"
newsection.appendChild(Newh2)

const Newp2 = document.createElement("p")
Newp2.innerText = "This was added through Javascript"
newsection.appendChild(Newp2)

document.body.appendChild(newsection)