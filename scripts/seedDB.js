const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/travelappDB"
);

const placesSeed = [
  {
    name: "The High Line",
    ratings: "4.7",
    address: "New York, NY 10011",
    hours: "7:00am-7:00pm",
    phone: "(212) 500-6035",

  },
  {
    name: "Blowing Rocks Nature Preserve",
    ratings: "4.5",
    address: "State Road 707, Tequesta, FL 33469",
    hours: "9:00am-4:30pm",
    phone: "unavailable",

  },
  {
    name: "Board Room",
    ratings: "4.5",
    address: " 1737 Connecticut Ave NW, Washington, DC 20009",
    hours: "4pm-2am",
    phone: " (202) 518-7666",

  },
  {
    name: "Big Monster Toys",
    ratings: "4.7",
    address: "21 S Racine Ave, Chicago, IL 60607",
    hours: "7:30am-4:30pm",
    phone: "(312) 829-8697",
  },
  {
    name: "Carls Bad Cavern",
    ratings: "4.5",
    address: "190 Reef Top Cir Carlsbad, NM 88220",
    hours: "8:30am-6:30pm",
    phone: "(575) 785-2232",
  },
  {
    name: "CORAL PINK SAND DUNES STATE PARK",
    ratings: "4.5",
    address: "12500 Sand Dune Road, Kanab, UT 84741",
    hours: "8:00am-10:00pm",
    phone: "not available",
  },
  {
    name: "World Wide Tacos",
    ratings: "4.1",
    address: "2419 W Martin Luther King Jr Blvd, Los Angeles, CA 90008",
    hours: "11:30am-10:00pm",
    phone: "(323) 291-1500",
  },
  {
    name: "Cochon RESTAURANT",
    ratings: "4.6",
    address: "930 Tchoupitoulas St suite a, New Orleans, LA 70130",
    hours: "11:00am-10:00pm",
    phone: "(504) 588-2123",
  },
  {
    name: "Moab National Park",
    ratings: "unavailable",
    address: "25 E Center St Moab, UT 84532 ",
    hours: "open 24 hours",
    phone: "(435)-259-8825",
  },
  {
    name: "Joshua Tree National Park",
    ratings: "4.7",
    address: "74485 National Park Drive Twentynine Palms, CA 92277-3597",
    hours: "open 24 hours",
    phone: "(760) 367-5500",
  },
  {
    name: "The narrows at Zion National Park",
    ratings: "4.8",
    address: "1 Zion Park Blvd Springdale, UT 84767 ",
    hours: "open 24 hours",
    phone: "(435) 772-3256 ",
  },
  

];

db.locale
  .remove({})
  .then(() => db.locale.collection.insertMany(placesSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
