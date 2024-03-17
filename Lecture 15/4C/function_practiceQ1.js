/*
write a program to check vowels in an given string in function argument.
*/

function countVowel(str){
    let count = 0;
    for(const char of str){
        if( char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
            count++;
        }
    }
    console.log(count);;
}

