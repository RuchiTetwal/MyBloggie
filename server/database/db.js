import mongoose from 'mongoose';

const Connection = async() =>{
    const url = 'mongodb+srv://blogadmin:mybloggie@blogweb.lbple.mongodb.net/BLOGWEB?retryWrites=true&w=majority';
    try{


    await mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});
    console.log("Database connected successfully");
    }
    catch(error){
        console.log('ERROR - '+error);
    }
}

export default Connection;