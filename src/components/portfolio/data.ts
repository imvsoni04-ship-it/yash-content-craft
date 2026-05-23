export type Embed = {
  id: string;
  type: "instagram" | "youtube";
  url: string; // instagram permalink or youtube video id
  category: string;
  views: string;
  likes: string;
  comments: string;
};

// KK Create Instagram reels (real public reels as demos)
export const kkInstagram: Embed[] = [
  { id: "kki1", type: "instagram", url: "https://www.instagram.com/reel/C8nT7eIIjMd/", category: "Science", views: "1.2M", likes: "82K", comments: "640" },
  { id: "kki2", type: "instagram", url: "https://www.instagram.com/reel/C9aB1hYIYrK/", category: "Historical", views: "2.1M", likes: "140K", comments: "1.2K" },
  { id: "kki3", type: "instagram", url: "https://www.instagram.com/reel/C7vX2QnIBzL/", category: "Geopolitics", views: "980K", likes: "61K", comments: "520" },
  { id: "kki4", type: "instagram", url: "https://www.instagram.com/reel/C6pK4LqIqYu/", category: "Myth Busting", views: "1.5M", likes: "95K", comments: "780" },
  { id: "kki5", type: "instagram", url: "https://www.instagram.com/reel/C5jH9MhIzPo/", category: "State Specific", views: "720K", likes: "44K", comments: "310" },
  { id: "kki6", type: "instagram", url: "https://www.instagram.com/reel/C4cD2NfIrTn/", category: "Science", views: "1.8M", likes: "120K", comments: "950" },
];

export const kkYoutube: Embed[] = [
  { id: "kky1", type: "youtube", url: "kJQP7kiw5Fk", category: "Science", views: "540K", likes: "32K", comments: "210" },
  { id: "kky2", type: "youtube", url: "9bZkp7q19f0", category: "Historical", views: "820K", likes: "48K", comments: "390" },
  { id: "kky3", type: "youtube", url: "JGwWNGJdvx8", category: "Geopolitics", views: "410K", likes: "27K", comments: "180" },
];

export const wapInstagram: Embed[] = [
  { id: "wai1", type: "instagram", url: "https://www.instagram.com/reel/C8nT7eIIjMd/", category: "Match Stories", views: "450K", likes: "28K", comments: "210" },
  { id: "wai2", type: "instagram", url: "https://www.instagram.com/reel/C9aB1hYIYrK/", category: "History", views: "320K", likes: "19K", comments: "140" },
  { id: "wai3", type: "instagram", url: "https://www.instagram.com/reel/C7vX2QnIBzL/", category: "Tech in Sports", views: "280K", likes: "16K", comments: "120" },
  { id: "wai4", type: "instagram", url: "https://www.instagram.com/reel/C6pK4LqIqYu/", category: "Match Stories", views: "510K", likes: "33K", comments: "240" },
];

export const wapYoutube: Embed[] = [
  { id: "way1", type: "youtube", url: "L_jWHffIx5E", category: "History", views: "120K", likes: "8K", comments: "60" },
  { id: "way2", type: "youtube", url: "fJ9rUzIMcZQ", category: "Match Stories", views: "180K", likes: "11K", comments: "85" },
];

export const kkCategories = ["All", "Science", "State Specific", "Myth Busting", "Historical", "Geopolitics"] as const;
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