
let words = [
    "longest",
    "grace",
    "hello",
    "old",
];
function longestWord () {
    return words.sort (function (a , b) {
        return b.length - a.length;
    }) [0];
}
console.log (longestWord())