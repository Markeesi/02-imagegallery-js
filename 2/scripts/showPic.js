function showPic(whichpic) {
    const source = whichpic.getAttribute("href");
    const placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src",source)
}