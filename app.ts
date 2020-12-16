const button = document.querySelector("#trigger") as HTMLElement;
const passwordParagraph = document.querySelector("#generated-password") as HTMLParagraphElement;

button.addEventListener("click", (event:Event) => {
    event.preventDefault();
    const password: string = generateRandomPassword(20);
    passwordParagraph.innerHTML = password;
})

function generateRandomPassword(length: number):string {
    const allCharacter: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234+_$&#567890';
    let returnString: string = '';
    for(let start:number = 0; start < length; start++) {
        returnString += allCharacter.charAt(Math.floor(Math.random() * allCharacter.length));
    }
    return returnString;
}