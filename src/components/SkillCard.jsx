import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function SkillCard({ skill, image }) {
  return (
    <Card
      sx={{
        width: 120,
        height: 120,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#1f2937',
        p: 2,
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: 4,
        },
      }}
    >
      <CardMedia
        component="img"
        image={image}
        alt={skill.name}
        sx={{
          width: 50,
          height: 50,
          objectFit: 'contain',
          mb: 1,
        }}
      />
      <CardContent sx={{ p: 0 }}>
        <Typography variant="body2" align="center" color="#fafafa">
          {skill.name}
        </Typography>
      </CardContent>
    </Card>
  );
}
