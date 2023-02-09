console.log("/////////////////////////////////////");
console.log("▶︎xify◀︎ \n");
function xify (str) {
    let newStr = "";
    for(let i = 0; i < str.length; i++){
        newStr += "x";
    }
    return newStr;
}
console.log(xify("hello"));
console.log(xify("hi there"));

console.log("/////////////////////////////////////");
console.log("▶︎yellingChars◀︎ \n");

function yellingChars (str) {
    let newStr = "";
    for(let i = 0; i < str.length; i++){
        newStr += str[i] + "!";
    }
    return newStr;
}
console.log(yellingChars("goodness"));
console.log(yellingChars("oh hello"));

console.log("/////////////////////////////////////");
console.log("▶︎yellingChars◀︎ \n");

function indexedChars (str) {
    let newStr = "";
    for(let i = 0; i < str.length; i++){
        newStr += [i] + str[i];
    }
    return newStr;
}
console.log(indexedChars("hello"));
console.log(indexedChars("bye"));

console.log("/////////////////////////////////////");
console.log("▶︎exclaim◀︎ \n");

function exclaim (str) {
    let newStr = "";
    for(let i = 0; i < str.length; i++){
        const currentChar = str[i];
        if(currentChar === "?"){
            newStr += "!";
        }else if(currentChar === "."){
            newStr += "!";
        }else{newStr += currentChar}
    }
    return newStr;
}
console.log(exclaim("What are you doing? Are you a fool? 😞"));
console.log(exclaim("This is fine."));

console.log("/////////////////////////////////////");
console.log("▶︎truncate◀︎ \n");

function truncate (str) {
    let newStr = "";
    let ellipsis = "...";

    for(let i = 0; i <= 15; i++){
        const currentChar = str[i];
        newStr += currentChar;
    }
    return newStr.concat(ellipsis);
}
console.log(truncate("The fault, dear Brutus, is not in our stars, but in ourselves."));
console.log(truncate("Well, that's just, like, your opinion man."));

console.log("/////////////////////////////////////");
console.log("▶︎ciEmailify◀︎ \n");

function ciEmailify (str) {
    let newStr = "";
    let eMail = "@codeimmersives.com";

    for(let i = 0; i < str.length; i++){
        const currentChar = str[i];
        if(currentChar === " "){
            newStr += ".";
        }else{newStr += currentChar}
    }
    return newStr.concat(eMail);
}
console.log(ciEmailify("colin jaffe"));
console.log(ciEmailify("Anthony DeRosa"));

console.log("/////////////////////////////////////");
console.log("▶︎reverse◀︎ \n");

function reverse (str) {
    let newStr = "";
    for(let i = str.length -1; i >= 0 ; i--){
        const currentChar = str[i];
        newStr += currentChar;
    }
    return newStr;
}
console.log(reverse("colin"));
console.log(reverse("mesuara"));

console.log("/////////////////////////////////////");
console.log("▶︎onlyVowels◀︎ \n");

function onlyVowels (str1) {
    let result = "";
    for(let i = 0; i < str1.length; i++){
        let currentLetter = str1[i];

        if(currentLetter === 'a' || currentLetter === 'e' || currentLetter === 'i' || currentLetter === 'o' || currentLetter === 'u'){
            result += currentLetter
        }
    }
    return result;
}
console.log(onlyVowels("Colin Jaffe"));
console.log(onlyVowels("quickly"));
console.log(onlyVowels("Anthony DeRosa"));

console.log("/////////////////////////////////////");
console.log("▶︎crazyCase◀︎ \n");

function crazyCase (str1) {
    const str = str1.toLowerCase();
    let newStr = "";
    for(let i = 0; i < str.length; i++){
        const currentChar = str[i];
        if(i % 2 === 1 ){
            newStr += currentChar.toUpperCase();
        }else{ newStr += currentChar}
    }
    return newStr;
}
console.log(crazyCase("hello"));
console.log(crazyCase("multiple words here"));
console.log(crazyCase("YELLING"));

console.log("/////////////////////////////////////");
console.log("▶︎titleCase◀︎ \n");

function titleCase (str1) {
    let str = str1.toLowerCase();
    let newStr = "";

    for(let i = 0; i < str.length; i++){
        newStr += "x";
    }
    return newStr;
}
console.log(titleCase("return of the king"));
console.log(titleCase("cOde iMMerSives"));


