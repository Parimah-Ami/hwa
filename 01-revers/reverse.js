// write your func here
function reverseString (str){
    let splitS = str.split ("");
    console.log(splitS)
    let reverseA = splitS.reverse();
    console.log(reverseA)
    let joinA = reverseA.join("");
    console.log(joinA)
}
reverseString ("this will be a reverse string")