/**、
 * 数组扁平化
 */
function kingFlat() {
    const result = []
    for(let i = 0; i < this.length; i++) {
        if(Array.isArray(this[i])) {
            result.push(...this[i].kingFlat()) 
        } else {
            result.push(this[i])
        }
    }
    return result
}

Array.prototype.kingFlat = kingFlat
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

const tar = test.kingFlat()
console.log(tar)