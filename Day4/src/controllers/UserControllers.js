const mockData=require('../mockData')

const getData=(req,res)=>{
    res.send(mockData);
}

const getSeededData=(req,res)=>{
    res.send(mockData)
}

module.exports={getData,getSeededData}