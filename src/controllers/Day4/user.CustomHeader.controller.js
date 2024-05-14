export class UserCustomHeader{

    setCustomHeader(req,res){
        
        let customHeadervalue=req.headers['Name']
        res.send(customHeadervalue)
    }
}

