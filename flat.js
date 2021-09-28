/**、
 * 数组扁平化
 */
const arrFlat = arr => {
    const result = []
    for (let item of arr) {

        if (Array.isArray(item)) {
            result.push(...arrFlat(item))
        } else {
            result.push(item)
        }
    }
    return result
}

// 测试数据
const test = [
    1,
    [
        2,
        3,
        [4],
        [
            {
                name: 'king'
            }
        ]
    ],
    [null, [true], [NaN, [undefined, [55, [66, [{age: 0}], 88], 99], 1010], 1111], 1212]
]

const tar = arrFlat(test)
console.log(tar)