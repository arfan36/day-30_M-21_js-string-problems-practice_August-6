function reverseWords(str) {
    const words = str.split(' ');
    const result = [];
    // [ 'I', 'am', 'a', 'good', 'boy' ]
    for (let i = words.length - 1; i >= 0; i--) {
        const element = words[i];
        result.push(element);
    }
    const myString = result.join(' ');
    return myString;
}

const myString = 'I am a good boy';
console.log(myString);
console.log(reverseWords(myString));
