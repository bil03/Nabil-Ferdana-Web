import * as React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { FaLaravel, FaReact, FaDocker, FaGithub } from 'react-icons/fa';
import { SiMysql, SiGooglecloud, SiExpress, SiKotlin, SiTensorflow, SiMongodb } from 'react-icons/si';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

export default function CardProject({ data }) {
  const techIcons = {
    Laravel: FaLaravel,
    MySql: SiMysql,
    'React Native': FaReact,
    'React Js': FaReact,
    'Google Cloud Platform': SiGooglecloud,
    'Express Js': SiExpress,
    Kotlin: SiKotlin,
    'Tensor Flow': SiTensorflow,
    MongoDB: SiMongodb,
    Docker: FaDocker,
  };

  const images = import.meta.glob('../assets/image/*.png', {
    eager: true,
    query: '?url',
    import: 'default',
  });

  // 🗂️ Observer + animasi
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1, // seberapa banyak Card kelihatan sebelum animasi jalan
  });

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, ease: 'easeOut' }} style={{ height: '100%' }}>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '100%',
          maxWidth: 345,
          '&:hover .overlay': {
            opacity: 1,
          },
        }}
      >
        <Card
          className="card"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            backgroundColor: '#1f2937',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            '&:hover': {
              transform: 'translateY(-5px) scale(1.02)',
              boxShadow: 6,
            },
            position: 'relative', // <<< penting agar overlay absolute di dalam Card
            overflow: 'hidden', // biar nggak keluar
          }}
        >
          <CardMedia
            component="img"
            sx={{
              height: 200,
              width: '100%',
              objectFit: 'cover',
            }}
            image={images[`../assets/image/${data.image}.png`]}
            alt={data.title}
          />

          <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
            <Typography gutterBottom variant="h5" color="#fafafa">
              {data.title}
            </Typography>

            <Typography variant="body2" color="#9ca3af">
              {data.description}
            </Typography>

            {/* Spacer flex agar dorong ke bawah */}
            <Box sx={{ flexGrow: 1, mt: 3 }} />

            <Stack
              direction="row"
              spacing={1}
              sx={{
                flexWrap: 'wrap',
                rowGap: 1,
                // tidak perlu mt: 'auto' lagi karena pakai Spacer Box
              }}
            >
              {data.techs.map((tech, i) => {
                const Icon = techIcons[tech];
                return Icon ? (
                  <Box
                    key={i}
                    sx={{
                      border: '1px solid',
                      borderColor: '#9ca3af',
                      borderRadius: '8px',
                      p: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Icon size={20} color="#fafafa" />
                  </Box>
                ) : null;
              })}
            </Stack>
          </CardContent>

          {/* OVERLAY sekarang di dalam Card */}
          <Box
            className="overlay"
            sx={{
              position: 'absolute',
              inset: 0,
              backgroundColor: 'rgba(0,0,0,0.7)',
              color: '#fff',
              opacity: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              transition: 'opacity 0.3s ease',
              cursor: 'pointer',
            }}
            onClick={() => window.open(data.repo, '_blank')}
          >
            <FaGithub size={32} style={{ marginBottom: '8px' }} />
            <Typography variant="subtitle1">View Repository</Typography>
          </Box>
        </Card>
      </Box>
    </motion.div>
  );
}
