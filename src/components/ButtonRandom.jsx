// src = "https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.9.1/underscore-min.js";

// const { Input } = require("@material-ui/icons");

// import myJson from './dictionary.json' assert {type: 'json'};

// var dict = JSON.parse(myJson.dictionary);

// WORD RANDOMIZER (BUTTON)

import React, { useState, useEffect } from 'react';
import { Menu } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { GrHomeRounded } from 'react-icons/gr';

export default function ButtonRandom() {

    // Noun
    const generateNoun = () => {
        // 200 nouns
        const nounArray = [
            'Actor', 'Advertisement', 'Afternoon', 'Airport', 'Ambulance', 'Animal', 'Answer', 'Apple', 'Army', 'Australia', 'Balloon', 'Banana',
            'Bank', 'Battery', 'Beach', 'Beard', 'Bed', 'Belgium', 'Boy', 'Branch', 'Breakfast', 'Bridge', 'Brother', 'Camera', 'Candle', 'Car',
            'Caravan', 'Carpet', 'Cartoon', 'China', 'Church', 'Coffee', 'Crayon', 'Crowd', 'Daughter', 'Death', 'Denmark', 'Diamond', 'Dinner',
            'Disease', 'Doctor', 'Dog', 'Dream', 'Dress', 'Drum', 'Easter', 'Egg', 'Eggplant', 'Egypt', 'Elephant', 'Energy', 'Engine', 'England',
            'Evening', 'Eye', 'Family', 'Finland', 'Fish', 'Flag', 'Flower', 'Flute', 'Football', 'Forest', 'Fork', 'Fountain', 'France',
            'Furniture', 'Garage', 'Garden', 'Gas', 'Ghost', 'Girl', 'Glass', 'Gold', 'Grass', 'Greece', 'Guitar', 'Hair', 'Hairbrush', 'Hamburger',
            'Helicopter', 'Helmet', 'Holiday', 'Honey', 'Horse', 'Hospital', 'House', 'Hydrogen', 'Ice', 'Insect', 'Insurance', 'Iron', 'Island',
            'Jam', 'Jelly', 'Jewel', 'Judge', 'Juice', 'Kangaroo', 'King', 'Kitchen', 'Kite', 'Knife', 'Knight', 'Lamp', 'Lawyer', 'Letter',
            'Library', 'Lighter', 'Lion', 'Lizard', 'Lock', 'London', 'Lunch', 'Machine', 'Magazine', 'Magician', 'Manchester', 'Market', 'Match',
            'Microscope', 'Microwave', 'Monkey', 'Morning', 'Motorcycle', 'Nail', 'Napkin', 'Needle', 'Nest', 'Nigeria', 'Night', 'Notebook',
            'Ocean', 'Oil', 'Orange', 'Oxygen', 'Oyster', 'Painting', 'Park', 'Parrot', 'Pencil', 'Piano', 'Pillow', 'Pizza', 'Planet', 'Plate',
            'Portugal', 'Potato', 'Queen', 'Quill', 'Rain', 'Rainbow', 'Raincoat', 'Refrigerator', 'Restaurant', 'River', 'Rocket', 'Room',
            'Rose', 'Rwanda', 'Sandwich', 'School', 'Scooter', 'Shampoo', 'Shoe', 'Soccer', 'Spoon', 'Sprinkler', 'Stone', 'Sugar', 'Sweden',
            'Teacher', 'Telephone', 'Tent', 'Thailand', 'Tomato', 'Toothbrush', 'Traffic', 'Train', 'Truck', 'Trumpet', 'Umbrella', 'Universe',
            'Van', 'Vase', 'Vegetable', 'Volcano', 'Wall', 'Whale', 'Window', 'Wine', 'Wire', 'Xylophone', 'Yacht', 'Yellow', 'Youtube', 'Yoyo',
            'Zebra', 'Zipper', 'Zoo'
        ];
        
        let max = nounArray.length - 1;
        let min = 0;

        let RN = Math.floor(Math.random() * (max - min + 1));
        let resultingN = nounArray[RN];
        console.log(setRandomNoun(resultingN.randomNoun));
    };
    


    // Plural Noun
    const generatePluralNoun = () => {
        // 200 plural nouns
        const pluralNounArray = [
            'Actors', 'Advertisements', 'Afternoons', 'Airports', 'Ambulances', 'Animals', 'Answers', 'Apples', 'Armies', 'Atmospheres',
            'Balloons', 'Bananas', 'Banks', 'Batteries', 'Beaches', 'Beards', 'Beds', 'Birds', 'Boys', 'Branches', 'Breakfasts', 'Bridges',
            'Brothers', 'Cameras', 'Candles', 'Cars', 'Caravans', 'Carpets', 'Cartoons', 'Chocolates', 'Churches', 'Coffees', 'Crayons',
            'Crowds', 'Daughters', 'Deaths', 'Debts', 'Diamonds', 'Dinners', 'Diseases', 'Doctors', 'Dogs', 'Dreams', 'Dresses', 'Drums',
            'Ears', 'Editors', 'Eggs', 'Eggplants', 'Elephants', 'Empires', 'Engines', 'Evenings', 'Expressions', 'Eyes', 'Facilities', 'Facts',
            'Families', 'Fishes', 'Flags', 'Flights', 'Flowers', 'Flutes', 'Footballs', 'Forests', 'Forks', 'Fountains', 'Garages', 'Gardens',
            'Gases', 'Ghosts', 'Girls', 'Glasses', 'Governments', 'Grasses', 'Groceries', 'Guitars', 'Hairs', 'Hairbrushes', 'Hamburgers', 'Hats',
            'Helicopters', 'Helmets', 'Holidays', 'Horses', 'Hospitals', 'Hotels', 'Houses', 'Iceburgs', 'Insects', 'Insurances', 'Irons', 'Islands',
            'Jams', 'Jellys', 'Jewels', 'Judges', 'Juices', 'Kangaroos', 'Kings', 'Kitchens', 'Kites', 'Knives', 'Knights', 'Labs', 'Lamps',
            'Lawyers', 'Letters', 'Libraries', 'Lighters', 'Lions', 'Lizards', 'Locks', 'Lunches', 'Machines', 'Magazines', 'Magicians', 'Maps',
            'Markets', 'Matches', 'Microscopes', 'Microwaves', 'Monkeys', 'Mornings', 'Motorcycles', 'Nails', 'Napkins', 'Needles', 'Nests',
            'Newpapers', 'Nights', 'Notebooks', 'Oceans', 'Oils', 'Oranges', 'Ovens', 'Oysters', 'Paintings', 'Parks', 'Parrots', 'Pencils',
            'Photos', 'Pianos', 'Pillows', 'Pizzas', 'Planets', 'Plates', 'Potatoes', 'Queens', 'Quills', 'Rainbows', 'Raincoats', 'Recipes',
            'Reflections', 'Refrigerators', 'Restaurants', 'Rivers', 'Rockets', 'Rooms', 'Roses', 'Sandwiches', 'Schools', 'Scooters', 'Shampoos',
            'Shirts', 'Shoes', 'Spoons', 'Sprinklers', 'Stones', 'Students', 'Sugars', 'Teachers', 'Telephones', 'Televisions', 'Tents',
            'Tomatoes', 'Toothbrushes', 'Towns', 'Trains', 'Trucks', 'Trumpets', 'Umbrellas', 'Uncles', 'Vans', 'Vases', 'Vegetables', 'Volcanoes',
            'Walls', 'Whales', 'Windows', 'Wines', 'Wires', 'Xylophones', 'Yachts', 'Years', 'Youths', 'Yoyos', 'Zebras', 'Zippers', 'Zoos'
        ];

        let max2 = pluralNounArray.length - 1;
        let min2 = 0;

        let RPN = Math.floor(Math.random() * (max2 - min2 + 1));
        let resultingPN = pluralNounArray[RPN];
        setRandomPluralNoun(resultingPN.randomPluralNoun);
    };


    // Verb
    const generateVerb = () => {
        // 200 verbs
        const verbArray = [
            'Accept', 'Achieve', 'Add', 'Admire', 'Adopt', 'Advise', 'Age', 'Agree', 'Allow', 'Announce', 'Appreciate', 'Approve',
            'Argue', 'Arrive', 'Ask', 'Assist', 'Attack', 'Bake', 'Balance', 'Bathe', 'Be', 'Beat', 'Become', 'Beg', 'Behave', 'Bet',
            'Boast', 'Boil', 'Borrow', 'Breathe', 'Bring', 'Build', 'Burn', 'Bury', 'Buy', 'Call', 'Catch', 'Challenge', 'Change', 'Cheat',
            'Chew', 'Choose', 'Clap', 'Clean', 'Collect', 'Compare', 'Complain', 'Confess', 'Confuse', 'Construct', 'Control', 'Copy', 'Count',
            'Create', 'Cry', 'Damage', 'Dance', 'Deliver', 'Destroy', 'Devote', 'Disagree', 'Drag', 'Drift', 'Drive', 'Drop', 'Earn', 'Eat',
            'Employ', 'Encourage', 'Enjoy', 'Establish', 'Estimate', 'Exercise', 'Expand', 'Explain', 'Fear', 'Feel', 'Fight', 'Find', 'Fly',
            'Forget', 'Forgive', 'Fry', 'Gather', 'Get', 'Give', 'Glow', 'Greet', 'Grow', 'Guess', 'Harass', 'Hate', 'Hear', 'Help', 'Hit',
            'Hope', 'Identify', 'Intend', 'Interrupt', 'Introduce', 'Irritate', 'Jump', 'Keep', 'Kick', 'Kiss', 'Laugh', 'Learn', 'Leave',
            'Lend', 'Lie', 'Lift', 'Like', 'Listen', 'Live', 'Look', 'Lose', 'Love', 'Make', 'Marry', 'Measure', 'Meet', 'Move', 'Murder',
            'Obey', 'Offend', 'Offer', 'Open', 'Owe', 'Paint', 'Pay', 'Peer', 'Pick', 'Play', 'Pray', 'Print', 'Promote', 'Propose', 'Pull',
            'Punch', 'Punish', 'Purchase', 'Push', 'Quit', 'Race', 'Read', 'Recall', 'Relax', 'Remember', 'Reply', 'Resolve', 'Retire', 'Rise',
            'Rub', 'See', 'Select', 'Sell', 'Send', 'Sing', 'Sink', 'Snore', 'Speed', 'Spot', 'Stand', 'Stare', 'Start', 'Stop', 'Struggle',
            'Study', 'Substitute', 'Sweep', 'Swim', 'Tackle', 'Take', 'Talk', 'Teach', 'Tear', 'Telephone', 'Tell', 'Thank', 'Train', 'Travel',
            'Try', 'Type', 'Understand', 'Use', 'Value', 'Visit', 'Vow', 'Wait', 'Walk', 'Want', 'Warn', 'Wed', 'Weep', 'Win', 'Wink', 'Worry',
            'Write', 'Yell', 'Yearn'
        ];

        let max3 = verbArray.length - 1;
        let min3 = 0;

        let RV = Math.floor(Math.random() * (max3 - min3 + 1));
        let resultingV = verbArray[RV];
        setRandomVerb(resultingV.randomVerb);
    };


    // Verb -ING
    const generateVerbING = () => {
        // 200 verbs ending in -ING
        const verbINGArray = [
            'Accepting', 'Achieving', 'Adding', 'Admiring', 'Adopting', 'Advising', 'Aging', 'Agreeing', 'Allowing', 'Announcing', 'Appreciating',
            'Approving', 'Arguing', 'Arriving', 'Asking', 'Assisting', 'Attacking', 'Baking', 'Balancing', 'Bathing', 'Being', 'Beating',
            'Becoming', 'Begging', 'Behaving', 'Betting', 'Boasting', 'Boiling', 'Borrowing', 'Breathing', 'Bringing', 'Building', 'Burning',
            'Burying', 'Buying', 'Calling', 'Catching', 'Challenging', 'Changing', 'Cheating', 'Chewing', 'Choosing', 'Clapping', 'Cleaning',
            'Collecting', 'Comparing', 'Complaining', 'Confessing', 'Confusing', 'Constructing', 'Controlling', 'Copying', 'Counting', 'Creating',
            'Crying', 'Damaging', 'Dancing', 'Delivering', 'Destroying', 'Devoting', 'Disagreeing', 'Dragging', 'Drifting', 'Driving',
            'Dropping', 'Earning', 'Eating', 'Employing', 'Encouraging', 'Enjoying', 'Establishing', 'Estimating', 'Exercising', 'Expanding',
            'Explaining', 'Fearing', 'Feeling', 'Fighting', 'Finding', 'Flying', 'Forgeting', 'Forgiving', 'Frying', 'Gathering', 'Getting',
            'Giving', 'Glowing', 'Greeting', 'Growing', 'Guessing', 'Harassing', 'Hating', 'Hearing', 'Helping', 'Hitting', 'Hoping',
            'Identifying', 'Intending', 'Interrupting', 'Introducing', 'Irritating', 'Jumping', 'Keeping', 'Kicking', 'Kissing', 'Laughing',
            'Learning', 'Leaving', 'Lending', 'Lying', 'Lifting', 'Liking', 'Listening', 'Living', 'Looking', 'Losing', 'Loving', 'Making',
            'Marrying', 'Measuring', 'Meeting', 'Moving', 'Murdering', 'Obeying', 'Offending', 'Offering', 'Opening', 'Owing', 'Painting',
            'Paying', 'Peering', 'Picking', 'Playing', 'Praying', 'Printing', 'Promoting', 'Proposing', 'Pulling', 'Punching', 'Punishing',
            'Purchasing', 'Pushing', 'Quitting', 'Racing', 'Reading', 'Recalling', 'Relaxing', 'Remembering', 'Replying', 'Resolving',
            'Retiring', 'Rising', 'Rubbing', 'Seeing', 'Selecting', 'Selling', 'Sending', 'Singing', 'Sinking', 'Snoring', 'Speeding', 'Spotting',
            'Standing', 'Staring', 'Starting', 'Stopping', 'Struggling', 'Studying', 'Substituting', 'Sweeping', 'Swimming', 'Tackling',
            'Taking', 'Talking', 'Teaching', 'Tearing', 'Telephoning', 'Telling', 'Thanking', 'Training', 'Traveling', 'Trying', 'Typing',
            'Understanding', 'Using', 'Valuing', 'Visiting', 'Vowing', 'Waiting', 'Walking', 'Wanting', 'Warning', 'Waving', 'Weeping', 'Winning',
            'Winking', 'Worrying', 'Writing', 'Yelling', 'Yearning'
        ];

        let max4 = verbINGArray.length - 1;
        let min4 = 0;

        let RVING = Math.floor(Math.random() * (max4 - min4 + 1));
        let resultingVING = verbINGArray[RVING];
        setRandomVerbING(resultingVING.randomVerbING);
    };


    // Adverb
    const generateAdverb = () => {
        // 200 adverbs
        const adverbArray = [
            'Absentmindedly', 'Accidentally', 'Actually', 'Adventurously', 'Afterward', 'Almost', 'Always', 'Angrily', 'Anually', 'Anxiously',
            'Arrogantly', 'Awkwardly', 'Bashfully', 'Beautifully', 'Bitterly', 'Bleakly', 'Blindly', 'Blissfully', 'Boastfully', 'Boldly',
            'Bravely', 'Briefly', 'Brightly', 'Briskly', 'Broadly', 'Busily', 'Calmly', 'Carefully', 'Carelessly', 'Cautiously', 'Certainly',
            'Cheerfully', 'Clearly', 'Cleverly', 'Closely', 'Coaxingly', 'Colorfully', 'Commonly', 'Continually', 'Coolly', 'Correctly',
            'Courageously', 'Crossly', 'Cruelly', 'Curiously', 'Daily', 'Daintily', 'Dearly', 'Deceivingly', 'Deeply', 'Defiantly', 'Deliberately',
            'Delightfully', 'Diligently', 'Dimly', 'Doubtfully', 'Dreamily', 'Easily', 'Elegantly', 'Energetically', 'Enormously',
            'Enthusiastically', 'Equally', 'Especially', 'Evenly', 'Eventually', 'Exactly', 'Excitedly', 'Extremely', 'Fairly', 'Faithfully',
            'Famously', 'Hopefully', 'Hungrily', 'Immediately', 'Innocently', 'Inquisitively', 'Instantly', 'Intensely', 'Interestingly',
            'Inwardly', 'Irritably', 'Jaggedly', 'Loosely', 'Nearly', 'Neatly', 'Nervously', 'Never', 'Nicely', 'Noisily', 'Not', 'Obediently',
            'Obnoxiously', 'Oddly', 'Offensively', 'Officially', 'Often', 'Only', 'Openly', 'Optimistically', 'Overconfidently', 'Painfully',
            'Partially', 'Patiently', 'Permanently', 'Perfectly', 'Personally', 'Physically', 'Playfully', 'Politely', 'Poorly', 'Positively',
            'Potentially', 'Powerfully', 'Promptly', 'Properly', 'Punctually', 'Quintly', 'Queasily', 'Questionably', 'Quicker', 'Quickly',
            'Quietly', 'Quirkly', 'Quizzically', 'Randomly', 'Rapidly', 'Rarely', 'Readily', 'Really', 'Reassuringly', 'Recklessly', 'Regularly',
            'Reluctantly', 'Repeatedly', 'Reproachfully', 'Restfully', 'Righteously', 'Rightfully', 'Rigidly', 'Roughly', 'Rudely', 'Safely',
            'Scarcely', 'Scarily', 'Searchingly', 'Sedately', 'Seemingly', 'Seldomly', 'Selfishly', 'Separately', 'Seriously', 'Shakily',
            'Sharply', 'Sheepishly', 'Shrilly', 'Shyly', 'Silently', 'Sleepily', 'Slowly', 'Smoothly', 'Softly', 'Solemnly', 'Solidly', 'Sometimes',
            'Soon', 'Speedily', 'Stealthily', 'Sternly', 'Strictly', 'Successfully', 'Suddenly', 'Supposedly', 'Surprisingly', 'Suspiciously',
            'Sweetly', 'Swiftly', 'Sympathetically', 'Tenderly', 'Tensely', 'Terribly', 'Thankfully', 'Thoroughly', 'Thoughtfully', 'Tightly',
            'Tommorrow', 'Too', 'Tremendously', 'Triumphantly', 'Truly', 'Ultimately', 'Unabashedly', 'Unaccountably', 'Unbearably', 'Unethically',
            'Unexpectedly', 'Unfortunately', 'Unimpressively', 'Unnaturally', 'Urgently'
        ];

        let max5 = adverbArray.length - 1;
        let min5 = 0;
        
        let RADV = Math.floor(Math.random() * (max5 - min5 + 1));
        let resultingADV = adverbArray[RADV];
        setRandomAdverb(resultingADV.randomAdverb);
    };


    // Adjective
    const generateAdjective = () => {
        // 200 adjectives
        const adjectiveArray = [
            'Abandoned', 'Abnormal', 'Absolute', 'Acedemic', 'Accidental', 'Accurate', 'Active', 'Adaptable', 'Adjustable', 'Adventurous',
            'Afraid', 'Alert', 'Ambitious', 'Ancient', 'Arrogant', 'Average', 'Awful', 'Bashful', 'Basic', 'Beautiful', 'Best', 'Big',
            'Bitter', 'Black', 'Blue', 'Blushing', 'Boring', 'Brave', 'Breezy', 'Bumpy', 'Busy', 'Calm', 'Careless', 'Caring', 'Cautious',
            'Charming', 'Cheap', 'Chilly', 'Colorful', 'Common', 'Cool', 'Curly', 'Cute', 'Damaged', 'Damp', 'Dark', 'Depressed', 'Descriptive',
            'Different', 'Difficult', 'Dirty', 'Dry', 'Dull' ,'Dusty', 'Eager', 'Easy', 'Earthy', 'Edible', 'Efficient', 'Emotional',
            'Empty', 'Exclusive', 'Exotic', 'Expensive', 'Far', 'Fast', 'Fat', 'Flaky', 'Flat', 'Flimsy', 'Foreign', 'Fresh', 'Full', 'Funny',
            'Furry', 'Gaudy', 'Gentle', 'Gifted', 'Good', 'Great', 'Greedy', 'Green', 'Grey', 'Groovy', 'Grumpy', 'Gullible', 'Hairy', 'Handy',
            'Happy', 'Hard', 'Heavy', 'Hesitant', 'Hilarious', 'Hollow', 'Hot', 'Icky', 'Icy', 'Ignorant', 'Ill', 'Important', 'Insidious',
            'Invincible', 'Jaded', 'Jolly', 'Joyous', 'Juicy', 'Kind', 'Large', 'Late', 'Lazy', 'Lean', 'Left', 'Light', 'Little', 'Long',
            'Loud', 'Loving', 'Lucky', 'Lush', 'Mad', 'Magenta', 'Magical', 'Many', 'Mature', 'Mean', 'Mellow', 'Melted', 'Mixed', 'Muddy',
            'Narrow', 'Natural', 'Neat', 'Nervous', 'New', 'Nice', 'Nifty', 'Nimble', 'Noisy', 'Observant', 'Odd', 'Old', 'Omniscient', 'Open',
            'Orange', 'Ordinary', 'Organic', 'Outgoing', 'Overrated', 'Perfect', 'Pink', 'Popular', 'Precious', 'Pretty', 'Private', 'Proud',
            'Purple', 'Pushy', 'Quick', 'Quiet', 'Quiky', 'Rare', 'Ratty', 'Red', 'Rhetorical', 'Ripe', 'Rough', 'Round', 'Rude', 'Salty',
            'Scarce', 'Secret', 'Shy', 'Sleepy', 'Sour', 'Spicy', 'Steep', 'Stiff', 'Suspicious', 'Sweet', 'Tall', 'Tangy', 'Tense', 'Terrible',
            'Thick', 'Tidy', 'Tiny', 'Tired', 'Tricky', 'Ugly', 'Unbiased', 'Unique', 'Upset', 'Vague', 'Warm', 'Weak', 'Wet', 'Whole', 'Wise',
            'Young', 'Zesty'
        ];

        let max6 = adjectiveArray.length - 1;
        let min6 = 0;

        let RADJ = Math.floor(Math.random() * (max6 - min6 + 1));
        let resultingADJ = adjectiveArray[RADJ];
        setRandomAdjective(resultingADJ.randomAdjective);
    };


    // Body Part
    const generateBodyPart = () => {
        // 29 body part
        const bodyPartArray = [
            'Arm', 'Cheek', 'Chest', 'Chin', 'Ear', 'Elbow', 'Eyebrow', 'Eye', 'Face', 'Finger', 'Foot', 'Forehead', 'Hand', 'Hair', 'Head',
            'Heel', 'Jaw', 'Knee', 'Knuckle', 'Leg', 'Mouth', 'Neck', 'Nose', 'Shin', 'Shoulder', 'Stomach', 'Toe', 'Tongue', 'Tooth'
        ];

        let max7 = bodyPartArray.length - 1;
        let min7 = 0;

        let RBP = Math.floor(Math.random() * (max7 - min7 + 1));
        let resultingBP = bodyPartArray[RBP];
        setRandomBodyPart(resultingBP.randomBodyPart);
    };


    // Body Parts
    const generateBodyParts = () => {
        // 20 body parts
        const bodyPartsArray = [
            'Arms', 'Cheeks', 'Ears', 'Elbows', 'Eyebrows', 'Eyes', 'Fingers', 'Feet', 'Hands', 'Hairs', 'Heels', 'Knees', 'Knuckles', 'Legs',
            'Nails', 'Shins', 'Shoulders', 'Teeth', 'Toes', 'Tonsils'
        ];

        let max8 = bodyPartsArray.length - 1;
        let min8 = 0;

        let RBPS = Math.floor(Math.random() * (max8 - min8 + 1));
        let resultingBPS = bodyPartsArray[RBPS];
        setRandomBodyParts(resultingBPS.randomBodyParts);
    };


    // Location
    const generateLocation = () => {
        // 28 locations
        const locationArray = [
            'City', 'Home', 'Hospital', 'Office', 'Park', 'School', 'Veterinarian', 'Adana, Turkey', 'Akita, Japan', 'Athens, Greece',
            'Bangkok, Thailand', 'Beijing, China', 'Berlin, Germany', 'Cairo, Egypt', 'Chicago, IL', 'Delavan, WI', 'Dublin, Ireland', 'Fargo, ND',
            'Havana, Cuba', 'London, England', 'Montreal, Canada', 'Newcastle, Australia', 'Odense, Denmark', 'Paris, France', 'Rome, Italy',
            'Seoul, South Korea', 'Sevilla, Spain', 'Warsaw, Poland'
        ];

            let max9 = locationArray.length - 1;
            let min9 = 0;

            let RL = Math.floor(Math.random() * (max9 - min9 + 1));
            let resultingL = locationArray[RL];
            setRandomLocation(resultingL.randomLocation);
        };


    // Color
    const generateColor = () => {
        // 40 colors
        const colorArray = [
            'red', 'maroon', 'mauve', 'fuchsia', 'magenta', 'peach', 'pink', 'orange', 'tangerine', 'yellow', 'lemon', 'green', 'mint',
            'jade', 'lime', 'emerald', 'olive', 'blue', 'cyan', 'denim', 'indigo', 'teal', 'turquoise', 'navy', 'purple', 'lavender',
            'violet', 'amethyst', 'plum', 'black', 'white', 'grey', 'gold', 'silver', 'bronze', 'amber', 'tan', 'brown'
        ];

        let max10 = colorArray.length - 1;
        let min10 = 0;

        let RC = Math.floor(Math.random() * (max10 - min10 + 1));
        let resultingC = colorArray[RC];
        setRandomColor(resultingC.randomColor);
    };


    // Number
    const generateNumber = () => {
        // random number generator
        let max11 = 1000;
        let min11 = 0;

        let RN = Math.floor(Math.random() * (max11 - min11 + 1));
        setRandomNum(RN.randomNum);
    };


    const [ randomNoun, setRandomNoun ] = useState('');
    const [ randomPluralNoun, setRandomPluralNoun ] = useState('');
    const [ randomVerb, setRandomVerb ] = useState('');
    const [ randomVerbING, setRandomVerbING ] = useState('');
    const [ randomAdverb, setRandomAdverb ] = useState('');
    const [ randomAdjective, setRandomAdjective ] = useState('');
    const [ randomBodyPart, setRandomBodyPart ] = useState('');
    const [ randomBodyParts, setRandomBodyParts ] = useState('');
    const [ randomLocation, setRandomLocation ] = useState('');
    const [ randomColor, setRandomColor ] = useState('');
    const [ randomNum, setRandomNum ] = useState('');

    return(
        <div className="px-6 py-10 ring-1 ring-slate-900/5 shadow-2xl">
            <h3 className="text-slate-900 mt-0 text-base font-medium mb-10">Random Word Generator:</h3>
            <div className="text-slate-500 dark:text-slate-400 mt-2 text-xs">
                <div className="relative">
                    <p className="display-results pb-5"></p>
                    <button className="bg-red-500 text-white py-1 px-2 rounded-full mx-1">
                        Noun
                    </button>
                    <button className="bg-green-500 text-white py-1 px-2 rounded-full mx-1">
                        Plural Noun
                    </button>
                    <button className="bg-purple-500 text-white py-1 px-2 rounded-full mx-1">
                        Verb
                    </button>
                    <button className="bg-blue-500 text-white py-1 px-2 rounded-full mx-1">
                        Verb-ING
                    </button>
                    <button className="bg-orange-500 text-white py-1 px-2 rounded-full mx-1">
                        Adverb
                    </button>
                    <button className="bg-teal-500 text-white py-1 px-2 rounded-full mx-1">
                        Adjective
                    </button>
                    <button className="bg-pink-500 text-white py-1 px-2 rounded-full mx-1">
                        Body Part
                    </button>
                    <button className="bg-yellow-500 text-white py-1 px-2 rounded-full mx-1">
                        Body Parts
                    </button>
                    <button className="bg-emerald-500 text-white py-1 px-2 rounded-full mx-1">
                        Location
                    </button>
                    <button className="bg-sky-500 text-white py-1 px-2 rounded-full mx-1">
                        Color
                    </button>
                    <button className="bg-rose-500 text-white py-1 px-2 rounded-full mx-1">
                        Number
                    </button>
                </div>
            </div>
        </div>
    )
}