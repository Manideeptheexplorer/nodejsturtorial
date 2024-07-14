const _=require('lodash')
const s=[1,[2,[3,[4]]]]
const news=_.flattenDeep(s)
console.log(news)


