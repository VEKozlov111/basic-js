function deleteDigit(n) {
    let str = String(n);
    let arr = str.split('');
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i])
    }

    const m = Math.min.apply(null, arr);
    var index = arr.indexOf(m);
    if (index >= 0) {
        arr.splice(index, 1);
    }

    let str2 = arr.join('');

    let y = Number(str2);
    return y
}
console.log(deleteDigit('152'))  