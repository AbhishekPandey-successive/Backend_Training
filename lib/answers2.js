const app=require('./math')

const fs=require('fs')



fs.writeFileSync("add.csv","app.add(2,3)")
fs.writeFileSync("sub.csv","app.sub(4,3)")
fs.writeFileSync("div.csv","app.mult(4,3)")
fs.writeFileSync("sub.csv","app.div(4,2)")
