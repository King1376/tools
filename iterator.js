/**
 * 实现forEach功能,注意不能写箭头函数，因为箭头函数没有自己的this
 * @param {callback} fn 
 */
function kingForEach(fn) {
    for(let i = 0; i < this.length; i++ ) {
        fn.call(this, this[i], i, this)
    }
}


/**
 * 实现map函数，不会修改原来的数组，返回一个新的数组
 * @param {callback} fn 
 * @returns 
 */
function kingMap(fn) {
    const result = []
    for(let i=0; i< this.length; i++) {
        const temp = fn.call(this, this[i], i, this)
        result.push(temp)
    }
    return result
}

/**
 * 实现filter函数,不会修改原来的数组，返回一个新的数组
 * @param {callback} fn 
 * @returns 
 */
function kingFilter(fn) {
    const result = []
    for (let i = 0; i < this.length; i++) {
        const temp = fn.call(this, this[i], i, this)
        temp && result.push(this[i ])
    }
    return result
}

/**
 * 实现reduce函数
 * @param {callback} fn 
 * @param {acc初始值} args 
 * @returns 
 */
function kingReduce(fn, args) {
    let acc = args ?? null
    for (let i = 0; i < this.length; i++) {
        acc = fn.call(this, acc, this[i], i, this)
    }
    return acc
}

// 挂在Array原型对象上
Array.prototype.kingForEach = kingForEach
Array.prototype.kingMap = kingMap
Array.prototype.kingFilter = kingFilter
Array.prototype.kingReduce = kingReduce

const testData = [1,2,3,5,8]

testData.kingForEach((item, idx , arr) => {
    testData[idx] +=2
})
console.log('kingForEach之后的数据：', testData)

// map
const mapData = testData.kingMap((item, idx , arr) => item/2)
console.log('******* kingMap start *******************\nbefore kingMap data：',
 testData, '\nafter kingMap data：', mapData, '\nmap前后的是否为同一个数组',
 testData === mapData, '\n************* kingMap end *****************\n')


//  fillter
const filterData = testData.kingFilter((item, idx , arr) => item%2 === 0)
console.log('******* kingFilter start *******************\nbefore kingFilter data：',
 testData, '\nafter kingFilter data：', filterData, '\nmap前后的是否为同一个数组',
 testData === filterData, '\n************* kingFilter end *****************\n')

//  reduce
 const testReduceData = [{name: 'js'}, {name: 'vue'},{name: 'react'}]
 const reduceData = testReduceData.kingReduce((acc, item, idx, arr) => {
     acc.push({...item,id: idx + 1 })
     return acc
 },[])
 console.log('****************************************\nkingReduce data: ', 
 reduceData, '\n****************************************\n')