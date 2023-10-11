function removeElement(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            array.splice(i, 1);
        }
    }
    console.log(array);
}
removeElement([1, 3, 4, 6, 2, 5, 7], 4);

function calcAverageArray(array) {
    let sum = 0;
    let  count = 0;

    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number') {
            sum += array[i];
            count += 1;
        }
    }

    let result = sum / count;
    console.log(result);
}
calcAverageArray([1, 2, 'three', 4, 'five', 6]);


let inputString = prompt('Add string');
let lettersToRemove = prompt('Add letters which you want to remove from previous string').split('');
console.log(inputString);
console.log(lettersToRemove);

function deleteSymbols (text, symbols) {
    let newText = text;

    for (let i = 0; i < text.length; i++) {
        for (let a = 0; a < symbols.length; a++) {
            if (text[i] === symbols[a]) {
                newText = newText.replace(text[i], '');
            }
        }
    }
    console.log(newText);
}
deleteSymbols(inputString, lettersToRemove);
