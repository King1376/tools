/**
 * 重写bind
 * @returns 
 */
function myBind(){
    const args = Array.from(arguments)
    const cxt = args.shift()
    return () => this.apply(cxt, args)
}

/**
 * call
 */
function myCall(){
    const args = Array.from(arguments)
    const ctx = args.shift()
    this.apply(ctx, args)
}

/**
 * apply
 */
function myApply() {
    const args = Array.from(arguments)
    const ctx = args.shift()
    this.call(ctx, ...args)
}
// 挂在原型上
Function.prototype.myBind = myBind
Function.prototype.myCall = myCall
Function.prototype.myApply = myApply


// 测试函数
function test()  {
    console.log(`执行函数是${this.name},其参数为: `,this.params)
}

// 测试数据
const testObj = {
    name: 'myBind',
    params: [1,2,3,5]
}
const nativeObj = {
    name: 'native bind',
    params: [{id: 1},{id: 2}]
}
// 执行bind
test.myBind(testObj,...testObj.params)()
test.bind(nativeObj,...nativeObj.params)()

// 执行call
testObj.name = 'myCall'
test.myCall(testObj,...testObj.params)
test.call(nativeObj,...nativeObj.params)

// 执行apply
testObj.name = 'myApply'
test.myApply(testObj,testObj.params)
test.apply(nativeObj,nativeObj.params)

