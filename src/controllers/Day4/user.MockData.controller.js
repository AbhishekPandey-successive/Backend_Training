import { mockData } from "../../../public/dummyData.js";
export class UserMockData{
    getMockData(req,res)
    {
        res.status(200).json({
            status:"success",
            data:mockData
        })

    }
}