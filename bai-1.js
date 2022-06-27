function demChuoiNgAm(str) {
    const strTwo = str.toLowerCase()
    let count = 0
    for (let i of strTwo) {
        if (["a", "e", "i", "o", "u"].includes(i)) {
            count++
        }
    }
    return count
}
console.log(demChuoiNgAm("aaabbbeiou"))