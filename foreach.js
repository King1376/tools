function kingForEach(fn) {
    for (let i = 0; i < this.length; i++) {
        fn.call(this,this[i], i, this)
    }
}

Array.prototype.kingForEach = kingForEach;
[1,5].kingForEach(item => {
    console.log(item, 'item');
    if(item === 1) {
        return;
    }
})