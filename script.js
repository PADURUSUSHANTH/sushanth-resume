const binaryBlock = document.getElementById("binary-block");

// Generates 0/1 text block like thevill.github.io
function generateBinary() {
    let binaryText = "";
    for (let i = 0; i < 24; i++) {       // total number of lines
        binaryText += Array(35)         // length of each line
            .fill(0)
            .map(() => (Math.random() > 0.5 ? "1" : "0"))
            .join("") + "\n";
    }
    return binaryText;
}

function triggerBinaryEffect() {
    binaryBlock.classList.remove("fall"); // restart animation
    binaryBlock.textContent = generateBinary();
    binaryBlock.style.opacity = 1;

    setTimeout(() => {
        binaryBlock.classList.add("fall");
    }, 1500);
}

// Detect when the binary slide enters view
const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
        triggerBinaryEffect();
    }
}, { threshold: 0.6 });

observer.observe(document.getElementById("binary-slide"));
