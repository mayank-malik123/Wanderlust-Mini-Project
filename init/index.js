const mongoose=require("mongoose");
const Listing=require("../models/listing.js");
const initData=require("./data.js");
const MONGO_URL="mongodb://127.0.0.1:27017/wanderLust"
main()
.then(()=>{
    console.log("connected to db");
}).catch((err)=>{
    console.log(err);
})

async function main(){
    await mongoose.connect(MONGO_URL);
}

const initDB=async()=>{
    await Listing.deleteMany();//agar phle kuch data hoga toh usko khali krre h db ko
    initData.data=initData.data.map((obj)=>({...obj,owner:"690cff0a84c61aa85e939a6e"}))
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
}

initDB();

