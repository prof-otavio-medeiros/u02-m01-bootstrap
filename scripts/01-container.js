/*
    Not working. See:
        https://stackoverflow.com/questions/6492683/how-to-detect-divs-dimension-changed
*/
function getSize(element) {
    let text = element.innerText;
    text.replace("--", element.offsetWidth);
}