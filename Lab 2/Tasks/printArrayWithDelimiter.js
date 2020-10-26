function printArr(arr) {
    arr1 = arr.slice(0, arr.length - 1);
    delimiter = arr[arr.length - 1];
    return arr1.join(delimiter)
}

console.log(printArr(['One', 'Two', 'Three', 'Four', 'Five', '-']));