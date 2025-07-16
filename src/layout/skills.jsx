import * as React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import SkillCard from '../components/SkillCard';
import skillsData from '../utils/skills.json';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function Skills() {
  const images = import.meta.glob('../assets/image/skills/*.png', {
    eager: true,
    query: '?url',
    import: 'default',
  });

  return (
    <div className="max-w-screen-lg mx-auto px-4 text-center">
      <Typography variant="h4" component="h1" fontWeight="bold" gutterBottom>
        My Skills ⚡️
      </Typography>

      <Grid container spacing={3} justifyContent="center" mt={4}>
        {skillsData.map((skill, idx) => {
          const [ref, inView] = useInView({
            triggerOnce: true,
            threshold: 0.1,
          });

          return (
            <Grid item key={idx} ref={ref}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  ease: 'easeOut',
                  delay: idx * 0.1,
                }}
              >
                <SkillCard
                  skill={skill}
                  image={images[`../assets/image/skills/${skill.image}`]}
                />
              </motion.div>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
