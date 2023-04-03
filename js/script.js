
//задание 1
let prevet = (hello) => {
    console.log(hello)
}
setTimeout(function () {
    console.log(prevet('привет мир'))
}, 5000)




//задание 2
let u = ['Как', 'так', 'получилось']

function tor(slit) {
    let r = []
    r.push(slit)
    for (let item of r) {
        let t = item.length;
        let tr = item.slice(0, 1)
        console.log(tr, t);
    }
}
tor(u)
//задание 3
let myFn = (pr)=>{console.log(pr);}
setTimeout(function () {
    console.log(myFn('Привет из функции myFn'))
}, 2000)


//задание 4
let mult = (a, b) => {
    return a * b
}
setTimeout(function () {
    console.log(mult(5, 10))
}, 1000)

//заданий 5
let nums = [10, -12, 30, -1, -8, 0, 14, -33, 20]
let nums1 = (skil) => {
    let neotr = []
    let otr = []
    for (let item of skil) {
        if (item >= 0) {
            neotr.push(item)
        } else if (item <= 0) {
            otr.push(item)
        }
    }
    let otv = neotr.reduce((a, b) => a + b)
    let otv1 = otr.reduce((a, b) => a + b)
    console.log(otv1, otv);
}
nums1(nums)
//задание 6
let obj = {
    a: 10,
    b: 20,
    c: 'string',
    d: 12,
}

let rtr = []
let fun = (cost) => {
let r = Object.values(obj)

    for (let i of r){
        if(i>=0 || i<=0){
            
            rtr.push(i)
        }
    }
    let tr = rtr.reduce((a, b) => a + b)
console.log(tr);

}
fun(obj)

//задание 7
let a = 'first'
let b = 'second'

console.log(a, b)

function name(b,a) {
console.log(a, b)
}
name(a,b)



