import { amenities } from "./Amenities";
import { Appassets } from "./Appassets";

export const projects = [
  // {
  //   id: 1,
  //   title: "Roodraksh Pearl",
  //   slug: "roodraksh-pearl",
  //   city: "Agartala",
  //   type: "Residential / Commercial",
  //   status: "Ongoing",
  //   feature_image: "/projects/roodraksh_pearl/feature.webp",
  //   banner_image: "/projects/roodraksh_pearl/banner.jpg",
  //   brochure_url: "/brochure/brochure-roodraksh-pearl-1748414009.pdf",
  //   more_details: {
  //     area: "0.961 acres",
  //     rera_no: "PRTR03240386",
  //     total_spaces: "105",
  //     total_towers: "1",
  //     flat_sizes: "642 Sq.Ft. - 1261 Sq.Ft.",
  //     bhk: "1bhk, 2bhk & 3bhk",
  //   },
  //   short_description:
  //     "At Roodraksh Pearl you will discover elevated living with amenities that cater to your wellness, leisure, and safety.",
  //   description:
  //     " is thoughtfully designed with premium amenities from wellness and fitness spaces to leisure zones. Every feature ensures convenience, safety, and peace of mind as you step into a world of refined living where luxury meets everyday comfort. The project offers the perfect balance of modern elegance and serene living to elevate your lifestyle.",
  //   amenities: amenities.filter((item: any) =>
  //     [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].includes(item.id)
  //   ),
  //   location: {
  //     address: "Near S.D.O.Chowmuhani, Chanmari,West Tripura",
  //     map_url:
  //       "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7297.371570146066!2d91.300028!3d23.865289!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3753f10050494815%3A0xc969d0e575274b31!2sRoodraksh%20Pearl!5e0!3m2!1sen!2sin!4v1750314507432!5m2!1sen!2sin",
  //     satellite_view:
  //       "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6936.303705998213!2d91.300028!3d23.865289!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3753f10050494815%3A0xc969d0e575274b31!2sRoodraksh%20Pearl!5e1!3m2!1sen!2sin!4v1750224452637!5m2!1sen!2sin",
  //     live_view:
  //       "https://www.google.com/maps/embed?pb=!4v1750224511739!6m8!1m7!1sc_OY0m0DwQ7b1PamsE20sA!2m2!1d23.86547785043784!2d91.30001738328474!3f170!4f0!5f0.5970117501821992",
  //   },
  //   nearby_places: [
  //     {
  //       title: "Market",
  //       places: [
  //         {
  //           title: "GB Market",
  //           distance: "1.2 kms",
  //         },
  //         {
  //           title: "Polo Central Mall",
  //           distance: "3 kms",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Transport",
  //       places: [
  //         {
  //           title: "Agartala Airport",
  //           distance: "8.9 kms",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Hospitals",
  //       places: [
  //         {
  //           title: "GB Hospital",
  //           distance: "1.4 kms",
  //         },
  //         {
  //           title: "ILS Hospitals",
  //           distance: "1.4 kms",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Schools",
  //       places: [
  //         {
  //           title: "Don Bosco School",
  //           distance: "700 mtrs",
  //         },
  //         {
  //           title: "Auxilium Girls School",
  //           distance: "700 mtrs",
  //         },
  //         {
  //           title: "The Agartala International School",
  //           distance: "1.2 kms",
  //         },
  //         {
  //           title: "Kendriya Vidhyalaya Kunjaban",
  //           distance: "1.4 kms",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Hotel",
  //       places: [
  //         {
  //           title: "Polo Towers",
  //           distance: "3 kms",
  //         },
  //       ],
  //     },
  //   ],
  //   layout_plans: [
  //     {
  //       title: "GROUND FLOOR & SITE PLAN & TYPICAL FRIST",
  //       image: "/projects/roodraksh_pearl/layout01.png",
  //     },
  //     {
  //       title: "TYPICAL SECOND & TYPICAL THIRD",
  //       image: "/projects/roodraksh_pearl/layout02.png",
  //     },
  //     {
  //       title: "TYPICAL 4rd to 9th & UNIT FLOOR A,B,C",
  //       image: "/projects/roodraksh_pearl/layout03.png",
  //     },
  //     {
  //       title: "UNIT FLOOR PLANS D,E,F & G,H",
  //       image: "/projects/roodraksh_pearl/layout04.png",
  //     },
  //     {
  //       title: "UNIT FLOOR PLANS I,J & K,L,M",
  //       image: "/projects/roodraksh_pearl/layout05.png",
  //     },
  //   ],
  //   gallery: [
  //     {
  //       title: "image01",
  //       image: "/projects/roodraksh_pearl/gallery01.jpg",
  //     },
  //     {
  //       title: "image02",
  //       image: "/projects/roodraksh_pearl/gallery02.jpg",
  //     },
  //     {
  //       title: "image03",
  //       image: "/projects/roodraksh_pearl/gallery03.jpg",
  //     },
  //     {
  //       title: "Pool area01",
  //       image: "/projects/roodraksh_pearl/gallery04.jpg",
  //     },
  //     {
  //       title: "Pool area02",
  //       image: "/projects/roodraksh_pearl/gallery05.jpg",
  //     },
  //     {
  //       title: "Pool area03",
  //       image: "/projects/roodraksh_pearl/gallery06.jpg",
  //     },
  //     {
  //       title: "Pool area04",
  //       image: "/projects/roodraksh_pearl/gallery07.jpg",
  //     },
  //     {
  //       title: "image04",
  //       image: "/projects/roodraksh_pearl/gallery08.jpg",
  //     },
  //   ],
  // },
  // {
  //   id: 2,
  //   title: "Roodraksh Amiyanandini",
  //   slug: "roodraksh-amiyanandini",
  //   city: "Agartala",
  //   type: "Residential",
  //   status: "Ongoing",
  //   feature_image: "/projects/roodraksh_amiyanandini/feature.jpg",
  //   banner_image: "/projects/roodraksh_amiyanandini/banner.jpg",
  //   brochure_url: "",
  //   more_details: {
  //     area: "0.1868 ACRES",
  //     rera_no: "PRTR02250444",
  //     total_spaces: "24",
  //     total_towers: "1",
  //     flat_sizes: "829 Sq.Ft. - 1190 Sq.Ft.",
  //     bhk: "2 & 3 BHK",
  //   },
  //   short_description:
  //     "The project redefines community living with dedicated spaces for leisure, wellness, and encourages a wholesome lifestyle.",
  //   description:
  //     "Crafted for those who seek more than just a home, Roodraksh Amiyanandini offers a safe and serene environment. Designed using eco-friendly materials and smart layouts, it offers the perfect balance of sustainability and sophistication. A smart investment for a bright future in one of North Eastern India's growing urban hubs.",
  //   amenities: amenities.filter((item) => [13, 12, 14].includes(item.id)),
  //   location: {
  //     address:
  //       "Opp. Kamini Kumar Singha HS School, Assam-Agartala Road, Dhaleshwar, Agartala, Tripura-799007",
  //     map_url:
  //       "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7299.18541966745!2d91.296514!3d23.833078!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3753f30052b45ecb%3A0xf676dcbe8f8e812c!2sRoodraksh%20Amiyanandini!5e0!3m2!1sen!2sin!4v1750314668923!5m2!1sen!2sin",
  //     satellite_view:
  //       "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6938.027807756821!2d91.296514!3d23.833078!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3753f30052b45ecb%3A0xf676dcbe8f8e812c!2sRoodraksh%20Amiyanandini!5e1!3m2!1sen!2sin!4v1750224639001!5m2!1sen!2sin",
  //     live_view:
  //       "https://www.google.com/maps/embed?pb=!4v1750224684626!6m8!1m7!1syTOaJci7O96U4y5Y-gNmNg!2m2!1d23.83297904017586!2d91.29652467528865!3f162.99!4f7.019999999999996!5f0.5970117501821992",
  //   },
  //   nearby_places: [
  //     {
  //       title: "schools",
  //       places: [
  //         {
  //           title: "Kamini Kumar Singha Memorial School",
  //           distance: "00 mtrs",
  //         },
  //       ],
  //     },
  //     {
  //       title: "University",
  //       places: [
  //         {
  //           title: "Maharaja Bir Bikram College",
  //           distance: "1 km",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Hospitals",
  //       places: [
  //         {
  //           title: "IGM Hospital",
  //           distance: "2.5 km",
  //         },
  //         {
  //           title: "ILS Hospitals",
  //           distance: "5 km",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Market",
  //       places: [
  //         {
  //           title: "Shankuntala Road",
  //           distance: "1.7 Km",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Transport",
  //       places: [
  //         {
  //           title: "ISBT",
  //           distance: "1.3 km",
  //         },
  //       ],
  //     },
  //     {
  //       title: "others",
  //       places: [
  //         {
  //           title: "Ujayanta place",
  //           distance: "2.1 km",
  //         },
  //       ],
  //     },
  //   ],
  //   layout_plans: [],
  // },
  {
    id: 10,
    title: "Roodraksh Kundan",
    slug: "roodraksh-kundan",
    city: "Guwahati",
    type: "Residential / Commercial",
    status: "Ready To Move In",
    feature_image: "/projects/roodraksh_kundan/feature.jpg",
    banner_image: "/projects/roodraksh_kundan/banner.jpg",
    brochure_url: "/brochure/brochure-roodraksh-kundan-1748413988.pdf",
    more_details: {
      area: "-",
      rera_no: "RERAA KM 267 OF 2021-2022",
      total_spaces: "318",
      total_towers: "-",
      flat_sizes: "624 Sq.Ft. - 1331 Sq.Ft.",
      bhk: "2 & 3 BHK",
    },
    short_description:
      "Roodraksh Kundan offers you a serene living experience in a well-planned home that values both your privacy and the little joys of daily life.",
    description:
      " brings premium living to North East India, with every home pre-inspected by MACJ in partnership with A Buyer’s Choice Home Inspections, USA. Featuring an earthquake-resistant RCC framework, gated security, fire safety measures, and stylish interiors, it offers a serene and thoughtfully crafted space where comfort, privacy, and quality blend seamlessly for today’s families.",
    amenities: amenities.filter((item) =>
      [3, 9, 16, 17, 18, 19, 20, 21, 22, 23, 24].includes(item.id)
    ),

    location: {
      address: "SATGAON MAIN ROAD , BESIDE SFS SCHOOL, GUWAHATI - 781170",
      map_url:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7161.856014913118!2d91.831759!3d26.166474!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a592bf05573a1%3A0x7cd7fa416bd6b80c!2sRoodraksh%20Kundan%20-%202%20and%203%20BHK%20Flats%20and%20Apartments%20For%20Sale%20in%20Guwahati!5e0!3m2!1sen!2sin!4v1750316014703!5m2!1sen!2sin",
      satellite_view:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6807.493347508563!2d91.831759!3d26.166474!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a592bf05573a1%3A0x7cd7fa416bd6b80c!2sRoodraksh%20Kundan%20-%202%20and%203%20BHK%20Flats%20and%20Apartments%20For%20Sale%20in%20Guwahati!5e1!3m2!1sen!2sin!4v1750230932672!5m2!1sen!2sin",
      live_view:
        "https://www.google.com/maps/embed?pb=!4v1750230976771!6m8!1m7!1sdXBiMJ9I5_HW3ogKX_Px9w!2m2!1d26.1661463308015!2d91.83121175649713!3f56.59!4f0!5f0.5970117501821992",
    },
    nearby_places: [
      {
        title: "Hospitals",
        places: [
          {
            title: "Pratiksha Hospital",
            distance: "2.9 km",
          },
        ],
      },
      {
        title: "Transport",
        places: [
          {
            title: "Narengi Railway Station",
            distance: "2 km",
          },
        ],
      },
      {
        title: "Market",
        places: [
          {
            title: "Market",
            distance: "500 mtr",
          },
          {
            title: "Ganeshguri (G S Road)",
            distance: "8.5 km",
          },
        ],
      },
      {
        title: "Schools",
        places: [
          {
            title: "St Francis De Sales Higher Secondary School",
            distance: "Next Building",
          },
          {
            title: "Army Public School, Narengi",
            distance: "3.7 km",
          },
        ],
      },
      {
        title: "University",
        places: [
          {
            title: "Narangi Anchalik Mahavidyalaya",
            distance: "800 mtr",
          },
        ],
      },
      {
        title: "Zoo",
        places: [
          {
            title: "zoo",
            distance: "7.2 km ",
          },
        ],
      },
      {
        title: "Museum",
        places: [
          {
            title: "Srimanta sankaradava kalashetra",
            distance: "5.4 km ",
          },
        ],
      },
      {
        title: "others",
        places: [
          {
            title: "Assam Secretariat",
            distance: "6.5 km ",
          },
        ],
      },
    ],
    layout_plans: [
      {
        title: "Type 1 & 2",
        image: "/projects/roodraksh_kundan/layout01.webp",
      },
      {
        title: "Type 3-A & 3-B",
        image: "/projects/roodraksh_kundan/layout02.webp",
      },
      {
        title: "Typical Floor Plan - Block 4",
        image: "/projects/roodraksh_kundan/layout03.webp",
      },
      {
        title: "Typical Floor Plan 2 - Block C & E",
        image: "/projects/roodraksh_kundan/layout04.webp",
      },
      {
        title: "Typical Floor Plan 3 - BLOCK D",
        image: "/projects/roodraksh_kundan/layout05.webp",
      },
    ],
    gallery: [
      {
        title: "01",
        image: "/projects/roodraksh_kundan/gallery01.jpg",
      },
      {
        title: "02",
        image: "/projects/roodraksh_kundan/gallery02.jpg",
      },
      {
        title: "03",
        image: "/projects/roodraksh_kundan/gallery03.jpg",
      },
      {
        title: "04",
        image: "/projects/roodraksh_kundan/gallery04.jpg",
      },
      {
        title: "05",
        image: "/projects/roodraksh_kundan/gallery05.jpg",
      },
      {
        title: "06",
        image: "/projects/roodraksh_kundan/gallery06.jpg",
      },
      {
        title: "07",
        image: "/projects/roodraksh_kundan/gallery07.jpg",
      },
      {
        title: "08",
        image: "/projects/roodraksh_kundan/gallery08.jpg",
      },
      {
        title: "09",
        image: "/projects/roodraksh_kundan/gallery09.jpg",
      },
      {
        title: "010",
        image: "/projects/roodraksh_kundan/gallery010.jpg",
      },
      {
        title: "011",
        image: "/projects/roodraksh_kundan/gallery011.jpg",
      },
      {
        title: "012",
        image: "/projects/roodraksh_kundan/gallery012.jpg",
      },
      {
        title: "013",
        image: "/projects/roodraksh_kundan/gallery013.jpg",
      },
      {
        title: "014",
        image: "/projects/roodraksh_kundan/gallery014.jpg",
      },
      {
        title: "015",
        image: "/projects/roodraksh_kundan/gallery015.jpg",
      },
    ],
  },
  {
    id: 7,
    title: "Roodraksh Pride",
    slug: "roodraksh-pride",
    city: "Agartala",
    type: "Residential",
    status: "Completed",
    feature_image: "/projects/roodraksh_pride/feature.jpg",
    banner_image: "/projects/roodraksh_pride/banner.webp",
    brochure_url: "",
    more_details: {
      area: "11376 Sq.Ft.",
      rera_no: "RERAA KM 31 of 2023-24",
      total_spaces: "16",
      total_towers: "1",
      flat_sizes: "1582 Sq.Ft. - 1768 Sq.Ft.",
      bhk: "3 BHK",
    },
    short_description:
      "Perfectly positioned, this project presents modern residences crafted for optimal space use, enhanced security, and eco-friendly living.",
    description:
      "introduces a new destination of comfort and ease in Agartala. With beautifully landscaped gardens, leisure zones, and essential facilities, it creates a perfect balance of community and relaxation. Conveniently positioned for quick access to all city necessities, this project ensures everything you require is within easy reach.",
    amenities: [],
    location: {
      address:
        "1 NO JAPORIGOG GAON, BHASKAR NAGAR, NEAR BHASKAR VIDYAPEETH SCHOOL",
      map_url:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7298.917071919816!2d91.266472!3d23.837846!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3753f43e77b90c81%3A0x87977beb0aa1e7b6!2sRoodraksh%20Pride%20Apartments!5e0!3m2!1sen!2sin!4v1750315556200!5m2!1sen!2sin",
      satellite_view:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6937.772737632117!2d91.266472!3d23.837846!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3753f43e77b90c81%3A0x87977beb0aa1e7b6!2sRoodraksh%20Pride%20Apartments!5e1!3m2!1sen!2sin!4v1750227761753!5m2!1sen!2sin",
      live_view:
        "https://www.google.com/maps/embed?pb=!4v1750227826624!6m8!1m7!1sYW1smpibe1nAo0v_qCN3Ag!2m2!1d23.83778098518578!2d91.26646286060624!3f5.03!4f-0.6700000000000017!5f2.7697822373993626",
    },
    nearby_places: [],
    layout_plans: [],
    gallery: [],
  },
  {
    id: 3,
    title: "Roodraksh Sapphire",
    slug: "roodraksh-sapphire",
    city: "Guwahati",
    type: "Residential",
    status: "Ongoing",
    feature_image: "/projects/roodraksh_sapphire/feature.jpg",
    banner_image: "/projects/roodraksh_sapphire/banner.jpg",
    brochure_url: "",
    more_details: {
      area: "-",
      rera_no: "RERAA KM 02 OF 2025-2026",
      total_spaces: "70",
      total_towers: "1",
      flat_sizes: "1089 Sq.Ft. - 1415 Sq.Ft.",
      bhk: "2 & 3 BHK",
    },
    short_description:
      "Roodraksh Sapphire welcomes you to a haven of tranquillity, away from the city’s hustle, where scenic views and calm surroundings help you unwind.",
    description:
      "is more than a residence. It’s a place where happiness, and togetherness flourish. From cherished family moments to lively interactions within a welcoming community, every aspect is designed to enhance your comfort and joy. Here, you’ll enjoy a way of life that creates a genuine sense of belonging and makes each day feel extraordinary.",
    amenities: amenities.filter((item) =>
      [15, 9, 3, 8, 5, 6, 7, 12].includes(item.id)
    ),

    location: {
      address: "NEW AIRPORT ROAD, GARAL, DHARAPUR-781017",
      map_url:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7163.512341855469!2d91.608909!3d26.139492!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a470027348fa3%3A0x308eb555a369d3d8!2sRoodraksh%20Sapphire!5e0!3m2!1sen!2sin!4v1750314789054!5m2!1sen!2sin",
      satellite_view:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6809.067720774078!2d91.608909!3d26.139492!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a470027348fa3%3A0x308eb555a369d3d8!2sRoodraksh%20Sapphire!5e1!3m2!1sen!2sin!4v1750224815578!5m2!1sen!2sin",
      live_view: "",
    },
    nearby_places: [
      {
        title: "Transport",
        places: [
          {
            title: "International Airport",
            distance: "2 km",
          },
        ],
      },
      {
        title: "University",
        places: [
          {
            title: "Guwahati University",
            distance: "4 km",
          },
          {
            title: "Don Bosco University",
            distance: "3 km",
          },
        ],
      },
      {
        title: "Market",
        places: [
          {
            title: "Market",
            distance: "500 mtr",
          },
        ],
      },
      {
        title: "Bank",
        places: [
          {
            title: "Bank",
            distance: "500 mtr",
          },
        ],
      },
      {
        title: "Amusement",
        places: [
          {
            title: "Accoland water part",
            distance: "8 km",
          },
        ],
      },
      {
        title: "School",
        places: [
          {
            title: "school",
            distance: "500 mtr",
          },
        ],
      },
      {
        title: "Hotel",
        places: [
          {
            title: "Tusli Grand",
            distance: "0.5 km",
          },
        ],
      },
    ],
    layout_plans: [
      {
        title: "Basement Plan",
        image: "/projects/roodraksh_sapphire/layout01.png",
      },
      {
        title: "Ground Floor Plan",
        image: "/projects/roodraksh_sapphire/layout02.png",
      },
      {
        title: "1st Floor Plan",
        image: "/projects/roodraksh_sapphire/layout03.png",
      },
      {
        title: "Floor Plan 2nd to 9th",
        image: "/projects/roodraksh_sapphire/layout04.png",
      },
      {
        title: "Unit Floor Plan",
        image: "/projects/roodraksh_sapphire/layout05.png",
      },
      {
        title: "Flat C & D",
        image: "/projects/roodraksh_sapphire/layout06.png",
      },
      {
        title: "Flat E & F",
        image: "/projects/roodraksh_sapphire/layout07.png",
      },
      {
        title: "Floor G & H",
        image: "/projects/roodraksh_sapphire/layout08.png",
      },
    ],
    gallery: [
      {
        title: "image01",
        image: "/projects/roodraksh_sapphire/gallery01.jpg",
      },
      {
        title: "image02",
        image: "/projects/roodraksh_sapphire/gallery02.jpg",
      },
      {
        title: "image03",
        image: "/projects/roodraksh_sapphire/gallery03.jpg",
      },
      {
        title: "image04",
        image: "/projects/roodraksh_sapphire/gallery04.jpg",
      },
      {
        title: "image05",
        image: "/projects/roodraksh_sapphire/gallery05.jpg",
      },
    ],
  },
  // {
  //   id: 4,
  //   title: "Roodraksh Arham",
  //   slug: "roodraksh-arham",
  //   city: "Guwahati",
  //   type: "Residential",
  //   status: "Ongoing",
  //   feature_image: "/projects/roodraksh_arham/feature.jpg",
  //   banner_image: "/projects/roodraksh_arham/banner.jpg",
  //   brochure_url: " /brochure/brochure-roodraksh-arham-1747810037",
  //   more_details: {
  //     area: "-",
  //     rera_no: "N/A",
  //     total_spaces: "24",
  //     total_towers: "-",
  //     flat_sizes: "1040 Sq.Ft. - 1647 Sq.Ft.",
  //     bhk: "2 & 3 BHK",
  //   },
  //   short_description:
  //     "Set in a prime location at Roodraksh Arham you will enjoy effortless connectivity, trusted security, and a truly refined lifestyle.",
  //   description:
  //     " offers premium residences designed for comfort, elegance, and ease. Step into a life of sophistication where you can enjoy spacious, modern homes with stylish interiors, all nestled in a prime, well-connected neighborhood. With round-the-clock security, covered parking, and a peaceful community, this is where luxury living meets everyday convenience.",
  //   amenities: [],
  //   location: {
  //     address: "DAKHALA ROAD, OPP NEW JAIN MANDIR, BIJOYNAGAR-781122",
  //     map_url: "",
  //     satellite_view: "",
  //     live_view: "",
  //   },
  //   nearby_places: [],
  //   layout_plans: [],
  //   gallery: [
  //     {
  //       title: "Arharm1",
  //       image: "/projects/roodraksh_arham/gallery02.jpg",
  //     },
  //     {
  //       title: "Arharm2",
  //       image: "/projects/roodraksh_arham/gallery01.jpg",
  //     },
  //   ],
  // },
  // {
  //   id: 5,
  //   title: "Roodraksh Talukder Mansion",
  //   slug: "roodraksh-talukder-mansion",
  //   city: "Agartala",
  //   type: "Residential",
  //   status: "Completed",
  //   feature_image: "/projects/roodraksh_talukder_mansion/feature.webp",
  //   banner_image: "/projects/roodraksh_talukder_mansion/banner.webp",
  //   brochure_url: "",
  //   more_details: {
  //     area: "-",
  //     rera_no: "N/A",
  //     total_spaces: "-",
  //     total_towers: "-",
  //     flat_sizes: "-",
  //     bhk: "-",
  //   },
  //   short_description:
  //     "Exquisite exteriors along with thoughtfully planned interiors distinguish these flats from other residential projects",
  //   description:
  //     " offers the buyers 2 & 3 BHK premium homes. The single block building consists of the 8 privilege residences where the flat members live and enjoy like a big extended family. The flats have been equipped with all modern amenities that make your living experience a memorable one. RCC framed structure along with conventional brickwork ensures a strong foundation of the building. Further, the flooring has been done with vitrified tiles in all the bedrooms, living, and dining areas while anti-skid ceramic tiles have been used in the toilet.Security has always remained a core priority and therefore, the building has been secured with CCTV connected to the security room. In addition to this, flush doors have been provided for the entrance area and rooms while PVC doors have been provided for bathrooms. Apart from this, adequate power backup has been provided for the common area lighting and lifts.",
  //   amenities: [],
  //   location: {
  //     address: "Colonel Chowmuhani, Agartala",
  //     map_url:
  //       "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7298.939361115508!2d91.277126!3d23.83745!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3753f5005657dced%3A0x3c8550beb4c9a515!2sRoodraksh%20Talukdar%20Mansion!5e0!3m2!1sen!2sin!4v1750314883545!5m2!1sen!2sin",
  //     satellite_view:
  //       "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6937.79392397698!2d91.277126!3d23.83745!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3753f5005657dced%3A0x3c8550beb4c9a515!2sRoodraksh%20Talukdar%20Mansion!5e1!3m2!1sen!2sin!4v1750226292864!5m2!1sen!2sin",
  //     live_view:
  //       "https://www.google.com/maps/embed?pb=!4v1750226330024!6m8!1m7!1s8JYYSqyHzusdnRFKp85hrQ!2m2!1d23.83786540240934!2d91.27735370924486!3f208.41!4f0!5f0.5970117501821992",
  //   },
  //   nearby_places: [],
  //   layout_plans: [],
  //   gallery: [],
  // },
  // {
  //   id: 6,
  //   title: "Roodraksh MM Dhar",
  //   slug: "roodraksh-mm-dhar",
  //   city: "Agartala",
  //   type: "Residential",
  //   status: "Completed",
  //   feature_image: "/projects/roodraksh_mm_dhar/feature.webp",
  //   banner_image: "/projects/roodraksh_mm_dhar/banner.webp",
  //   brochure_url: "",
  //   more_details: {
  //     area: "",
  //     rera_no: "N/A",
  //     total_spaces: "",
  //     total_towers: "",
  //     flat_sizes: "",
  //     bhk: "",
  //   },
  //   short_description:
  //     "Treasure a houseful of wonderful memories where life becomes livelier than ever before.",
  //   description:
  //     " are thoughtfully designed to provide you extra ease and comfort after a hard-working day. The peaceful environment and soothing ambience allow you to spend quality time with your family members. All essential amenities are in proximity that is crucial for living a comfortable life. The diligently crafted apartment with a friendly neighbourhood is equipped to provide you a unique community living experience. Create your personal space in a peaceful ambience at these luxury apartments. RCC framed structure has been used for a strong foundation and flooring has been done with vitrified and anti-skid ceramic tiles.Security features include CCTV secured premises that are connected to the security room. Adequate provision has been laid for power backup facilities along with a proper fire management system. Further, high-quality electrical fittings such as modular switches of the superior brand have been used.",
  //   amenities: [],
  //   location: {
  //     address: "Ram Nagar, Agartala",
  //     map_url:
  //       "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28641.816245023154!2d91.746365!3d26.189292!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5a30f300bb8f%3A0x478d130e6a650156!2sMahatma%20Gandhi%20Rd%2C%20Guwahati%2C%20Assam!5e0!3m2!1sen!2sin!4v1750315461157!5m2!1sen!2sin",
  //     satellite_view: "",
  //     live_view: "",
  //   },
  //   nearby_places: [],
  //   layout_plans: [],
  //   gallery: [],
  // },

  // {
  //   id: 8,
  //   title: "Roodraksh Elite",
  //   slug: "roodraksh-elite",
  //   city: "Agartala",
  //   type: "Residential",
  //   status: "Completed",
  //   feature_image: "/projects/roodraksh_elite/feature.webp",
  //   banner_image: "/projects/roodraksh_elite/banner.webp",
  //   brochure_url: "",
  //   more_details: {
  //     area: "-",
  //     rera_no: "N/A",
  //     total_spaces: "-",
  //     total_towers: "-",
  //     flat_sizes: "-",
  //     bhk: "-",
  //   },
  //   short_description:
  //     "Roodraksh Elite comprises 16 lifestyle apartments that are equipped with all the modern amenities that you want your dream home to possess.",
  //   description:
  //     "Coming back home should always be a pleasant and exciting experience. Located on a premium location, the 2/3  BHK dream homes at Roodraksh Elite offer exquisite facade and ample space for car parking. Equipped with best-in-class fixtures and fittings, the families who choose to live here experience a life full of joy and happiness. Thus, this apartment with all essential amenities perfectly complements the new-found urban lifestyle. As the name suggests, the project has high-end specifications that make your living elite. The RCC framed structure in the foundation has been provided with conventional brickwork. Anti-skid ceramic tiles in the kitchen area and bathroom and vitrified tiles have been used in bedrooms and living/dining areas.The terrace has been treated for waterproofing and heat insulation with anodized sliding aluminium windows. Apart from this, there is a night latch on the main door along with Mortise locks on other doors. Further, the door frames are made of seasoned wood and flush door for entrance, rooms, and PVC doors for the bathroom. ",
  //   amenities: [],
  //   location: {
  //     address: "Jaya Nagar, Agartala.",
  //     map_url:
  //       "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29197.16373068612!2d91.26636!3d23.831203!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3753f50038aa75f5%3A0x5496daa33a79b945!2sRodraksh%20elite%20apartment!5e0!3m2!1sen!2sin!4v1750315666503!5m2!1sen!2sin",
  //     satellite_view:
  //       "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d27752.512400261545!2d91.26636!3d23.831203!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3753f50038aa75f5%3A0x5496daa33a79b945!2sRodraksh%20elite%20apartment!5e1!3m2!1sen!2sin!4v1750228652808!5m2!1sen!2sin",
  //     live_view:
  //       "https://www.google.com/maps/embed?pb=!4v1750228697334!6m8!1m7!1s6tdvfQ5XCAOdquLAh4h7sQ!2m2!1d23.83104979805797!2d91.26643833385944!3f231.91!4f-0.2600000000000051!5f0.5970117501821992",
  //   },
  //   nearby_places: [],
  //   layout_plans: [],
  //   gallery: [],
  // },
  // {
  //   id: 9,
  //   title: "Roodraksh Dinesh Palace",
  //   slug: "roodraksh-dinesh-palace",
  //   city: "Agartala",
  //   type: "Residential",
  //   status: "Completed",
  //   feature_image: "/projects/roodraksh_dinesh_palace/feature.webp",
  //   banner_image: "/projects/roodraksh_dinesh_palace/banner.webp",
  //   brochure_url: "",
  //   more_details: {
  //     area: "-",
  //     rera_no: "N/A",
  //     total_spaces: "-",
  //     total_towers: "-",
  //     flat_sizes: "-",
  //     bhk: "-",
  //   },
  //   short_description:
  //     "Offering a premium and exclusive lifestyle full of energy and positivity.",
  //   description:
  //     "The 3 BHK premium apartments are located at Akhura Road, Agartala, and are absolute elite residences that let you welcome a lavish living. A total of 16 families residing at the apartment offers a lifestyle that you have dreamt of. Adequate emphasis has been laid on security with full CCTV secured compound.  The other specifications of these flats include a pile foundation and conventional brickwork. The kitchen has vitrified tiles on the floor along with a Granite kitchen platform with stainless sink and 2.5 ft dado over kitchen platform. Apart from this, the windows are UPVC sliding windows.In addition to this, the common lighting system has PVC concealed wiring everywhere inside the premise with an adequate fire-fighting arrangement. The High quality sanitary ware from top brands like Hindware/ Parryware and equivalent have been installed in the bathroom. Further, the OTIS automatic door lift has been installed in these flats which provides greater ease and convenience.",
  //   amenities: [],
  //   location: {
  //     address: "Joynagar Road no-6,west Tripura",
  //     map_url:
  //       "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7299.280691218489!2d91.264278!3d23.831385!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3753f542df08d507%3A0xfb4d972f312fed50!2sRoodraksh%20Dinesh%20Palace!5e0!3m2!1sen!2sin!4v1750315800723!5m2!1sen!2sin",
  //     satellite_view:
  //       "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6938.118365350907!2d91.264278!3d23.831385!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3753f542df08d507%3A0xfb4d972f312fed50!2sRoodraksh%20Dinesh%20Palace!5e1!3m2!1sen!2sin!4v1750229563358!5m2!1sen!2sin",
  //     live_view:
  //       "https://www.google.com/maps/embed?pb=!4v1750229613582!6m8!1m7!1sgQrC2dSjXNwKOQZEfB7dOw!2m2!1d23.83133971680749!2d91.26438959326622!3f292.56!4f0!5f0.5970117501821992",
  //   },
  //   nearby_places: [],
  //   layout_plans: [],
  //   gallery: [],
  // },

  // {
  //   id: 11,
  //   title: "Roodraksh Chakraborty Mansion",
  //   slug: "roodraksh-chakraborty-mansion",
  //   city: "Agartala",
  //   type: "Residential",
  //   status: "Ready To Move In",
  //   feature_image: "/projects/roodraksh_chakraborty_mansion/feature.jpg",
  //   banner_image: "/projects/roodraksh_chakraborty_mansion/banner.jpg",
  //   brochure_url: "",
  //   more_details: {
  //     area: "-",
  //     rera_no: "PRTR03210128",
  //     total_spaces: "36",
  //     total_towers: "1",
  //     flat_sizes: "835 Sq.Ft. - 1360 Sq.Ft.",
  //     bhk: "2 & 3 BHK",
  //   },
  //   short_description:
  //     "Nestled in the heart of Agartala the project offers a perfect blend of modern design and natural serenity.",
  //   description:
  //     "The premium residential project offers thoughtfully planned homes which ensure optimal space, comfort, and functionality. With proximity to essential conveniences like schools, hospitals, and markets, it promises unmatched connectivity. The project is built with quality construction standards, ensuring durability, safety, and peace of mind.",
  //   amenities: amenities.filter((item) => [13, 12, 14].includes(item.id)),

  //   location: {
  //     address:
  //       "Dhaleswar, Near Prachya Bharati School, North Side Shiv Mandir, Agartala-799007, West Tripura.",
  //     map_url:
  //       "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7298.875982337206!2d91.293442!3d23.838576!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3753f3000fd54c01%3A0xc821536fc21aa5af!2sRoodraksh%20Chakraborty%20Mansion!5e0!3m2!1sen!2sin!4v1750316113082!5m2!1sen!2sin",
  //     satellite_view:
  //       "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6937.733681127812!2d91.293442!3d23.838576!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3753f3000fd54c01%3A0xc821536fc21aa5af!2sRoodraksh%20Chakraborty%20Mansion!5e1!3m2!1sen!2sin!4v1750237219932!5m2!1sen!2sin",
  //     live_view:
  //       "https://www.google.com/maps/embed?pb=!4v1750237257598!6m8!1m7!1slsjfclHZzZXTx95RO7dXJA!2m2!1d23.83828434792465!2d91.29335138075515!3f16.31!4f0!5f0.5970117501821992",
  //   },
  //   nearby_places: [
  //     {
  //       title: "Schools",
  //       places: [
  //         {
  //           title: "Prachya Bharati School",
  //           distance: "300 mtrs",
  //         },
  //         {
  //           title: "Bodhjung Girls Hs School",
  //           distance: "600 mtrs",
  //         },
  //       ],
  //     },
  //     {
  //       title: "University",
  //       places: [
  //         {
  //           title: "Women’s College Agartala",
  //           distance: "1.4 km",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Hospitals",
  //       places: [
  //         {
  //           title: "IGM Hospital",
  //           distance: "2.7 km",
  //         },
  //         {
  //           title: "GB Hospital",
  //           distance: "2.9 km",
  //         },
  //         {
  //           title: "ILS Hospitals",
  //           distance: "4.2 km",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Market",
  //       places: [
  //         {
  //           title: "Polo Central Mall",
  //           distance: "2.6 km",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Transport",
  //       places: [
  //         {
  //           title: "Agartala Airport",
  //           distance: "9.8 km",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Hotel",
  //       places: [
  //         {
  //           title: "Hotel polo towers",
  //           distance: "2.6 km",
  //         },
  //       ],
  //     },
  //     {
  //       title: "others",
  //       places: [
  //         {
  //           title: "Aquilaria club house",
  //           distance: "2.8 km",
  //         },
  //       ],
  //     },
  //   ],
  //   layout_plans: [],
  //   gallery: [],
  // },
  // {
  //   id: 12,
  //   title: "Roodraksh Kritisha",
  //   slug: "roodraksh-kritisha",
  //   city: "Agartala",
  //   type: "Residential",
  //   status: "Ready To Move In",
  //   feature_image: "/projects/roodraksh_kritisha/feature.jpg",
  //   banner_image: "/projects/roodraksh_kritisha/banner.jpg",
  //   brochure_url: "",
  //   more_details: {
  //     area: "0.230 ACRES",
  //     rera_no: "PRTR09210181",
  //     total_spaces: "24",
  //     total_towers: "1",
  //     flat_sizes: "956 Sq.Ft. - 1439 Sq.Ft.",
  //     bhk: "2 & 3 BHK",
  //   },
  //   short_description:
  //     "The project is designed to meet the demands of urban life and offers spacious homes in a secure gated environment.",
  //   description:
  //     "A beautiful residential enclave Roodraksh Kritisha lets you experience elevated living in the peaceful city of Agartala. With easy access to schools, healthcare, and transport hubs, daily conveniences are just a step away. The project offers a balanced lifestyle to both the working professionals and families with comfort, connectivity, and community at its core.",
  //   amenities: amenities.filter((item) => [13, 12, 14].includes(item.id)),
  //   location: {
  //     address: "Jagatpur Kalibari Rd, Indranagar, Agartala, Tripura 799006",
  //     map_url:
  //       "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7297.932284693443!2d91.294883!3d23.855336!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3753f19a0f56ca2f%3A0xe43118de70b9127c!2sRoodraksh%20Kritisha%20Apartments!5e0!3m2!1sen!2sin!4v1750316364332!5m2!1sen!2sin",
  //     satellite_view:
  //       "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6936.836676857049!2d91.294883!3d23.855336!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3753f19a0f56ca2f%3A0xe43118de70b9127c!2sRoodraksh%20Kritisha%20Apartments!5e1!3m2!1sen!2sin!4v1750242336355!5m2!1sen!2sin",
  //     live_view: "",
  //   },
  //   nearby_places: [
  //     {
  //       title: "Schools",
  //       places: [
  //         {
  //           title: "Agartala International School",
  //           distance: "2.6 km",
  //         },
  //         {
  //           title: "Holy Cross School",
  //           distance: "4.2 km",
  //         },
  //         {
  //           title: "Kendriya Vidyalaya",
  //           distance: "2.3 km",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Hospitals",
  //       places: [
  //         {
  //           title: "IGM Hospital",
  //           distance: "2.7 km",
  //         },
  //         {
  //           title: "GB Hospital",
  //           distance: "700 mtrs",
  //         },
  //         {
  //           title: "ILS Hospitals",
  //           distance: "2.0 km",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Market",
  //       places: [
  //         {
  //           title: "Polo Central Mall",
  //           distance: "1.7 km",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Transport",
  //       places: [
  //         {
  //           title: "Agartala Airport",
  //           distance: "9 km",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Hotel",
  //       places: [
  //         {
  //           title: "Hotel Polo Towers",
  //           distance: "1.7 km",
  //         },
  //       ],
  //     },
  //     {
  //       title: "others",
  //       places: [
  //         {
  //           title: "Aquilaria club house",
  //           distance: "1.5 km",
  //         },
  //       ],
  //     },
  //   ],
  //   layout_plans: [],
  //   gallery: [],
  // },
  // {
  //   id: 13,
  //   title: "Roodraksh Naresh Apartment",
  //   slug: "roodraksh-naresh-apartment",
  //   city: "Agartala",
  //   type: "Residential",
  //   status: "Ready To Move In",
  //   feature_image: "/projects/roodraksh_naresh_apartment/feature.jpg",
  //   banner_image: "/projects/roodraksh_naresh_apartment/banner.jpg",
  //   brochure_url: "",
  //   more_details: {
  //     area: "0.0800 Acres",
  //     rera_no: "PRTR02240397",
  //     total_spaces: "13",
  //     total_towers: "1",
  //     flat_sizes: "464 - 835 Sq.Ft.",
  //     bhk: "1 & 2 BHK",
  //   },
  //   short_description:
  //     "Surrounded by lush greenery and peaceful surroundings the project offers well-ventilated homes with ample sunlight.",
  //   description:
  //     "  lets you discover a lifestyle that brings together nature and urban living in Agartala. With open spaces, and modern amenities, it is perfect for families and working professionals and promises a refreshing escape from the city’s hustle while staying well-connected to all essentials.",
  //   amenities: amenities.filter((item) => [13, 12, 14].includes(item.id)),
  //   location: {
  //     address: "Gandhighat, Melarmath, Tripura 799001",
  //     map_url: "",
  //     satellite_view: "",
  //     live_view: "",
  //   },
  //   nearby_places: [
  //     {
  //       title: "Schools",
  //       places: [
  //         {
  //           title: "Shishu Bihar HS School",
  //           distance: "1 km",
  //         },
  //         {
  //           title: "Umakanta Academy",
  //           distance: "800 mtrs",
  //         },
  //       ],
  //     },
  //     {
  //       title: "University",
  //       places: [
  //         {
  //           title: "Maharaja Bir Bikram College",
  //           distance: "2.7 km",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Hospitals",
  //       places: [
  //         {
  //           title: "IGM Hospital",
  //           distance: "350 Mtrs",
  //         },
  //         {
  //           title: "ILS Hospitals",
  //           distance: "6 Kms",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Market",
  //       places: [
  //         {
  //           title: "City Centre",
  //           distance: "300 mtrs",
  //         },
  //         {
  //           title: "Battala Bazar",
  //           distance: "1 km",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Transport",
  //       places: [
  //         {
  //           title: "Agartala Railway Station",
  //           distance: "5 km",
  //         },
  //       ],
  //     },
  //   ],
  //   layout_plans: [],
  //   gallery: [],
  // },
  // {
  //   id: 14,
  //   title: "Roodraksh Pratima Niranjan",
  //   slug: "roodraksh-pratima-niranjan",
  //   city: "Agartala",
  //   type: "Residential",
  //   status: "Ready To Move In",
  //   feature_image: "/projects/roodraksh_pratima_niranjan/feature.jpg",
  //   banner_image: "/projects/roodraksh_pratima_niranjan/banner.jpg",
  //   brochure_url: "",
  //   more_details: {
  //     area: "0.1200 ACRES",
  //     rera_no: "PRTR10230373",
  //     total_spaces: "16",
  //     total_towers: "1",
  //     flat_sizes: "953 Sq.Ft. - 1094 Sq.Ft.",
  //     bhk: "2 & 3 BHK",
  //   },
  //   short_description:
  //     "Set amidst Agartala’s green surroundings the thoughtfully designed residential project blends urban sophistication with natural calm.",
  //   description:
  //     " is Ideal for those who seek peace without compromising on connectivity. The homes offer optimal layout, natural light, and premium finishes for a refined living experience. Residents can enjoy a wide range of lifestyle amenities and open green areas within the premises. The project is your gateway to modern living in Tripura’s thriving capital.",
  //   amenities: amenities.filter((item) => [13, 12, 14].includes(item.id)),
  //   location: {
  //     address: "Arundhauti Nagar, Agartala, Tripura 799003",
  //     map_url:
  //       "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7300.240872739192!2d91.269186!3d23.814316!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3753f45d98d323e5%3A0x376310da3bb8629d!2sSt.%20Paul%E2%80%99s%20School%20Rd%2C%20Arundhauti%20Nagar%2C%20Agartala%2C%20Tripura%20799003!5e0!3m2!1sen!2sin!4v1750316487212!5m2!1sen!2sin",
  //     satellite_view: "",
  //     live_view: "",
  //   },
  //   nearby_places: [
  //     {
  //       title: "Schools",
  //       places: [
  //         {
  //           title: "St Paul’s School",
  //           distance: "100 mtrs",
  //         },
  //         {
  //           title: "Bardowali HS School",
  //           distance: "550 mtrs",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Hospitals",
  //       places: [
  //         {
  //           title: "Igm Hospital",
  //           distance: "2.5 km",
  //         },
  //         {
  //           title: "Meditrust Healthcare",
  //           distance: "2.5 km",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Market",
  //       places: [
  //         {
  //           title: "City Centre",
  //           distance: "2.4 km",
  //         },
  //         {
  //           title: "Battala Bazar",
  //           distance: "1.5 km",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Transport",
  //       places: [
  //         {
  //           title: "Agartala Railway Station",
  //           distance: "2.8 km",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Hotel",
  //       places: [
  //         {
  //           title: "Hotel Noah Spire",
  //           distance: "450 mtrs",
  //         },
  //       ],
  //     },
  //   ],
  //   layout_plans: [],
  //   gallery: [],
  // },
  // {
  //   id: 15,
  //   title: "Roodraksh M.M.Roy",
  //   slug: "roodraksh-m.m.roy",
  //   city: "Agartala",
  //   type: "Residential",
  //   status: "Completed",
  //   feature_image: "/projects/roodraksh_mm_roy/feature.jpg",
  //   banner_image: "/projects/roodraksh_mm_roy/banner.jpg",
  //   brochure_url: "",
  //   more_details: {
  //     area: "-",
  //     rera_no: "N/A",
  //     total_spaces: "-",
  //     total_towers: "-",
  //     flat_sizes: "-",
  //     bhk: "-",
  //   },
  //   short_description:
  //     "Offers 2 & 3 BHK living spaces to help you create joyful memories for a lifetime.",
  //   description:
  //     "The single block building consists of 12 dream homes which offer you a friendly neighbourhood and a perfectly unique living experience. Roodraksh Harmony is located in the heart of the city in the lap of nature. Although it is well connected to the entire city yet it offers a peaceful living environment. You can find all the urban amenities here while preserving the serenity. The harmonious environment and the complete ambience allows you and your family to spend perfect quality time with each other which takes your happiness to another level. The project has high-end specifications such as a proper fire protection system, CCTV secured building connected to a security room.In addition to this, the Granite kitchen platform with stainless sink and 2 ft Dado over the kitchen platform has been used in the kitchen area. Further, high-quality sanitaryware and CP fittings have been used in the bathrooms. Moreover, anti-skid ceramic tiles and vitrified tiles have been used in the bathroom and kitchen respectively. ",
  //   amenities: [],
  //   location: {
  //     address: "Mantri Bari Road Extension,Agatala,west Tripura",
  //     map_url: "",
  //     satellite_view: "",
  //     live_view: "",
  //   },
  //   nearby_places: [],
  //   layout_plans: [],
  //   gallery: [],
  // },
  // {
  //   id: 16,
  //   title: "Roodraksh Amrabati Apartment",
  //   slug: "roodraksh-amrabati-apartment",
  //   city: "Agartala",
  //   type: "Residential",
  //   status: "Completed",
  //   feature_image: "/projects/roodraksh_amrabati_apartment/feature.webp",
  //   banner_image: "/projects/roodraksh_amrabati_apartment/banner.webp",
  //   brochure_url: "",
  //   more_details: {
  //     area: "",
  //     rera_no: "N/A",
  //     total_spaces: "",
  //     total_towers: "",
  //     flat_sizes: "",
  //     bhk: "",
  //   },
  //   short_description: "",
  //   description: "",
  //   amenities: [],
  //   location: {
  //     address: "Joynagar Road no-1,Agartala west tripura.",
  //     map_url: "",
  //     satellite_view: "",
  //     live_view: "",
  //   },
  //   nearby_places: [],
  //   layout_plans: [],
  //   gallery: [],
  // },
  // {
  //   id: 17,
  //   title: "Roodraksh Geetanjali",
  //   slug: "roodraksh-geetanjali",
  //   city: "Agartala",
  //   type: "Residential",
  //   status: "Completed",
  //   feature_image: "/projects/roodraksh_geetanjali/feature.webp",
  //   banner_image: "/projects/roodraksh_geetanjali/banner.webp",
  //   brochure_url: "",
  //   more_details: {
  //     area: "",
  //     rera_no: "N/A",
  //     total_spaces: "",
  //     total_towers: "",
  //     flat_sizes: "",
  //     bhk: "",
  //   },
  //   short_description: "",
  //   description: "",
  //   amenities: [],
  //   location: {
  //     address: "Ramnagar road no-3,west tripura ",
  //     map_url: "",
  //     satellite_view: "",
  //     live_view: "",
  //   },
  //   nearby_places: [],
  //   layout_plans: [],
  //   gallery: [],
  // },
  // {
  //   id: 18,
  //   title: "Roodraksh Suhashini",
  //   slug: "roodraksh-suhashini",
  //   city: "Agartala",
  //   type: "Residential",
  //   status: "Completed",
  //   feature_image: "/projects/roodraksh_suhashini/feature.webp",
  //   banner_image: "/projects/roodraksh_suhashini/banner.webp",
  //   brochure_url: "",
  //   more_details: {
  //     area: "-",
  //     rera_no: "N/A",
  //     total_spaces: "-",
  //     total_towers: "-",
  //     flat_sizes: "-",
  //     bhk: "-",
  //   },
  //   short_description: "",
  //   description: "",
  //   amenities: [],
  //   location: {
  //     address: "Ramnagar Road no-4,west tripura",
  //     map_url:
  //       "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6937.7220174602035!2d91.269197!3d23.838794!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3753f56eb1ae9085%3A0x897568366579ac88!2sRoodraksh%20Suhasini%20Apartment!5e1!3m2!1sen!2sin!4v1750308278884!5m2!1sen!2sin",
  //     satellite_view:
  //       "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6937.7220174602035!2d91.269197!3d23.838794!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3753f56eb1ae9085%3A0x897568366579ac88!2sRoodraksh%20Suhasini%20Apartment!5e1!3m2!1sen!2sin!4v1750308318256!5m2!1sen!2sin",
  //     live_view:
  //       "https://www.google.com/maps/embed?pb=!4v1750308349753!6m8!1m7!1sDnu_brKfwZR9TQg5V67kbg!2m2!1d23.83870189835016!2d91.26922904074986!3f344.56!4f0!5f0.5970117501821992",
  //   },
  //   nearby_places: [],
  //   layout_plans: [],
  //   gallery: [],
  // },
  // {
  //   id: 19,
  //   title: "Roodraksh Himamullya",
  //   slug: "roodraksh-himamullya",
  //   city: "Agartala",
  //   type: "Residential",
  //   status: "Completed",
  //   feature_image: "/projects/roodraksh_himamullya/feature.webp",
  //   banner_image: "/projects/roodraksh_himamullya/banner.webp",
  //   brochure_url: "",
  //   more_details: {
  //     area: "",
  //     rera_no: "N/A",
  //     total_spaces: "",
  //     total_towers: "",
  //     flat_sizes: "",
  //     bhk: "",
  //   },
  //   short_description: "",
  //   description: "",
  //   amenities: [],
  //   location: {
  //     address: "Ramnagar Road no-8,west tripura",
  //     map_url: "",
  //     satellite_view: "",
  //     live_view: "",
  //   },
  //   nearby_places: [],
  //   layout_plans: [],
  //   gallery: [],
  // },
  // {
  //   id: 20,
  //   title: "Roodraksh Sarada",
  //   slug: "roodraksh-Sarada",
  //   city: "Agartala",
  //   type: "Residential",
  //   status: "Completed",
  //   feature_image: "/projects/roodraksh_sarada/feature.webp",
  //   banner_image: "/projects/roodraksh_sarada/banner.webp",
  //   brochure_url: "",
  //   more_details: {
  //     area: "",
  //     rera_no: "N/A",
  //     total_spaces: "",
  //     total_towers: "",
  //     flat_sizes: "",
  //     bhk: "",
  //   },
  //   short_description: "",
  //   description: "",
  //   amenities: [],
  //   location: {
  //     address: "Sreenagar Road No-5,Agartala West Tripura",
  //     map_url: "",
  //     satellite_view: "",
  //     live_view: "",
  //   },
  //   nearby_places: [],
  //   layout_plans: [],
  //   gallery: [],
  // },
  // {
  //   id: 21,
  //   title: "Roodraksh Labanya Residency",
  //   slug: "roodraksh-labanya-residency",
  //   city: "Agartala",
  //   type: "Residential",
  //   status: "Completed",
  //   feature_image: "/projects/roodraksh_labanya_residency/feature.webp",
  //   banner_image: "/projects/roodraksh_labanya_residency/banner.webp",
  //   brochure_url: "",
  //   more_details: {
  //     area: "",
  //     rera_no: "N/A",
  //     total_spaces: "",
  //     total_towers: "",
  //     flat_sizes: "",
  //     bhk: "",
  //   },
  //   short_description: "",
  //   description: "",
  //   amenities: [],
  //   location: {
  //     address: "T.G.Road,Ker Chowmuhani,Agartala West Tripura",
  //     map_url: "",
  //     satellite_view: "",
  //     live_view: "",
  //   },
  //   nearby_places: [
  //     {
  //       title: "",
  //       places: [
  //         {
  //           title: "",
  //           distance: "",
  //         },
  //         {
  //           title: "",
  //           distance: "",
  //         },
  //       ],
  //     },
  //   ],
  //   layout_plans: [],
  //   gallery: [],
  // },
  // {
  //   id: 22,
  //   title: "Roodraksh Saradamaa",
  //   slug: "roodraksh-saradamaa",
  //   city: "Agartala",
  //   type: "Residential",
  //   status: "Completed",
  //   feature_image: "/projects/roodraksh_saradamaa/feature.webp",
  //   banner_image: "/projects/roodraksh_saradamaa/banner.webp",
  //   brochure_url: "",
  //   more_details: {
  //     area: "",
  //     rera_no: "N/A",
  //     total_spaces: "",
  //     total_towers: "",
  //     flat_sizes: "",
  //     bhk: "",
  //   },
  //   short_description: "",
  //   description: "",
  //   amenities: [],
  //   location: {
  //     address: "Chittaranjan Road,Agartala,West Tripura",
  //     map_url: "",
  //     satellite_view: "",
  //     live_view: "",
  //   },
  //   nearby_places: [],
  //   layout_plans: [],
  //   gallery: [],
  // },
  // {
  //   id: 23,
  //   title: "Roodraksh Kamalkali",
  //   slug: "roodraksh-kamalkali",
  //   city: "Agartala",
  //   type: "Residential",
  //   status: "Completed",
  //   feature_image: "/projects/roodraksh_kamalkali/feature.webp",
  //   banner_image: "/projects/roodraksh_kamalkali/banner.webp",
  //   brochure_url: "",
  //   more_details: {
  //     area: "",
  //     rera_no: "N/A",
  //     total_spaces: "",
  //     total_towers: "",
  //     flat_sizes: "",
  //     bhk: "",
  //   },
  //   short_description: "",
  //   description: "",
  //   amenities: [],
  //   location: {
  //     address: "T.G.ROAD,Krishnanagar,west tripura",
  //     map_url: "",
  //     satellite_view: "",
  //     live_view: "",
  //   },
  //   nearby_places: [],
  //   layout_plans: [],
  //   gallery: [],
  // },
  // {
  //   id: 24,
  //   title: "Roodraksh Prasad Apartment",
  //   slug: "roodraksh-prasad-apartment",
  //   city: "Agartala",
  //   type: "Residential",
  //   status: "Completed",
  //   feature_image: "/projects/roodraksh_prasad_apartment/feature.webp",
  //   banner_image: "/projects/roodraksh_prasad_apartment/banner.webp",
  //   brochure_url: "",
  //   more_details: {
  //     area: "",
  //     rera_no: "N/A",
  //     total_spaces: "",
  //     total_towers: "",
  //     flat_sizes: "",
  //     bhk: "",
  //   },
  //   short_description: "",
  //   description: "",
  //   amenities: [],
  //   location: {
  //     address: "Gangail Road, Near-Ramkrishna Ashram, Agartala,west tripura",
  //     map_url: "",
  //     satellite_view: "",
  //     live_view: "",
  //   },
  //   nearby_places: [],
  //   layout_plans: [],
  //   gallery: [],
  // },
  // {
  //   id: 25,
  //   title: "Roodraksh Tripura Darpan",
  //   slug: "roodraksh-tripura-darpan",
  //   city: "Agartala",
  //   type: "Residential",
  //   status: "Completed",
  //   feature_image: "/projects/roodraksh_tripura_darpan/feature.jpg",
  //   banner_image: "/projects/roodraksh_tripura_darpan/banner.jpg",
  //   brochure_url: "",
  //   more_details: {
  //     area: "-",
  //     rera_no: "N/A",
  //     total_spaces: "-",
  //     total_towers: "-",
  //     flat_sizes: "-",
  //     bhk: "-",
  //   },
  //   short_description: "",
  //   description: "",
  //   amenities: [],
  //   location: {
  //     address: "Krishnanagar,Colonel Chowmuhani,west tripura",
  //     map_url: "",
  //     satellite_view: "",
  //     live_view: "",
  //   },
  //   nearby_places: [],
  //   layout_plans: [],
  //   gallery: [],
  // },
  // {
  //   id: 26,
  //   title: "Roodraksh Biswabina",
  //   slug: "roodraksh-biswabina",
  //   city: "Agartala",
  //   type: "Residential",
  //   status: "Completed",
  //   feature_image: "/projects/roodraksh_biswabina/feature.webp",
  //   banner_image: "/projects/roodraksh_biswabina/banner.webp",
  //   brochure_url: "",
  //   more_details: {
  //     area: "",
  //     rera_no: "- ",
  //     total_spaces: "",
  //     total_towers: "",
  //     flat_sizes: "",
  //     bhk: "",
  //   },
  //   short_description: "",
  //   description: "",
  //   amenities: [],
  //   location: {
  //     address: "Ramnagar Road no-2,west tripura",
  //     map_url: "",
  //     satellite_view: "",
  //     live_view: "",
  //   },
  //   nearby_places: [],
  //   layout_plans: [],
  //   gallery: [],
  // },
  // {
  //   id: 27,
  //   title: "Roodraksh Panshi",
  //   slug: "roodraksh-panshi",
  //   city: "Agartala",
  //   type: "Residential",
  //   status: "Completed",
  //   feature_image: "/projects/roodraksh_panshi/feature.webp",
  //   banner_image: "/projects/roodraksh_panshi/banner.webp",
  //   brochure_url: "",
  //   more_details: {
  //     area: "",
  //     rera_no: "PRTR07220263",
  //     total_spaces: "",
  //     total_towers: "",
  //     flat_sizes: "",
  //     bhk: "",
  //   },
  //   short_description: "",
  //   description: "",
  //   amenities: [],
  //   location: {
  //     address: "water supply road,Kalyani,Opp. sabyasachi club,west tripura",
  //     map_url: "",
  //     satellite_view: "",
  //     live_view: "",
  //   },
  //   nearby_places: [],
  //   layout_plans: [],
  //   gallery: [],
  // },
  // {
  //   id: 28,
  //   title: "Roodraksh Maatri Residency",
  //   slug: "roodraksh-maatri-residency",
  //   city: "Agartala",
  //   type: "Residential",
  //   status: "Completed",
  //   feature_image: "/projects/roodraksh_maatri_residency/feature.webp",
  //   banner_image: "/projects/roodraksh_maatri_residency/banner.webp",
  //   brochure_url: "",
  //   more_details: {
  //     area: "-",
  //     rera_no: "PRTR07210177",
  //     total_spaces: "-",
  //     total_towers: "-",
  //     flat_sizes: "-",
  //     bhk: "-",
  //   },
  //   short_description: "",
  //   description: "",
  //   amenities: [],
  //   location: {
  //     address: "Office Quarter Lane,Behaind SishuBihar School,west tripura.",
  //     map_url:
  //       "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7299.157956867601!2d91.272625!3d23.833566!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3753f52a43b60697%3A0x5b23aaf4253470ca!2sMaatri%20Residency!5e0!3m2!1sen!2sin!4v1750323998964!5m2!1sen!2sin",
  //     satellite_view:
  //       "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6938.001703793422!2d91.272625!3d23.833566!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3753f52a43b60697%3A0x5b23aaf4253470ca!2sMaatri%20Residency!5e1!3m2!1sen!2sin!4v1750324049053!5m2!1sen!2sin",
  //     live_view: "",
  //   },
  //   nearby_places: [],
  //   layout_plans: [],
  //   gallery: [],
  // },
  // {
  //   id: 29,
  //   title: "Roodraksh Sushil Apartment",
  //   slug: "roodraksh-sushil-apartment",
  //   city: "Agartala",
  //   type: "Residential",
  //   status: "Completed",
  //   feature_image: "/projects/roodraksh_sushil_apartment/feature.webp",
  //   banner_image: "/projects/roodraksh_sushil_apartment/banner.webp",
  //   brochure_url: "",
  //   more_details: {
  //     area: "-",
  //     rera_no: "PRTR03230325",
  //     total_spaces: "-",
  //     total_towers: "-",
  //     flat_sizes: "-",
  //     bhk: "-",
  //   },
  //   short_description: "",
  //   description: "",
  //   amenities: [],
  //   location: {
  //     address: "Sreenagar Road-1 Milan Chakra,West tripura",
  //     map_url:
  //       "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7300.465847042329!2d91.272144!3d23.810315!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3753f50051da66a9%3A0xfdbe95a20e5ab493!2sRoodraksh%20Sushil%20Apartment!5e0!3m2!1sen!2sin!4v1750325358621!5m2!1sen!2sin",
  //     satellite_view:
  //       "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6939.244880652214!2d91.272144!3d23.810315!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3753f50051da66a9%3A0xfdbe95a20e5ab493!2sRoodraksh%20Sushil%20Apartment!5e1!3m2!1sen!2sin!4v1750325423358!5m2!1sen!2sin",
  //     live_view: "",
  //   },
  //   nearby_places: [],
  //   layout_plans: [],
  //   gallery: [],
  // },
  // {
  //   id: 30,
  //   title: "Roodraksh Nirmala Kutir Apartment",
  //   slug: "roodraksh-nirmala-kutir-apartment",
  //   city: "Agartala",
  //   type: "Residential",
  //   status: "Completed",
  //   feature_image: "/projects/roodraksh_nirmala_kutir_apartment/feature.webp",
  //   banner_image: "/projects/roodraksh_nirmala_kutir_apartment/banner.webp",
  //   brochure_url: "",
  //   more_details: {
  //     area: "",
  //     rera_no: "PRTR03230329",
  //     total_spaces: "",
  //     total_towers: "",
  //     flat_sizes: "",
  //     bhk: "",
  //   },
  //   short_description: "",
  //   description: "",
  //   amenities: [],
  //   location: {
  //     address: "Gangail Road,Near-Gandhighat,west tripura",
  //     map_url: "",
  //     satellite_view: "",
  //     live_view: "",
  //   },
  //   nearby_places: [],
  //   layout_plans: [],
  //   gallery: [],
  // },
  // {
  //   id: 31,
  //   title: "Roodraksh Prism",
  //   slug: "roodraksh-prism",
  //   city: "Agartala",
  //   type: "",
  //   status: "Completed",
  //   feature_image: "/projects/roodraksh_prism/feature.webp",
  //   banner_image: "/projects/roodraksh_prism/banner.webp",
  //   brochure_url: "",
  //   more_details: {
  //     area: "-",
  //     rera_no: "PRTR11230377",
  //     total_spaces: "-",
  //     total_towers: "-",
  //     flat_sizes: "-",
  //     bhk: "-",
  //   },
  //   short_description: "",
  //   description: "",
  //   amenities: [],
  //   location: {
  //     address: "Ramnagar-2,West tripura",
  //     map_url:
  //       "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7299.004369278115!2d91.268842!3d23.836295!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3753f5007e1ff37d%3A0x5591adb85c158841!2sRoodraksh%20Prism!5e0!3m2!1sen!2sin!4v1750327274432!5m2!1sen!2sin",
  //     satellite_view:
  //       "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6937.855715589874!2d91.268842!3d23.836295!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3753f5007e1ff37d%3A0x5591adb85c158841!2sRoodraksh%20Prism!5e1!3m2!1sen!2sin!4v1750327327468!5m2!1sen!2sin",
  //     live_view:
  //       "https://www.google.com/maps/embed?pb=!4v1750327365726!6m8!1m7!1sP0vmlrEoQGzxwPvM-j52xQ!2m2!1d23.83639533930243!2d91.26881558556154!3f164.08!4f0!5f0.5970117501821992",
  //   },
  //   nearby_places: [],
  //   layout_plans: [],
  //   gallery: [],
  // },
  // {
  //   id: 32,
  //   title: "Roodraksh Radharaman Enclave",
  //   slug: "roodraksh-radharaman_enclave",
  //   city: "Agartala",
  //   type: "Residential",
  //   status: "Completed",
  //   feature_image: "/projects/roodraksh_radharaman_enclave/feature.webp",
  //   banner_image: "/projects/roodraksh_radharaman_enclave/banner.webp",
  //   brochure_url: "",
  //   more_details: {
  //     area: "",
  //     rera_no: "N/A",
  //     total_spaces: "",
  //     total_towers: "",
  //     flat_sizes: "",
  //     bhk: "",
  //   },
  //   short_description: "",
  //   description: "",
  //   amenities: [],
  //   location: {
  //     address: "Ramnagar-2,West tripura",
  //     map_url: "",
  //     satellite_view: "",
  //     live_view: "",
  //   },
  //   nearby_places: [],
  //   layout_plans: [],
  //   gallery: [],
  // },
  // {
  //   id: 33,
  //   title: "Roodraksh Pride",
  //   slug: "roodraksh-pride2",
  //   city: "Guwahati",
  //   type: "-",
  //   status: "Ready To Move In",
  //   feature_image: "/projects/roodraksh_pride02/feature.jpg",
  //   banner_image: "/projects/roodraksh_pride02/banner.jpg",
  //   brochure_url: "",
  //   more_details: {
  //     area: "-",
  //     rera_no: "RERAA KM 31 OF 2023-2024",
  //     total_spaces: "-",
  //     total_towers: "-",
  //     flat_sizes: "-",
  //     bhk: "-",
  //   },
  //   short_description: "",
  //   description: "",
  //   amenities: [],
  //   location: {
  //     address:
  //       "BHASKAR NAGAR, R G B ROAD, BESIDE BHASKAR VIDYAPEETH SCHOOL -781003",
  //     map_url:
  //       "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7161.108668829117!2d91.777224!3d26.17864!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a59210013721d%3A0xc8e892b61e95344f!2sRoodraksh%20Pride!5e0!3m2!1sen!2sin!4v1750329343927!5m2!1sen!2sin",
  //     satellite_view:
  //       "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d348469.8000720468!2d91.87580054571532!3d26.389597063068027!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a59210013721d%3A0xc8e892b61e95344f!2sRoodraksh%20Pride!5e1!3m2!1sen!2sin!4v1751021336155!5m2!1sen!2sin",
  //     live_view:
  //       "https://www.google.com/maps/embed?pb=!4v1750329436162!6m8!1m7!1sfHbK6vCvdZI-ycOPvMxumQ!2m2!1d26.17862981983125!2d91.77739460024777!3f206.58!4f23.33!5f0.5970117501821992",
  //   },
  //   nearby_places: [],
  //   layout_plans: [],
  //   gallery: [],
  // },
  // {
  //   id: 34,
  //   title: "Roodraksh Bhuyan",
  //   slug: "roodraksh-bhuyan",
  //   city: "Guwahati",
  //   type: "Residential",
  //   status: "Ready To Move In",
  //   feature_image: "/projects/roodraksh_bhuyan/feature.jpg",
  //   banner_image: "/projects/roodraksh_bhuyan/banner.jpg",
  //   brochure_url: "",
  //   more_details: {
  //     area: "10080 Sq.Ft.",
  //     rera_no: "RERAA KM 82 of 2023-2024",
  //     total_spaces: "12",
  //     total_towers: "2",
  //     flat_sizes: "1490 Sq.Ft.",
  //     bhk: "3 BHK",
  //   },
  //   short_description:
  //     "The premium project presents a fine mix of design, functionality, and comfort and redefines urban living in Guwahati.",
  //   description:
  //     "Featuring quality construction and ready to move in homes, Roodraksh Bhuyan promises value, peace of mind, and convenience. Enjoy proximity to key areas of the city while residing in a peaceful and well-planned neighborhood. Whether you're buying your first home or upgrading, this is the address you’ll be proud to call your own.",
  //   amenities: [],
  //   location: {
  //     address: "GOTANAGAR",
  //     map_url:
  //       "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7163.083035375253!2d91.683293!3d26.146488!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5b57ffb0658d%3A0x1a6560fe5b8cfd12!2sROODRAKSH%20BHUYAN!5e0!3m2!1sen!2sin!4v1750330172511!5m2!1sen!2sin",
  //     satellite_view:
  //       "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6808.659656020748!2d91.683293!3d26.146488!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5b57ffb0658d%3A0x1a6560fe5b8cfd12!2sROODRAKSH%20BHUYAN!5e1!3m2!1sen!2sin!4v1750330229265!5m2!1sen!2sin",
  //     live_view: "",
  //   },
  //   nearby_places: [
  //     {
  //       title: "Schools",
  //       places: [
  //         {
  //           title: "Pragjyotish School",
  //           distance: "4.5 km",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Hospitals",
  //       places: [
  //         {
  //           title: "Akanksha Hospital",
  //           distance: "6.5 km",
  //         },
  //         {
  //           title: "Apollo Excelcare Hospital",
  //           distance: "3.5 km",
  //         },
  //         {
  //           title: "TATA Institute Of Social Sciences Guwahati",
  //           distance: "7.2 km",
  //         },
  //       ],
  //     },
  //   ],
  //   layout_plans: [],
  //   gallery: [],
  // },
  // {
  //   id: 35,
  //   title: "Roodraksh Silver Aspire & Desire",
  //   slug: "roodraksh-silver-aspire-desire",
  //   city: "Guwahati",
  //   type: "Residential",
  //   status: "Completed",
  //   feature_image: "/projects/roodraksh_silver_aspire/feature.jpg",
  //   banner_image: "/projects/roodraksh_silver_aspire/banner.jpg",
  //   brochure_url: "",
  //   more_details: {
  //     area: "",
  //     rera_no: "N/A",
  //     total_spaces: "",
  //     total_towers: "",
  //     flat_sizes: "",
  //     bhk: "",
  //   },
  //   short_description: "",
  //   description: "",
  //   amenities: [],
  //   location: {
  //     address: "",
  //     map_url: "",
  //     satellite_view: "",
  //     live_view: "",
  //   },
  //   nearby_places: [],
  //   layout_plans: [],
  //   gallery: [],
  // },
];

export const BlogsData = [
  {
    id: 1,
    slug: "sustainable-features-that-boost-property-value",
    image: Appassets.Blog1,
    date: { day: "17", month: "April" },
    author: "Admin",
    category: "PropertyTips",
    title: "Sustainable Features That Boost Property Value",
    link: "#",
  },
  {
    id: 2,
    slug: "how-the-commercial-property-market-is-evolving",
    image: Appassets.Blog2,
    date: { day: "17", month: "April" },
    author: "Admin",
    category: "PropertyTips",
    title: "How The Commercial Property Market Is Evolving",
    link: "#",
  },
  {
    id: 3,
    slug: "how-to-spot-a-profitable-commercial-location",
    image: Appassets.Blog3,
    date: { day: "17", month: "April" },
    author: "Admin",
    category: "PropertyTips",
    title: "How To Spot A Profitable Commercial Location",
    link: "#",
  },
];
