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
    img: "http://4.bp.blogspot.com/-xu5NL5mxyfk/UfeasyxUISI/AAAAAAAAcS8/y1un3J0H7z8/s1600/DSC_0343.JPG",

  },
  {
    name: "Blowing Rocks Nature Preserve",
    ratings: "4.5",
    address: "State Road 707, Tequesta, FL 33469",
    hours: "9:00am-4:30pm",
    phone: "unavailable",
    img: "http://farm3.static.flickr.com/2726/5711624414_50b4095abc.jpg",

  },
  {
    name: "Board Room",
    ratings: "4.5",
    address: " 1737 Connecticut Ave NW, Washington, DC 20009",
    hours: "4pm-2am",
    phone: " (202) 518-7666",
    img: "https://i.pinimg.com/originals/07/c1/4c/07c14ce46798e16f674997eb6084f948.jpg"

  },
  {
    name: "Big Monster Toys",
    ratings: "4.7",
    address: "21 S Racine Ave, Chicago, IL 60607",
    hours: "7:30am-4:30pm",
    phone: "(312) 829-8697",
    img: "https://www.hephzibahhome.org/wp-content/uploads/2014/11/Heph14_BigDoor_web.jpg" 
   },
  {
    name: "Carls Bad Cavern",
    ratings: "4.5",
    address: "190 Reef Top Cir Carlsbad, NM 88220",
    hours: "8:30am-6:30pm",
    phone: "(575) 785-2232",
    img: "https://www.national-park.com/wp-content/uploads/2016/04/Welcome-to-Carlsbad-Caverns-National-Park.jpg"
  },
  {
    name: "CORAL PINK SAND DUNES STATE PARK",
    ratings: "4.5",
    address: "12500 Sand Dune Road, Kanab, UT 84741",
    hours: "8:00am-10:00pm",
    phone: "not available",
    img: "https://tipsforfamilytrips.com/wp-content/uploads/2016/09/coral-pink-sand-dunes-5-800x533.jpg"
  },
  {
    name: "World Wide Tacos",
    ratings: "4.1",
    address: "2419 W Martin Luther King Jr Blvd, Los Angeles, CA 90008",
    hours: "11:30am-10:00pm",
    phone: "(323) 291-1500",
    img: "https://pbs.twimg.com/profile_images/483425500/world_wide_tacos_400x400.jpg"
  },
  {
    name: "Cochon RESTAURANT",
    ratings: "4.6",
    address: "930 Tchoupitoulas St suite a, New Orleans, LA 70130",
    hours: "11:00am-10:00pm",
    phone: "(504) 588-2123",
    img: "https://www.bedouk.com/mediatheque/annonceur/9/6/1/0000761169_920x572.jpg"
  },
  {
    name: "Moab National Park",
    ratings: "unavailable",
    address: "25 E Center St Moab, UT 84532 ",
    hours: "open 24 hours",
    phone: "(435)-259-8825",
    img: "https://www.myutahparks.com/.image/t_share/MTQ4MzM1NjgyMjUyNzExNjY4/arches-delicate-arch-sky_adobe_680.jpg"  },
  {
    name: "Joshua Tree National Park",
    ratings: "4.7",
    address: "74485 National Park Drive Twentynine Palms, CA 92277-3597",
    hours: "open 24 hours",
    phone: "(760) 367-5500",
    img: "https://www.national-park.com/wp-content/uploads/2016/04/Welcome-to-Joshua-Tree-National-Park.jpg"
  },
  {
    name: "The narrows at Zion National Park",
    ratings: "4.8",
    address: "1 Zion Park Blvd Springdale, UT 84767 ",
    hours: "open 24 hours",
    phone: "(435) 772-3256 ",
    img: "https://caltech.typepad.com/.a/6a0105349b8251970b01a5118dee2e970c-800wi"
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
