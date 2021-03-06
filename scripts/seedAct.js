const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/activities", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
 mongoose.connection
 .once("open", () => console.log("connected"))
 .on("error", (error) => {
    console.log("err: ", error)
 })

const activitySeed = [
    {
        title: "Venus Williams' at-home Workout", 
        description: "Workout like the stars with this at-home workout tutorial by Venus Williams",
        href: " https://www.popsugar.com/fitness/venus-williams-instagram-at-home-workout-47344751",
        likes: 0,
        category: "Fitness" 
    }, 
    {
        title: "Black Bean Burger", 
        description: "A yummy way to eat semi-healthy and enjoy it!",
        href: "https://sallysbakingaddiction.com/best-black-bean-burgers/",
        likes: 0,
        category: "Cooking"
    },
    {
        title: "How to Cut your Own Hair", 
        description: "Don't let those locks get out of hand in the quarantine!",
        href: "https://www.allure.com/story/how-to-cut-your-own-hair",
        likes: 0,
        category: "Random"
    },
    {
        title: "Bookbinding 101", 
        description: "Japanese book binding technique to make your own journal",
        href: "https://www.designsponge.com/2013/03/bookbinding-101-japanese-four-hold-binding.html",
        likes: 0,
        category: "Crafts" 
    },
    {
        title: "How To Decoupage With Napkins", 
        description: "How To Decoupage With Napkins - Decoupage Planter",
        href: "https://placeofmytaste.com/how-to-decoupage-with-napkins-decoupage-planter/?fbclid=IwAR2tbBeD4CBuA0U4Q2s45TjmPpckwXdHtdgzED1rYwm5yKBLaaspM3HGGjA",
        likes: 0,
        category: "Crafts" 
    },
    {
        title: "Grilled Mediterranean Bruschetta Salmon", 
        description: "Grilled Mediterranean Bruschetta Salmon Recipe",
        href: "https://www.beautifuleatsandthings.com/2018/08/23/grilled-mediterranean-bruschetta-salmon/",
        likes: 0,
        category: "Cooking" 
    },
    {
        title: "Full Body Yoga Workout", 
        description: "Full Body Yoga Workout For Beginners",
        href: "https://yogarove.com/full-body-yoga-workout/",
        likes: 0,
        category: "Fitness" 
    },
    {
        title: "Learn How To Line Dance", 
        description: "Learn How To Line Dance",
        href: "https://www.youtube.com/watch?v=xLvpGl1wOto",
        likes: 0,
        category: "Random" 
    },
    {
        title:"20 Min Full Body Workout",
        description:"An intense 20 min full body workout you can do at home! No equipment necessary!",
        href:"https://www.youtube.com/watch?v=oKfNUOWuZV8", 
        likes: 0,
        category: "Fitness" 
    },
    {
        title:"DIY EASTER EGG WREATH",
        description:"EASTER EGG WREATH TUTORIAL",
        href:"https://craftsbyamanda.com/easter-egg-wreath/",
        likes: 0,
        category: "Crafts" 
    },
    {
        title:"Tempeh Reubens",
        description:"Vegetarian Sandwich",
        href:"https://www.myrecipes.com/recipe/tempeh-reubens",
        likes: 0,
        category: "Cooking" 
    },
    {
        title:"Throw an Indoor Picnic",
        description:"Set out a picnic blanket and basket of food and eat your dinner as though you were having a picnic.",
        href:"https://www.lifehack.org/articles/lifestyle/30-fun-things-home.html",
        likes: 0,
        category: "Random"
     }, 
    {
        title: "Bacon & Spinach Stuffed Chicken",
        description: "Bacon and chicken - yum, yum!",
        href: "https://www.delish.com/cooking/recipe-ideas/a30982780/bacon-and-spinach-stuffed-chicken-recipe/",
        likes: 0,
        category: "Cooking" 
    },
    {
        title: "Buffalo Shrimp Lettucs Wraps",
        description: "Meet your new favorite low-carb lunch. It's super-flavorful, fresh, and it's ready in under an hour!",
        href: "https://www.delish.com/cooking/a26331032/buffalo-shrimp-lettuce-wraps-recipe/",
        likes: 0,
        category: "Cooking" 
    },
    {
        title: "Honey Walnut Shrimp",
        description: "Trust, you'll want to eat this one allll week.",
        href: "https://www.delish.com/cooking/recipe-ideas/a25861120/honey-walnut-shrimp-recipe/",
        likes: 0,
        category: "Cooking" 
    },
    {
        title: "Home Workout #6",
        description: "Train like Batman!",
        href: "https://www.nerdfitness.com/blog/the-7-best-at-home-workout-routines-the-ultimate-guide-for-training-without-a-gym/#at_home_workout_6",
        likes: 0,
        category: "Fitness" 
    },
    {
        title: "Angry Birds Workout Plan",
        description: "A workout using body weight squats, pushups, pull ups and planks, varied by level of fitness",
        href: "https://www.nerdfitness.com/blog/angry-birds-workout-plan/",
        likes: 0,
        category: "Fitness" 
    },
    {
        title: "Full-Body No-Equipment Cardio Workout",
        description: "A no equipment needed workout with videos",
        href: "https://www.self.com/gallery/full-body-bodyweight-cardio-workout",
        likes: 0,
        category: "Fitness" 
    },
    {
        title: "Quick Core Workout",
        description: "This Abs Workout Hits Your Entire Core in Under 8 Minutes",
        href: "https://www.self.com/gallery/quick-core-workout",
        likes: 0,
        category: "Fitness" 
    },
    {
        title: "How To Make Kids' Finger Paints",
        description: "Make your own (really thick) flour based finger paints. Never run out again!",
        href: "https://www.hgtv.com/design/make-and-celebrate/handmade/diy-thick-finger-paints",
        likes: 0,
        category: "Crafts" 
    },
    {
        title: "Cardboard Tube Seed-Starting",
        description: "Try using old toilet paper or paper towel tubes for a budget seed-starting option.",
        href: "https://www.hgtv.com/design/make-and-celebrate/handmade/easy-diy-crafts-anyone-can-do-pictures",
        likes: 0,
        category: "Crafts" 
    },
    {
        title: "Upcycled Wine Cork Board",
        description: "Start saving up your wine corks to make this simple recycled memo board.",
        href: "https://www.hgtv.com/design/make-and-celebrate/handmade/upcycled-wine-cork-board",
        likes: 0,
        category: "Crafts" 
    },
    {
        title: "Rainbowtize Your Books",
        description: "The Unsung Perk of Putting Books in Rainbow Order",
        href: "https://www.apartmenttherapy.com/kids-room-organization-idea-books-by-color-260450",
        likes: 0,
        category: "Random" 
    },
    {
        title: "DIY Lavender Linen Spray",
        description: "Feel like cleaning? Make your own essential oil spray",
        href: "https://wholefully.com/diy-lavender-linen-spray/",
        likes: 0,
        category: "Random" 
    },
    {
        title: "Block-Printing with DIY stamps",
        description: "Turn basic household items into simple stamps, then create your own custom-stamped towels and napkins.",
        href: "https://www.hgtv.com/design/make-and-celebrate/handmade/how-to-block-print-napkins-with-simple-diy-stamps-pictures",
        likes: 0,
        category: "Crafts"
    },
    {
        title: "Best Pancakes Ever", 
        description: "Recipe for Pancakes",
        href: "https://www.tasteofhome.com/recipes/the-best-ever-pancakes/",
        likes: 0,
        category: "Cooking" 
    },
    {
        title: "At Home Leg Exercise", 
        description: "Leg Exercise for Women, No Equipment Required",
        href: "https://www.self.com/gallery/killer-legs-no-gear-required-slideshow",
        likes: 0,
        category: "Fitness" 
    },
    {
        title: "3D Star Craft", 
        description: "Instructions for Making 3D Decor Stars",
        href: "https://www.youtube.com/watch?v=nQ4qgwDTpC4",
        likes: 0,
        category: "Crafts" 
    },
    {
        title: "Indoor Camping Date", 
        description: "Ideas for a Fun Night Indoors",
        href: "http://www.darlingbedaring.com/camping-date-night-for-two-please/",
        likes: 0,
        category: "Random"
    },
    {
        title: "Write a Haiku Poem",
        description: "A haiku (high-koo) is a short three-line poem that uses sensory language to capture a feeling or image.",
        href: "https://www.wikihow.com/Write-a-Haiku-Poem",
        likes: 0,
        category: "Random"
    },
    {
        title: "5 Books That Will Make You Happier, According to Bibliotherapists",
        description: "Did you know that reading books can literally act as a form of therapy?",
        href: "https://www.goodhousekeeping.com/health/wellness/g3704/books-that-will-make-you-happier/",
        likes: 0,
        category: "Random"
    },
    {
        title: "Learn to Juggle 3 Balls",
        description: "Watch a video to learn to juggle!",
        href: "https://www.youtube.com/watch?v=cqF0oRNJFys",
        likes: 0,
        category: "Random"
    },
    {
        title: "Learn to Blog",
        description: "Learn how to make money on your blog.",
        href: "https://www.thesimpledollar.com/make-money/how-to-start-a-blog-a-side-business-primer/",
        likes: 0,
        category: "Random"
    },
    {
        title: "Learn a New Subject",
        description: "Select and learn a new topic for FREE through MIT's Open Courseware",
        href: "https://ocw.mit.edu/index.htm",
        likes: 0,
        category: "Random"
    },
    {
        title: "Make Colorful Leaves With Your Kids",
        description: "Bring out the coffee filters and markers to create a twist on leaf projects.",
        href: "https://www.scholastic.com/teachers/articles/teaching-content/crafts-colorful-fall-leaves/",
        likes: 0,
        category: "Crafts"
    },
    {
        title: "Recycled Egg-Carton Flowers",
        description: "Watch young artists blossom as they transform egg cartons into colorful flowers. Video included!",
        href: "https://www.scholastic.com/teachers/articles/teaching-content/crafts-recycled-egg-carton-flowers/",
        likes: 0,
        category: "Crafts"
    },
    {
        title:"Bum Buster Workout",
        description:"A 15 minute at home butt/bum/glute workout that is intense! No equipment needed for this home workout!",
        href:"https://www.youtube.com/watch?v=bggX6ocjojk", 
        likes: 0,
        category: "Fitness"
            },
        {
        title:"Upcycle: Straw Wreath",
        description:"How to Make a Starburst Wreath from Paper Straws",
        href:"https://designimprovised.com/2018/09/how-to-make-starburst-wreath-from-paper-straws.html", 
        likes: 0,
        category: "Crafts"
            },
        {
        title:"Banana Bread",
        description:"Very basic and forgiving recipe that takes 10 minutes for banana bread",
        href:"https://www.thekitchn.com/how-to-make-banana-bread-the-simplest-easiest-recipe-139900", 
        likes: 0,
        category: "Cooking"
            },
        {
        title:"DIY Beauty Masks",
        description:"13 Must-Follow Recipes for the Perfect Homemade Face Masks",
        href:"https://www.thehealthy.com/beauty/face-body-care/homemade-facial-masks-recipes/", 
        likes: 0,
        category: "Random"
    },
    {
        title:"No Equipment Workouts",
        description:"Visual Workout Guides for Full Bodyweight, No Equipment Training",
        href:"http://thirdmonk.net/lifestyle/visual-workout-guides-bodyweight.html", 
        likes: 0,
        category: "Fitness"
    },
    {
        title:"Plastic Spoon Crafts",
        description:"16 crafts you can do at home by upcycling your plastic spoons",
        href:"https://www.alittlecraftinyourday.com/2016/04/30/plastic-spoon-crafts/", 
        likes: 0,
        category: "Crafts"
    },
    {
        title:"Healthy Breakfast Smoothies",
        description:"These healthy smoothie recipes provide filling fiber and protein for energy",
        href:"https://kristineskitchenblog.com/21-healthy-breakfast-smoothie-recipes/", 
        likes: 0,
        category: "Cooking"
    },
    {
        title:"Guide to Organizing Closet",
        description:"The Ultimate Guide to Organizing Your Closet and Making Life Easier",
        href:"https://www.thespruce.com/how-to-organize-your-closet-2648411", 
        likes: 0,
        category: "Random"
    },  
    {
        title: "Makeover Your Plastic Storage Drawers",
        description: "Add some color to your ugly plastic storage drawer.",
        href: "https://craftsbyamanda.com/makeover-plastic-storage-drawers/",
        likes: 0,
        category: "Crafts"
    },
    {
        title: "Upcycled Dog Toy",
        description: "With just scissors and a shirt you can make your furry pal a new toy.",
        href: "https://www.favecrafts.com/Pet-Crafts/Easy-Upcycled-Dog-Toy",
        likes: 0,
        category: "Crafts"
    },
    {
        title: "At-Home Workout Using Only Your Stairs",
        description: "You can do this 20-minute stair workout right at home.",
        href: "https://www.livestrong.com/article/13725583-20-minute-at-home-workout-stairs/",
        likes: 0,
        category: "Fitness"
    },
    {
        title: "3 Ingredient Chocolate Cereal Treats",
        description: "A twist on the classic.",
        href: "https://tasty.co/recipe/3-ingredient-chocolate-cereal-treats",
        likes: 0,
        category: "Cooking"
    },
    {
        title: "Peanut Butter Cups",
        description: "3 ingredients to make your favorite yummmy treat.",
        href: "https://tasty.co/recipe/3-ingredient-peanut-butter-cups",
        likes: 0,
        category: "Cooking"
    },
    {
        title: "Strawberry Icebox Cake",
        description: "Using only 3 ingredients you can make a delicious cold treat!",
        href: "https://tasty.co/recipe/3-ingredient-strawberry-icebox-cake",
        likes: 0,
        category: "Cooking"
    },
    {
        title: "Build A Do Anything Core",
        description: "10 steps to get a do anything core.",
        href: "https://www.outsideonline.com/1987466/definitive-10-step-guide-building-do-anything-core",
        likes: 0,
        category: "Fitness"
    },
    {
        title: "Resistance Band Leg Workout",
        description: "Resistance bands offer the best bang for your buck, challenging little-used muscle groups that make a big difference",
        href: "https://www.outsideonline.com/2397255/best-resistance-bands-exercises-legs ",
        likes: 0,
        category: "Fitness"
    },
    {
        title: "14 Types of Push-Ups",
        description: "It's the world's most convenient workout. And the possibilities are endless.",
        href: "https://www.outsideonline.com/2390287/types-of-pushups",
        likes: 0,
        category: "Fitness"
    },
    {
        title: "DIY Tree Branch Shadow Chandelier",
        description: "Save $$$ and make your own tree branch chandelier.",
        href: "http://diytag.com/how-to-make-forest-inspired-diy-tree-branch-shadow-chandelier/",
        likes: 0,
        category: "Crafts"
    },
    {
        title: "Driftwood Seahorse",
        description: "Using pieces of driftwood you can make this amazing sea creature on your wall.",
        href: "https://www.creativeinchicago.com/2013/07/driftwood-seahorse-tutorial.html",
        likes: 0,
        category: "Crafts"
    },
    {
        title: "Tea Light Holder From A Tin Can",
        description: "This tea light holder is one of the best tin can transformations on the internet!",
        href: "https://makefuncreating.com/posts/how-to-make-a-decorative-tea-light-holder-from-a-tin-can/",
        likes: 0,
        category: "Crafts"
    },
    {
        title: "How To Tie Bow Ties",
        description: "Learn to tie a bow tie",
        href: "http://www.tie-a-tie.net/bowtie/",
        likes: 0,
        category: "Random"
    },
    {
        title: "Skittles Vodka Recipe",
        description: "This tutorial takes you step by step through the process of making five flasks of Skittles vodka.",
        href: "https://mixthatdrink.com/skittles-vodka-tutorial/",
        likes: 0,
        category: "Cooking"
    },
    {
        title: "How To Train Your Dog",
        description: "A thorough explantion of how to train your pooch.",
        href: "https://www.thesprucepets.com/steps-to-train-your-dog-1118273",
        likes: 0,
        category: "Random"
    },
    {
        title: "Things To Do Outside",
        description: "A list of 23 RANDOM things to do outside.",
        href: "https://randomthingstodo.com/23-things-to-do-outside",
        likes: 0,
        category: "Random"
    },
    {
        title: "Cookie Dough Box Cupcakes",
        description: "An easy to do cupcake recipe for cookie-dough lovers.",
        href: "https://tasty.co/recipe/cookie-dough-box-cupcakes",
        likes: 0,
        category: "Cooking"
    },
    {
        title: "No-Bake Cookie Dough Chocolate Cups",
        description: "Don't feel like baking? No problem with this no-bake cookie-dough cup recipe.",
        href: "https://tasty.co/recipe/cookie-dough-chocolate-cups",
        likes: 0,
        category: "Cooking"
    },
    {
        title: "One-Pot Swedish Meatball Pasta",
        description: "Easy to do, one pot pasta.",
        href: "https://tasty.co/recipe/one-pot-swedish-meatball-pasta",
        likes: 0,
        category: "Cooking"
    },
    {
        title: "Low Carb Pad Thai",
        description: "Stay Healthy while enjoying your favorite dishes!",
        href: "https://tasty.co/recipe/low-carb-pad-thai",
        likes: 0,
        category: "Cooking"
    },
    {
        title: "Booty-Band Workouts",
        description: "8 easy-to-follow booty band workouts from youtube that will kick your butt.",
        href: "https://www.popsugar.com/fitness/photo-gallery/46319017/embed/46319028/embed",
        likes: 0,
        category: "Fitness"
    },
    {
        title: "Britney Spears Squat Challenge",
        description: "Drop it low for this 'Toxic' Britney Spears squat challenge.",
        href: "https://www.popsugar.com/fitness/madfit-squat-challenge-workout-toxic-britney-spears-47390727",
        likes: 0,
        category: "Fitness"
    },
    {
        title: "Make Your Own Candles",
        description: "Make your own candles in 8 easy steps!",
        href: "https://www.proflowers.com/blog/how-to-make-candles",
        likes: 0,
        category: "Crafts"
    },
    {
        title: "Upcycle: Cut Wine Bottles into Reusable Cups",
        description: "Reuse those wine bottles for candles, vases, or glasses!",
        href: "https://www.curbly.com/7923-how-to-cuttin-glass-and-taking-names",
        likes: 0,
        category: "Crafts"
    },
    {
        title: "Upcycle: Various Uses for Old Wine Bottles",
        description: "Creative ways to use old wine bottles!",
        href: "http://theartofthers.blogspot.com/2010/10/taste-for-upcycled-wine-bottles_17.html",
        likes: 0,
        category: "Crafts"
    },
    {
        title: "Become Instagram Famous",
        description: "5 steps to becoming Instagram famous.",
        href: "https://www.travelandleisure.com/travel-tips/mobile-apps/tips-for-how-to-be-better-at-instagram",
        likes: 0,
        category: "Random"
    },
    {
        title: "How to Use Tik Tok",
        description: "A guide for those who aren't teens.",
        href: "https://www.wired.com/story/how-to-use-tik-tok/",
        likes: 0,
        category: "Random"
    },
    {
        title: "Beer Can Chicken",
        description: "Making Moist Oven Chicken with Beer",
        href: "https://www.youtube.com/watch?v=gWAKIOpcYtY",
        likes: 0,
        category: "Cooking"
    },
    {
        title: "Boozy Brownies",
        description: "Bourbon Brownies to make at home",
        href: "https://www.youtube.com/watch?v=SmSTr8lmYnU",
        likes: 0,
        category: "Cooking"
    },
    {
        title: "Upcycle Liquor Bottles",
        description: "Turning your empty bottles into artwork",
        href: "https://www.youtube.com/watch?v=sHM3QEkUXUQ",
        likes: 0,
        category: "Crafts"
    },
    {
        title: "Beer Cap Bartop",
        description: "Mark a bar top out of beer caps",
        href: "https://www.youtube.com/watch?v=Ru0goqTRCCE",
        likes: 0,
        category: "Crafts"
    },
    {
        title: "Workout with Wine",
        description: "Utilize wine bottles as your workout weights",
        href: "https://www.youtube.com/watch?v=j4E39tbN2HA",
        likes: 0,
        category: "Fitness"
    },
    {
        title: "Alcohol and Weight Loss",
        description: "Best alcohol to drink when trying to lose weight",
        href: "https://www.youtube.com/watch?v=Ri7FMSlB70k",
        likes: 0,
        category: "Fitness"
    },
    {
        title: "Curb Appeal on a Budget",
        description: "How to add some value to your house on the cheap",
        href: "https://www.youtube.com/watch?v=ruXDKOoq17c",
        likes: 0,
        category: "Random"
    },
    {
        title: "Change your own Oil",
        description: "Learn how to change your car oil",
        href: "https://www.youtube.com/watch?v=TnS53T3gcPg",
        likes: 0,
        category: "Random"
    },
    {
        title: "31 One-Pot Recipes",
        description: "A large variety of simple one-pot recipes instructions in video",
        href: "https://www.youtube.com/watch?v=M61viP3prdQ",
        likes: 0,
        category: "Cooking"
    },
    {
        title: "All-Natural No-Bake Cookies",
        description: "Quick, easy, and delicious no-bake cookies.",
        href: "https://www.allrecipes.com/recipe/230959/all-natural-no-bake-cookies/",
        likes: 0,
        category: "Cooking"
    },
    {
        title: "Quick cardio workout",
        description: "Quick Sweat Cardio Workout to Lose Weight & Burn Belly Fat Fast",
        href: "https://www.youtube.com/watch?v=X1TuhAn6C-g",
        likes: 0,
        category: "Fitness"
    },
    {
        title: "High-intensity interval training (HIIT)",
        description: "A 20-Minute Bodyweight HIIT Workout You Can Do in Your Living Room",
        href: "https://www.self.com/gallery/20-minute-bodyweight-hiit-workout",
        likes: 0,
        category: "Fitness"
    },
    {
        title: "33 Mason Jar Crafts for Every Room in the House",
        description: "Mason jars: They're not just for harvesters and weddings anymore. ",
        href: "https://www.goodhousekeeping.com/home/craft-ideas/g2668/mason-jar-ideas/",
        likes: 0,
        category: "Crafts"
    },
    {
        title: "10 Easy Paper Craft Projects",
        description: "Simple DIY paper crafts",
        href: "https://www.youtube.com/watch?v=LT63e4A1wnU",
        likes: 0,
        category: "Crafts"
    }
]
    db.Activity
    .deleteMany({})
    .then(() => db.Activity.collection.insertMany(activitySeed))
    .then(data => {
        console.log(data.result.n + "records inserted")
        process.exit(0)
    })
    .catch(err => {
        console.error(err);
        process.exit(1)
    });
  
