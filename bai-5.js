function daoChuoi(str) {
    let strdaoChuoi = ""
    for (let i = 0; i < str.length; i++) {
        strdaoChuoi += str[str.length - i - 1]
    }
    console.log(strdaoChuoi)
    return strdaoChuoi
}
// Truyền giá trị 
daoChuoi("aoH aL ioT")