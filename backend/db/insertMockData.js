const mongoose = require('mongoose');
const Mobiles= require('../models/mobile'); 

console.log("hello");
const MONGODB_ATLAS_URI = MONGODB_URL;

const insertMockData = async () => {
  try {
    await mongoose.connect(MONGODB_ATLAS_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');

    const mockData = require('../devtownMockData.json');

    await Mobiles.insertMany(  mockData );

    console.log('Mock data inserted successfully.');
  } catch (error) {
    console.error('Error inserting mock data:', error);
  } finally {
    mongoose.connection.close();
  }
};

insertMockData();
