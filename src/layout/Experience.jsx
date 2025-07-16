import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import experiences from '../utils/experience.json';

import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

export default function Experience() {
  return (
    <section className="py-20 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">My Experience 🎓</h2>

      <VerticalTimeline>
        {experiences.map((exp, idx) => (
          <VerticalTimelineElement
            key={idx}
            date={exp.date}
            iconStyle={{ background: '#3b82f6', color: '#fff' }}
            icon={exp.icon === 'school' ? <SchoolIcon /> : <WorkIcon />}
            contentStyle={{ background: '#1f2937', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #1f2937' }}
          >
            <h3 className="vertical-timeline-element-title font-bold text-white">{exp.title}</h3>
            <h4 className="vertical-timeline-element-subtitle text-sm">{exp.location}</h4>
            <p className="text-sm text-gray-400">{exp.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}
