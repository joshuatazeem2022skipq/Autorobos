// import React from "react";
import { NotificationManager } from "react-notifications";
// import { toast } from "react-toastify";
// import { Toast } from "react-toastify/dist/components";
import { combineReducers, createStore } from "redux";

import b1 from "../Images/Projects/P1.jpg";
import b2 from "../Images/Projects/p2.jpg";
import b3 from "../Images/Projects/p3.jpg";
import b4 from "../Images/Projects/p4.jpg";

import R1 from "../Images/Analysis/person-1_rfzshl.jpg";
import R2 from "../Images/Analysis/person-2_np9x5l.jpg";
import R3 from "../Images/Analysis/person-3_ipa0mj.jpg";
import R4 from "../Images/Analysis/pexels-ketut-subiyanto-4350097.jpg";
import R5 from "../Images/Analysis/peters.jpg";

import P1 from "../Images/Projects/P1.jpg";
import P2 from "../Images/Projects/p2.jpg";
import P3 from "../Images/Projects/p3.jpg";
import P4 from "../Images/Projects/p4.jpg";
import P5 from "../Images/Projects/p5.jpg";
import P6 from "../Images/Projects/p6.jpg";
import P7 from "../Images/Projects/p7.jpg";
import P8 from "../Images/Projects/p8.jpg";
import P9 from "../Images/Projects/p9.jpg";
import P10 from "../Images/Projects/p10.jpg";

import B1 from "../Images/Services/8 Smartphone.png";
import B2 from "../Images/Services/7 Computer.png";
import B3 from "../Images/Services/20 Microchip.png";
import B4 from "../Images/Services/19 Internet of Things (IoT).png";
import B5 from "../Images/Services/26 Hologram.png";
import B6 from "../Images/Services/9 Robot Arm.png";
import B7 from "../Images/Services/11 Artificial Intelliegence.png";
import V1 from "../Images/Services/exp/Services Content/A.jpg";
import V2 from "../Images/Services/exp/Services Content/A1.jpeg";
import V3 from "../Images/Services/exp/Services Content/A2.jpg";
import V4 from "../Images/Services/exp/Services Content/A3.jpg";
import V5 from "../Images/Services/exp/Services Content/A4.jpg";
import V6 from "../Images/Services/exp/Services Content/A5.jpg";
import V7 from "../Images/Services/exp/Services Content/A6.jpg";

import A1 from "../Images/Aboutus/P1/01.jpg";
import A2 from "../Images/Aboutus/P1/02.jpg";
import A3 from "../Images/Aboutus/P1/03.jpg";
import A4 from "../Images/Aboutus/P1/04.jpg";
import A5 from "../Images/Aboutus/P1/05.jpg";
import A6 from "../Images/Aboutus/P1/06.jpg";

import { ReactComponent as I1 } from "../Images/Services/icons/icon_08.svg";
import { ReactComponent as I2 } from "../Images/Services/icons/icon_09.svg";
import { ReactComponent as I3 } from "../Images/Services/icons/icon_10.svg";
import { ReactComponent as I4 } from "../Images/Services/icons/icon_11.svg";
import { ReactComponent as I5 } from "../Images/Services/icons/icon_12.svg";
import EastIcon from "@mui/icons-material/East";
import S1 from "../Images/Shapea/shape_04.svg";
import S2 from "../Images/Shapea/shape_05.svg";

import h1 from "../Images/Services/home/01.jpg";
import h2 from "../Images/Services/home/04.jpg";
import h3 from "../Images/Services/home/08.jpg";
import h4 from "../Images/Services/home/09.jpg";
import h5 from "../Images/Services/home/10.jpg";

const DiffData = {
  Diffs: [
    {
      title: "Comprehensive Automation Solutions",
      description:
        "Our company stands out for its holistic approach to automation, offering end-to-end solutions that cover Automation, IoT, Embedded Systems, and Robotics. Unlike others, we seamlessly integrate these technologies to optimize your processes for unparalleled efficiency.",
      bgImage: A1,
    },
    {
      title: "Strategic Digital Marketing Expertise",
      description:
        "In the vast landscape of digital marketing, we distinguish ourselves with strategic prowess. Our team employs cutting-edge techniques and AI-driven strategies to ensure your brand not only stands out but also excels in the digital realm.",
      bgImage: A2,
    },
    {
      title: "Versatile Development Capabilities",
      description:
        "From Web Development to App Development, we pride ourselves on versatility. Our proficiency spans the entire spectrum, providing you with tailor-made solutions that align perfectly with your business objectives.",
      bgImage: A3,
    },
    {
      title: "Creative Graphics Design",
      description:
        "Creativity is at the heart of our Graphics services. We don't just design; we craft visual stories that resonate with your audience. Our graphics team goes beyond aesthetics, ensuring your brand communicates effectively and leaves a lasting impression.",
      bgImage: A4,
    },
    // {
    //   title: "AI Integration for Intelligent Solutions",
    //   description:
    //     "What truly differentiates us is our commitment to harnessing the power of Artificial Intelligence. We seamlessly integrate AI into our services, providing intelligent solutions that adapt and evolve with the dynamic demands of your business.",
    //   bgImage: A5,
    // },
    // {
    //   title: "Proven Track Record",
    //   description:
    //     "Numbers speak louder than words. Our company boasts impressive figures in terms of successful projects, satisfied clients, and measurable results. Trust in our track record, as it reflects our dedication to excellence and client satisfaction in the ever-evolving landscape of automation and digital marketing.",
    //   bgImage: A6,
    // },
  ],
};

function DiffSection(oldData = DiffData, newData) {
  oldData = {
    ...oldData,
    products: [...oldData.Diffs],
    // orders: [...oldData.orders],
  };
  if (newData.type === "ADD_PRODUCT") {
    oldData.products.push(newData.payload);
    NotificationManager.success("Product added", "Added");
  } else if (newData.type === "SEARCH_PRODUCT") {
    oldData.searched = newData.payload;
  } else if (newData.type === "TOGGLE_LIKED_BTN") {
    let item = oldData.products.find((product) => product.id === newData.id);
    item.abc = !item.abc;
    NotificationManager.success("Liked");
  } else if (newData.type === "ADDED_tO_CART") {
    oldData.orders.push(newData.payload);
    NotificationManager.success("Product added to cart", "Added");
  }

  return oldData;
}

const CardsData = {
  Cards: [
    {
      icon: <I1 />,
      title: "Web App development",
      description:
        "At AutoROBS, we specialize in the cutting-edge world of Automation technologies and their applications.",
      actions: [<EastIcon />],
      bgImage: h1,
    },
    {
      icon: <I1 />,
      title: "Web App development",
      description:
        "At AutoROBS, we specialize in the cutting-edge world of Automation technologies and their applications.",
      actions: [<EastIcon />],
      bgImage: h1,
    },
    {
      icon: <I2 />,
      title: "Mobile App Development",
      description:
        "At AutoROBS comes with a lot of expertise with Robotics developers to execute any robotics project from start to finish.",
      actions: [<EastIcon />],
      bgImage: h2,
    },
    {
      icon: <I3 />,
      title: "Internet of Things (IoT)",
      description:
        "Access tools for deep learning, cloud computing, and AI capabilities.",
      actions: [<EastIcon />],
      bgImage: h3,
    },
    {
      icon: <I4 />,
      title: "AI (Machine Learning)",
      description:
        "we specialize in the cutting-edge world of IoT technologies and their applications.",
      actions: [<EastIcon />],
      bgImage: h4,
    },
    {
      icon: <I5 />,
      title: "Embedded System",
      description:
        "At AutoROBS comes with a lot of expertise with embedded developers to execute any embedded project from start to finish.",
      actions: [<EastIcon />],
      bgImage: h5,
    },
  ],
};
function CardSection(oldData = CardsData, newData) {
  oldData = {
    ...oldData,
    products: [...oldData.Cards],
    // orders: [...oldData.orders],
  };
  if (newData.type === "ADD_PRODUCT") {
    oldData.products.push(newData.payload);
    NotificationManager.success("Product added", "Added");
  } else if (newData.type === "SEARCH_PRODUCT") {
    oldData.searched = newData.payload;
  } else if (newData.type === "TOGGLE_LIKED_BTN") {
    let item = oldData.products.find((product) => product.id === newData.id);
    item.abc = !item.abc;
    NotificationManager.success("Liked");
  } else if (newData.type === "ADDED_tO_CART") {
    oldData.orders.push(newData.payload);
    NotificationManager.success("Product added to cart", "Added");
  }

  return oldData;
}

const CustomerData = {
  Clients: [
    {
      id: 1,
      name: "John Doe",
      review:
        "AutoROBS Automation provided exceptional service for our factory automation project. Their attention to detail, expertise in the latest technologies, and commitment to delivering on time exceeded our expectations. Highly recommended!",
      image: R1,
    },
    {
      id: 2,
      name: "Alex Albert",
      review:
        "AutoROBS Robotics is a game-changer in the world of robotics. Their innovative solutions and collaborative approach made our robotics integration seamless. Their team is not just skilled but also passionate about pushing the boundaries of what's possible in automation.",
      image: R2,
    },
    {
      id: 3,
      name: "Rachel David",
      review:
        "AutoROBS AI Solutions has transformed our business with their cutting-edge AI solutions. The predictive analytics and machine learning algorithms they implemented significantly improved our decision-making process. Working with Isaac AI Solutions was a strategic investment in our company's future.",
      image: R3,
    },
    {
      id: 4,
      name: "Isaac Das",
      review:
        "Embedded Tech is a go-to partner for embedded systems development. Their deep understanding of hardware and software integration, coupled with their dedication to quality, made our project a success. Professionalism at its best!",
      image: R4,
    },
    {
      id: 5,
      name: "Emily Peter",
      review:
        "IoT Innovations has been instrumental in our IoT initiatives. Their comprehensive approach, from sensor integration to cloud connectivity, showcased their expertise in the IoT landscape. Working with Oliver IoT Innovations has been a collaborative journey towards a connected and smarter future.",
      image: R5,
    },
  ],
};

function CustomerSection(oldData = CustomerData, newData) {
  oldData = {
    ...oldData,
    products: [...oldData.Clients],
    // orders: [...oldData.orders],
  };
  if (newData.type === "ADD_PRODUCT") {
    oldData.products.push(newData.payload);
    NotificationManager.success("Product added", "Added");
  } else if (newData.type === "SEARCH_PRODUCT") {
    oldData.searched = newData.payload;
  } else if (newData.type === "TOGGLE_LIKED_BTN") {
    let item = oldData.products.find((product) => product.id === newData.id);
    item.abc = !item.abc;
    NotificationManager.success("Liked");
  } else if (newData.type === "ADDED_tO_CART") {
    oldData.orders.push(newData.payload);
    NotificationManager.success("Product added to cart", "Added");
  }

  return oldData;
}

const ServicesData = {
  initialServicesData: [
    {
      title: "Digital Marketing",
      content:
        "AUTOROBOS is a digital marketing agency that helps you reach your target audience online. We use the latest tools and techniques to optimize your website, social media, email, and advertising campaigns. We also use data and analytics to measure your performance and improve your ROI. Whether you want to increase your brand awareness, generate more leads, or boost your sales, we can help you achieve your goals with our digital marketing solutions.",
      contentColor: "#02274a",
      image: B1,
      backgroundColor: "#ffcc80",
      isDetailVisible: false,
    },
    {
      title: "Web Development",
      content:
        " AUTOROBOS is a web development company that creates stunning and functional websites for your business. We use the best practices and technologies to design and develop websites that are responsive, user-friendly, and secure. We also offer web hosting, maintenance, and support services to ensure your website runs smoothly and efficiently. Whether you need a simple landing page, a complex e-commerce site, or a custom web application, we can deliver it with our web development expertise.",
      image: B2,
      backgroundColor: "#80d8ff",
      isDetailVisible: false,
    },
    // {
    //   title: "Internet of Things",
    //   content:
    //     "AUTOROBOS is an Internet of Things (IoT) company that connects your devices and systems to the internet. We provide IoT solutions that enable you to monitor, control, and automate your processes and operations. We also provide IoT security, analytics, and cloud services to ensure your data is safe and accessible. Whether you want to improve your productivity, efficiency, or customer satisfaction, we can help you achieve it with our IoT solutions.",
    //   image: B3,
    //   backgroundColor: "#ffc0cb",
    //   isDetailVisible: false,
    // },
    {
      title: "Embedded Systems",
      content:
        "AUTOROBOS is an embedded systems company that develops and integrates hardware and software for your devices and systems. We provide embedded systems solutions that are reliable, scalable, and cost-effective. We also provide embedded systems testing, debugging, and optimization services to ensure your systems perform optimally. Whether you need a microcontroller, a sensor, or a complex system-on-chip, we can deliver it with our embedded systems expertise.",
      image: B4,
      backgroundColor: "#d3ffce",
      isDetailVisible: false,
    },
    // {
    //   title: "Automation",
    //   content:
    //     "AUTOROBOS is an automation company that automates your tasks and workflows. We provide automation solutions that reduce your manual work, errors, and costs. We also provide automation consulting, training, and support services to help you implement and maintain your automation systems. Whether you want to automate your manufacturing, logistics, or administration, we can help you achieve it with our automation solutions.",
    //   image: B5,
    //   backgroundColor: "#f2d9ff",
    //   isDetailVisible: false,
    // },
    {
      title: "Robotics",
      content:
        "AUTOROBOS is a robotics company that builds and programs robots for your needs. We provide robotics solutions that enhance your capabilities, efficiency, and safety. We also provide robotics education, research, and innovation services to help you learn and explore the possibilities of robotics. Whether you want a robot for your home, your industry, or your research, we can help you achieve it with our robotics solutions.",
      image: B6,
      backgroundColor: "#ffe5b4",
      isDetailVisible: false,
    },
    {
      title: "Artificial Intelligence",
      titleColor: "white",
      content:
        "AUTOROBOS is an artificial intelligence (AI) company that applies AI to your data and problems. We provide AI solutions that enable you to analyze, predict, and optimize your outcomes. We also provide AI development, integration, and deployment services to help you leverage the power of AI. Whether you want to use AI for your marketing, your web development, or your robotics, we can help you achieve it with our AI solutions.",
      contentColor: "#fbfcf8",
      image: B7,
      backgroundColor: "#2c365a",
      isDetailVisible: false,
    },
  ],
};
function ServiceSection(oldData = ServicesData, newData) {
  oldData = {
    ...oldData,
    products: [...oldData.initialServicesData],
    // orders: [...oldData.orders],
  };
  if (newData.type === "ADD_PRODUCT") {
    oldData.products.push(newData.payload);
    NotificationManager.success("Product added", "Added");
  } else if (newData.type === "SEARCH_PRODUCT") {
    oldData.searched = newData.payload;
  } else if (newData.type === "TOGGLE_LIKED_BTN") {
    let item = oldData.products.find((product) => product.id === newData.id);
    item.abc = !item.abc;
    NotificationManager.success("Liked");
  } else if (newData.type === "ADDED_tO_CART") {
    oldData.orders.push(newData.payload);
    NotificationManager.success("Product added to cart", "Added");
  }

  return oldData;
}

const ServicesContent = {
  content: [
    {
      title: "Digital Marketing",
      title1:
        "Transform your devices into intelligent systems with our embedded machine learning services. At Autorobos, we specialize in developing and deploying machine learning models directly onto microcontrollers, unlocking new capabilities and efficiencies for your products. Our expert team works closely with you to understand your unique requirements and design custom solutions that seamlessly integrate with your hardware.",
      title2:
        "Utilizing state-of-the-art algorithms optimized for resource-constrained environments, we enable real-time decision-making and autonomy at the edge. From sensor data processing to predictive maintenance, our embedded machine learning solutions empower your devices to adapt, learn, and optimize performance in any environment.",
      points: [
        "- Ignite innovation with our embedded machine learning services.",
        "- Tailored solutions for seamless integration with your hardware.",
        "- Real-time empowerment with cutting-edge algorithms.",
        "- Adapt, learn, optimize: Empowering devices for peak performance.",
      ],
      bgImage: V1,
    },
    {
      title: "Web development & Application",
      title1:
        "Transform your devices into intelligent systems with our embedded machine learning services. At Autorobos, we specialize in developing and deploying machine learning models directly onto microcontrollers, unlocking new capabilities and efficiencies for your products. Our expert team works closely with you to understand your unique requirements and design custom solutions that seamlessly integrate with your hardware.",
      title2:
        "Utilizing state-of-the-art algorithms optimized for resource-constrained environments, we enable real-time decision-making and autonomy at the edge. From sensor data processing to predictive maintenance, our embedded machine learning solutions empower your devices to adapt, learn, and optimize performance in any environment.",
      points: [
        "- Ignite innovation with our embedded machine learning services.",
        "- Tailored solutions for seamless integration with your hardware.",
        "- Real-time empowerment with cutting-edge algorithms.",
        "- Adapt, learn, optimize: Empowering devices for peak performance.",
      ],
      bgImage: V7,
    },
    {
      title: "Internet of Things",
      title1:
        "Transform your devices into intelligent systems with our embedded machine learning services. At Autorobos, we specialize in developing and deploying machine learning models directly onto microcontrollers, unlocking new capabilities and efficiencies for your products. Our expert team works closely with you to understand your unique requirements and design custom solutions that seamlessly integrate with your hardware.",
      title2:
        "Utilizing state-of-the-art algorithms optimized for resource-constrained environments, we enable real-time decision-making and autonomy at the edge. From sensor data processing to predictive maintenance, our embedded machine learning solutions empower your devices to adapt, learn, and optimize performance in any environment.",
      points: [
        "- Ignite innovation with our embedded machine learning services.",
        "- Tailored solutions for seamless integration with your hardware.",
        "- Real-time empowerment with cutting-edge algorithms.",
        "- Adapt, learn, optimize: Empowering devices for peak performance.",
      ],
      bgImage: V5,
    },
    {
      title: "Embedded Ai",
      title1:
        "Transform your devices into intelligent systems with our embedded machine learning services. At Autorobos, we specialize in developing and deploying machine learning models directly onto microcontrollers, unlocking new capabilities and efficiencies for your products. Our expert team works closely with you to understand your unique requirements and design custom solutions that seamlessly integrate with your hardware.",
      title2:
        "Utilizing state-of-the-art algorithms optimized for resource-constrained environments, we enable real-time decision-making and autonomy at the edge. From sensor data processing to predictive maintenance, our embedded machine learning solutions empower your devices to adapt, learn, and optimize performance in any environment.",
      points: [
        "- Ignite innovation with our embedded machine learning services.",
        "- Tailored solutions for seamless integration with your hardware.",
        "- Real-time empowerment with cutting-edge algorithms.",
        "- Adapt, learn, optimize: Empowering devices for peak performance.",
      ],
      bgImage: V3,
    },
    {
      title: "Automation Designing",
      title1:
        "Transform your devices into intelligent systems with our embedded machine learning services. At Autorobos, we specialize in developing and deploying machine learning models directly onto microcontrollers, unlocking new capabilities and efficiencies for your products. Our expert team works closely with you to understand your unique requirements and design custom solutions that seamlessly integrate with your hardware.",
      title2:
        "Utilizing state-of-the-art algorithms optimized for resource-constrained environments, we enable real-time decision-making and autonomy at the edge. From sensor data processing to predictive maintenance, our embedded machine learning solutions empower your devices to adapt, learn, and optimize performance in any environment.",
      points: [
        "- Ignite innovation with our embedded machine learning services.",
        "- Tailored solutions for seamless integration with your hardware.",
        "- Real-time empowerment with cutting-edge algorithms.",
        "- Adapt, learn, optimize: Empowering devices for peak performance.",
      ],
      bgImage: V2,
    },
    {
      title: "Robotics Designing",
      title1:
        "Transform your devices into intelligent systems with our embedded machine learning services. At Autorobos, we specialize in developing and deploying machine learning models directly onto microcontrollers, unlocking new capabilities and efficiencies for your products. Our expert team works closely with you to understand your unique requirements and design custom solutions that seamlessly integrate with your hardware.",
      title2:
        "Utilizing state-of-the-art algorithms optimized for resource-constrained environments, we enable real-time decision-making and autonomy at the edge. From sensor data processing to predictive maintenance, our embedded machine learning solutions empower your devices to adapt, learn, and optimize performance in any environment.",
      points: [
        "- Ignite innovation with our embedded machine learning services.",
        "- Tailored solutions for seamless integration with your hardware.",
        "- Real-time empowerment with cutting-edge algorithms.",
        "- Adapt, learn, optimize: Empowering devices for peak performance.",
      ],
      bgImage: V6,
    },
    {
      title: "Ai (Machine Learning)",
      title1:
        "Transform your devices into intelligent systems with our embedded machine learning services. At Autorobos, we specialize in developing and deploying machine learning models directly onto microcontrollers, unlocking new capabilities and efficiencies for your products. Our expert team works closely with you to understand your unique requirements and design custom solutions that seamlessly integrate with your hardware.",
      title2:
        "Utilizing state-of-the-art algorithms optimized for resource-constrained environments, we enable real-time decision-making and autonomy at the edge. From sensor data processing to predictive maintenance, our embedded machine learning solutions empower your devices to adapt, learn, and optimize performance in any environment.",
      points: [
        "- Ignite innovation with our embedded machine learning services.",
        "- Tailored solutions for seamless integration with your hardware.",
        "- Real-time empowerment with cutting-edge algorithms.",
        "- Adapt, learn, optimize: Empowering devices for peak performance.",
      ],
      bgImage: V4,
    },
  ],
};
function ServiceContentSection(oldData = ServicesContent, newData) {
  oldData = {
    ...oldData,
    products: [...oldData.content],
    // orders: [...oldData.orders],
  };
  if (newData.type === "ADD_PRODUCT") {
    oldData.products.push(newData.payload);
    NotificationManager.success("Product added", "Added");
  } else if (newData.type === "SEARCH_PRODUCT") {
    oldData.searched = newData.payload;
  } else if (newData.type === "TOGGLE_LIKED_BTN") {
    let item = oldData.products.find((product) => product.id === newData.id);
    item.abc = !item.abc;
    NotificationManager.success("Liked");
  } else if (newData.type === "ADDED_tO_CART") {
    oldData.orders.push(newData.payload);
    NotificationManager.success("Product added to cart", "Added");
  }

  return oldData;
}
const ProjectsData = {
  projects: [
    {
      id: "01",
      img: P1,
      title: "Warehouse Robotics",
      desc: "Develop an automated warehouse system with robots that can efficiently manage inventory, pick and pack orders, and optimize storage space.",
      category: "Robotics",
    },
    {
      id: "02",
      img: P2,
      title: "Home Automation System",
      desc: "Create a smart home system that allows users to control lighting, heating, and security remotely through a web application. Integrate IoT devices for real-time monitoring and control.",
      category: "Automation",
    },
    {
      id: "03",
      img: P3,
      title: "IoT Weather Station",
      desc: "Build a weather station using IoT sensors to collect and transmit data to a web application for real-time weather monitoring and forecasting.",
      category: "IoT",
    },
    {
      id: "04",
      img: P4,
      title: "Industrial Automation",
      desc: "Implement an industrial automation solution using embedded systems to control manufacturing processes and monitor equipment health through a web-based dashboard.",
      category: "Automation",
    },
    {
      id: "05",
      img: P5,
      title: "Smart Agriculture",
      desc: "Create a system that combines IoT sensors, robotics, and a web application to optimize farming operations by monitoring soil conditions, irrigation, and crop health",
      category: "Machine Learning",
    },
    {
      id: "06",
      img: P6,
      title: "Home Security Robot",
      desc: "Design a robot with embedded vision capabilities for home security purposes, allowing users to control and monitor their homes remotely.",
      category: "Robotics",
    },
    {
      id: "07",
      img: P7,
      title: "IoT-Based Healthcare",
      desc: "Develop a healthcare system that uses IoT sensors to monitor patient health and send data to a web platform for doctors and caregivers to access.",
      category: "IoT",
    },
    {
      id: "08",
      img: P8,
      title: "Autonomous Delivery Drone",
      desc: "Build an autonomous delivery drone system that uses embedded systems for navigation and a web application for tracking and managing deliveries",
      category: "Machine Learning",
    },
    {
      id: "09",
      img: P9,
      title: "Greenhouse Automation",
      desc: "Create an automated greenhouse system that regulates temperature, humidity, and irrigation using IoT sensors and a web-based control panel.",
      category: "Automation",
    },
    {
      id: "10",
      img: P10,
      title: "Smart Parking System",
      desc: "Develop a smart parking solution with embedded sensors in parking spaces, providing real-time availability information through a web or mobile app.",
      category: "Embedded Systems",
    },
  ],
};
function ProjectSection(oldData = ProjectsData, newData) {
  oldData = {
    ...oldData,
    products: [...oldData.projects],
    // orders: [...oldData.orders],
  };
  if (newData.type === "ADD_PRODUCT") {
    oldData.products.push(newData.payload);
    NotificationManager.success("Product added", "Added");
  } else if (newData.type === "SEARCH_PRODUCT") {
    oldData.searched = newData.payload;
  } else if (newData.type === "TOGGLE_LIKED_BTN") {
    let item = oldData.products.find((product) => product.id === newData.id);
    item.abc = !item.abc;
    NotificationManager.success("Liked");
  } else if (newData.type === "ADDED_tO_CART") {
    oldData.orders.push(newData.payload);
    NotificationManager.success("Product added to cart", "Added");
  }

  return oldData;
}
const BlogsData = {
  blogs: [
    {
      id: 1,
      image: b1,
      heading: "Automation",
      author: "Author Name 1",
      date: "March 21, 2024",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et turpis eget neque ultrices feugiat vel at est.",
    },
    {
      id: 2,
      image: b2,
      heading: "Internet of Things",
      author: "Author Name 2",
      date: "March 21, 2024",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et turpis eget neque ultrices feugiat vel at est.",
    },
    {
      id: 3,
      image: b3,
      heading: "Embedded AI",
      author: "Author Name 3",
      date: "March 21, 2024",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et turpis eget neque ultrices feugiat vel at est.",
    },
    {
      id: 4,
      image: b4,
      heading: "Web Development",
      author: "Author Name 4",
      date: "March 21, 2024",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et turpis eget neque ultrices feugiat vel at est.",
    },
    {
      id: 5,
      image: B2,
      heading: "App Development",
      author: "Author Name 5",
      date: "March 21, 2025",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et turpis eget neque ultrices feugiat vel at est.",
    },
  ],
};

function BlogSection(oldData = BlogsData, newData) {
  oldData = {
    ...oldData,
    products: [...oldData.blogs],
    // orders: [...oldData.orders],
  };
  if (newData.type === "ADD_PRODUCT") {
    oldData.products.push(newData.payload);
    NotificationManager.success("Product added", "Added");
  } else if (newData.type === "SEARCH_PRODUCT") {
    oldData.searched = newData.payload;
  } else if (newData.type === "TOGGLE_LIKED_BTN") {
    let item = oldData.products.find((product) => product.id === newData.id);
    item.abc = !item.abc;
    NotificationManager.success("Liked");
  } else if (newData.type === "ADDED_tO_CART") {
    oldData.orders.push(newData.payload);
    NotificationManager.success("Product added to cart", "Added");
  }

  return oldData;
}

let initialAuthSection = {
  loggedUser: null,
  users: [],
};

function authSection(oldData = initialAuthSection, newData) {
  oldData = { ...oldData };
  if (newData.type === "USER_CREATED") {
    oldData.users.push(newData.payload);
    NotificationManager.success("Congratulations,you are signed in", "Signed");
  } else if (newData.type === "USER_LOGGED_IN") {
    oldData.loggedUser = newData.payload;
  } else if (newData.type === "USER_LOGGED_OUT") {
    localStorage.removeItem("someToken");
    oldData.loggedUser = null;
  }
  return oldData;
}

let allData = combineReducers({
  //   ProductsSection,
  authSection,
  DiffSection,
  ServiceSection,
  CustomerSection,
  BlogSection,
  CardSection,
  ServiceContentSection,
  ProjectSection,
  //   BlogsSection,
});
let store = createStore(allData);

export default store;
