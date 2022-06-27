function kTraObjRong(obj = {}) {
    return Object.values(obj).length === 0 ?
        console.log(`Object rỗng`) :
        console.log(`Object không rỗng`)
}
// Truyền giá trị 
kTraObjRong({ hoTen: "Bùi Minh Hòa", })
kTraObjRong()