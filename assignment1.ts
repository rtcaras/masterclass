
var myList: number[] = [4, 6, 7, 9, 10, 12];


let totalSum: number = myList.reduce((iValue, currValue) => iValue + currValue, 0);

console.log({ _ForLoop: totalSum });



 totalSum = 0;


myList.forEach((currValue) => {
    totalSum += currValue;
});

console.log({ _ForEach: totalSum });


/*function sumArrRecursive(numbers: number[], index: number = 0): number {
    // Base case: if index is out of bounds, return 0
    if (index >= numbers.length) {
        return 0;
    }

    // return the current element + sum of the rest of the array
    return numbers[index] + sumArrRecursive(numbers, index + 1);
}

const myNumbers: number[] = [4, 6, 7, 9, 10, 12];

// Call the recursive function
const totalSum: number = sumArrRecursive(myNumbers);

console.log(`The sum of the array is: ${totalSum}`);*/

 
