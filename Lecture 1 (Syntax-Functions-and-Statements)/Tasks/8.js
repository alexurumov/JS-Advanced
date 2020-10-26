function solve(arr) {

    function sum(arr) {
        let result = 0;
        for (let i = 0; i < arr.length; i++) {
            const element = arr[i];
            result += element;
        }

        return result;
    }

    function inverseSum(arr) {
        let result = 0;
        for (let i = 0; i < arr.length; i++) {
            const element = 1 / arr[i];
            result += element;
        }

        return result;
    }

    function concat(arr) {
        let result = '';
        for (let i = 0; i < arr.length; i++) {
            const element = arr[i];
            result += element;
        }

        return result;
    }

    console.log(sum(arr));
    console.log(inverseSum(arr));
    console.log(concat(arr));
}

solve([1, 2, 3]);