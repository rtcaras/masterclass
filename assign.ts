function customR<T, U>(
    array: T[], 
    callback: (iValue: U, currValue: T, index: number, array: T[]) => U, initialValue: U): U {
    let iValue = initialValue;
    for (let i = 0; i < array.length; i++) {
        iValue = callback(iValue, array[i], i, array);
    }
    return iValue;
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];
const sum = customR(numbers, (acc, curr) => acc + curr, 0);
console.log(sum);