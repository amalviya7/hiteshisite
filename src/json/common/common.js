import Blog1 from "@/assets/images/Green reolution2.webp";
import Blog2 from "@/assets/images/Ai in Healthcare2.webp";
import Blog3 from "@/assets/images/blog3.webp";

import ECommerce from "../../assets/images/E-commerce1.webp";
import Education from "../../assets/images/education.webp";
import Healthcare from "../../assets/images/Healthcare_new.webp";
import Travel_Logistics from "../../assets/images/travel_logisctics.webp";
import Resolution from "../../assets/images/child4.webp";
import Conviction from "../../assets/images/child3.webp";
import Route_Map from "../../assets/images/child5.webp";
import Context from "../../assets/images/child.webp";
import Support from "../../assets/images/Support.webp";
import Development from "../../assets/images/Development.webp";
import Impression from "../../assets/images/Impression.webp";
import Progress from "../../assets/images/Progress.webp";

export const headerData = [
  {
    id: 1,
    name: "Who We Are",
    subMenu: [
      {
        name: "Our Story",
        megaMenu: {
          heading: "Bringing ideas to life",
          button: { label: "Know more", path: "/who-we-are" },
        },
      },
      {
        name: "Hiteshi at a Glance",
        path: "/who-we-are?term=hiteshi-at-glance",
        megaMenu: {
          navLink: [
            { text: "Our Resolution", path: "who-we-are/?index=0" },
            { text: "Our Route Map", path: "who-we-are/?index=1" },
            { text: "Our Context", path: "who-we-are/?index=2" },
            { text: "Our Conviction", path: "who-we-are/?index=3" },
          ],
        },
      },
      {
        name: "Our People",
        megaMenu: {
          subHeading:
            "Forging A significant Transformation By Recruiting, Acknowledging and fostering exceptional individuals from diverse backgrounds",
          button: { label: "Join Us", path: "/who-we-are/#this-is-us" },
        },
      },
      {
        name: "Get to Know us Better",
        path: "/who-we-are?term=know-us-better",
        megaMenu: {
          navLink: [
            { text: "CSR", path: "/csr" },
            { text: "Diversity & inclusion", path: "/diversity" },
            { text: "Infra", path: "/infra" },
            { text: "Events & Celebrations", path: "/events" },
          ],
        },
      },
    ],
    link: "/who-we-are",
  },
  {
    id: 2,
    name: "What We Do",
    subMenu: [
      {
        name: "Overview",
        megaMenu: {
          subHeading:
            "With Hiteshi Discover the Magic of Digital Transformation",
          text: "Through our relentless pursuit of innovation and our commitment to collaborative efforts, we strive to make a positive impact on society and empower individuals and communities to reach their full potential",
        },
      },
      {
        name: "Services",
        path: "/what-we-do?term=services",

        megaMenu: {
          navLink: [
            {
              text: "Artificial Intelligence ",
              path: "/services/artificial-intelligence",
            },
            {
              text: "Low Code/ No Code Development",
              path: "/services/low-code",
            },
            { text: "IoT Solutions", path: "/services/iot-solutions" },
            {
              text: "Custom Software Development",
              path: "/services/custom-software-development",
            },
            {
              text: "Mobile App Development",
              path: "/services/mobile-development",
            },
            {
              text: "Process Automation",
              path: "/services/process-automation",
            },
            { text: "Metaverse Development", path: "/services/metaverse" },

            { text: "Cyber Security ", path: "/services/cyber-security" },
            { text: "DevOps", path: "/services/devops" },
          ],
        },
      },
      {
        name: "Industries",
        path: "/what-we-do?term=industries-we-serve",
        megaMenu: {
          navLink: [
            {
              text: "HealthCare & Fitness",
              path: "what-we-do/?index=0",
              index: 0,
            },
            {
              text: "E-Commerce",
              path: "what-we-do/?index=1",
              index: 1,
            },
            {
              text: "Education",
              path: "what-we-do/?index=2",
              index: 2,
            },
            {
              text: "Travel & Logistics",
              path: "what-we-do/?index=3",
              index: 3,
            },
          ],
        },
      },
    ],
    link: "/what-we-do",
  },
  {
    id: 3,
    name: "Insights",
    subMenu: [
      {
        name: "Overview",
        megaMenu: {
          heading: "Stay in tune",
          text: "Unparalleled expertise yields exceptional outcomes. We provide customized news, insights, analysis, and research to expand your expertise and maximize your influence.",
        },
      },
      {
        name: "What's Generating Buzz",
        megaMenu: {
          heading: "Talk of the town",
          button: { label: "Discover more", path: "/blog?term=talk-of-town" },
        },
      },
      {
        name: "Case Studies",
        megaMenu: {
          heading: "The Answer is a Puzzle Piece Waiting to be Discovered",
          button: { label: "Read more", path: "/caseStudies" },
        },
      },
    ],
    link: "/insights",
  },
  {
    id: 4,
    name: "Careers",
    subMenu: [
      {
        name: "Join us",
        megaMenu: {
          heading: "Autograph your work with excellence",
          button: { label: "Join Us", path: "/join-us" },
        },
      },
      {
        name: "Why Hiteshi",
        path: "/career?term=why-Hiteshi",
        megaMenu: {
          navLink: [
            { text: "Impression", path: "career/?index=0" },
            { text: "Support", path: "career/?index=1" },
            { text: "Development", path: "career/?index=2" },
            { text: "Progress", path: "career/?index=3" },
          ],
        },
      },
      {
        name: "Opportunities for you",
        megaMenu: {
          heading: "Greater futures through innovation",
          button: { label: "Open roles", path: "/join-us" },
        },
      },
      {
        name: "Explore Life At Hiteshi",
        path: "/career?term=explore-life-at-Hiteshi",
        megaMenu: {
          navLink: [
            { text: "Events ", path: "/events" },
            { text: "Our Culture", path: "/culture" },
            { text: "Our Story ", path: "/what-we-do" },
            { text: "Infra", path: "/infra" },
          ],
        },
      },
    ],
    link: "/career",
  },
  { id: 5, name: "Contact us", subMenu: [], link: "/contact-us" },
];

export const BlogsData = [
  {
    title: "Tapping into the Potential of AI in Healthcare",
    image: Blog2,
    path: "/blog/Tapping-into-the-Potential-of-AI-in-Healthcare",
    altName: "Artificial Intelligence Blog",
  },
  {
    title: "How IoT is Driving Eco-Friendly Innovations",
    image: Blog1,
    path: "/blog/The-Green-Revolution-How-IoT-is-Driving-Eco-Friendly-Innovations",
    altName: "IoT, Internest of Things Blog",
  },
  {
    title: "Best testing tips for your E-Commerce Store",
    image: Blog3,
    path: "/blog/Best-Testing-Tips-for-Your-E-Commerce-Store",
    altName: "Best Testing Tips for your E-Commerce Store Blog",
  },
];

export const IndustriesData = {
  pathname: "industries-we-serve",
  name: "Industries We Serve",
  data: [
    {
      name: "HealthCare & Fitness",
      subHeading: "Focusing on Patient-Centric Care",
      image: Healthcare,
      altName: "Girl on Scooter, Healthcare & Fitness Industry",
      text: "We help in shaping intelligent, connected, and patient-centric healthcare solutions. We help our clients through intelligent, cloud-based solutions that increase resource capacity, improve workforce productivity, connect data for personalized services across channels, and improve the quality of care and therapeutics.",
    },
    {
      // if (isInView2) setAnimate2(true);

      name: "E-Commerce",
      subHeading: "Pioneering the Future of E-Commerce",
      image: ECommerce,
      altName: "Girl Shoppoing, E-COmmerce Industry",
      text: "We deliver dynamic and scalable ecommerce solutions tailored for the dynamic world of online business. Our comprehensive services encompass customized platform development and seamless integration with leading ecommerce frameworks, enabling businesses to elevate their online presence, optimize operations, and ignite sales growth.",
    },
    {
      name: "Education",
      subHeading: "Potential of Digital Education",
      image: Education,
      altName: "Girl thinking, Education Industry",
      text: "We specialize in state-of-the-art technology solutions to educational institutions and e-learning platforms. Our comprehensive suite comprises interactive learning management systems, virtual classrooms, and mobile applications, all meticulously designed to facilitate captivating and customized learning experiences.",
    },
    {
      name: "Travel & Logistics",
      subHeading: "Accelerating the Future of Travel and Logistics",
      image: Travel_Logistics,
      altName: "Kid Studying the Map, Travel & Logistics Industry",
      text: "We help you create secure, versatile  and hassle-free journeys. We are dedicated to providing travel businesses with comprehensive solutions, including booking systems, online portals, and mobile applications. Focusing on enhancing customer engagement, optimizing processes, and equipping with the tools needed to succeed in the digital era.",
    },
  ],
};

export const footer = {
  menu: [
    {
      link: "",
      title: "About Us",
    },
    {
      link: "",
      title: "Services",
    },
    {
      link: "",
      title: "Work",
    },
    {
      link: "",
      title: "Careers",
    },
    {
      link: "",
      title: "Contact Us",
    },
  ],

  hr: {
    email: " hr@hiteshi.com",
    phone: "+91-6269090901",
  },
  sales: {
    email: "sales@hiteshi.com",
    phone: "+91-6269090901",
  },
  address: {
    place: "8th Floor,Crystal IT Park,",
    landmark: "Khandwa Road,",
    city: "Indore(MP),India",
  },
  copyright: "© 2023 Hiteshi Infotech. All rights reserved.",
  get_in_touch: "Get in touch : ",
};

// export const glance = {
//   pathname: "hiteshi-at-glance",
// };

export const hiteshiAtGlance = {
  pathname: "hiteshi-at-glance",
  name: "Hiteshi At A Glance",
  data: [
    {
      name: "Our Resolution",
      subHeading: "With You for you",
      image: Resolution,
      altName: "Superhero Kid, Our Resolution: Hiteshi",
      text: "Our commitment goes beyond delivering exceptional products and services. It's about building a lasting partnership that extends far into the future.Together, We Thrive!",
    },
    {
      name: "Our Route Map",
      subHeading: "Building a legacy through innovation and vision",
      image: Route_Map,
      altName: "Kid with a Rocket Backpack, Our Roadmap",
      text: "Together, we have the power to shape industries, transform lives, and leave a lasting impact for generations to come. Where Opportunities and Growth Converge. Together, we can create a prosperous and sustainable tomorrow",
    },
    {
      name: "Our Context",
      subHeading: "Invest in Future",
      image: Context,
      altName: "Kid with Binoculars, Our Context",
      text: "Where Opportunities and Growth Converge. Together, we can create a prosperous and sustainable tomorrow.",
    },
    {
      name: "Our Conviction",
      subHeading: "Unlocking the door to understanding and connection",
      image: Conviction,
      altName: "Freinds, Our Conviction",
      text: "We enable lifelong learning, professional growth, and personal development, opening doors to new opportunities and expanding horizons.",
    },
  ],
};

export const whyHiteshi = {
  pathname: "why-Hiteshi",
  name: "Why Hiteshi",
  data: [
    {
      name: "Impression",
      subHeading: "Embrace change & embrace growth",
      image: Impression,
      altName:
        "Why Us? Our Impression: Continuous improvement and development.",
      text: "By stepping out of our comfort zones and embracing the unknown, we create the conditions for growth and transformation. It  propels us forward on the path of continuous improvement and development.",
    },
    {
      name: "Support",
      subHeading: "Upskill & Reskill",
      image: Support,
      altName:
        "Why Us? Our support: We offer opportunities for personal fulfillment, professional advancement",
      text: "We offer opportunities for personal fulfillment, professional advancement, and the ability to contribute meaningfully to the ever-changing global landscape.",
    },
    {
      name: "Development",
      subHeading: "Journey of educating, adapting & ongoing improvement",
      image: Development,
      altName:
        "Why Us? Our Development: Journey of educating, adapting & ongoing improvement",
      text: "We have become lifelong learners, adaptable individuals, and agents of positive change. It fuels our growth and expands our horizons.",
    },
    {
      name: "Progress",
      subHeading: "Long term vision",
      image: Progress,
      altName: "Why Us? Our Progress: Long term vision",
      text: "We are committed to investing in our team members throughout their careers, empowering them to embrace lifelong learning and pursue ongoing improvement. ",
    },
  ],
};

export const Letscreate = {
  title: "Lets Create an Amazing Project",
  text: "We combine technical excellence, industry knowledge and a customer-centric approach to ensure that our solutions not only meet your expectations but exceed them.",
};

export const metadata = {
  title: "Hiteshi Infotech",
  description: "",
};
