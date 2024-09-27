// write your func here
function similarityT () { 
    let a = [1, 2, 3, 5];
    let b = [1, 2, 3, 5];
    for (let i = 0; i < a.length; i++)
    if (a[i] != b[i])
        return "False";
return "True";
} 
let compare = similarityT();

console.log (compare);