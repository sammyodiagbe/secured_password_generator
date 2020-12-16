var button = document.querySelector("#trigger");
var passwordParagraph = document.querySelector("#generated-password");
button.addEventListener("click", function (event) {
    event.preventDefault();
    var password = generateRandomPassword(20);
    passwordParagraph.innerHTML = password;
});
function generateRandomPassword(length) {
    var allCharacter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234+_$&#567890';
    var returnString = '';
    for (var start = 0; start < length; start++) {
        returnString += allCharacter.charAt(Math.floor(Math.random() * allCharacter.length));
    }
    return returnString;
}
