function showPic(whichpic) {
    const source = whichpic.getAttribute("href");
    const placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src",source)
    const text = whichpic.getAttribute("title");
    const description = document.getElementById("description");
    description.firstChild.nodeValue = text;
}