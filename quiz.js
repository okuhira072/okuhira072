
const btnDoba = document.getElementById("ans-doba");
const btnTomoyan = document.getElementById("ans-tomoyan");
const btnTakashi = document.getElementById("ans-takashi");
const resultArea = document.getElementById("result-area");

btnDoba.addEventListener("mouseover", function() { btnDoba.style.backgroundColor = "#b3000d"; });
btnDoba.addEventListener("mouseout", function() { btnDoba.style.backgroundColor = ""; });

btnTomoyan.addEventListener("mouseover", function() { btnTomoyan.style.backgroundColor = "#b3000d"; });
btnTomoyan.addEventListener("mouseout", function() { btnTomoyan.style.backgroundColor = ""; });

btnTakashi.addEventListener("mouseover", function() { btnTakashi.style.backgroundColor = "#b3000d"; });
btnTakashi.addEventListener("mouseout", function() { btnTakashi.style.backgroundColor = ""; });

// Dobashisho clicked (Incorrect)
btnDoba.addEventListener("click", function() {
    const p = document.createElement("p");
    p.textContent = "Wrong! Dobashisho is a passionate leader, but someone else is the basketball expert!";
    p.className = "incorrect-text";
    
    resultArea.innerHTML = "";
    resultArea.appendChild(p);
});

// Tomoyan clicked (Correct)
btnTomoyan.addEventListener("click", function() {
    const p = document.createElement("p");
    p.textContent = "Correct!! Tomoyan's basketball videos are absolutely amazing!";
    p.className = "correct-text";
    
    resultArea.innerHTML = "";
    resultArea.appendChild(p);
});

// Takashi clicked (Incorrect)
btnTakashi.addEventListener("click", function() {
    const p = document.createElement("p");
    p.textContent = "Wrong! Takashi is the most beloved funny character, but not the basketball expert!";
    p.className = "incorrect-text";
    
    resultArea.innerHTML = "";
    resultArea.appendChild(p);
});