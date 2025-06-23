require('../integration/db.setup');
require('dotenv').config({ path: '.env' });
// ...existing code...
console.log("🔍 MONGODB_URI_TEST:", process.env.MONGODB_URI_TEST);


const mongoose = require('mongoose');

beforeAll(async () => {
  console.log('🔍 MONGODB_URI_TEST:', process.env.MONGODB_URI_TEST); // Debug log
  await mongoose.connect(process.env.MONGODB_URI_TEST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterAll(async () => {
  
  
});
