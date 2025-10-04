function highlight() {
    //Write your code here
 // select all <strong> elements
    let boldWords = document.querySelectorAll('strong');
    // loop through each and change color to green
    boldWords.forEach(function(word) {
        word.style.color = "rgb(0, 128, 0)";
    });

}


function return_normal() {
    //Write your code here
 // select all <strong> elements
    let boldWords = document.querySelectorAll('strong');
    // loop through each and change color to green
    boldWords.forEach(function(word) {
        word.style.color = "rgb(0, 128, 0)";
    });
    
}
