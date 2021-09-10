/**
 * 深克隆
 * @param {克隆对象} target 
 * @param {缓存} cache 
 */
const deepClone = (target, cache = []) => {
    // 数据类型
    const type = isType(target)
    // 解决自应用问题，遍历缓存，若存在，则直接返回
    for(let item of cache) {
        const { tar, res } = item
        if(tar === target) {
            return res
        }
    }

    // 最终结果
    let result = dataTypeBycreate(type);

    cache.push({ tar: target, res: result })
    if(isBaseTypes.includes(type)) {        // 基本数据类型
        result = target
    }else if(type === 'Date') {             // 日期类型   
        result = new Date(target)
    }else if(type === 'RegExp') {           // 正则表达式
        result = new RegExp(target.source, target.flags)        
    }else if(type === 'Function') {         // 函数
        result = target.bind(this)
    }else if(type === 'Set') {              // Set        
        for(let item of target) {
            result.add(deepClone(item,cache))
        }
    }else if(type === 'Map') {              // Map
        for(let item of target) {
            const [key, value] = item
            result.set(key,deepClone(value,cache))
        }
    }else if(['Array', 'Object'].includes(type)) {      // 数组和对象
        for(let key in target) {
            result[key] = deepClone(target[key],cache)
        }
    }
    return result
}

// 根据数据类型相应的初始化
const dataTypeBycreate = type => {
    const createMaps = {
        'Array': [],
        'Object': {},
        'Set': new Set(),
        'Map': new Map(),
    }
    return createMaps[type]
}

// 数据类型
const isType = data => {
    return Object.prototype.toString.call(data).slice(8, -1)
}

// 基本数据类型
const isBaseTypes = [ 'Number', 'String', 'Boolean', 'Null', 'Undefined', 'Symbol']


// 测试
const testObj = {
    str: 'string',
    num: 23,
    boo: true,
    un: undefined,
    nu: null,
    sy: Symbol('k'),
    arr: [
        '⭐⭐⭐⭐⭐',
        [
            {
                id: 1,
                name: 'js'
            }
        ]
    ],
    se: new Set([null,undefined,Symbol(1)]),
    ma: new Map([['a','🏝🏝🏝'],['b',false],['c',undefined]]),
    time: new Date(),
    regExp: /\.json/g
}
// 自引用
testObj.copyTar = testObj
const newData = deepClone(testObj)
newData.arr.push('🍎🍎🍎')
newData.se.add('copy_value')
newData.ma.set('copyKey',Symbol('copy_map')),
newData.time = new Date('2021-09-10'),
newData.regExp = /\.js/g

console.log(testObj,newData, testObj == newData)