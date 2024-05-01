import ContactBanner from "@/assets/images/ContactBanner.webp";
import Layer1 from "@/assets/icons/Layer 1_1.webp";
import Layer2 from "@/assets/icons/Layer 2_2.webp";
import Layer1_1 from "@/assets/icons/Layer 1.webp";
import Layer2_2 from "@/assets/icons/Layer 2.webp";
import Request1 from "@/assets/icons/Request_1.webp";
import Request2 from "@/assets/icons/Request_2.webp";

export const heroContentData = {
  image: ContactBanner,
  firstHeading: "Contact Us",
  secondHeading: "We're Just a Click Away",
  thirdHeading: "",
  altName:
    "Contact Us, Hiteshi Infotech, Top IT & Software Development Company Overview and Case Studies",
};

export const getintouch = {
  firstHeading: "Get In Touch With Us!",
  secondHeading:
    "Whether it's a query, suggestion, or collaboration, opportunity, feel free to reach out and contact us.",
};

export const partnership = {
  data: [
    {
      name: "Request for services", 
      iconblue: Request2,
      iconwhite: Request1,
      link: "/service",
      altName: "Contact Us for Requests for Services, Hiteshi Infotech",
    },
    {
      name: "Partnerships",
      iconblue: Layer1,
      iconwhite: Layer1_1,
      link: "/partnerships",
      altName: "Contact Us for Requests for Partnerships, Hiteshi Infotech",
    },
    {
      name: "Feedback",
      iconblue: Layer2,
      iconwhite: Layer2_2,
      link: "/feedback",
      altName: "Contact Us for Feedback, Hiteshi Infotech",
    },
  ],
};

export const titleName = {
  title: "Contact Us - Join us on this amazing adventure!",
  tagdescription:
    "Join us on this Amazing Adventure! Connect with Hiteshi and embark on an incredible journey of innovation, growth, and success together.",
};
