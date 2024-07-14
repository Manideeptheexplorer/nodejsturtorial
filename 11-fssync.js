const {readFileSync,writeFileSync}=require("fs")

const first=readFileSync('./content/subfolder/first.txt')
const second=readFileSync('./content/subfolder/second.txt')

writeFileSync('./content/subfolder/third.txt',`this is the 3rd const txt file ${first},${second}`,{flag:'a'})
