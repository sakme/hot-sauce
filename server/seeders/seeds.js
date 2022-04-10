const db = require('../config/connection');
const { User, Product, Category, Review } = require('../models');

db.once('open', async () => {

  await User.deleteMany();

  const user = await User.create([
    {
    username: "alan",
    email: "alan@gmail.com",
    password: "password"
    },
    {
    username: "niraj",
    email: "niraj@gmail.com",
    password: "password"
    },
    {
    username: "jacob",
    email: "jacob@gmail.com",
    password: "password"
    },
    {
    username: "glen",
    email: "glen@gmail.com",
    password: "password"
    },
    {
    username: "wendy",
    email: "wendy@gmail.com",
    password: "password"
    },
    {
    username: "danielle",
    email: "danielle@gmail.com",
    password: "password"
    },
    {
    username: "sarah",
    email: "sarah@gmail.com",
    password: "password"
    },
    {
    username: "paige",
    email: "paige@gmail.com",
    password: "password"
    }
  ]);

  await Review.deleteMany();

  const review = await Review.insertMany([
    {
      rating: 80,
      reviewText: "Damn good!",
      userId: user[0]._id
    },
    {
      rating: 100,
      reviewText: "Fantastic",
      userId: user[1]._id
    },
    {
      rating: 60,
      reviewText: "I've hade better",
      userId: user[2]._id
    },
    {
      rating: 60,
      reviewText: "It's ok",
      userId: user[3]._id
    },
    {
      rating: 80,
      reviewText: "Good flavor",
      userId: user[4]._id
    },
    {
      rating: 20,
      reviewText: "Worst hot sauce ever!",
      userId: user[5]._id
    },
    {
      rating: 100,
      reviewText: "My mouth is still on fire",
      userId: user[6]._id
    },
    {
      rating: 80,
      reviewText: "Very hot",
      userId: user[7]._id
    }
  ]);
  
  await Category.deleteMany();
  
  const categories = await Category.insertMany([
    {
      name: 'Super Hot'
    },
    {
      name: 'Extra Hot'
    },
    {
      name: 'Hot'
    }
  ]);

  await Product.deleteMany();
  
  await Product.insertMany([
    {
    name: "'F' Milk Got Hot Sauce?",
    image: "f-milk.jpg",
    price: 5.99,
    description: "'F' Milk! - Got Hot Sauce - 'Real men say 'F' milk! I'll get the sh*t I need from my hot sauce! Just say 'F' it, and get another bottle. It feels much better the next day. I say 'F' it, coat your ass with sauce, cause it's the boss!",
    ingredients: ['Habañero peppers', 'vinegar', 'onion powder', 'garlic powder', 'salt'],
    reviews: [review[0], review[7], review[2], review[5]],
    quantity: 59,
    category: categories[0]._id
    },
    {
      name: "Backdraft Fire Sauce",
    image: "backdraft.jpg",
    price: 5.99,
    description: "Backdraft Fire Sauce - The fireman's nightmare - Dedicated to all the brave firefighters around the world! Great grilling sauce. Baste meat or seafood while cooking. Wonderful baked or grilled. Serve with wings, chips, chicken fingers, shrimp, vegetables, tempura, Jalapeño poppers, and everything else.",
    ingredients: ['Sugar', 'yellow mustard', 'light brown sugar', 'tomato paste', 'herbs and spices', 'salt', 'natural flavoring', 'pepper', 'Habañero peppers'],
    reviews: [review[3], review[6], review[1], review[5]],
    quantity: 311,
    category: categories[0]._id
    },
    {
    name: "Blair's Original Death Sauce",
    image: "death.jpg",
    price: 9.99,
    description: "Blair's Original Death Sauce With Chipotle and with Skull Key Chain - This is the one that started it all back in 1989. An amazing all natural balance of heat and flavor. All of the Blairs Death Sauces come with the famous skull key chain attached to the neck of the bottle and are made with great karma! You have to have this one in your kitchen. Suggested uses: wings, clams, oysters, crawfish, chili, Bloody Marys or jambalaya",
    ingredients: ['Red and Orange Habañero Peppers', 'vinegar', 'Fresh Cayenne', 'smashed garlic', 'Chipotle', 'lime juice', 'cilantro', 'fresh herbs & spices'],
    reviews: [review[0], review[1], review[2], review[3]],
    quantity: 480,
    category: categories[0]._id
    },
    {
    name: "Chef Fartenburns Gourmet Hot Sauce",
    image: "fartenburn.jpg",
    price:6.99,
    description: "Chef Fartenburn's Gourmet Hot Sauce - Made with flavor & flair! Its a blend of 3 classic peppers along with the right amount of vinegar, onion and garlic. Some mango juice is thrown in to make everything all nice and happy. Try as a marinade for chicken, in soups and on burritos!!!",
    ingredients: ['Cayenne Peppers', 'Jalapeño Peppers', 'Habañero Peppers', 'onions', 'vinegar', 'mango juice', 'mangoes', 'tomatoes', 'roasted garlic', 'salt'],
    reviews: [review[4], review[5], review[6], review[7]],
    quantity: 92,
    category: categories[0]._id
    },
    {
    name: "Heavenly Heat Fire Ball Hot Sauce",
    image: "fire-ball.jpg",
    price: 15.99,
    description: "Heavenly Heat Fire Ball Hot Sauce - An incendiary device that contains a fiery blend of Red Savina Habañero and Scotch Bonnet Peppers. Prepare to be blown away! Shaped like a bomb with a wick and all. This sauce will blow you away. Try on wings, taco and in chili!!!",
    ingredients: ['Red Savina Habañero Peppers', 'Scotch Bonnet Peppers', 'Sweet Onion', 'White Wine Vinegar', 'Garlic & Kosher Salt'],
    reviews: [review[5], review[1], review[7], review[3]],
    quantity: 54,
    category: categories[0]._id
    },
    {
    name: "Acid Rain Scorpion Hot Sauce",
    image: "acid-rain.jpg",
    price: 10.99,
    description: "Acid Rain Scorpion Hot Sauce - The Moruga Scorpion chilli pepper, originating in Trinidad, was proclaimed the hottest chilli pepper in the world scoring an unbelievable 2 Million Scoville Heat Units. Acid Rain's passion and skills in combining tremendous heat with wonderful flavors is proven twice over with this astonishing blend of pure Moruga Scorpion pepper topped with spices. We love it ! Try this sauce in chili's, soups, and on tacos.",
    ingredients: ['Trinidad Moruga Scorpion', 'Hatari Pepper', 'Habañero', 'Piquin', 'Ring of Fire', 'Peri-Peri', 'Tepin', 'Jalapeño Peppers', 'garlic', 'ginger', 'spices', 'salt', 'lemon', 'lime', 'orange juice', 'vinegar'],
    reviews: [review[3], review[6], review[2], review[5]],
    quantity: 398,
    category: categories[1]._id
  },
    {
    name: "Angry Cock Hot Sauce",
    image: "angry-cock.jpg",
    price: 13.99,
    description: "Angry Cock Hot Sauce - Made with 80% fresh Bhut Jolokia peppers 'Ghost Chile' and a blend of select spices makes Angry Cock an extract free ultra hot sauce.",
    ingredients: ['Bhut Jolokia Chilies', 'vinegar', 'onion', 'garlic', 'Black pepper', 'Chile Caribe', 'salt', 'dehydrated vegetables'],
    reviews: [review[6], review[1], review[2], review[3]],
    quantity: 55,
    category: categories[1]._id
    },
    {
      name: "Ass in the E.R. Scorpion Pepper Sauce",
      image: "ass-er.jpg",
    price: 9.99,
    description: "Ass in the E.R. Scorpion Pepper Sauce - Joe Chileheads quest to seek out the hottest pepper pods on the planet brings him to the Emergency Room via Trinidad where he brought home the Trinidad Moruga Scorpion Chile Pepper. At over 2 million Scoville Units, the Scorpion packs almost twice the heat of a Ghost pepper and a sting to match. named after a Scorpions tail barb, this fiery fruit is guaranteed to burn twice and leave a distinguishable welt on your backside.",
    ingredients: ['Trinidad Moruga Scorpion peppers', 'fresh carrots', 'onions', 'lime juice', 'vinegar', 'garlic', 'salt'],
    reviews: [review[7], review[5], review[0], review[1]],
    quantity: 242,
    category: categories[1]._id
    },
    {
      name: "Hellfire First Blood Hot Sauce",
    image: "first-blood.jpg",
    price: 11.99,
    description: "Hellfire First Blood Hot Sauce - This sauce features the fresh all natural taste of the finest super hot peppers available with no added vinegar! It has a very high pepper content making for a super thick sauce! Like bottled Superhots picked fresh from the garden! One of my personal favorites due to the straight up flavors of the peppers including Trinidad Scorpions, Red 7-Pot, Bhut Jolokia and Chocolate Habañeros! We also added sundried tomatoes, garlic, sea salt and a touch of cumin and lemon juice! This sauce tastes great on just about anything! Especially good on Italian dishes. This all natural sauce is extremely hot! Feel the Heat & Enjoy!",
    ingredients: ['Bhut Jolokia Peppers', 'Trinidad Scorpion Peppers', 'Red 7 pod Peppers', 'Chocolate Habañero Peppers', 'sun-dried tomatoes', 'garlic', 'sea salt', 'cumin', 'lemon juice'],
    reviews: [review[0], review[6], review[2], review[4]],
    quantity: 71,
    category: categories[1]._id
    },
    {
    name: "Hellfire Next Day You Pay Hot Sauce",
    image: "next-day.jpg",
    price: 9.99,
    description: "Hellfire Next Day You Pay Hot Sauce is filled with pure pepper goodness including Bhut Jolokias (Ghost Peppers), 7 Pot Primos, Trinidad Scorpions, Red Habañeros, Red Jalapeños, and Cayenne Peppers. Its sure to please your pallete and desire for heat!",
    ingredients: ['Distilled vinegar', 'Cayenne Pepper mash', 'garlic', 'sun dried tomatoes', 'Jolokia Pepper mash', 'Red 7 Pot Primo Pepper mash', 'Red Habañero Pepper mash', 'Orange Habañero Pepper mash', 'cilantro', 'Red Jalapeño Pepper mash', 'Trinidad Scorpion Pepper mash', 'diced tomatoes', 'salt', 'cumin', 'onion', 'coriander', 'curry powder', 'lemon juice', 'lime juice'],
    reviews: [review[5], review[1], review[7], review[3]],
    quantity: 76,
    category: categories[1]._id
    },
    {
    name: "Buhba's Butt Blaster Hot Sauce",
    image: "butt-blaster.jpg",
    price: 7.99,
    description: "Buhba's Butt Blaster X-Hot Sauce - An explosion of a sauce that will make you high tail it to the old out house for relief. Buhba's is a South Carolina style extreme hot sauce. Add to your favorite mustard BBQ sauce or wings sauce and bring a little 'Butt Blasting' heat into the mix.",
    ingredients: ['Mustard', 'red wine vinegar', 'Habañero', 'sugar', 'salt', 'celery seed', 'spices', 'Chile Extract'],
    reviews: [review[0], review[1], review[6], review[7]],
    quantity: 159,
    category: categories[2]._id
    },
    {
    name: "Colon Blow-A Red Habañero Enema Hot Sauce",
    image: "colon-blow.jpg",
    price: 8.99,
    description: "Colon Blow A Red Habañero Enema Hot Sauce - A Dr. Recommended Red Habañero Enema. Constipated Then give this a try! A Red Habañero enema that comes out hotter then it went in. Guaranteed to clean you out! Recommended by 4 out of 5 proctologists. WARNING: Use extreme caution, one half drop is too much! Wash hands before touching any part of your body. The Hottest Sauce in the Human Race! Great on anything you want to add a lot of heat to!",
    ingredients: ['Red Habañero Peppers', 'tomato sauce', 'Hot Pepper Extract', 'onions', 'Red Chiles', 'garlic', 'cane vinegar', 'vegetable oil', 'spices'],
    reviews: [review[3], review[1], review[6], review[5]],
    quantity: 87,
    category: categories[2]._id
    },
    {
    name: "Pain and Suffering XXX Rated Hot Sauce",
    image: "pain-and-suffering.jpg",
    price: 6.99,
    description: "Pain & Suffering XXX Rated Hot Sauce - It hurts so bad, use with discretion. Step right up if you think you can handle it. This naughty little sauce is going to hurt you with the pleasure of an endorphin rush. A kind of chile pepper buzz or something like that. First there's pain and than there's more pain.",
    ingredients: ['Cayenne Peppers', 'salt', 'Oleoresin Cayenne', 'starch'],
    reviews: [review[0], review[5], review[2], review[3]],
    quantity: 245,
    category: categories[2]._id
    },
    {
    name: "Smack My Ass & Call Me Sally",
    image: "smack.jpg",
    price: 9.99,
    description: "Smack My Ass & Call Me Sally - The Slap Heard Around the World - So Hot it requires a Waiver! Chet says that this pepper extract sauce will knock you to your knees. It is mixed with the best tasting ingredients, and capsaicin (the ingredient used in police pepper spray) to make the hottest/greatest tasting sauce on earth. It was designed for people who think they can handle any sauce. This sauce was featured on national television shows like 'The Today Show' & 'Live with Regis & Kathy Lee'. It has been featured in national magazines ranging from 'Food & Wine' to 'Popular Mechanics'.",
    ingredients: ['Tomato paste', 'pepper extract', 'vinegar', 'molasses', 'soy sauce', 'salt'],
    reviews: [review[0], review[1], review[4], review[3]],
    quantity: 367,
    category: categories[2]._id
    },
    {
    name: "Hellfire Doomed Hot Sauce",
    image: "doomed.jpg",
    price: 17.98,
    description: "Doomed is Hellfire's hottest sauce! Spiked with 6.66 million SHU natural pepper extract, this sauce tests out in the lab at 2.76 million SHUs! Once you try this sauce you will know that you are Doomed! Use with caution!",
    ingredients: ['Distilled Vinegar', 'Water', 'Red Habanero Pepper Mash', 'Trinidad Scorpion Pepper Mash', 'Mustard', '6.66M SHU Pepper Extract', 'Garlic', 'Onions', 'Black Pepper', 'Salt', 'Turmeric and Natural Gum'],
    reviews: [review[4], review[1], review[7], review[3]],
    quantity: 624,
    category: categories[2]._id
    }
  ]);

  process.exit();
});