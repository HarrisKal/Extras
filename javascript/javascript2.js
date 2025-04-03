// const javascript = require('./javascript');
const {print, errorIf} = require('./javascript');
// const _ = require('lodash');


const a = function() {
    print('a', this)
    const b = function() {
        print('b', this)
        const c = {
            hi: function() {
                print('c', this)
            }
        }
        c.hi()
    }
    b()
}
'-------------------------------------------------------------------------------------------------'
'输出结果：随机增加生命值，范围为 展开运算符 调用私有方法'

const wizard = {
    name: 'Merlin', health: 50,
    heal() { this.health = 100; }
}
const archer = {
    name: 'Robin', health: 30,
}
// print(archer.health);
// wizard.heal.call(archer, 100)
// print(archer.health);

'-------------------------------------------------------------------------------------------------'

function getMax(arr) {
    errorIf (!Array.isArray(arr), 'Enter a valid array')
    errorIf (arr.forEach(el => {typeof el != 'number'}), 'Elements of the array must be valid numbers')
    print (Math.max(...arr));
}

'-------------------------------------------------------------------------------------------------'

class Crime {
    constructor(criminals) {
        this.criminals = criminals;
        this.isCrime = false;
        this.check();
    }
    check() {this.isCrime = (this.criminals > 4)? true : false;}
}


const grantLoginAccessTo = user => `Access granted to ${user}`

const sum = (...args) => args.reduce((acc, c) => acc += c)

print(sum(1,2,5,23))

