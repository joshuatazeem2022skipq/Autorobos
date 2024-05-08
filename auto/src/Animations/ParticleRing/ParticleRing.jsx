// import React, { useRef, useState } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls, Sphere } from "@react-three/drei";
// import { pointsInner, pointsOuter } from "../ParticleRing/Utils";
// import { Text } from "troika-three-text";

// const ParticleRing = () => {
//   const [zoomedIn, setZoomedIn] = useState(false);
//   const canvasRef = useRef(null);

//   const handleScroll = (event) => {
//     if (!zoomedIn && event.deltaY > 0) {
//       setZoomedIn(true);
//     }
//   };

//   return (
//     <div
//       className="relative"
//       onWheel={handleScroll}
//       style={{ overflowY: zoomedIn ? "auto" : "hidden" }}
//     >
//       <Canvas
//         camera={{
//           position: [10, -7.5, -5],
//         }}
//         style={{ height: "100vh" }}
//         className="bg-slate-900"
//         ref={canvasRef}
//       >
//         <OrbitControls maxDistance={20} minDistance={10} enabled={!zoomedIn} />
//         <directionalLight />
//         <pointLight position={[-30, 0, -30]} power={10.0} />
//         <PointCircle />
//         {/* {zoomedIn && (
//           <Text
//             color="#ffffff"
//             position={[0, 0, 0]}
//             fontSize={1}
//             text="Other Pages"
//           />
//         )} */}
//       </Canvas>
//     </div>
//   );
// };

// const PointCircle = () => {
//   const ref = useRef(null);

//   useFrame(({ clock }) => {
//     if (ref.current?.rotation) {
//       ref.current.rotation.z = clock.getElapsedTime() * 0.05;
//     }
//   });

//   return (
//     <group ref={ref}>
//       {pointsInner.map((point) => (
//         <Point key={point.idx} position={point.position} color={point.color} />
//       ))}
//       {pointsOuter.map((point) => (
//         <Point key={point.idx} position={point.position} color={point.color} />
//       ))}
//     </group>
//   );
// };

// const Point = ({ position, color }) => {
//   return (
//     <Sphere position={position} args={[0.1, 10, 10]}>
//       <meshStandardMaterial
//         emissive={color}
//         emissiveIntensity={0.5}
//         roughness={0.5}
//         color={color}
//       />
//     </Sphere>
//   );
// };

// export default ParticleRing;
