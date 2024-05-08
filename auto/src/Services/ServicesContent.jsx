import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Content = [
  {
    title: "AUTOROBOS - Digital Marketing Solutions",
    subtitle:
      "Welcome to AUTOROBOS, your gateway to digital success. Our Digital Marketing Solutions are tailored to elevate your online presence, drive traffic, and boost conversions.",
    focus:
      "With a focus on innovation and results, we offer a comprehensive suite of services including:",
    services: [
      "Search Engine Optimization (SEO): Enhance your visibility and organic search rankings with our strategic SEO approach. From keyword research to on-page optimization, we optimize your website to ensure maximum visibility and traffic.",
      "Social Media Marketing: Engage and connect with your target audience across popular social media platforms. Our expert team creates compelling content, manages ad campaigns, and cultivates meaningful interactions to amplify your brand presence.",
      "Pay-Per-Click (PPC) Advertising: Reach your target audience instantly with targeted PPC campaigns. We leverage data-driven insights and precise targeting to deliver measurable results and maximize your ROI.",
      "Content Marketing: Fuel your digital growth with captivating content that resonates with your audience. From blog posts to videos and infographics, we craft compelling content that drives engagement, builds brand authority, and attracts leads.",
      "Email Marketing: Nurture leads and foster customer relationships with personalized email campaigns. Our email marketing experts design, optimize, and automate campaigns to deliver relevant content and drive conversions.",
    ],
  },
  {
    title: "AUTOROBOS - Web Development Services",
    subtitle:
      "Welcome to AUTOROBOS, your partner in crafting exceptional digital experiences. Our Web Development Services are designed to bring your vision to life, creating stunning and functional websites that leave a lasting impression.",
    focus:
      "With a focus on innovation and user-centric design, we offer a comprehensive suite of services including:",
    services: [
      "Custom Website Development: Elevate your online presence with a bespoke website tailored to your unique needs. Our expert team of developers combines creativity with technical expertise to deliver websites that are not only visually captivating but also optimized for performance and functionality.",
      "E-commerce Solutions: Unlock new opportunities for growth with our scalable e-commerce solutions. From intuitive product catalogs to secure payment gateways, we empower businesses to thrive in the digital marketplace.",
      "Content Management Systems (CMS): Take control of your content with our user-friendly CMS platforms. Whether you're a small business or a large enterprise, we provide robust CMS solutions that streamline content management and enhance website flexibility.",
      "Responsive Design: Ensure seamless user experiences across devices with our responsive web design approach. Our websites adapt fluidly to various screen sizes, ensuring accessibility and engagement for all users.",
      "Website Maintenance and Support: Stay ahead of the curve with our ongoing maintenance and support services. From regular updates to troubleshooting, we're here to ensure your website remains secure, reliable, and up-to-date.",
    ],
  },
  {
    title: "AUTOROBOS - Internet of Things (IoT) Solutions",
    subtitle:
      "Welcome to AUTOROBOS, where connectivity meets innovation. Our Internet of Things (IoT) Solutions harness the power of interconnected devices to revolutionize the way we live and work.",
    focus:
      "With a focus on seamless integration and intelligent automation, we offer a comprehensive suite of services including:",
    services: [
      "IoT Strategy and Consulting: Unlock the full potential of IoT technology with our strategic consulting services. Our experts work closely with you to identify opportunities, define objectives, and develop a roadmap for IoT implementation tailored to your business goals.",
      "Smart Home Automation: Transform your living spaces into intelligent environments with our smart home automation solutions. From automated lighting and temperature control to security systems and entertainment setups, we create personalized experiences that enhance comfort, convenience, and energy efficiency.",
      "Industrial IoT (IIoT) Solutions: Revolutionize your operations with our industrial IoT solutions. Whether you're in manufacturing, logistics, or utilities, we deploy advanced sensors, analytics, and connectivity to optimize processes, improve asset utilization, and drive productivity.",
      "IoT Security and Compliance: Safeguard your IoT ecosystem against cyber threats and ensure compliance with industry regulations. Our security specialists implement robust measures to protect data integrity, confidentiality, and availability across all layers of your IoT infrastructure.",
      "IoT Integration and Deployment: Seamlessly integrate IoT devices and platforms into your existing infrastructure with our end-to-end deployment services. From hardware selection to software development and integration, we ensure smooth implementation and interoperability for maximum efficiency and scalability.",
    ],
  },
  {
    title: "AUTOROBOS - Embedded Systems Solutions",
    subtitle:
      "Welcome to AUTOROBOS, your partner in embedded innovation. Our Embedded Systems Solutions combine cutting-edge hardware and software expertise to power the next generation of smart devices and applications.",
    focus:
      "With a focus on performance, reliability, and efficiency, we offer a comprehensive suite of services including:",
    services: [
      "Custom Embedded System Design: Bring your ideas to life with our custom embedded system design services. From concept to prototyping and production, our experienced engineers collaborate with you to develop tailored solutions that meet your specific requirements and objectives.",
      "Embedded Software Development: Leverage our expertise in embedded software development to create robust and scalable firmware for your embedded systems. Whether you're building IoT devices, industrial controllers, or consumer electronics, we deliver optimized software solutions that drive performance and innovation.",
      "Hardware Design and Optimization: Maximize the potential of your embedded systems with our hardware design and optimization services. Our engineers leverage the latest technologies and design methodologies to develop efficient and cost-effective hardware solutions that meet your performance, power, and size constraints.",
      "Real-time Operating Systems (RTOS): Ensure deterministic behavior and precise timing in your embedded applications with our real-time operating system solutions. We specialize in RTOS selection, configuration, and optimization to support critical tasks and meet stringent performance requirements.",
      "Embedded System Testing and Validation: Validate the reliability, functionality, and safety of your embedded systems with our comprehensive testing services. From unit testing to system integration and validation, we employ rigorous methodologies and advanced tools to ensure quality and compliance with industry standards.",
    ],
  },
  {
    title: "AUTOROBOS - Automation Solutions",
    subtitle:
      "Welcome to AUTOROBOS, your trusted partner in automation excellence. Our Automation Solutions empower businesses to streamline processes, enhance productivity, and unlock new opportunities for growth.",
    focus:
      "With a focus on efficiency, scalability, and innovation, we offer a comprehensive suite of services including:",
    services: [
      "Robotic Process Automation (RPA): Automate repetitive tasks and workflows with our robotic process automation solutions. From data entry and document processing to customer service and IT operations, we deploy software robots that mimic human actions to drive efficiency and accuracy.",
      "Industrial Automation Systems: Transform your manufacturing operations with our industrial automation systems. Whether you're in discrete or process manufacturing, we design and implement automated solutions that optimize production processes, reduce costs, and improve quality and safety.",
      "Process Optimization and Control: Optimize your business processes and workflows with our process optimization and control solutions. Our experts analyze your operations, identify inefficiencies, and implement automated workflows and decision-making systems to streamline operations and improve resource utilization.",
      "Smart Building Automation: Create intelligent and sustainable environments with our smart building automation solutions. From energy management and HVAC control to lighting and security systems, we design and deploy automated solutions that enhance comfort, efficiency, and safety in commercial and residential buildings.",
      "Data-driven Automation Solutions: Harness the power of data to drive automation and decision-making in your organization. Our data-driven automation solutions leverage advanced analytics, machine learning, and artificial intelligence to automate processes, predict outcomes, and optimize performance across various domains.",
    ],
  },
  {
    title: "AUTOROBOS - Robotics Solutions",
    subtitle:
      "Welcome to AUTOROBOS, where innovation meets robotics. Our Robotics Solutions empower businesses to harness the power of automation, enhance productivity, and unlock new possibilities for efficiency and growth.",
    focus:
      "With a focus on cutting-edge technology and real-world applications, we offer a comprehensive suite of services including:",
    services: [
      "Autonomous Robotics: Explore the future of automation with our autonomous robotics solutions. From self-driving vehicles and drones to robotic arms and humanoid robots, we design and deploy intelligent systems that operate autonomously in dynamic environments, enabling new opportunities for efficiency and innovation.",
      "Collaborative Robotics (Cobots): Revolutionize your manufacturing operations with our collaborative robotics solutions. Our cobots work alongside human workers, enhancing safety, efficiency, and flexibility in tasks such as assembly, pick-and-place, and quality inspection.",
      "Industrial Robotics Integration: Transform your production processes with our industrial robotics integration services. Whether you're in automotive, electronics, or food and beverage manufacturing, we design and implement robotic systems that optimize throughput, quality, and resource utilization, driving competitiveness and profitability.",
      "Robotic Vision and Perception: Enhance the capabilities of your robots with our robotic vision and perception solutions. From object detection and recognition to 3D mapping and navigation, we equip robots with advanced sensors and algorithms that enable them to perceive and interact with their environment effectively.",
      "Robotic Simulation and Programming: Accelerate the deployment of robotic systems with our robotic simulation and programming services. We utilize state-of-the-art simulation tools and programming languages to model, test, and optimize robot behavior, reducing time-to-market and minimizing risks associated with deployment.",
    ],
  },
  {
    title: "AUTOROBOS - Artificial Intelligence (AI) Solutions",
    subtitle:
      "Welcome to AUTOROBOS, your gateway to AI-driven innovation. Our Artificial Intelligence (AI) Solutions empower businesses to unlock insights, automate processes, and drive intelligent decision-making.",
    focus:
      "With a focus on cutting-edge algorithms and real-world applications, we offer a comprehensive suite of services including:",
    services: [
      "Machine Learning Solutions: Leverage the power of machine learning to extract valuable insights from your data. Our machine learning experts develop and deploy custom algorithms that enable predictive analytics, anomaly detection, and pattern recognition, empowering you to make informed decisions and drive business growth.",
      "Natural Language Processing (NLP): Unlock the potential of unstructured data with our natural language processing solutions. From sentiment analysis and language translation to chatbots and virtual assistants, we harness the power of NLP to enhance customer experiences, automate interactions, and extract actionable insights from text data.",
      "Computer Vision Solutions: See the world through the lens of AI with our computer vision solutions. Our computer vision experts develop algorithms that enable image and video analysis, object detection and recognition, and scene understanding, empowering businesses to automate visual tasks, enhance security, and improve operational efficiency.",
      "Predictive Analytics: Anticipate future trends and outcomes with our predictive analytics solutions. By analyzing historical data and identifying patterns and correlations, we develop predictive models that enable proactive decision-making, optimize resource allocation, and mitigate risks across various domains.",
      "AI-driven Automation: Automate repetitive tasks and workflows with our AI-driven automation solutions. From robotic process automation (RPA) to intelligent document processing and workflow orchestration, we deploy AI algorithms that mimic human intelligence to drive efficiency, accuracy, and scalability in business processes.",
    ],
  },
];

const ServicesContent = () => {
  return (
    <>
      {/* <Container>
        <Box sx={{ my: 4 }}>
          {Content.map((contentItem, index) => (
            <React.Fragment key={index}>
              <Typography variant="h3" align="center" gutterBottom>
                {contentItem.title}
              </Typography>
              <Typography variant="h5" align="center" gutterBottom>
                {contentItem.subtitle}
              </Typography>
              <Typography variant="body1" align="center" gutterBottom>
                {contentItem.focus}
              </Typography>
              <Box sx={{ textAlign: "left", pl: 4 }}>
                {contentItem.services.map((service, serviceIndex) => (
                  <Typography key={serviceIndex} variant="body2" gutterBottom>
                    <b>{serviceIndex + 1} : </b> {service}
                  </Typography>
                ))}
              </Box>
            </React.Fragment>
          ))}
        </Box>
      </Container> */}
      <Box>
        {/* <Grid container>
          <Grid item> */}{" "}
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Accordion 1
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            Accordion 2
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            Accordion Actions
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
          <AccordionActions>
            <Button>Cancel</Button>
            <Button>Agree</Button>
          </AccordionActions>
        </Accordion>
        {/* </Grid>
        </Grid> */}
      </Box>
    </>
  );
};

export default ServicesContent;
