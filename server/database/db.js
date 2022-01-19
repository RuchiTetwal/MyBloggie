import mongoose from 'mongoose';

const Connection = async (username, password)=>{

   //mongodb+srv:
   const URL = `mongodb+srv://${username}:${password}@mybloggienew.dechj.mongodb.net/MyBloggie?retryWrites=true&w=majority`;    

    try{
    await mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology:true});
    console.log("database connected successfully");

    }catch(err){
        console.log('Error while connecting to MongoDB ' + err)
    }
}

export default Connection;