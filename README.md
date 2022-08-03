## utils

### install

yarn add ts-tool-library or npm install ts-tool-library

### camelize (下划线转驼峰命名)

```typescript
import { clearInvalidParams } from 'ts-tool-library'
console.log(camelize('my_name')) // myName
```

### chunk
将一个大数组分割成若干个小数组

```typescript
import { chunk } from 'ts-tool-library'
chunk([1, 2, 3], 1) // [[1],[2],[3]]
```

### clearInvalidParams
清除对象中无效参数

```typescript
import { clearInvalidParams } from 'ts-tool-library'
const _params = clearInvalidParams({ name: 'jack', age: '' })
console.log(_params) // {name:'jack'}
```

### copyToClipboard
复制到粘贴板

```typescript
import { copyToClipboard } from 'ts-tool-library'
const { success, value } = copyToClipboard('jack')
console.log(value)
```

### debounce

```typescript
import * as Util from 'ts-tool-library'
const debounced = Util.debounce(() => {
  // do some
})
debounced()
```

### deepColne
深拷贝

```typescript
import { deepClone } from 'ts-tool-library'
const cloned = deepClone([{ name: 'jack' }])
console.log(cloned)
```

### drag
拖拽

1.基本用法:

```typescript
import { drag } from 'ts-tool-library'
drag(document.querySelector('.element'))
```

2.传入配置项

```typescript
const removeListener = drag(document.querySelector('.element'), {
  outerElement: document.querySelector('.outer-element'),
  targetElement: document.querySelector('.target-element'),
  onDragStart: () => {},
  onDrag: xy => {},
  onDragEnd: () => {}
})
removeListener()
```

3.移除监听

```typescript
const removeListener = drag(document.querySelector('.element'))
removeListener()
```

### difference
求两数组(一维)的差集集

```typescript
import { difference } from 'ts-tool-library'
console.log(difference([1, 2, 3], [2, 3, 4])) // [1]
```

### EventEmitter
发布订阅

```typescript
import EventEmitter from 'ts-tool-library
const event = new EventEmitter()
event.on('doSome',(v)=>{
  // do some
}) // 订阅
event.emit('doSome','eat') // 发布
event.on('doSomeOnce',(v)=>{
  // do some
}) // 只订阅一次
event.off('doSome',()=>{
  // do some
}) // 取消订阅
```

### formatDate (格式化日期)

```typescript
import { formatDate } from 'ts-tool-library'
formatDate(new Date()，'YYYY-MM-DD HH:mm:ss') // 格式化 date 类型 时间
formatDate(1623132547888，'YYYY/MM/DD HH:mm' )  // 格式化毫秒级时间戳
formatDate(1623132547，'YYYYMMDD HHmm')  // 格式化秒级时间戳
formatDate(1623132547，'YYYY-MM-DD' ) // 只需要年月日
formatDate(1623132547，'HH:mm:ss') // 只需要时间秒
```

### getElementPosition (返回元素的大小及其相对于视口的位置)

```typescript
import { getElementPosition } from 'ts-tool-library'
const positionInfo = getElementPosition(document.querySelector('.div'))
console.log(positionInfo)
```

### getUrlParams (获取 url 中的参数)

```typescript
import { getUrlParams } from 'ts-tool-library'
const query = getUrlParams('http://url.com/page?name=jack&id=1')
console.log(query) // { name:'jack',id:1 }
```

### formatDate
格式化日期

```typescript
import { formatDate } from 'ts-tool-library'
formatDate(1631532591270)
formatDate(new Date())
```

### groupBy 
根据数组中对象的某个属性进行分组

```typescript
import { groupBy } from 'ts-tool-library'
console.log(groupBy([{ name: 'xk' }, { name: 'lrx' }], 'name')) // [[{ name: 'xk' }],[{ name: 'lrx' }]]
```

### listToTree (将列表数据转化为树结构)

```typescript
import { listToTree } from 'ts-tool-library'

console.log(
  listToTree(
    [
      {
        id: 1,
        value: 1,
        parent: 0
      },
      {
        id: 2,
        value: 2,
        parent: 1
      }
    ],
    true
  ) // 第二个参数可选择是否直接更改原数组
) // [{ id: 1,parent: 0,value: 1,children: [{ id: 2, parent: 1, value: 2 }]
```

### isBrowser 
当前是否为浏览器环境

```typescript
import { isBrowser } from 'ts-tool-library'
console.log(isBrowser())
```

### isObject

```typescript
import { isObject } from 'ts-tool-library'
console.log(isObject({ name: 'jack' })) // true
console.log(isObject(1)) // false
```

### isEmpty 
值是否为空

```typescript
import { isEmpty } from 'ts-tool-library'

isEmpty({ department: 'jack' }) // false
isEmpty([]) // true
isEmpty('') // true
isEmpty(null) // true
```

### isNotEmpty
值是否不为空

```typescript
import { isNotEmpty } from 'ts-tool-library'

isNotEmpty({ department: 'jack' }) // true
isNotEmpty({}) // false
```

### parseTo
JSON 解析 并捕获会出现的异常

```typescript
import { parseTo } from 'ts-tool-library'
const json = paseTo('{"title":"json 解析"}')
```

### regexValidate
正则验证函数

```typescript
import { regexValidate } from 'ts-tool-library'

// 函数签名 const regexValidate: (value: string, type: ValidateType) => boolean
// type包括: 'chineseCharacter'| 'email'| 'url'| 'fixedTelephone' | 'htmlTags'| 'hexColor'| 'mobilePhone'| 'ipV4'| 'postalCode'

console.log(regexValidate('https://www.baidui.com', 'url')) // true
console.log(regexValidate('<span>span</span>', 'htmlTags')) // true
console.log(regexValidate('jack', 'chineseCharacter')) // false
console.log(regexValidate('#fff', 'hexColor')) // true
```

### subject
观察者模式

```typescript
import { Subject } from 'ts-tool-library/subject'

const subject = new Subject()

subject.addObserver({
  update: () => {
    // to set update
  }
})

// 通知更新
subject.notify('可传递值')
```

### throttle
函数节流

```typescript
import { throttle } from 'ts-tool-library'
const throttled = throttle(() => {
  // do some
})
throttled()
```

### to
异步函数异常捕获语法简写,一般用于 catch 接口请求错误

```typescript
import { to } from 'ts-tool-library'

const [res, err] = await to(request(xx))
if (res) xx
```

### transformFileToBase64
将 file 转换为 base64

```typescript
import { transform } from 'ts-tool-library'

const transform = async () => {
  const img = await transformImg(file)
}
```

### trim
去除字符串首尾的指定字符, 默认为空格(whitespace)

```typescript
import { trim } from 'ts-tool-library'

console.log(trim(' 1 ')) // '1'
console.log(trim('3123', '3')) // '12'
```

### underscore
驼峰转下划线命名

```typescript
import { underscore } from 'ts-tool-library'

console.log(underscore('myName')) // my_name
```

### uniqueArrayObject 
去除数组中重复的对象

```typescript
import { uniqueArrayObject } from 'ts-tool-library'

const ary = uniqueArrayObject([{ id: 1 }, { id: 1, department: 'jack' }], 'id') // [{id:1}]
```

### concurrencyControl

并发控制

```typescript
import { concurrencyControl } from 'ts-tool-library'

// Your request
const request1 = async () => {
  const res = await axios.get(
    'https://www.fastmock.site/mock/f3f8fe09e165b17807903866ca16a752/mock/user'
  )
  return res.data
}

const request2 = async () => {
  const res = await axios.get(
    'https://www.fastmock.site/mock/f3f8fe09e165b17807903866ca16a752/mock/fruit'
  )
  return res.data
}

const request3 = async () => {
  const res = await axios.get(
    'https://www.fastmock.site/mock/f3f8fe09e165b17807903866ca16a752/mock/animal'
  )
  return res.data
}

// 同时最多只会发送 2 个请求
const res = await concurrencyControl([request1, request2, request3], 2)
// res 里同时包括成功和失败的响应(按顺序返回)
console.log('res', res)
```
