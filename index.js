//FIBONACCI
function fibonacci(n) {
    const fib = [0, 1]
    //start at index 2 as there are 2 items in the array alaready
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]
    }
    return fib;
}

//Big O = Ob(n) - linear time complexity - 1 loop
//As the size of n increases, the number of times line 5  runs also increases


//FACTORIAL
function factorial(n) {
    let result = 1;
    //starting from 2 as 1 * 1 = 1
    for (let i = 2; i < n; i++) {
        result = result * i;
    }
    return result;
}
//Big O = O(n) - linear time complexity - 1 loop


//PRIME
function isPrime(n) {
    if (n < 2) {
        return false
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false
        }
    }
    return true
}

// log(isPrime(8))


//Power of two
function isPowerOfTwo(n) {
    if (n < 1) {
        return false
    }
    while (n > 1) {
        if (n % 2 !== 0) {
            return false
        }
        n = n / 2
    }
    return true
}

//Big-O = O(log n)

//Power of two using bitwise operators

function isPowerOfTwoBiteWise(n) {
    if (n < 1) {
        return false
    }
    return (n & (n - 1)) === 0
}

//Big O = constant O(1) 


//recursive factorial
function recursiveFactorial(n) {
    if (n === 0) {
        return 1
    }
    return n * recursiveFactorial(n - 1)
}

//Big O - O(n)

function recursiveFib(n) {
    if (n < 2) {
        return n
    }
    return recursiveFib(n - 1) + recursiveFib(n - 2)
}

// console.log(recursiveFib(5));

//linear search

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i
        }
    }
    return -1
}
//BIG-O is O(n) - linear
// console.log(linearSearch([-5, 2, 10, 4, 6], 10))

function binarySearch(arr, target) {
    let leftIndex = 0
    let rightIndex = arr.length - 1

    while (leftIndex <= rightIndex) {
        let midIndex = Math.floor((leftIndex + rightIndex) / 2)
        if (target === arr[midIndex]) {
            return midIndex
        }
        if (target < midIndex) {
            rightIndex = midIndex - 1
        }
        else {
            leftIndex = midIndex + 1
        }
    }
    return - 1
}

// console.log(binarySearch([-5, 2, 4, 6, 10, 11], 11))
//BIG-O = O(log n)

//Recursive Binary Search
function recBinarySearch(arr, target) {
    return search(arr, target, 0, arr.length - 1)
}

function search(arr, target, leftIndex, rightIndex) {
    if (leftIndex > rightIndex) {
        //the element is not in arr
        return -1
    }

    let midIndex = Math.floor((leftIndex + rightIndex) / 2)
    if (target === arr[midIndex]) {
        return midIndex
    }

    if (target < arr[midIndex]) {
        return search(arr, target, leftIndex, midIndex - 1)
    } else {
        return search(arr, target, midIndex + 1, rightIndex)
    }
}

// console.log(recBinarySearch([-5, 2, 4, 6, 10, 11], 11))

function bubbleSort(arr) {
    let swapped
    do {
        swapped = false
        for (let i = 0; i < arr.length - 1; i++) {
            // > defines whether sorting is ascending or descending
            if (arr[i] > arr[i + 1]) {
                //swap the indexes
                let temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
                swapped = true
            }
        }
    } while (swapped)
}

function insertionSort(arr) {
    //*VISUALISATION*
    //INITIAL arr = [5, 7, 8, -2, 6] 
    //MODIFIED ARR = [-2, 5, 6, 7, 8]
    for (let i = 1; i < arr.length; i++) { //i = 1, 2, 3, 4
        let temp = arr[i] //temp = 7, 8, -2, 6
        let j = i - 1 // 0, 1, 2, 1, 0, -1, 3, 2, 1
        while (j >= 0 && arr[j] > temp) {//f, f, t, t, t, t, t, f
            arr[j + 1] = arr[j]//arr[3] = arr[2] (8), arr[2] = arr[1] = (7), arr[1] = arr[0], arr[4] = arr[3] (8), arr[3] = arr[2](7)
            j = j - 1
        }
        arr[j + 1] = temp //7, 8, arr[0] = -2, arr[2] = 6
    }
    return arr
}

//BIG-O = O(n^2) quadratic
// console.log(insertionSort([5, 7, 8, -2, 6]))


function quickSort(arr) {
    if (arr.length < 2) {
        return arr
    }
    let pivot = arr[arr.length - 1]
    let left = []
    let right = []
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]

}
console.log(quickSort([5, 7, 8, -2, 6]))