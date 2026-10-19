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
    title: 'Independence Day Celebration',
    imageUrl: '/image1.jpg',
    category: 'flyers',
    shortDescription: 'Nigerian Independence Day celebration flyer',
    fullDescription: 'A celebratory flyer welcoming October and marking Nigeria’s 65th Independence Day on October 1, 2025. The design uses the Nigerian flag’s green and white colors, the number 65, and portraits of national leaders to honor the occasion.'
  },
  {
    id: '2',
    title: 'MST Print and Delivery',
    imageUrl: '/image2.jpg',
    category: 'flyers',
    shortDescription: 'Promotional flyer for MST Print and Delivery services',
    fullDescription: 'An orange-and-black promotional flyer for MST Print and Delivery, featuring printing equipment and a list of services including CVs, flyers, posters, letters, school assignments, graphic design, and color printing.'
  },
  {
    id: '3',
    title: 'Blex Graphix Hub Christmas',
    imageUrl: '/image3.jpg',
    category: 'flyers',
    shortDescription: 'Christmas greetings flyer for Blex Graphix Hub',
    fullDescription: 'A festive Christmas greeting from Blex Graphix Hub, featuring Santa Claus, ornaments, evergreen branches, and a warm seasonal message wishing viewers peace and happiness at home.'
  },
  {
    id: '4',
    title: 'MFO Schools Tech',
    imageUrl: '/image4.jpg',
    category: 'flyers',
    shortDescription: 'Technology courses flyer for MFO Schools Tech',
    fullDescription: 'A purple promotional flyer for MFO Schools Tech showcasing courses in robotics, data analysis, cybersecurity, AI and programming, networking, animation, and computer hardware maintenance. It also features the school’s address in Uyo.'
  },

  // Flyers
  {
    id: '5',
    title: 'Sensei Birthday Tribute',
    imageUrl: '/image5.jpg',
    category: 'flyers',
    shortDescription: 'Birthday celebration flyer for Sensei',
    fullDescription: 'A blue birthday tribute celebrating Sensei on November 21, featuring his portrait and describing him as a friend, mentor, brother, and inspiration.'
  },
  {
    id: '6',
    title: 'MST New Year Greeting',
    imageUrl: '/image6.jpg',
    category: 'flyers',
    shortDescription: 'New Year greeting flyer from MST Prints and Delivery',
    fullDescription: 'An orange New Year greeting from MST Prints and Delivery, welcoming January and thanking customers for their business while wishing them prosperity, blessings, and success.'
  },
  {
    id: '7',
    title: 'Carol Night',
    imageUrl: '/image7.jpg',
    category: 'flyers',
    shortDescription: 'Christmas carol night flyer for The Light Choir',
    fullDescription: 'A festive green-and-white flyer inviting guests to Carol Night hosted by The Light Choir of The Garden of the Light and Faith Mission (Isong Enwongo Ye Idaresit) in Itiam Ikot Ebia. The design highlights the theme “When they saw the star, they rejoiced with exceedingly great joy” (Matthew 2:10) alongside Christmas trees and ornaments, with the event holding at 5:00 PM on 24th December 2025 in the Church Auditorium.'
  },
  {
    id: '8',
    title: "Esthy's Fast Food",
    imageUrl: '/image8.jpg',
    category: 'flyers',
    shortDescription: 'Fast food restaurant flyer for Esthy’s Fast Food',
    fullDescription: 'A bold black-and-white restaurant flyer for Esthy’s Fast Food, showcasing close-up food photography of stir-fried noodles, grilled chicken, and rice dishes in angled frames. It includes a French quote, a “Restaurants” section with a slogan placeholder, sample dishes, a “Order now and get your delivery” call to action, and the phone number 0810-842-8142.'
  },

  // Banners
  {
    id: '9',
    title: 'MST Prints and Delivery Logo',
    imageUrl: '/image9.jpg',
    category: 'logos',
    shortDescription: 'Gold emblem logo for MST Prints and Delivery',
    fullDescription: 'A premium gold emblem logo for MST Prints and Delivery set on a deep navy background. The circular badge features a laurel wreath, the letters “MST”, a central monogram with “Prints & Delivery”, and a flowing ribbon carrying the tagline “Quality at its best”.'
  },
  {
    id: '10',
    title: 'Grace Motivational Design',
    imageUrl: '/image10.jpg',
    category: 'banners',
    shortDescription: 'Personal branding design titled “Grace”',
    fullDescription: 'An elegant personal branding design by Blex_Graphix hub featuring a smiling woman in a white suit against a soft blue background, with a faded duplicate portrait behind her. The word “GRACE” is set in large gold lettering framed by pink roses, accompanied by a motivational quote from Nonso Nneji about putting heart, mind, and soul into even the smallest acts.'
  },
  {
    id: '11',
    title: "D'Awesomes Luxury Hotel",
    imageUrl: '/image11.jpg',
    category: 'banners',
    shortDescription: 'Luxury hotel promotional flyer',
    fullDescription: 'A blue-and-gold promotional flyer for D’Awesomes Luxury Hotel. It lists facilities such as free WiFi, mini bar, meeting room, good ventilation, fitness centre, and swimming pool, alongside photos of the illuminated hotel exterior, poolside, reception, and guest rooms. Contact details include phone numbers 07099223357 and 09022781561, the handle @blex_graphixhub.com, and the address #24 Emco Lane, Uyo, Akwa Ibom State.'
  },
  {
    id: '12',
    title: 'Joshua Clinton Birthday',
    imageUrl: '/image12.jpg',
    category: 'banners',
    shortDescription: 'Birthday tribute flyer for Joshua Clinton',
    fullDescription: 'A glamorous gold-themed birthday flyer celebrating actor Joshua Clinton. It combines layered monochrome portraits with a full-colour cut-out of him in a beige suit, framed by golden curtains, a gift box, and a personal message wishing him an amazing year ahead.'
  }
];

// function removed as we are showing all projects
export const getAllProjects = (): Project[] => {
  return projectsData;
};