// helloWorld function
function helloWorld() {
    return "Hello, World!";
}

function sayHello(input) {
        if(input === undefined){
            return "Hello, World!";
        }
        else if(input === true){
            return "Hello, World!";
        }
        else if(input === false){
            return "Hello, World!";
        }
        else if(input === null){
            return "null data was input!";
        }
        else if(input === ""){
            return "empty string!";
        }
        else{
            return "Hello, " + input + "!";
        }
}

function isFive(input) {
    if(parseInt(input) === 5){
        return "True";
    }
    else if(input === false){
        return "you have entered a boolean!";
    }
    else if(input === true){
        return "you have entered a boolean!";
    }
    else if(input === ""){
        return "empty string!";
    }
    else{
        return "Hello, " + input + "!";
    }
}

function isEven(input) {
    if( typeof input == "number" && input != Infinity){
        if(parseInt(input) % 2 === 0){
            return "the number is even!";
        }
        else{
            return "the number is odd!";
    }}
    else{
        return "You have not entered a number!"
    }

}

function isVowel(x) {
    if(x.toLowerCase() === "a"||x.toLowerCase() === "e"||x.toLowerCase() === "i"||x.toLowerCase() === "o"||x.toLowerCase() === "u"){
        return true;
    }
    else{
        return false;
    }
}

function add( x , y){
    return parseInt(x) + parseInt(y);
}
// function sayHello(input) {
//     if( input === "Jane"){
//         return "Hello, Jane!";
//     }
//     else if( input === "Alex"){
//         return "Hello, Alex!";
//     }
//     else if ( input === "Pat"){
//         return "Hello, Pat!";
//     }
//     else{
//         return "none";
//     }
//
// }