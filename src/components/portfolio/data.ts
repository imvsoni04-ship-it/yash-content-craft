export type Embed = {
  id: string;
  type: "instagram" | "youtube";
  url: string; // instagram permalink or youtube video id
  category: string;
  title?: string;
  featured?: boolean;
};

// Reels from KK Create — sourced from Yash's content sheet.
// `featured: true` marks the curated picks that show in the "All" tab.
const featuredUrls = new Set([
  "https://www.instagram.com/p/C08RlhEy8oy/",
  "https://www.instagram.com/p/C_cdLOPyBuU/",
  "https://www.instagram.com/p/C3b5rWdIQEz/",
  "https://www.instagram.com/p/C8GiSVyIElC/",
  "https://www.instagram.com/p/C6FzQgdITw4/",
  "https://www.instagram.com/p/CsfnDpNomra/",
  "https://www.instagram.com/p/C676gfQIxlE/",
  "https://www.instagram.com/p/C8Q2vI-IY5B/",
]);

const kkRaw: { url: string; title: string; category: string }[] = [
  // State Stories
  { url: "https://www.instagram.com/p/Cr7igNFoISr/", title: "Facts about Haryana", category: "State Stories" },
  { url: "https://www.instagram.com/p/Csu-gR-I_nG/", title: "Karnataka's Bus Service", category: "State Stories" },
  { url: "https://www.instagram.com/p/Cs5Rs3Pos62/", title: "IAS Village of India", category: "State Stories" },
  { url: "https://www.instagram.com/p/CuGmJQSMEn0/", title: "North East is so Diverse", category: "State Stories" },
  { url: "https://www.instagram.com/p/Cuds7xdoMQV/", title: "Gujarat's Hill has 900 temples", category: "State Stories" },
  { url: "https://www.instagram.com/p/CvBvwnXoSpU/", title: "Jharkhand is not just about Minerals", category: "State Stories" },
  { url: "https://www.instagram.com/p/CvY7GMJoaRC/", title: "This Temple survived 6 Earthquakes", category: "State Stories" },
  { url: "https://www.instagram.com/p/Cv31kJgIwIl/", title: "Karnataka more than Bengaluru", category: "State Stories" },
  { url: "https://www.instagram.com/p/Cwb36MsIpBl/", title: "Gujarat more than Ahmedabad", category: "State Stories" },
  { url: "https://www.instagram.com/p/CwecnFoNDU_/", title: "Andhra's Guntur Chilli", category: "State Stories" },
  { url: "https://www.instagram.com/p/CxHpzhqo6fe/", title: "Andhra Pradesh more than Biryani", category: "State Stories" },
  { url: "https://www.instagram.com/p/CyKu-6_IpYF/", title: "Telangana more than Hyderabad", category: "State Stories" },
  { url: "https://www.instagram.com/p/CzvF4IiyhUI/", title: "Bihar's Chhath Puja", category: "State Stories" },
  { url: "https://www.instagram.com/p/C0I3jOMSF8S/", title: "Bali Jatra of Odisha", category: "State Stories" },
  { url: "https://www.instagram.com/p/C2BwEsdS3Sn/", title: "Rajasthan more than Dal Bati", category: "State Stories" },
  { url: "https://www.instagram.com/p/C3ZTUAWIeGf/", title: "MP is more than Poha", category: "State Stories" },
  { url: "https://www.instagram.com/p/C3t8zT4IU_k/", title: "UP is not just about Taj Mahal", category: "State Stories" },
  { url: "https://www.instagram.com/p/C6xoQcUID2a/", title: "Kerala is not just about Coconuts", category: "State Stories" },
  { url: "https://www.instagram.com/p/C7YRS9HI8-L/", title: "What Indians drink in Summers", category: "State Stories" },
  { url: "https://www.instagram.com/p/DIG8DFHyK57/", title: "Rajasthan's Biggest Festival", category: "State Stories" },
  { url: "https://www.instagram.com/p/C8Q2vI-IY5B/", title: "Sohar Geet of Bihar", category: "State Stories" },
  { url: "https://www.instagram.com/p/DWeUSF9k2Fy/", title: "Marfa Dance of Hyderabad", category: "State Stories" },

  // Science
  { url: "https://www.instagram.com/p/CrlEaeOoDKJ/", title: "Solar Panel on Thar", category: "Science" },
  { url: "https://www.instagram.com/p/CsBY48koLqx/", title: "What if no Himalayas", category: "Science" },
  { url: "https://www.instagram.com/p/CsdA3tIobwW/", title: "What if no Western Ghats", category: "Science" },
  { url: "https://www.instagram.com/p/CtVmPZYo1jF/", title: "Effects of Western Disturbance", category: "Science" },
  { url: "https://www.instagram.com/p/CtnoGBGIDcT/", title: "Why all maps are wrong", category: "Science" },
  { url: "https://www.instagram.com/p/CtsxiuroZNI/", title: "Why Rajasthan doesn't get rain", category: "Science" },
  { url: "https://www.instagram.com/p/Cut6d6xoehE/", title: "Why Sriharikota is the only launchpad", category: "Science" },
  { url: "https://www.instagram.com/p/CvG5cucIGYs/", title: "How was Rann of Kutch made", category: "Science" },
  { url: "https://www.instagram.com/p/CvRM56Zobeb/", title: "How snowfall happens", category: "Science" },
  { url: "https://www.instagram.com/p/CwpcE4Kyt6e/", title: "First Solar Mission of India", category: "Science" },
  { url: "https://www.instagram.com/p/Cx9xsCfIT3X/", title: "Why northies eat more rotis than rice", category: "Science" },
  { url: "https://www.instagram.com/p/CyNK_--IDjX/", title: "Who controls ISRO's satellites", category: "Science" },
  { url: "https://www.instagram.com/p/Cypf3_uIwK4/", title: "Fuel from Garbage", category: "Science" },
  { url: "https://www.instagram.com/p/CysEng0o6qE/", title: "Mountain gap causes rain in Bengaluru", category: "Science" },
  { url: "https://www.instagram.com/p/C00lzFyS_O9/", title: "What are Hot Springs", category: "Science" },
  { url: "https://www.instagram.com/p/C10-HQcS0mu/", title: "What if Aravallis didn't exist", category: "Science" },
  { url: "https://www.instagram.com/p/C5XjZTwIMJt/", title: "How El Niño affected India", category: "Science" },
  { url: "https://www.instagram.com/p/C676gfQIxlE/", title: "Water from a Tree", category: "Science" },

  // Historical
  { url: "https://www.instagram.com/p/C08RlhEy8oy/", title: "Why South Indian languages are round", category: "Historical" },
  { url: "https://www.instagram.com/p/CsfnDpNomra/", title: "Rawalpindi was named after him", category: "Historical" },
  { url: "https://www.instagram.com/p/CsiHBp8Mv8b/", title: "Maharana Pratap vs Akbar", category: "Historical" },
  { url: "https://www.instagram.com/p/Cskr6jXo8MP/", title: "Why Shivaji is the Father of the Indian Navy", category: "Historical" },
  { url: "https://www.instagram.com/p/Csp06-OI0Ru/", title: "Why Marathi women wear Nauvari sarees", category: "Historical" },
  { url: "https://www.instagram.com/p/CsxkEsfoFEo/", title: "Untold Story of Mangarh", category: "Historical" },
  { url: "https://www.instagram.com/p/Ct8ONTGoD47/", title: "The King who brought the Ganga to the South", category: "Historical" },
  { url: "https://www.instagram.com/p/CugRj5MoHQb/", title: "How was the Kailasa Temple built", category: "Historical" },
  { url: "https://www.instagram.com/p/C0YOohmSioK/", title: "Inside Karnataka's Desert", category: "Historical" },
  { url: "https://www.instagram.com/p/C6FzQgdITw4/", title: "How was Rajasthan formed", category: "Historical" },
  { url: "https://www.instagram.com/p/C6NkHH_oHOW/", title: "Who is Raja Bhoj and Gangu Teli", category: "Historical" },

  // Human Geography
  { url: "https://www.instagram.com/p/Ct5pxBbICUE/", title: "Why Sindhi surnames end with ANI", category: "Human Geography" },
  { url: "https://www.instagram.com/p/C8GiSVyIElC/", title: "Food Line of India", category: "Human Geography" },
  { url: "https://www.instagram.com/p/CwhtOAqobyk/", title: "KVS Schools", category: "Human Geography" },
  { url: "https://www.instagram.com/p/CxFEWsroqTn/", title: "NVS Schools", category: "Human Geography" },
  { url: "https://www.instagram.com/p/CxzcmAmIljt/", title: "Haryanvi Girls' Contribution", category: "Human Geography" },
  { url: "https://www.instagram.com/p/Cy5GWuqoFJC/", title: "Udupi Food Chain", category: "Human Geography" },
  { url: "https://www.instagram.com/p/Cz5ndmeSbWk/", title: "India's Most Expensive House", category: "Human Geography" },
  { url: "https://www.instagram.com/p/C4CfT_iItMQ/", title: "How were Rajasthan cities named", category: "Human Geography" },
  { url: "https://www.instagram.com/p/C4UkvUlIkum/", title: "A mini Tibet in Karnataka", category: "Human Geography" },
  { url: "https://www.instagram.com/p/C5uvHIFoZwl/", title: "How Karnataka cities got their names", category: "Human Geography" },
  { url: "https://www.instagram.com/p/C6ac7yJIoQD/", title: "Biryani of States", category: "Human Geography" },
  { url: "https://www.instagram.com/p/C7TFnVtI58c/", title: "Languages of UP", category: "Human Geography" },
  { url: "https://www.instagram.com/p/Cr49YBVoWG3/", title: "Perks of an IAS Officer", category: "Human Geography" },

  // Geography
  { url: "https://www.instagram.com/p/CtvWQaPIGXH/", title: "Is Ladakh a Desert", category: "Geography" },
  { url: "https://www.instagram.com/p/CvEVN4EojfA/", title: "How Assam produces so much Chai", category: "Geography" },
  { url: "https://www.instagram.com/p/CvgqPf4It2-/", title: "Why India is making a Green Wall", category: "Geography" },
  { url: "https://www.instagram.com/p/CxCfZtII9PC/", title: "What is DOON in Dehradun", category: "Geography" },
  { url: "https://www.instagram.com/p/CyXglRnortA/", title: "A red desert in South India", category: "Geography" },
  { url: "https://www.instagram.com/p/C3b5rWdIQEz/", title: "Why most cities end with PUR", category: "Geography" },
  { url: "https://www.instagram.com/p/DEuPj0nSoBp/", title: "Regions of Maharashtra", category: "Geography" },

  // Manufacturing
  { url: "https://www.instagram.com/p/CratUTtooQy/", title: "Rajasthan's Afeem", category: "Manufacturing" },
  { url: "https://www.instagram.com/p/C0Qe3FASVUO/", title: "Plate from Sugarcane", category: "Manufacturing" },
  { url: "https://www.instagram.com/p/C0vgH-sSL2-/", title: "Tiles from Pollution", category: "Manufacturing" },
  { url: "https://www.instagram.com/p/C44jfCXoRM5/", title: "T-shirts made of Plastic Bottles", category: "Manufacturing" },

  // Geopolitics
  { url: "https://www.instagram.com/p/CrdR6K9oyos/", title: "How MP and Chhattisgarh broke up", category: "Geopolitics" },
  { url: "https://www.instagram.com/p/Crf22B2ID8P/", title: "India gave 12 villages to Pakistan", category: "Geopolitics" },
  { url: "https://www.instagram.com/p/CtN5JjmIqdD/", title: "What is NCR", category: "Geopolitics" },
  { url: "https://www.instagram.com/p/CuBX_32o4pB/", title: "Northies don't only speak Hindi", category: "Geopolitics" },
  { url: "https://www.instagram.com/p/CzK-5kmI0V_/", title: "China shows the wrong map", category: "Geopolitics" },
  { url: "https://www.instagram.com/p/C5ASteZoxJH/", title: "Why was Ladakh protesting", category: "Geopolitics" },
  { url: "https://www.instagram.com/p/C7-1VSno4bG/", title: "Political History of UP", category: "Geopolitics" },

  // Myth Busting
  { url: "https://www.instagram.com/p/DCGXPq1PqJA/", title: "These vegetables are not Indian", category: "Myth Busting" },
  { url: "https://www.instagram.com/p/CuYkUBWoiBL/", title: "Rajasthan is not just a desert", category: "Myth Busting" },
  { url: "https://www.instagram.com/p/C_cdLOPyBuU/", title: "All Rajasthanis are not Marwari", category: "Myth Busting" },
  { url: "https://www.instagram.com/p/CzX2xq8or1a/", title: "Bihari is not a language", category: "Myth Busting" },
  { url: "https://www.instagram.com/p/C05qoLASmI1/", title: "Not only Biharis wear Gamcha", category: "Myth Busting" },
  { url: "https://www.instagram.com/p/C13hZS9yEwA/", title: "All Pahadis are not the same", category: "Myth Busting" },

  // Problems
  { url: "https://www.instagram.com/p/CtlDI_WoF9p/", title: "Why is the Yamuna polluted", category: "Problems" },
  { url: "https://www.instagram.com/p/DM5INEGypdt/", title: "SSC Scam", category: "Problems" },
  { url: "https://www.instagram.com/p/DSujHYPkvzx/", title: "Aravalli Case", category: "Problems" },
];

export const kkInstagram: Embed[] = kkRaw.map((r, i) => ({
  id: `kki${i + 1}`,
  type: "instagram",
  url: r.url,
  title: r.title,
  category: r.category,
  featured: featuredUrls.has(r.url),
}));

export const kkYoutube: Embed[] = [];

export const wapInstagram: Embed[] = [
  { id: "wai1", type: "instagram", url: "https://www.instagram.com/reel/C8nT7eIIjMd/", title: "Match Story", category: "Match Stories", featured: true },
  { id: "wai2", type: "instagram", url: "https://www.instagram.com/reel/C9aB1hYIYrK/", title: "Sports History", category: "History", featured: true },
  { id: "wai3", type: "instagram", url: "https://www.instagram.com/reel/C7vX2QnIBzL/", title: "Tech in Sports", category: "Tech in Sports", featured: true },
  { id: "wai4", type: "instagram", url: "https://www.instagram.com/reel/C6pK4LqIqYu/", title: "Match Recap", category: "Match Stories" },
];

export const wapYoutube: Embed[] = [];

export const kkCategories = [
  "All", "State Stories", "Science", "Historical", "Human Geography",
  "Geography", "Manufacturing", "Geopolitics", "Myth Busting", "Problems",
] as const;
export const wapCategories = ["All", "History", "Match Stories", "Tech in Sports"] as const;

export const skills = {
  Production: ["Short-form scripting", "Topic ideation", "Research", "Fact-checking", "Quality control"],
  Strategy: ["Audience growth", "Performance tracking", "Trend spotting", "SOP building", "Content planning"],
  Leadership: ["Team coordination", "Editor management", "Community management", "On-ground direction"],
  Tools: ["Basic editing", "Graphic design", "Instagram", "YouTube"],
};

export const testimonials = [
  { quote: "Yash brought structure and speed to our content engine. He turns complex ideas into reels that actually move the needle.", name: "Placeholder Name", role: "Founder, KK Create" },
  { quote: "One of the sharpest content minds I've worked with. End-to-end ownership and a real instinct for what trends next.", name: "Placeholder Name", role: "Head of Content" },
  { quote: "From scripting to performance tracking, Yash runs the page like a product. The growth speaks for itself.", name: "Placeholder Name", role: "Creative Director" },
];

export const milestones = [
  { stat: "Day 1", label: "Started as Researcher & Writer" },
  { stat: "3 mo", label: "Promoted to Instagram Lead" },
  { stat: "350K → 1M", label: "KK Create in 6 months" },
  { stat: "1M → 1.6M", label: "KK Create followers" },
  { stat: "0 → 750K", label: "YouTube subscribers built" },
  { stat: "0 → 47K", label: "What A Playerr in 3 months" },
];