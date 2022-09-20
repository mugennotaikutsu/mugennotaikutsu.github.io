herebefore = localStorage.getItem("herebefore")
if (!herebefore) {
    alert("only works on devices with keyboard and mouse");
    localStorage.setItem("herebefore", true);
}

let options = [
    "Endless Boredom",
    "NGL",
    "NGL Replies",
    ":)"
];
let links = [
    "",
    "https://ngl.link/deeptanshu0_07",
    "nglreplies.html",
    "=).html"
]
let current = 0;
let hasHovered = false;

function translateWelcome() {
    hasHovered = true;
    document.querySelector(':root').style.setProperty("--cursor", "none");
    document.getElementsByClassName("welcome")[0].style.fontFamily = 'Dancing Script'
    document.getElementsByClassName("welcome")[0].innerHTML = options[current];
    seenbefore = localStorage.getItem("seenbefore")
    if (!seenbefore) {
        alert("arrow keys then enter");
        localStorage.setItem("seenbefore", true);
    }
}

document.addEventListener("keydown", (event) => {
    if (hasHovered) {
        let name = event.key;
        if (name.toLowerCase() == "d" || name == "ArrowRight") {
            current++;
        } else if (name.toLowerCase() == "a" || name == "ArrowLeft") {
            current--;
        } else if (name == "Enter") {
            if (current != 0) document.location = links[current];
            else alert("thiswaspainfultomake 😢")
        }
        if (current >= options.length) current = 0;
        else if (current < 0) current = options.length - 1;
        document.getElementsByClassName("welcome")[0].innerHTML = options[current];
    }
}, false);