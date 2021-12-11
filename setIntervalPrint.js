// IIFE
function setIntervalPrint(list){
    for(var i = 0; i < list.length; i++) {
        ;(function(idx){
            setTimeout(() => console.log(`value:${list[idx]},time: ${Date.parse(new Date())}`), 1000 * idx)
        })(i)
    }
}

// Promise
function setIntervalPromise(list){
    for(var i = 0; i < list.length; i++) {
        Promise.resolve(i).then(idx => setTimeout(() => console.log(`value:${list[idx]},time: ${Date.parse(new Date())}`), 1000 * idx))
    }
}

// Let
function setIntervalLet(list){
    for(let i = 0; i < list.length; i++) {
        setTimeout(() => console.log(`value:${list[i]},time: ${Date.parse(new Date())}`), 1000 * i)
    }
}

const list = [1,2,3,4]
setIntervalPrint(list)
setIntervalPromise(list)
setIntervalLet(list)