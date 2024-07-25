const mongoose = require("mongoose");

const uri = "mongodb+srv://harshmahajan:H%40rshMahajan123@cravecurb.ivfnzgi.mongodb.net/cravecurb?retryWrites=true&w=majority&appName=CraveCurb";

const mongoDB = async () => {
  try {
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connected to MongoDB");

    const fetched_data = await mongoose.connection.db.collection("food_items").find({}).toArray();
    const foodcategory = await mongoose.connection.db.collection("foodcategory").find({}).toArray();

    global.food_items = fetched_data;
    global.foodcategory = foodcategory;
    
  } catch (err) {
    console.error("Error connecting to MongoDB: ", err);
  }
};

module.exports = mongoDB;
