import { mockData } from "../../../public/dummyData.js";
export class UserMockData{
    getMockData(req,res)
    {
        res.send(mockData)

    }
}