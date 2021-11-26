function kingFilter(fn){
    const result = []
    for(let i = 0; i < this.length; i++) {
        const item = this[i];
        if(fn(item, i, this)) {
            result.push(item)
        }

    }
    return result
}

Array.prototype.kingFilter = kingFilter

const res = [11,4,9].kingFilter(item=> item%2)
console.log(res, 'res');