## utils

### install

yarn add ts-tool-library

### camelize (下划线转驼峰命名)

```typescript
import { clearInvalidParams } from 'ts-tool-library'
console.log(camelize('my_name')) // myName
```

### clearInvalidParams (清除对象中无效参数,返回一个新的对象)

```typescript
import { clearInvalidParams } from 'ts-tool-library'
const _params = clearInvalidParams({ name: 'jack', age: '' })
console.log(_params) // {name:'jack'}
```

### copyToClipboard (复制到粘贴板)

```typescript
import { copyToClipboard } from 'ts-tool-library'
const { success, value } = copyToClipboard('jack')
console.log(value)
```

### debounce (函数防抖)

```typescript
import * as Util from 'ts-tool-library'
const debounced = Util.debounce(() => {
  // do some
})
debounced()
```

### getElementPosition (返回元素的大小及其相对于视口的位置)

```typescript
import { getElementPosition } from 'ts-tool-library'
const positionInfo = getElementPosition(document.querySelector('.div'))
console.log(positionInfo)
```

### throttle (函数节流)

```typescript
import { throttle } from 'ts-tool-library'
const throttled = throttle(() => {
  // do some
})
throttled()
```

### deepColne (深拷贝)

```typescript
import { deepClone } from 'ts-tool-library'
const cloned = deepClone([{ name: 'jack' }])
console.log(cloned)
```

### difference (求两数组(一维)的差集集)

```typescript
import { difference } from 'ts-tool-library'
console.log(difference([1, 2, 3], [2, 3, 4])) // [1]
```

### formatPrice (格式化价格)

### getUrlParams (获取 url 中的参数)

```typescript
import { getUrlParams } from 'ts-tool-library'
const query = getUrlParams('http://url.com/page?name=jack&id=1')
console.log(query) // { name:'jack',id:1 }
```

### intersection (求两数组(一维)的交集)



### isBrowser (当前是否为浏览器环境)
```typescript
import { isBrowser } from 'ts-tool-library'
console.log(isBrowser()) 
```

### isEqual (两个对象是否相等)

```typescript
import { isEqual } from 'ts-tool-library'
console.log(isEqual({ name: 'jack' }, { name: 'lilei' })) // false
```

### isObject
```typescript
import { isObject } from 'ts-tool-library'
console.log(isObject({ name: 'jack' })) // true
console.log(isObject(1)) // false

```
### isEmpty (值是否为空)

```typescript
import { isEmpty } from 'ts-tool-library'

isEmpty({ department: 'jack' }) // false
isEmpty([]) // true
isEmpty('') // true
isEmpty(null) // true
```

### isNotEmpty (值是否不为空)

```typescript
import { isNotEmpty } from 'ts-tool-library'

isNotEmpty({ department: 'jack' }) // true
isNotEmpty({}) // false
```

### parseTo (JSON 解析 并捕获会出现的异常)

```typescript
import { parseTo } from 'ts-tool-library'
const json = paseTo('{"title":"json 解析"}')
```

### to (异步函数异常捕获语法简写,一般用于 catch 接口请求错误)

```typescript
import { to } from 'ts-tool-library'

const [res, err] = await to( fetch({url:'xx'}))
if (res) xx
```

### underscore (驼峰转下划线命名)

```typescript
import { underscore } from 'ts-tool-library'

console.log(underscore('myName')) // my_name
```

### uniqueArrayObject (去除数组中重复的对象)

```typescript
import { uniqueArrayObject } from 'ts-tool-library'

const ary = uniqueArrayObject([{ id: 1 }, { id: 1, department: 'jack' }], 'id') // [{id:1}]
```

### transformFileToBase64 (将 file 转换为 base64)

```typescript
import { transform } from 'ts-tool-library'

const transform = async () => {
  const img = await transformImg(file)
}
```
