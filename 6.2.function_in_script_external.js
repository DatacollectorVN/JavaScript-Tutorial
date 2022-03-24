function square(x){
    return x * x;
};

function map(f, arr){
    let result = [];
    for (let i = 0; i != arr.length; i++){
        result[i] = square(arr[i]);
    }
    return result;
};