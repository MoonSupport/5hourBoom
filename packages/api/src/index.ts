import { hello } from '@project/core/src'
console.log(hello)

function add(a, b) {
  if (b) {
    b = 5
  }
  return a + b
}

add

const a = 'hello'
console.log(a, 'test')
console.log('허스키 정상작동합니다.')
