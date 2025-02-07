// Vowels or consonants

function countVowelsAndConsonants(str) {
    let vowels = "aeiouAEIOU";
    let vowelCount = 0;
    let consonantCount = 0;

    for (let char of str) {
        if (/[a-zA-Z]/.test(char)) { // Check if it's a letter
            if (vowels.includes(char)) {
                vowelCount++;
            } else {
                consonantCount++;
            }
        }
    }

    return { vowels: vowelCount, consonants: consonantCount };
}

// Example Usage:
console.log(countVowelsAndConsonants("Hello World!")); 
// Output: { vowels: 3, consonants: 7 }
