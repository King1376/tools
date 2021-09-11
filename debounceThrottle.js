
/**
 * 防抖函数
 * @param {执行函数} fn 
 * @param {指定时间} wait 
 * @returns 
 */
const debounce = (fn, wait) => {
    let timmer
    return (...args) => {
        // 若计时器存在，则清空计时器
        timmer && clearTimeout(timmer)
        timmer = setTimeout(() => {
            fn.call(this, ...args)
        }, 
        wait)
    }
}


/**
 * 节流
 * @param {执行函数} fn 
 * @param {指定时间间隔} wait 
 * @returns 
 */
const throttle = (fn, wait) => {
    // 记录上一次执行事件处理函数的时间
    let last = 0
    return (...args) => {
        const now = Date.now()
        // 与上一次执行时间进行比较，超过指定时间间隔，则执行事件处理函数
        if(now - last > wait) {
            fn.call(this, ...args)
            last = now
        }
    }
}

// 简单样式初始化
const styleFun = (dom, desc, color) => {
    dom.style.width = '168px'
    dom.style.height = '100px'
    dom.style.backgroundColor = color
    dom.innerHTML = desc
    dom.style.textAlign = 'center'
    dom.style.lineHeight = '100px'
    dom.style.cursor = 'pointer'
}

// 执行函数
const eventFun = name => {
    console.log(`事件处理函数已执行，${name}函数`)
}

// 获取对应的dom节点
const dounceDom = document.getElementById('dounce'),
      throttleDom = document.getElementById('throttle');
styleFun(dounceDom, 'debounce', 'pink')
styleFun(throttleDom, 'throttle', '#eee')

const dounceFn = debounce(eventFun, 3000)
const throttleFn = throttle(eventFun, 3000)

// dom节点绑定事件处理函数
dounceDom.addEventListener('click',() => dounceFn('防抖'))
throttleDom.addEventListener('click',() => throttleFn('节流'))

