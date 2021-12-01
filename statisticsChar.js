const statisticsChar = char => {
    const charMap = new Map()
    for(let i = 0; i < char.length; i++) {
        const item = char.charAt(i)
        const value = charMap.has(item) ? charMap.get(item) + 1 : 1
        charMap.set(item, value)
    }
    let chars = '',
        max = -Infinity;
    for(let item of charMap) {
        const [key, value] = item
        if(max < value) {
            max = value
            chars = key
        }
    }
    return ({key: chars, value: max})
}

console.log(statisticsChar('dafr12j0-....///'));