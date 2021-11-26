function kingMap(fn) {
    const result = []
    for(let i = 0; i < this.length; i++) {
        result.push(fn(this[i], i, this))
    }
    return result
}
Array.prototype.kingMap = kingMap
