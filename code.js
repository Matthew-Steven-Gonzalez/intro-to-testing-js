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
    if(input == 5){
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