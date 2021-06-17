function topSecret(str:string) {
    var chars = str.split("");
    let startCharNumber = "A".charCodeAt();
    let lastCharNumber = "z".charCodeAt();
    for (var i = 0; i < chars.length; i++) {
        if (chars[i].charCodeAt() > startCharNumber && chars[i].charCodeAt() < lastCharNumber) {
            if (chars[i] === "A" || chars[i] === "B" || chars[i] === "C" || chars[i] === "a" || chars[i] === "b" || chars[i] === "c") {
                chars[i] = String.fromCharCode(chars[i].charCodeAt() + 23);
            } else {
                chars[i] = String.fromCharCode(chars[i].charCodeAt() - 3);
            }
        }
    }
    return chars.join("");


}