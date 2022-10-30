const Property = require("../models/property");
const mongoose = require("mongoose");

const properties = require("../data/data.json");

mongoose.connect(
  "mongodb+srv://adminadmin:adminadmin@accountdb.wuvh2.mongodb.net/page_example?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const seedRooms = async () => {
  try {
    await Property.deleteMany();
    console.log("Properties are deleted");

    await Property.insertMany(properties);
    console.log("All Properties are added.");

    process.exit();
  } catch (error) {
    console.log("Hubo un error", error.message);
    process.exit();
  }
};

seedRooms();
