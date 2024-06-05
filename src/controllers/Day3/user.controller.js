
export class UserController{


    validate(req,res){
        const {username,password}= req.body;
        if(username === "Rohit"){
            res.send("You are authorized")
        }

        res.status(403).send('User is unauthorized');

    }

}