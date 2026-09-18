/* ================= TYPEWRITER ================= */

const typingText = document.getElementById("typing-text");

const words = [
    "Information Systems Student",
    "Researcher",
    "System Analyst",
    "Web Developer",
    "Technology Enthusiast",
    "Problem Solver"
];

let wordIndex = 0;
let characterIndex = 0;
let isDeleting = false;


function typeEffect() {

    const currentWord = words[wordIndex];

    if (!isDeleting) {

        typingText.textContent =
            currentWord.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;

        if (characterIndex === currentWord.length) {

            isDeleting = true;

            setTimeout(
                typeEffect,
                1800
            );

            return;
        }

    } else {

        typingText.textContent =
            currentWord.substring(
                0,
                characterIndex - 1
            );

        characterIndex--;

        if (characterIndex === 0) {

            isDeleting = false;

            wordIndex++;

            if (wordIndex === words.length) {
                wordIndex = 0;
            }
        }
    }

    const speed =
        isDeleting ? 50 : 90;

    setTimeout(
        typeEffect,
        speed
    );
}


typeEffect();



/* ================= THEME BUTTON ================= */

const themeButton =
    document.getElementById("themeButton");


themeButton.addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
            "dark-mode"
        );

        if (
            document.body.classList.contains(
                "dark-mode"
            )
        ) {

            themeButton.textContent = "☾";

        } else {

            themeButton.textContent = "☼";

        }

    }
);