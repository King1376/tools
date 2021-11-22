const getType = target => Object.prototype.toString.call(target).slice(8, -1)

const isBaseType = [
    'Number',
    'String',
    'Boolean',
    'Null',
    'Undefined',
    'Symbol'
]

const creatRes = type => {
    const maps = {
        'Array': [],
        'Object': {},
        'Set': new Set(),
        'Map': new Map(),
    }
    return maps[type]
}

const deepClone = (target, cache = []) => {
    for(let item of cache) {
        const {tar, res} = item ?? {}
        if(target === tar) {
            return res
        }
    }

    const type = getType(target)
    let result = creatRes(type)
    cache.push({tar: target, res: result})
    if(isBaseType.includes(type)) {
        result = target
    } else if(type === 'Date') {
        result = new Date(target)
    } else if(type === 'RegExp') {
        result = new RegExp(target.source, target.flags)
    } else if(type === 'Function') {
        result = target.bind(this)
    } else if(['Array', 'Object'].includes(type)) {
        for(let key in target) {
            result[key] = deepClone(target[key], cache)
        }
    } else if(type === 'Set') {
        for(let item of target) {
            result.add(deepClone(item, cache))
        }
    } else if(type === 'Map') {
        for(let item of target) {
            const [key, value] = item
            result.set(key, deepClone(value, cache))
        }
    }
    return result
}

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