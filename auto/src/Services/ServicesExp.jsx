// import React from "react";
// import { Grid, Typography, Card, CardContent, Box } from "@mui/material";
// import b1 from "../Images/Services/exp/Ai/ils_20.png";
// import b2 from "../Images/Services/exp/Services Content/A.jpg";
// import b3 from "../Images/Services/exp/Ai/shape_48.png";
// import { content1 } from "./servicesData";

// const ServicesExp = () => {
//   // const mergedArray = serviceName.map((service, index) => ({
//   //   ...content1[index],
//   //   ...service,
//   // }));

//   return (
//     <div style={{ backgroundColor: "#fcfdff" }}>
//       <Grid
//         container
//         style={{ backgroundColor: "#f6fcff", minHeight: "300px" }}
//       >
//         <Grid
//           item
//           xs={12}
//           md={6}
//           sx={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           <Typography variant="h3" align="center" fontWeight={"bold"}>
//             {content1.map((item) => (
//               <span key={item.id}>
//                 {item.title.split(" ").map((word, wordIndex) => (
//                   <span key={wordIndex}>
//                     {wordIndex === 0 ? (
//                       <span>{word}</span>
//                     ) : (
//                       <span
//                         style={{
//                           textDecoration: "underline",
//                           textDecorationColor: "purple",
//                           color: "purple",
//                         }}
//                       >
//                         {word}
//                       </span>
//                     )}
//                     {wordIndex < item.title.split(" ").length - 1 && " "}
//                   </span>
//                 ))}
//               </span>
//             ))}
//           </Typography>
//         </Grid>

//         <Grid
//           item
//           xs={12}
//           md={6}
//           sx={{ display: "flex", alignItems: "flex-end" }}
//         >
//           <img
//             src={b1}
//             alt="Service"
//             style={{ width: "70%", height: "auto", objectFit: "cover" }}
//           />
//         </Grid>
//       </Grid>

//       <Grid container>
//         <Grid
//           item
//           xs={12}
//           md={4}
//           sx={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             minHeight: "450px",
//             backgroundImage: `url(${b3})`,
//             backgroundSize: "cover",
//             backgroundPosition: "flex-end",
//           }}
//         >
//           <Card
//             sx={{
//               width: "67%",
//               height: "50vh",
//               justifyContent: "center",
//               borderRadius: "10px",
//               filter: "dropShadow (10px 7px 10px black)",
//               border: "3px solid #f7fcff",
//             }}
//           >
//             <CardContent>
//               <Typography
//                 variant="h5"
//                 align="center"
//                 sx={{ mt: 1, mb: 3, fontWeight: "bold" }}
//               >
//                 Technologies
//               </Typography>
//               {[
//                 "Python (TensorFlow, PyTorch, scikit-learn)",
//                 "Apache Spark",
//                 "AWS SageMaker",
//                 "Microsoft Azure Machine Learning",
//                 "Custom Firmware Development",
//                 "React JS",
//                 "Vanilla javascript",
//               ].map((tech, index) => (
//                 <Typography
//                   variant="body1"
//                   key={index}
//                   sx={{ marginBottom: 2, color: "black", fontWeight: 300 }}
//                 >
//                   - {tech}
//                 </Typography>
//               ))}
//             </CardContent>
//           </Card>
//         </Grid>
//         <Grid item xs={12} md={8} sx={{ mt: 10, ml: { md: 0, xs: 2 } }}>
//           <Typography
//             variant="h3"
//             gutterBottom
//             sx={{ width: { md: "80%", xs: "90%" }, fontWeight: "bold" }}
//           >
//             Delivering the insights you need to help business growth
//           </Typography>
//           {content1.map((item) => (
//             <div key={item.id}>
//               <Typography
//                 variant="body1"
//                 gutterBottom
//                 sx={{ width: { md: "80%", xs: "90%" }, mb: 5 }}
//               >
//                 {item.title1}
//               </Typography>
//               <Typography
//                 variant="body1"
//                 gutterBottom
//                 sx={{ width: { md: "80%", xs: "90%" }, mb: 5 }}
//               >
//                 {item.title2}
//               </Typography>
//               <Typography
//                 variant="subtitle1"
//                 sx={{ color: "grey", width: { md: "80%", xs: "90%" }, mb: 5 }}
//               >
//                 {item.points.map((point, idx) => (
//                   <React.Fragment key={idx}>
//                     {point}
//                     {idx !== item.points.length - 1 && <br />}
//                   </React.Fragment>
//                 ))}
//               </Typography>
//             </div>
//           ))}
//         </Grid>
//       </Grid>

//       <Grid container>
//         <Grid
//           item
//           xs={12}
//           md={4}
//           sx={{ display: "flex", justifyContent: "center" }}
//         ></Grid>
//         <Grid
//           item
//           xs={12}
//           md={6.5}
//           sx={{ display: "flex", justifyContent: "center" }}
//         >
//           <img
//             src={b2}
//             alt="Specific Service"
//             style={{ maxWidth: "100%", height: "auto", padding: "5px" }}
//           />
//         </Grid>
//       </Grid>
//       <Grid container sx={{ mt: 7 }}>
//         <Grid item xs={12} md={4}></Grid>
//         <Grid item xs={12} md={8}>
//           <Card
//             sx={{
//               width: "80%",
//               borderRadius: "12px",
//               filter: "dropShadow(10px 7px 10px black)",
//               border: "3px solid #f7fcff",
//               mb: 5,
//             }}
//           >
//             <Grid container justifyContent="center" sx={{ padding: "20px" }}>
//               <Grid item xs={12} md={8}>
//                 <Typography variant="h4" align="center" sx={{ mb: 3 }}>
//                   Our Goals
//                 </Typography>

//                 <Grid
//                   container
//                   justifyContent="center"
//                   alignItems="center"
//                   spacing={2}
//                 >
//                   <Grid item xs={12} sm={6}>
//                     <Typography variant="body1" align="left">
//                       • Enable Autonomous Devices
//                     </Typography>
//                   </Grid>
//                   <Grid item xs={12} sm={6}>
//                     <Typography variant="body1" align="left">
//                       • Optimize Resource Utilization
//                     </Typography>
//                   </Grid>
//                   <Grid item xs={12} sm={6}>
//                     <Typography variant="body1" align="left">
//                       • Facilitate Edge Computing
//                     </Typography>
//                   </Grid>
//                   <Grid item xs={12} sm={6}>
//                     <Typography variant="body1" align="left">
//                       • Drive Innovation
//                     </Typography>
//                   </Grid>
//                   <Grid item xs={12} sm={6}>
//                     <Typography variant="body1" align="left">
//                       • Empower Our Clients
//                     </Typography>
//                   </Grid>
//                 </Grid>
//               </Grid>
//             </Grid>
//           </Card>
//         </Grid>
//       </Grid>
//     </div>
//   );
// };

// export default ServicesExp;
