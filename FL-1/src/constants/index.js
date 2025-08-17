import {
  a1,
  a2,
  a3,
  a4,
  a5,
  a6,
  g1,
  g2,
  g3,
  g4,
  g5,
  g6,
  g7,
  g8,
  g9,
  h1,
  h2,
  h3,
  r1,
  r2,
} from "../assets/index";

const activityData = [
  {
    key: 1,
    activity: "Sexual Compatibility",
    description:
      "It is analyzed by studying the nakshatra etc. Between two partners.",
    price: "$ 400",
  },
  {
    key: 2,
    activity: "Matrimonial Compatibility",
    description:
      "An established method of ashta koota, dash koota etc. It analyses the compatibility between bride and groom.",
    price: "$ 300",
  },
  {
    key: 3,
    activity: "Boy Friend and Girl Friend Compatibility",
    description: "Compatibility check between boyfriend and girlfriend.",
    price: "$ 300",
  },
  {
    key: 4,
    activity: "Business Inclination Analysis",
    description:
      "According to your birth stars what business or occupation you are likely to excel.",
    price: "$ 300",
  },
  {
    key: 5,
    activity: "Relationship Analysis",
    description:
      "This aspect covers compatibility and relationship analysis of two individuals using their respective birth charts.",
    price: "$ 300",
  },
  {
    key: 6,
    activity: "Relocation Astrology Analysis",
    description:
      "Suppose you were born in New York and now live in Los Angeles, how does that affect your stars.",
    price: "$ 300",
  },

  {
    key: 7,
    activity: "Muhurat",
    description:
      "Auspicious time to start anything significant such as business, court case etc.",
    price: "$ 300",
  },

  {
    key: 8,
    activity: "Individual horoscope complete with dasha and antardashas",
    description: "Individual horoscope complete with dasha and antardashas.",
    price: "$ 300",
  },

  {
    key: 9,
    activity: "Marital and other disputes",
    description: "Marital and other disputes.",
    price: "$ 300",
  },

  {
    key: 10,
    activity: "Baby horoscope",
    description: "Baby horoscope.",
    price: "$ 300",
  },

  {
    key: 11,
    activity: "Career analysis",
    description: "Career analysis.",
    price: "$ 300",
  },

  {
    key: 12,
    activity: "Varsha Phal",
    description: "Annual solar return - the year ahead",
    price: "$ 200",
  },

  {
    key: 13,
    activity: "Ask any 3 questions for only",
    description: "Ask any 3 questions for only...",
    price: "$ 300",
  },

  {
    key: 14,
    activity: "Past Life Regression Therapy",
    description: "Past Life Regression Therapy. (Upto 4 sittings)",
    price: "$ 3000",
  },

  // {
  //   key: 15,
  //   activity: "Learn Yoga sutras of Patanjali",
  //   description: "Learn Yoga sutras of Patanjalit.",
  //   price: "$ 400",
  // },
];



const horoscopeData = [
  {
    key: 1,
    title: "Aries",
    description: "The Aries is blood-red in complexion. It has a prominent (big) physique. It is a quadruped Rāśi and strong during night. It denotes courage. It resides in the East and is related to kings. It wanders in hills and predominates in Rajo-Gun (the second of the three constituent qualities and the cause of great activity in living beings). It rises with its back (a Prishtodaya Rāśi) and is fiery. Its ruler is Mars.",
  },


  
  {
    key: 2,
    title: "Taurus",
    description: "Taurus complexion is white and it is lorded by Venus. It is long and is a quadruped Rāśi. It has strength in night and resides in the South. It represents villages and businessmen. An earthy Rāśi, Taurus rises with its back.",
  },


  {
    key: 3,
    title: "Gemini",
    description: "The Rāśi Gemini rises with its head and represents a male and a female, holding a mace and lute. It lives in the West and is an airy Rāśi. It is a biped Rāśi as well and is strong in nights. It lives in villages and is windy in temperament. It has an even body with a green (grass like) hue. Its ruler is Mercury.",
  },


  {
    key: 4,
    title: "Cancer",
    description: "The Rāśi Cancer is pale-red. It resorts to forests and represents Brahmins. It is strong at nights. It has many feet (i.e. it is a centipede Rāśi) and has a bulky body. It is Sattvic in disposition (seen in gods) and it is a watery Rāśi. It rises with its back and is ruled by Moon.",
  },


  {
    key: 5,
    title: "Leo",
    description: "Leo is ruled by Sūn and is Sattvic. It is a quadruped Rāśi and a royal Rāśi. It resorts to forests and rises with its head. It has a large, white body. It resides in the East and is strong during daytime.",
  },


  {
    key: 6,
    title: "Virgo",
    description: "This Rāśi is a hill-resorter and is strong in daytime. It rises with its head and has a medium build. It is a biped Rāśi and resides in the South. It has grains and fire in its hands. It belongs to the business community and is variegated. It relates to hurricanes. It is a Virgin and is Tamasic (a disposition of demons). Its ruler is Mercury.",
  },


  {
    key: 7,
    title: "Libra",
    description: "Libra is a Shirshodaya Rāśi, rising with its head; Libra is strong in daytime. It is black in complexion and is predominant with Rajo-Gun. It relates to the western direction and resorts to land. It is destructive, or mischievous. It represents Sudras, or the 4th Varna. It has a medium build physique and is a biped Rāśi. Its Lord is Venus.",
  },


  {
    key: 8,
    title: "Scorpio",
    description: "Scorpio has a slender physique and is a centipede Rāśi. It denotes Brahmins and resides in holes. Its direction is North and it is strong in daytime. It is reddish-brown and resorts to water and land. It has a hairy physique and is very sharp (or passionate). Mars is its ruler.",
  },


  {
    key: 9,
    title: "Sagittarius",
    description: "The Rāśi Sagittarius rises with its head and is lorded by Jupiter. It is a Sattvic Rāśi and is tawny in hue. It has strength in night and is fiery. A royal Rāśi, Sagittarius is biped in first half. Its second half is quadruped. It has an even build and adores an arch. It resides in the East.",
  },


  {
    key: 10,
    title: "Capricorn",
    description: "Capricorn is lorded by Śaturn and has predominance of Tamo-Gun (a disposition, seen in demons). It is an earthy Rāśi and represents the southern direction. It is strong in nights and rises with back. It has a large body. Its complexion is variegated and it resorts to both forests and lands. Its first half is quadruped and its second half footless.",
  },


  {
    key: 11,
    title: "Aquarius",
    description: "The Rāśi Aquarius represents a man holding a pot. Its complexion is deep-brown. It has medium build and is a biped Rāśi. It is very strong in daytime. It resorts to deep water and is airy. It rises with its head and is Tamasic. It rules Sudras, the 4th Varna and the West. Its Lord is Śaturn, Sūn‟s offspring.",
  },


  {
    key: 12,
    title: "Pisces",
    description: "Pisces resembles a pair of fish, one tailed with the head of the other. This Rāśi is strong at night. It is a watery Rāśi and is predominant with Sattva-Gun. It denotes resoluteness and is a water resorter. It is footless and has a medium build. It rules the North and rises with both head and back. It is ruled by Jupiter.",
  },



  
];






const facilitiesData = [
  {
    key: 1,
    heading: "WHAT IS ASTROLOGY?",
    text: "Astrology is a long-established method of exploring ourselves, our relationships and our place within the world. It works by taking a look at the significant environmental influences operating in a particular place at a given time - as expressed through the horoscope in the symbolic relationships of the heavenly bodies. Astrology, the science of the stars, can give us insight into all manner of situations, from the personal to the political and from the most intimate to the most mundane.",
  },
  {
    key: 2,
    heading: "Understanding Astrology",
    text: `Astrology is just one of those subjects: it's easy to learn but can take a lifetime to master. Most people are familiar with the most basic aspect of Astrology; their Star Sign (or Sun Sign), and usually they can name at least one common trait of their Sign. Star Signs are popularized through all the horoscopes that appear in daily newspaper columns, magazines, and on web sites. Unfortunately, many people think that their Star Sign is all that there is to Astrology. While it is a good place to start, there is a lot more to Astrology than just the Sun's position!

Astrology is not a modern invention dating back only a few years, decades or even centuries. Astrology has been studied for millennia, and it dates back as far as recorded history. The original Astrologers were priests and scholars, and they were looked up to as doctors and learned men. According to modern speculation, the Three Wise Men of Christian belief were Astrologers! At that time, Astrology was the same science as Astronomy and Psychology, whose modern descendants arose from Astrology.

In ancient times, the Greeks and Romans based their system of gods on what they believed was up in the sky. Zeus, who equates to Jupiter in Roman myth, and other gods and goddesses were based on the Planets visible to the ancients. Astrology was similarly popular in Babylon and Egypt, and it also rose in the Middle East, India and China.`,
  },
  {
    key: 3,
    heading: "Is Astrology Scientific?",
    text: `The simple answer is yes - and no. Astrology, like medicine, is an art based on a science.
The nautral world is not as chaotic as it seems on the surface. Science has always sought to discover the underlying order that governs the appearance and behaviour of phenomena, from sub-atomic particles to the movement of galaxies. Science also seeks an understanding of human behavior through biology, pyschology and economics, for example. Scientists set out to find "natural laws" that govern phenomena, then look for ways that the knowledge of these interacting laws (repeatable patterns of phenomena) can be applied for our benefit.`,
  },
  {
    key: 4,
    heading: "The Art of Astrology",
    text: `The art of astrology lies at one level in the construction of accurate profiles of personality and relationship, through the skilled interpretation of symbolic patterns, and in mapping the general tendencies that present themselves over the course of our lives.
Astrologers use scientific facts in the mapping of human consciousness and as keys to the understanding of experience. This is an interpretative process, which does not depend on accepting particular theories about how planets can affect us, or on whether they are a sort of synchronous clock ticking along with psychological and social factors on earth, or on some other causal process. The strength of astrology comes from the accumulated knowledge of centuries of research and observation, developed within a deeply intuitive understanding of the essential nature of the world, consciousness and the environment. Combined with accurate mathematical and scientific data, today's astrologers can use this established knowledge in the generation of valuable psychological, economic, or predictive profiles.`,
  },
];

const galleryData = [
  {
    id: 1,
    img: g1,
  },
  {
    id: 2,
    img: g3,
  },
  {
    id: 3,
    img: g5,
  },
  {
    id: 4,
    img: g6,
  },
  {
    id: 5,
    img: g8,
  },
  {
    id: 6,
    img: g2,
  },
  {
    id: 7,
    img: g7,
  },
  {
    id: 8,
    img: g4,
  },
  {
    id: 9,
    img: g9,
  },
];

const heroData = [
  {
    id: 1,
    heading1: "Discover Your",
    heading2: "Cosmic Destiny",
    subHeading:
      "MAKE BETTER DECISIONS IN LIFE WITH A LITTLE HELP FROM STARS.",
    bgImg: h1, // replace with your astrology bg image import
  },
  {
    id: 2,
    heading1: "Personalized",
    heading2: "Astrology Insights",
    subHeading:
      "Get accurate predictions and meaningful guidance from the cosmos.",
    bgImg: h2,
  },
  {
    id: 3,
    heading1: "Empower Your",
    heading2: "Spiritual Growth",
    subHeading:
      "Harness the energy of planets and stars to live with clarity and confidence.",
    bgImg: h3,
  },
];

// const links = ["astrology", "gallery", "about", "activities", "reviews"];
const links = ["astrology", "about","horoscopes", "services", "contact us", "(+1) 302 588 5883"];

const reviewData = [
  { 
    id: 1,
    review:
      "Our experience has been wonderful! The teachers are dedicated, and the curriculum is engaging. My child loves going to school every day.",
    name: "Kishan J",
    role: "Parent",
    img: r1,
  },
  {
    id: 2,
    review:
      "The focus on both academics and physical activities has really helped my son thrive. He is more confident and active than ever.",
    name: "Anuradha P",
    role: "Parent",
    img: r2,
  },
  {
    id: 3,
    review:
      "I appreciate the school's commitment to smart learning. The use of technology in classrooms has greatly enhanced my daughter's learning experience.",
    name: "Nisha D",
    role: "Parent",
    img: r2,
  },
  {
    id: 4,
    review:
      "The day care service has been a lifesaver for our family. Knowing my child is in a safe, nurturing environment gives me peace of mind.",
    name: "Manish K",
    role: "Parent",
    img: r1,
  },
  {
    id: 5,
    review:
      "Having parents actively involved as teachers has been a game-changer. The collaborative approach has strengthened our family bond and my child's educational journey.",
    name: "Rajeev S",
    role: "Parent",
    img: r1,
  },
];

export {
  activityData,
  facilitiesData,
  galleryData,
  heroData,
  links,
  reviewData,
  horoscopeData
};
