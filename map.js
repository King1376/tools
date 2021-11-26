function kingMap(fn) {
    const result = []
    for(let i = 0; i < this.length; i++) {
        result.push(fn(this[i], i, this))
    }
    return result
}
Array.prototype.kingMap = kingMap
const res = [null, undefined].map(item=>item)
console.log(res, 'res');