var buy = function (x, arr) {
    let indices = [];
    let bol = false;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] == x) {
                indices.push(i);
                indices.push(j);
                break;
            }
        }
        if (indices.length >= 2) {
            break;
        }
    }
    if (indices.length > 0) {
        return indices;
    } else
        return null;
};