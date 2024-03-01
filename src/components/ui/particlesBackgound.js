import React from 'react';
import ParticlesBg from 'particles-bg';
import { motion } from 'framer-motion';

const ParticlesBackground = () => {

//   return (
//     <div style={{
//         background: 'linear-gradient(to right, #ff8a65, #ff7043) top, linear-gradient(to left, #ff8a65, #ff7043) bottom, linear-gradient(to bottom right, #ff5722, #e64a19) right, linear-gradient(to top right, #ff5722, #e64a19) left',
//         height: '100vh',
//         position: 'relative',
//       }}>
//         <ParticlesBg type="cobweb" bg={true} />
//         {/* Content of your component */}
//       </div>
//     )
return (
    <div style={{ position: 'relative', overflow: 'hidden', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <motion.div
        style={{ position: 'absolute', top: 0, left: 0, width: '50%', height: '50%', backgroundColor: '#ff8a65' }}
        animate={{ backgroundColor: '#ff7043', rotate: [0, 360], scale: [1, 1.5], borderRadius: ['0%', '50%'] }}
        transition={{ duration: 2, yoyo: Infinity }}
      />
      <motion.div
        style={{ position: 'absolute', top: 0, right: 0, width: '50%', height: '50%', backgroundColor: '#e64a19' }}
        animate={{ backgroundColor: '#ff5722', rotate: [0, 360], scale: [1, 1.5], borderRadius: ['0%', '50%'] }}
        transition={{ duration: 2, yoyo: Infinity }}
      />
      <motion.div
        style={{ position: 'absolute', bottom: 0, left: 0, width: '50%', height: '50%', backgroundColor: '#ff5722' }}
        animate={{ backgroundColor: '#ff8a65', rotate: [0, 360], scale: [1, 1.5], borderRadius: ['0%', '50%'] }}
        transition={{ duration: 2, yoyo: Infinity }}
      />
      <motion.div
        style={{ position: 'absolute', bottom: 0, right: 0, width: '50%', height: '50%', backgroundColor: '#ff7043' }}
        animate={{ backgroundColor: '#e64a19', rotate: [0, 360], scale: [1, 1.5], borderRadius: ['0%', '50%'] }}
        transition={{ duration: 2, yoyo: Infinity }}
      />
      {/* Content of your component */}
    </div>
  );
};

export default ParticlesBackground;
