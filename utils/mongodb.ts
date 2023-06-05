import mongoose from 'mongoose';

const connectMongo = async () => {
  try {
    const uri = "mongodb+srv://ecommerce_user:oCsdOYqA5XyofxY6@cluster0.5kg86kg.mongodb.net/?retryWrites=true&w=majority"
    const db = await mongoose.connect(uri);
    console.log("Database is connected to", db.connection.name);
    require('../models/Option')
    require('../models/Question')
    require('../models/Role')
    require('../models/Suggestion')
    require('../models/User')
  } catch (error) {
    console.error(`Error: ${(error as any).message}`);
    process.exit(1);
  }
};

export default connectMongo;