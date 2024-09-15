
function calculateDifference(a, b) {
    return Math.abs(a - b);
}
console.log(calculateDifference(10, 4));




function isOdd(num) {
    return num % 2 !== 0;
}
console.log(isOdd(7)); 
console.log(isOdd(10));



function findMin(numbers) {
    if (numbers.length === 0) {
        throw new Error("Array is empty");
    }
    return Math.min(...numbers);
}
console.log(findMin([3, 5, 7, 2, 8]));



function filterEvenNumbers(numbers) {
    return numbers.filter(num => num % 2 === 0);
}
console.log(filterEvenNumbers([10, 15, 20, 25]));




function sortArrayDescending(numbers) {
    return [...numbers].sort((a, b) => b - a);
}
console.log(sortArrayDescending([-1, -5, 0, 3, 2])); 





function lowercaseFirstLetter(str) {
    if (str.length === 0) {
        return str; 
    }
    return str[0].toLowerCase() + str.slice(1);
}
console.log(lowercaseFirstLetter("Hello"));




function countVowels(str) {
    const vowelRegex = /[aeiouAEIOU]/g;
    const vowels = str.match(vowelRegex);
    return vowels ? vowels.length : 0;
}
console.log(countVowels("Hello World"));
console.log(countVowels("JavaScript")); 




function findAverage(numbers) {
    if (numbers.length === 0) {
        throw new Error("Array is empty");
    }
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}
console.log(findAverage([10, 20, 30, 40]));   