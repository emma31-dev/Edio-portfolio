export interface Project {
  id: string;
  title: string;
  imageUrl: string;
  category: 'logos' | 'flyers' | 'banners';
  shortDescription: string;
  fullDescription: string;
}

export const projectsData: Project[] = [
  // Logos
  {
    id: '1',
    title: 'Luxe Fashion Brand',
    imageUrl: '/image1.jpg',
    category: 'logos',
    shortDescription: 'Elegant fashion boutique logo',
    fullDescription: 'Sophisticated logo design for a high-end fashion boutique featuring custom typography, gold accents, and timeless elegance. The design captures the essence of luxury while maintaining versatility across various brand applications.'
  },
  {
    id: '2',
    title: 'Tech Startup Identity',
    imageUrl: '/image2.jpg',
    category: 'logos',
    shortDescription: 'Modern fintech brand identity',
    fullDescription: 'Complete brand identity package for an innovative fintech startup. Includes primary logo, variations, color palette, and comprehensive brand guidelines that emphasize trust, innovation, and digital-first approach.'
  },
  {
    id: '3',
    title: 'Corporate Excellence',
    imageUrl: '/image3.jpg',
    category: 'logos',
    shortDescription: 'Professional corporate branding',
    fullDescription: 'Clean and professional corporate logo design that emphasizes trust, reliability, and innovation. The design features geometric elements and sophisticated typography that works seamlessly across digital and print media.'
  },
  {
    id: '4',
    title: 'Artisan Restaurant',
    imageUrl: '/image4.jpg',
    category: 'logos',
    shortDescription: 'Hand-crafted restaurant logo',
    fullDescription: 'Warm and inviting restaurant logo featuring custom hand-lettered typography and organic elements. The design reflects the artisanal nature of the cuisine while maintaining readability and brand recognition.'
  },

  // Flyers
  {
    id: '5',
    title: 'Summer Music Festival',
    imageUrl: '/image5.jpg',
    category: 'flyers',
    shortDescription: 'Vibrant festival promotion',
    fullDescription: 'Eye-catching promotional flyer for a summer music festival featuring bold graphics, dynamic layout, and energetic color scheme. The design captures the excitement of live music while clearly communicating event details and lineup information.'
  },
  {
    id: '6',
    title: 'Product Launch Campaign',
    imageUrl: '/image6.jpg',
    category: 'flyers',
    shortDescription: 'Modern product showcase',
    fullDescription: 'Sleek and modern product launch promotional material with clean design elements, strategic use of whitespace, and compelling call-to-action. The layout emphasizes product benefits while maintaining brand consistency.'
  },
  {
    id: '7',
    title: 'Design Conference',
    imageUrl: '/image7.jpg',
    category: 'flyers',
    shortDescription: 'Professional event promotion',
    fullDescription: 'Professional conference promotional design featuring clean typography, geometric patterns, and sophisticated color palette. The design appeals to creative professionals while clearly communicating speaker lineup and event schedule.'
  },
  {
    id: '8',
    title: 'Fashion Week Showcase',
    imageUrl: '/image8.jpg',
    category: 'flyers',
    shortDescription: 'Elegant fashion promotion',
    fullDescription: 'Sophisticated fashion show promotional material with elegant typography, high-fashion photography, and refined color scheme. The design captures the glamour of fashion week while maintaining readability and brand prestige.'
  },

  // Banners
  {
    id: '9',
    title: 'E-commerce Campaign',
    imageUrl: '/image9.jpg',
    category: 'banners',
    shortDescription: 'Digital marketing banner',
    fullDescription: 'High-converting e-commerce banner design optimized for digital platforms. Features compelling product imagery, clear value proposition, and strategic placement of call-to-action elements to maximize click-through rates and conversions.'
  },
  {
    id: '10',
    title: 'Brand Awareness Drive',
    imageUrl: '/image10.jpg',
    category: 'banners',
    shortDescription: 'Corporate brand banner',
    fullDescription: 'Impactful brand awareness banner that effectively communicates company values and services. The design uses bold typography, consistent brand colors, and strategic messaging hierarchy to create memorable brand impressions.'
  },
  {
    id: '11',
    title: 'Social Media Campaign',
    imageUrl: '/image11.jpg',
    category: 'banners',
    shortDescription: 'Social platform graphics',
    fullDescription: 'Engaging social media banner series designed for maximum engagement across platforms. Features consistent visual language, platform-optimized dimensions, and compelling messaging that encourages user interaction and sharing.'
  },
  {
    id: '12',
    title: 'Event Promotion Banner',
    imageUrl: '/image12.jpg',
    category: 'banners',
    shortDescription: 'Event marketing display',
    fullDescription: 'Dynamic event promotion banner with attention-grabbing visuals and clear event information hierarchy. The design balances visual impact with practical information delivery, ensuring maximum event awareness and attendance.'
  }
];

// function removed as we are showing all projects
export const getAllProjects = (): Project[] => {
  return projectsData;
};