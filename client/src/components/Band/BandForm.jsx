// CREATE
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const BandForm = (props) => {

    const { bandList, setBandList } = props;

    const [yourName, setYourName] = useState("");
    const [adjective, setAdjective] = useState("");
    const [name, setName] = useState("");
    const [adjective2, setAdjective2] = useState("");
    const [noun, setNoun] = useState("");
    const [adjective3, setAdjective3] = useState("");
    const [pluralNoun, setPluralNoun] = useState("");
    const [noun2, setNoun2] = useState("");
    const [adjective4, setAdjective4] = useState("");
    const [pluralNoun2, setPluralNoun2] = useState("");
    const [noun3, setNoun3] = useState("");
    const [adjective5, setAdjective5] = useState("");
    const [pluralNoun3, setPluralNoun3] = useState("");
    const [adjective6, setAdjective6] = useState("");
    const [adjective7, setAdjective7] = useState("");
    const [noun4, setNoun4] = useState("");
    const [adverb, setAdverb] = useState("");
    const [letter, setLetter] = useState("");
    const [noun5, setNoun5] = useState("");

    // const [error, setError] = useState({});
    // const [errorMessage, setErrorMessage] = useState({});

    const navigate = useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault();

        // const newEntry = {
        //     yourName, adjective, name, adjective2, noun, adjective3, pluralNoun, noun2, adjective4, pluralNoun2, noun3, adjective5, pluralNoun3, adjective6, adjective7, noun4, adverb, letter, noun5
        // };

        // // word restriction
        // const Xwords = [
        //     '2 girls 1 cup', '2g1c', '4r5e', '5h1t', '5hit', 'a$$', 'a$$hole', 'a_s_s', 'a2m', 'a54', 'a55', 'a55hole', 'aeolus', 'ahole', 'alabama hot pocket',
        //     'alaskan pipeline', 'anal', 'anal impaler', 'anal leakage', 'analannie', 'analprobe', 'analsex', 'anilingus', 'anus', 'apeshit', 'ar5e', 'areola',
        //     'areole', 'arian', 'arrse', 'arse', 'arsehole', 'aryan', 'ass', 'ass fuck', 'ass hole', 'assault', 'assbag', 'assbagger', 'assbandit', 'assbang',
        //     'assbanged', 'assbanger', 'assbangs', 'assbite', 'assblaster', 'assclown', 'asscock', 'asscracker', 'asses', 'assface', 'assfaces', 'assfuck',
        //     'assfucker', 'ass-fucker', 'assfukka', 'assgoblin', 'assh0le', 'asshat', 'ass-hat', 'asshead', 'assho1e', 'asshole', 'assholes', 'asshopper',
        //     'asshore', 'ass-jabber', 'assjacker', 'assjockey', 'asskiss', 'asskisser', 'assklown', 'asslick', 'asslicker', 'asslover', 'assman', 'assmaster',
        //     'assmonkey', 'assmucus', 'assmunch', 'assmuncher', 'assnigger', 'asspacker', 'asspirate', 'ass-pirate', 'asspuppies', 'assranger', 'assshit',
        //     'assshole', 'asssucker', 'asswad', 'asswhole', 'asswhore', 'asswipe', 'asswipes', 'auto erotic', 'autoerotic', 'axwound', 'azazel', 'azz,b!tch',
        //     'b00bs', 'b17ch', 'b1tch', 'babe', 'babeland', 'babes', 'baby batter', 'baby juice', 'badfuck', 'ball gag', 'ball gravy', 'ball kicking', 'ball licking',
        //     'ball sack', 'ball sucking', 'ballbag', 'balllicker', 'balls', 'ballsack', 'bampot', 'bang', `bang (one's) box`, 'bangbros', 'banger', 'banging',
        //     'bareback', 'barely legal', 'barenaked', 'barf', 'barface', 'barfface', 'bastard', 'bastardo', 'bastards', 'bastinado', 'batty boy', 'bawdy', 'bazongas',
        //     'bazooms', 'bbw', 'bdsm', 'beaner', 'beaners', 'beardedclam', 'beastial', 'beastiality', 'beatch', 'beater', 'beatyourmeat', 'beaver', 'beaver cleaver',
        //     'beaver lips', 'beef curtain', 'beef curtains', 'beeyotch', 'bellend', 'bender', 'beotch', 'bestial', 'bestiality', 'bi+ch', 'biatch', 'bicurious',
        //     'big black', 'big breasts', 'big knockers', 'big tits', 'bigbastard', 'bigbutt', 'bigger', 'bigtits', 'bimbo', 'bimbos', 'bint', 'birdlock', 'bisexual',
        //     'bi-sexual', 'bitch', 'bitch tit', 'bitchass', 'bitched', 'bitcher', 'bitchers', 'bitches', 'bitchez', 'bitchin', 'bitching', 'bitchtits', 'bitchy',
        //     'black cock', 'blonde action', 'blonde on blonde action', 'bloodclaat', 'bloody', 'bloody hell', 'blow job', 'blow me', 'blow mud', 'blow your load',
        //     'blowjob', 'blowjobs', 'blue waffle', 'blumpkin', 'boang', 'bod', 'bodily', 'bogan', 'bohunk', 'boink', 'boiolas', 'bollick', 'bollock', 'bollocks',
        //     'bollok', 'bollox', 'bomd', 'bomb', 'bondage', 'bone', 'boned', 'boner', 'boners', 'bong', 'boob', 'boobies', 'boobs', 'booby', 'booger', 'bookie', 'boong',
        //     'boonga', 'booobs', 'boooobs', 'booooobs', 'booooooobs', 'bootee', 'bootie', 'booty', 'booty call', 'booze', 'boozer', 'boozy', 'bosom', 'bosomy', 'bowel',
        //     'bowels', 'bra', 'brassiere', 'breast', 'breastjob', 'breastlover', 'breastman', 'breasts', 'breeder', 'brotherfucker', 'brown showers', 'brunette action',
        //     'buceta', 'bugger', 'buggered', 'buggery', 'bukkake', 'bull shit', 'bullcrap', 'bulldike', 'bulldyke', 'bullet vibe', 'bullshit', 'bullshits',
        //     'bullshitted', 'bullturds', 'bum', 'bum boy', 'bumblefuck', 'bumclat', 'bumfuck', 'bummer', 'bung', 'bung hole', 'bunga', 'bunghole', 'bunny fucker',
        //     'bust a load', 'busty', 'butchdike', 'butchdyke', 'butt', 'butt fuck', 'butt plug', 'buttbang', 'butt-bang', 'buttcheeks', 'buttface', 'buttfuck',
        //     'butt-fuck', 'buttfucka', 'buttfucker', 'butt-fucker', 'butthead', 'butthole', 'buttman', 'buttmuch', 'buttmunch', 'buttmuncher', 'butt-pirate',
        //     'buttplug', 'c.0.c.k', 'c.o.c.k.', 'c.u.n.t', 'c0ck', 'c-0-c-k', 'c0cksucker', 'caca', 'cahone', 'camel toe', 'cameltoe', 'camgirl', 'camslut', 'camwhore',
        //     'carpet muncher', 'carpetmuncher', 'cawk', 'cervix', 'chesticle', 'chi-chi man', 'chick with a dick', 'child-fucker', 'chinc', 'chincs', 'chink', 'chinky',
        //     'choad', 'choade', 'choc ice', 'chocolate rosebuds', 'chode', 'chodes', 'chota bags', 'cipa', 'circlejerk', 'cl1t', 'cleveland steamer', 'climax', 'clit',
        //     'clit licker', 'clitface', 'clitfuck', 'clitoris', 'clitorus', 'clits', 'clitty', 'clitty litter', 'clogwog', 'clover clamps', 'clunge', 'clusterfuck',
        //     'cnut', 'cocain', 'cocaine', 'cock', 'cunt', 'c-o-c-k', 'cock pocket', 'cock snot', 'cock sucker', 'cockass', 'cockbite', 'cockblock', 'cockburger',
        //     'cockeye', 'cockface', 'cockfucker', 'cockhead', 'cockholster', 'cockjockey', 'cockknocker', 'cockknoker', 'cocklicker', 'cocklover', 'cocklump',
        //     'cockmaster', 'cockmongler', 'cockmongruel', 'cockmonkey', 'cockmunch', 'cockmuncher', 'cocknose', 'cocknugget', 'cocks', 'cockshit', 'cocksmith',
        //     'cocksmoke', 'cocksmoker', 'cocksniffer', 'cocksucer', 'cocksuck', 'cocksuck', 'cocksucked', 'cocksucker', 'cock-sucker', 'cocksuckers', 'cocksucking',
        //     'cocksucks', 'cocksuka', 'cocksukka', 'cockwaffle', 'coffin dodger', 'coital', 'cok', 'cokmuncher', 'coksucka', 'commie', 'condom', 'coochie', 'coochy',
        //     'coon', 'coonnass', 'coons', 'cooter', 'cop some wood', 'coprolagnia', 'coprophilia', 'corksucker', 'cornhole', 'corp whore', 'cox', 'crabs', 'crack',
        //     'cracker', 'crackwhore', 'crack-whore', 'creampie', 'cretin', 'crikey', 'cripple', 'crotte', 'cum', 'cum chugger', 'cum dumpster', 'cum freak', 'cum guzzler',
        //     'cumbubble', 'cumdump', 'cumdumpster', 'cumguzzler', 'cumjockey', 'cummer', 'cummin', 'cumming', 'cums', 'cumshot', 'cumshots', 'cumslut', 'cumstain',
        //     'cumtart', 'cunilingus', 'cunillingus', 'cunn', 'cunnie', 'cunnilingus', 'cunntt', 'cunny', 'c-u-n-t', 'cunt hair', 'cuntass', 'cuntbag', 'cuntface',
        //     'cuntfuck', 'cuntfucker', 'cunthole', 'cunthunter', 'cuntlick', 'cuntlick', 'cuntlicker', 'cuntlicker', 'cuntlicking', 'cuntrag', 'cunts', 'cuntsicle',
        //     'cuntslut', 'cunt-struck', 'cuntsucker', 'cut rope', 'cyalis', 'cyberfuc', 'cyberfuck', 'cyberfucked', 'cyberfucker', 'cyberfuckers', 'cyberfucking',
        //     'cybersex', 'd0ng', 'd0uch3', 'd0uche', 'd1ck', 'd1ld0', 'd1ldo', 'dago', 'dagos', 'dammit', 'damn', 'damned', 'damnit', 'darkie', 'darn', 'date rape',
        //     'daterape', 'dawgie-style', 'deep throat', 'deepthroat', 'deggo', 'dendrophilia', 'dick', 'dick head', 'dick hole', 'dick shy', 'dickbag', 'dickbeaters',
        //     'dickbrain', 'dickdipper', 'dickface', 'dickflipper', 'dickfuck', 'dickfucker', 'dickhead', 'dickheads', 'dickhole', 'dickish', 'dick-ish', 'dickjuice',
        //     'dickmilk', 'dickmonger', 'dickripper', 'dicks', 'dicksipper', 'dickslap', 'dick-sneeze', 'dicksucker', 'dicksucking', 'dicktickler', 'dickwad', 'dickweasel',
        //     'dickweed', 'dickwhipper', 'dickwod', 'dickzipper', 'diddle', 'dike', 'dildo', 'dildos', 'diligaf', 'dillweed', 'dimwit', 'dingle', 'dingleberries',
        //     'dingleberry', 'dink', 'dinks', 'dipship', 'dipshit', 'dirsa', 'dirty pillows', 'dirty sanchez', 'dlck', 'dog style', 'dog-fucker', 'doggie style',
        //     'doggiestyle', 'doggie-style', 'doggin', 'dogging', 'doggy style', 'doggystyle', 'doggy-style', 'dolcett', 'domination', 'dominatrix', 'dommes', 'dong',
        //     'donkey punch', 'donkeypunch', 'donkeyribber', 'doochbag', 'doofus', 'dookie', 'doosh', 'double dong', 'double penetration', 'doublelift', 'douch3',
        //     'douche', 'douchebag', 'douchebags', 'douche-fag', 'douchewaffle', 'douchey', 'dp action', 'dry hump', 'duche', 'dumass', 'dumb ass', 'dumbass', 'dumbasses',
        //     'dumbcunt', 'dumbfuck', 'dumbshit', 'dummy', 'dumshit', 'dvda', 'dyke', 'dykes', 'eat a dick', 'eat hair pie', 'eat my ass', 'eatpussy', 'ecchi', 'ejaculate',
        //     'ejaculated', 'ejaculates', 'ejaculating', 'ejaculatings', 'ejaculation', 'ejakulate', 'enlargement', 'erect', 'erection', 'erotic', 'erotism', 'escort',
        //     'essohbee', 'eunuch', 'extacy', 'extasy', 'f u c k', 'f u c k e r', 'f.u.c.k', 'f_u_c_k', 'f4nny', 'facefucker', 'facial', 'fack', 'fag', 'fagbag',
        //     'fagfucker', 'fagg', 'fagged', 'fagging', 'faggit', 'faggitt', 'faggot', 'faggotcock', 'faggots', 'faggs', 'fagot', 'fagots', 'fags', 'fagtard', 'faig',
        //     'faigt', 'fanny', 'fannybandit', 'fannyflaps', 'fannyfucker', 'fanyy', 'fartknocker', 'fastfuck', 'fatass', 'fatfuck', 'fatfucker', 'fcuk', 'fcuker',
        //     'fcuking', 'fecal', 'feck', 'fecker', 'felch', 'felcher', 'felching', 'fellate', 'fellatio', 'feltch', 'feltcher', 'female squirting', 'femdom', 'fenian',
        //     'figging', 'fingerbang', 'fingerfuck', 'fingerfuck', 'fingerfucked', 'fingerfucker', 'fingerfucker', 'fingerfuckers', 'fingerfucking', 'fingerfucks',
        //     'fingering', 'fist fuck', 'fisted', 'fistfuck', 'fistfucked', 'fistfucker', 'fistfucker', 'fistfuckers', 'fistfucking', 'fistfuckings', 'fistfucks',
        //     'fisting', 'fisty', 'flamer', 'flange', 'flaps', 'fleshflute', 'flog the log', 'floozy', 'foad', 'foah', 'fondle', 'foobar', 'fook', 'fooker', 'foot fetish',
        //     'footfuck', 'footfucker', 'footjob', 'footlicker', 'foreskin', 'freakfuck', 'freakyfucker', 'freefuck', 'freex', 'frigg', 'frigga', 'frotting', 'fubar',
        //     'fuc', 'fuck', 'f-u-c-k', 'fuck buttons', 'fuck hole', 'fuck off', 'fuck puppet', 'fuck trophy', 'fuck yo mama', 'fuck you', 'fucka', 'fuckass', 'fuck-ass',
        //     'fuckbag', 'fuck-bitch', 'fuckboy', 'fuckbrain', 'fuckbutt', 'fuckbutter', 'fucked', 'fuckedup', 'fucker', 'fuckers', 'fuckersucker', 'fuckface', 'fuckfreak',
        //     'fuckhead', 'fuckheads', 'fuckher', 'fuckhole', 'fuckin', 'fucking', 'fuckingbitch', 'fuckings', 'fuckingshitmotherfucker', 'fuckme', 'fuckme', 'fuckmeat',
        //     'fuckmehard', 'fuckmonkey', 'fucknugget', 'fucknut', 'fucknutt', 'fuckoff', 'fucks', 'fuckstick', 'fucktard', 'fuck-tard', 'fucktards', 'fucktart', 'fucktoy',
        //     'fucktwat', 'fuckup', 'fuckwad', 'fuckwhit', 'fuckwhore', 'fuckwit', 'fuckwitt', 'fuckyou', 'fudge packer', 'fudgepacker', 'fudge-packer', 'fuk', 'fuker',
        //     'fukker', 'fukkers', 'fukkin', 'fuks', 'fukwhit', 'fukwit', 'fuq', 'futanari', 'fux', 'fux0r', 'fvck', 'fxck', 'gae', 'gai', 'gang bang', 'gangbang',
        //     'gang-bang', 'gangbanged', 'gangbangs', 'ganja', 'gash', 'gassy ass', 'gay sex', 'gayass', 'gaybob', 'gaydo', 'gayfuck', 'gayfuckist', 'gaylord', 'gays',
        //     'gaysex', 'gaytard', 'gaywad', 'gender bender', 'genitals', 'gey', 'gfy', 'ghay', 'ghey', 'giant cock', 'gigolo', 'ginger', 'gippo', 'girl on', 'girl on top',
        //     'girls gone wild', 'git', 'glans', 'goatcx', 'goatse', 'god damn', 'godamn', 'godamnit', 'goddam', 'god-dam', 'goddammit', 'goddamn', 'goddamned',
        //     'god-damned', 'goddamnit', 'goddamnmuthafucker', 'godsdamn', 'gokkun', 'golden shower', 'goldenshower', 'golliwog', 'gonad', 'gonads', 'gonorrehea',
        //     'goo girl', 'gooch', 'goodpoop', 'gook', 'gooks', 'goregasm', 'gotohell', 'gringo', 'grope', 'group sex', 'gspot', 'g-spot', 'gtfo', 'guido', 'guro',
        //     'h0m0', 'h0mo', 'hom0', 'ham flap', 'hand job', 'handjob', 'hard core', 'hard on', 'hardcore', 'hardcoresex', 'he11', 'headfuck', 'hebe', 'heeb', 'hemp',
        //     'hentai', 'heroin', 'herp', 'herpes', 'herpy', 'heshe', 'he-she', 'hitler', 'hiv', 'ho', 'hoar', 'hoare', 'hobag', 'hoe', 'hoer', 'holy shit', 'homey', 'homo',
        //     'homodumbshit', 'homoerotic', 'homoey', 'honkey', 'honky', 'hooch', 'hookah', 'hooker', 'hoor', 'hootch', 'hooter', 'hooters', 'hore', 'horniest', 'horny',
        //     'hot carl', 'hot chick', 'hotpussy', 'hotsex', 'how to kill', 'how to murdep', 'how to murder', 'huge fat', 'hump', 'humped', 'humping', 'hun', 'hussy', 'hymen',
        //     'iap', 'iberian slap', 'inbred', 'incest', 'injun', 'intercourse', 'j3rk0ff', 'jack off', 'jackass', 'jackasses', 'jackhole', 'jackoff', 'jack-off', 'jaggi',
        //     'jagoff', 'jail bait', 'jailbait', 'jap', 'japs', 'jerk', 'jerk off', 'jerk0ff', 'jerkass', 'jerked', 'jerkoff', 'jerk-off', 'jigaboo', 'jiggaboo', 'jiggerboo',
        //     'jism', 'jiz', 'jizm', 'jizz', 'jizzed', 'jock', 'juggs', 'jungle bunny', 'junglebunny', 'junkie', 'junky', 'kafir', 'kawk', 'kike', 'kikes', 'kill', 'kinbaku',
        //     'kinkster', 'kinky', 'kkk', 'klan', 'knob', 'knob end', 'knobbing', 'knobead', 'knobed', 'knobend', 'knobhead', 'knobjocky', 'knobjokey', 'kock', 'kondum',
        //     'kondums', 'kooch', 'kooches', 'kootch', 'kraut', 'kum', 'kummer', 'kumming', 'kums', 'kunilingus', 'kunja', 'kunt', 'kwif', 'kyke', 'l3i+ch', 'l3itch', 'labia',
        //     'lameass', 'lardass', 'leather restraint', 'leather straight jacket', 'lech', 'lemon party', 'leper', 'lesbian', 'lesbians', 'lesbo', 'lesbos', 'lez', 'lezbian',
        //     'lezbians', 'lezbo', 'lezbos', 'lezza', 'lezzie', 'lezzies', 'lezzy', 'lmao', 'lmfao', 'loin', 'loins', 'lolita', 'looney', 'lovemaking', 'lube', 'lust',
        //     'lusting', 'lusty', 'm0f0', 'm0fo', 'm45terbate', 'ma5terb8', 'ma5terbate', 'mafugly', 'make me come', 'male squirting', 'mams', 'masochist', 'massa',
        //     'masterb8', 'masterbat', 'masterbat3', 'masterbate', 'master-bate', 'masterbating', 'masterbation', 'masterbations', 'masturbate', 'masturbating', 'masturbation',
        //     'maxi', 'mcfagget', 'menage a trois', 'menses', 'menstruate', 'menstruation', 'meth', 'm-fucking', 'mick', 'middle finger', 'midget', 'milf', 'minge', 'minger',
        //     'missionary position', 'mof0', 'mofo', 'mo-fo', 'molest', 'mong', 'moo moo foo foo', 'moolie', 'moron', 'mothafuck', 'mothafucka', 'mothafuckas', 'mothafuckaz',
        //     'mothafucked', 'mothafucker', 'mothafuckers', 'mothafuckin', 'mothafucking', 'mothafuckings', 'mothafucks', 'mother fucker', 'motherfuck', 'motherfucka',
        //     'motherfucked', 'motherfucker', 'motherfuckers', 'motherfuckin', 'motherfucking', 'motherfuckings', 'motherfuckka', 'motherfucks', 'mound of venus', 'mr hands',
        //     'mtherfucker', 'mthrfucker', 'mthrfucking', 'muff', 'muff diver', 'muff puff', 'muffdiver', 'muffdiving', 'munging', 'munter', 'murder', 'mutha', 'muthafecker',
        //     'muthafuckaz', 'muthafuckker', 'muther', 'mutherfucker', 'mutherfucking', 'muthrfucking', 'n1gga', 'n1gger', 'nad', 'nads', 'naked', 'nambla', 'napalm',
        //     'nappy', 'nawashi', 'nazi', 'nazism', 'need the dick', 'negro', 'neonazi', 'nig nog', 'nigaboo', 'nigg3r', 'nigg4h', 'nigga', 'niggah', 'niggas', 'niggaz',
        //     'nigger', 'niggers', 'niggle', 'niglet', 'nig-nog', 'nimphomania', 'nimrod', 'ninny', 'nipple', 'nipples', 'nob', 'nob jokey', 'nobhead', 'nobjocky',
        //     'nobjokey', 'nonce', 'nooky', 'nsfw images', 'nude', 'nudity', 'numbnuts', 'nut butter', 'nut sack', 'nutsack', 'nutter', 'nympho', 'nymphomania','octopussy',
        //     'old bag', 'omg', 'omorashi', 'one cup two girls', 'one guy one jar', 'opiate', 'opium', 'oral', 'orally', 'organ', 'orgasim', 'orgasims', 'orgasm', 'orgasmic',
        //     'orgasms', 'orgies', 'orgy', 'ovary', 'ovum', 'ovums', 'p.u.s.s.y.', 'p0rn', 'paddy', 'paedophile', 'paki', 'panooch', 'pansy', 'pantie', 'panties', 'panty',
        //     'pastie', 'pasty', 'pawn', 'pcp', 'pecker', 'peckerhead', 'pedo', 'pedobear', 'pedophile', 'pedophilia', 'pedophiliac', 'pee', 'peepee', 'pegging', 'penetration',
        //     'penial', 'penile', 'penis', 'penisbanger', 'penisfucker', 'penispuffer', 'perversion', 'peyote', 'phalli', 'phallic', 'phone sex', 'phonesex', 'phuck', 'phuk',
        //     'phuked', 'phuking', 'phukked', 'phukking', 'phuks', 'phuq', 'piece of shit', 'pigfucker', 'pikey', 'pillowbiter', 'pimp', 'pimpis', 'pinko', 'piss', 'piss off',
        //     'piss pig', 'pissed', 'pissed off', 'pisser', 'pissers', 'pisses', 'pissflaps', 'pissin', 'pissing', 'pissoff', 'piss-off', 'pisspig', 'playboy', 'pleasure chest',
        //     'pms', 'polack', 'pole smoker', 'polesmoker', 'pollock', 'ponyplay', 'poof', 'poon', 'poonani', 'poonany', 'poontang', 'poop', 'poop chute', 'poopchute',
        //     'poopuncher', 'porch monkey', 'porchmonkey', 'porn', 'porno', 'pornography', 'pornos', 'pot', 'potty', 'prick', 'pricks', 'prickteaser', 'prig',
        //     'prince albert piercing', 'prod', 'pron', 'prostitute', 'prude', 'psycho', 'pthc', 'pube', 'pubes', 'pubic', 'pubis', 'punani', 'punanny', 'punany', 'punkass',
        //     'punky', 'punta', 'puss', 'pusse', 'pussi', 'pussies', 'pussy', 'pussy fart', 'pussy palace', 'pussylicking', 'pussypounder', 'pussys', 'pust', 'puto', 'queaf',
        //     'queef', 'queer', 'queerbait', 'queerhole', 'queero', 'queers', 'quicky', 'quim', 'racy', 'raghead', 'raging boner', 'rape', 'raped', 'raper', 'rapey', 'raping',
        //     'rapist', 'raunch', 'rectal', 'rectum', 'rectus', 'reefer', 'reetard', 'reich', 'renob', 'retard', 'retarded', 'reverse cowgirl', 'revue', 'rimjaw', 'rimjob',
        //     'rimming', 'ritard', 'rosy palm', 'rosy palm and her 5 sisters', 'rtard', 'r-tard', 'rubbish', 'rum', 'rump', 'rumprammer', 'ruski', 'rusty trombone', 's hit',
        //     's&m', 's.h.i.t.', 's.o.b.', 's_h_i_t', 's0b', 'sadism', 'sadist', 'sambo', 'sand nigger', 'sandbar', 'sandler', 'sandnigger', 'sanger', 'santorum',
        //     'sausage queen', 'scag', 'scantily', 'scat', 'schizo', 'schlong', 'scissoring', 'scroat', 'scrog', 'scrot', 'scrote', 'scrotum', 'scrud', 'scum', 'seaman',
        //     'seamen', 'seduce', 'seks', 'semen', 'sex', 'sexo', 'sexual', 'sexy', 'sh!+', 'sh!t', 'sh1t', 's-h-1-t', 'shag', 'shagger', 'shaggin', 'shagging', 'shamedame',
        //     'shaved beaver', 'shaved pussy', 'shemale', 'shi+', 'shibari', 'shirt lifter', 'shit', 's-h-i-t', 'shit ass', 'shit fucker', 'shitass', 'shitbag', 'shitbagger',
        //     'shitblimp', 'shitbrains', 'shitbreath', 'shitcanned', 'shitcunt', 'shitdick', 'shite', 'shiteater', 'shited', 'shitey', 'shitface', 'shitfaced', 'shitfuck',
        //     'shitfull', 'shithead', 'shitheads', 'shithole', 'shithouse', 'shiting', 'shitings', 'shits', 'shitspitter', 'shitstain', 'shitt', 'shitted', 'shitter',
        //     'shitters', 'shittier', 'shittiest', 'shitting', 'shittings', 'shitty', 'shiz', 'shiznit', 'shota', 'shrimping', 'sissy', 'skag', 'skank', 'skeet', 'skullfuck',
        //     'slag', 'slanteye', 'slave', 'sleaze', 'sleazy', 'slope', 'slut', 'slut bucket', 'slutbag', 'slutdumper', 'slutkiss', 'sluts', 'smartass', 'smartasses', 'smeg',
        //     'smegma', 'smut', 'smutty', 'snatch', 'sniper', 'snowballing', 'snuff', 's-o-b', 'sod off', 'sodom', 'sodomize', 'sodomy', 'son of a bitch',
        //     'son of a motherless goat', 'son of a whore', 'son-of-a-bitch', 'souse', 'soused', 'spac', 'spade', 'sperm', 'spic', 'spick', 'spik', 'spiks', 'splooge',
        //     'splooge moose', 'spooge', 'spook', 'spread legs', 'spunk', 'steamy', 'stfu', 'stiffy', 'stoned', 'strap on', 'strapon', 'strappado', 'strip', 'strip club',
        //     'stroke', 'stupid', 'style doggy', 'suck', 'suckass', 'sucked', 'sucking', 'sucks', 'suicide girls', 'sultry women', 'sumofabiatch', 'swastika', 'swinger', 't1t',
        //     't1tt1e5', 't1tties', 'taff', 'taig', 'tainted love', 'taking the piss', 'tampon', 'tard', 'taste my', 'tawdry', 'tea bagging', 'teabagging', 'teat', 'teets',
        //     'teez', 'terd', 'teste', 'testee', 'testes', 'testical', 'testicle', 'testis', 'threesome', 'throating', 'thrust', 'thug', 'thundercunt', 'tied up', 'tight white',
        //     'tinkle', 'tit', 'tit wank', 'titfuck', 'titi', 'tities', 'tits', 'titt', 'tittie5', 'tittiefucker', 'titties', 'titty', 'tittyfuck', 'tittyfucker', 'tittywank',
        //     'titwank', 'toke', 'tongue in a', 'toots', 'tosser', 'towelhead', 'tramp', 'tranny', 'transsexual', 'tribadism', 'trumped', 'tub girl', 'tubgirl', 'turd',
        //     'tush', 'tushy', 'tw4t', 'twat', 'twathead', 'twatlips', 'twats', 'twatty', 'twatwaffle', 'twink', 'twinkie', 'two fingers', 'two fingers with tongue',
        //     'two girls one cup', 'twunt', 'twunter', 'unclefucker', 'undies', 'upskirt', 'urethra play', 'urinal', 'urine', 'urophilia', 'uterus', 'uzi', 'v14gra', 'v1gra',
        //     'vag', 'vagina', 'vajayjay', 'va-j-j', 'valium', 'venus mound', 'veqtable', 'viagra', 'vibrator', 'violet wand', 'virgin', 'vjayjay', 'vorarephilia', 'voyeur',
        //     'vulva', 'w00se', 'wad', 'wang', 'wank', 'wanker', 'wankjob', 'wanky', 'wazoo', 'wedgie', 'weed', 'weenie', 'weewee', 'wench', 'wet dream', 'wetback', 'wh0re',
        //     'wh0reface', 'white power', 'whitey', 'whiz', 'whoar', 'whoralicious', 'whore', 'whorealicious', 'whorebag', 'whored', 'whoreface', 'whorehopper', 'whorehouse',
        //     'whores', 'whoring', 'wigger', 'willies', 'willy', 'window licker', 'wiseass', 'wiseasses', 'wog', 'womb', 'wop', 'wrapping men', 'wrinkled starfish', 'wtf',
        //     'xrated', 'x-rated', 'xx', 'xxx', 'yaoi', 'yellow showers', 'yid', 'yiffy', 'yobbo', 'zoophile', 'zoophilia', 'zubb'
        // ];

        // const checkForRestrictedWords = () => {
        //     if(newEntry.includes([Xwords])) {
        //         console.log("error");
        //     } else {
        axios.post('http://localhost:8000/api/band/new', {
            yourName,
            adjective,
            name,
            adjective2,
            noun,
            adjective3,
            pluralNoun,
            noun2,
            adjective4,
            pluralNoun2,
            noun3,
            adjective5,
            pluralNoun3,
            adjective6,
            adjective7,
            noun4,
            adverb,
            letter,
            noun5,
        })
        .then((res) => {
            console.log(res.data);
            navigate(`/`);

            setBandList([...bandList, res.data]);
            setYourName("");
            setAdjective("");
            setName("");
            setAdjective2("");
            setNoun("");
            setAdjective3("");
            setPluralNoun("");
            setNoun2("");
            setAdjective4("");
            setPluralNoun2("");
            setNoun3("");
            setAdjective5("");
            setPluralNoun3("");
            setAdjective6("");
            setAdjective7("");
            setNoun4("");
            setAdverb("");
            setLetter("");
            setNoun5("");
        })
        .catch((err) => {
            console.log(err);
        });
        //checkForRestrictedWords();
    };

    return (
        <>
            <div>
                <div className="hidden sm:block" aria-hidden="true">
                    <div className="py-5">
                        <div className="border-t border-gray-200" />
                    </div>
                </div>
                <div className="mt-10 sm:mt-0">
                    <div className="md:grid md:grid-cols-3 md:gap-6">
                        <div className="md:col-span-1">
                            <div className="px-4 sm:px-0">
                                <h2 className="text-lg font-medium leading-6 text-gray-900">Family Rock Band</h2>
                                <h3 className="mt-1 text-sm text-gray-600">Please fill in the blanks.</h3>
                                <br />
                            </div>
                        </div>
                        <div className="mt-5 md:col-span-2 md:mt-0">
                            <form onSubmit={onSubmitHandler}>
                                <div className="overflow-hidden shadow sm:rounded-md">
                                    <div className="bg-white px-4 py-5 sm:p-6">
                                        <div className="grid grid-cols-6 gap-6">
                                            <div className="col-span-6 sm:col-span-3">
                                                <label className="block text-sm font-medium text-gray-700">
                                                    Your Name :
                                                </label>
                                                <input
                                                    type="text" 
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                                                    name="yourName" value={yourName} onChange={(e) => setYourName(e.target.value)} required 
                                                />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label className="block text-sm font-medium text-gray-700">
                                                    Adjective :
                                                </label>
                                                <input
                                                    type="text" 
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                                                    name="adjective" value={adjective} onChange={(e) => setAdjective(e.target.value)} required 
                                                />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label className="block text-sm font-medium text-gray-700">
                                                    Random Name :
                                                </label>
                                                <input
                                                    type="text" 
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                                                    name="name" value={name} onChange={(e) => setName(e.target.value)} required 
                                                />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label className="block text-sm font-medium text-gray-700">
                                                    Adjective :
                                                </label>
                                                <input
                                                    type="text" 
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                                                    name="adjective2" value={adjective2} onChange={(e) => setAdjective2(e.target.value)} required 
                                                />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label className="block text-sm font-medium text-gray-700">
                                                    Noun :
                                                </label>
                                                <input
                                                    type="text" 
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                                                    name="noun" value={noun} onChange={(e) => setNoun(e.target.value)} required 
                                                />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label className="block text-sm font-medium text-gray-700">
                                                    Adjective :
                                                </label>
                                                <input
                                                    type="text" 
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                                                    name="adjective3" value={adjective3} onChange={(e) => setAdjective3(e.target.value)} required 
                                                />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label className="block text-sm font-medium text-gray-700">
                                                    Plural Noun :
                                                </label>
                                                <input
                                                    type="text" 
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                                                    name="pluralNoun" value={pluralNoun} onChange={(e) => setPluralNoun(e.target.value)} required 
                                                />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label className="block text-sm font-medium text-gray-700">
                                                    Noun :
                                                </label>
                                                <input
                                                    type="text" 
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                                                    name="noun2" value={noun2} onChange={(e) => setNoun2(e.target.value)} required 
                                                />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label className="block text-sm font-medium text-gray-700">
                                                    Adjective :
                                                </label>
                                                <input
                                                    type="text" 
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                                                    name="adjective4" value={adjective4} onChange={(e) => setAdjective4(e.target.value)} required 
                                                />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label className="block text-sm font-medium text-gray-700">
                                                    Plural Noun :
                                                </label>
                                                <input
                                                    type="text" 
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                                                    name="pluralNoun2" value={pluralNoun2} onChange={(e) => setPluralNoun2(e.target.value)} required 
                                                />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label className="block text-sm font-medium text-gray-700">
                                                    Noun :
                                                </label>
                                                <input
                                                    type="text" 
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                                                    name="noun3" value={noun3} onChange={(e) => setNoun3(e.target.value)} required 
                                                />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label className="block text-sm font-medium text-gray-700">
                                                    Adjective :
                                                </label>
                                                <input
                                                    type="text" 
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                                                    name="adjective5" value={adjective5} onChange={(e) => setAdjective5(e.target.value)} required 
                                                />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label className="block text-sm font-medium text-gray-700">
                                                    Plural Noun :
                                                </label>
                                                <input
                                                    type="text" 
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                                                    name="pluralNoun3" value={pluralNoun3} onChange={(e) => setPluralNoun3(e.target.value)} required 
                                                />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label className="block text-sm font-medium text-gray-700">
                                                    Adjective :
                                                </label>
                                                <input
                                                    type="text" 
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                                                    name="adjective6" value={adjective6} onChange={(e) => setAdjective6(e.target.value)} required 
                                                />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label className="block text-sm font-medium text-gray-700">
                                                    Adjective :
                                                </label>
                                                <input
                                                    type="text" 
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                                                    name="adjectve7" value={adjective7} onChange={(e) => setAdjective7(e.target.value)} required 
                                                />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label className="block text-sm font-medium text-gray-700">
                                                    Noun :
                                                </label>
                                                <input
                                                    type="text" 
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                                                    name="noun4" value={noun4} onChange={(e) => setNoun4(e.target.value)} required 
                                                />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label className="block text-sm font-medium text-gray-700">
                                                    Adverb :
                                                </label>
                                                <input
                                                    type="text" 
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                                                    name="adverb" value={adverb} onChange={(e) => setAdverb(e.target.value)} required 
                                                />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label className="block text-sm font-medium text-gray-700">
                                                    Random Alphabetical Letter :
                                                </label>
                                                <input
                                                    type="text" 
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                                                    name="letter" value={letter} onChange={(e) => setLetter(e.target.value)} required 
                                                />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label className="block text-sm font-medium text-gray-700">
                                                    Noun :
                                                </label>
                                                <input
                                                    type="text" 
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                                                    name="noun5" value={noun5} onChange={(e) => setNoun5(e.target.value)} required 
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-3 text-right sm:px-6"> 
                                        <button
                                            type="submit" 
                                            className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" 
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BandForm;