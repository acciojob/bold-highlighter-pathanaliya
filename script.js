function highlight() {
    let boldWords = document.querySelectorAll('strong');
    boldWords.forEach(function(word) {
        word.style.color = "rgb(0, 128, 0)"; // green
    });
}

function return_normal() {
    let boldWords = document.querySelectorAll('strong');
    boldWords.forEach(function(word) {
        // explicitly reset to rgb(0,0,0) so Cypress sees the exact value
        word.style.color = "rgb(0, 0, 0)";
    });
}
