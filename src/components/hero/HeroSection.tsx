import React, { useState, useEffect } from 'react';
import { 
  Container, 
  Box, 
  Typography, 
  Button, 
  Chip, 
  Grid, 
  Paper, 
  Tooltip,
  IconButton
} from '@mui/material';
import { 
  ArrowRight, 
  Sparkles, 
  Download, 
  FileText, 
  CheckCircle2, 
  Zap, 
  Layers, 
  Cpu, 
  Code2, 
  Flame, 
  Terminal, 
  Play, 
  RefreshCw,
  ExternalLink,
  Copy,
  Check
} from 'lucide-react';
import LiveInspectorCard from './LiveInspectorCard'
import { ProfileData } from '../../types';

interface HeroSectionProps {
  profile: ProfileData;
  onOpenResumeDoc: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ profile, onOpenResumeDoc }) => {

  return (
    <Box
      id="about"
      sx={{
        pt: { xs: 15, md: 19 },
        pb: { xs: 10, md: 14 },
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, #FDFCF9 0%, #F6F3EE 100%)',
      }}
      className="bg-grid-pattern"
    >
      {/* Subtle warm natural background glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-gradient-to-b from-[#EBE4DA]/40 via-[#F5F2EE]/30 to-transparent blur-3xl pointer-events-none -z-10" />

      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: {xs: 3, md: 6} }}>
          
          {/* Main Hero Header Row */}
          <Box sx={{ maxWidth: 920, mx: 'auto', textAlign: 'center' }}>
            
            {/* Status Pill Badge */}
            <Box sx={{ display: 'inline-flex', alignItems: 'center', mb: 3 }}>
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-[#EBE7E0] shadow-xs text-xs font-medium text-[#5C544B] animate-float-slow">
                <span className="w-2.5 h-2.5 rounded-full bg-[#7E8F7C] shadow-[0_0_8px_rgba(126,143,124,0.6)]"></span>
                <span className="font-semibold text-[#2D2D2D]">Available for full-time roles</span>
                <Box component='span' className="text-[#D8D2C7]" sx={{display: {xs: 'none', sm: 'initial'}}}>|</Box>
                <Box component='span' className="text-[#8C7B6A] font-mono text-[11px] uppercase tracking-wider" sx={{display: {xs: 'none', sm: 'initial'}}}>React 19 • Next.js • MUI</Box>
              </div>
            </Box>

            {/* Main Headline */}
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '3rem', sm: '4.25rem', md: '5.25rem' },
                fontWeight: 600,
                color: '#2D2D2D',
                letterSpacing: '0.01em',
                lineHeight: 1.25,
                mb: 3,
                fontFamily: '"Caveat", cursive, sans-serif',
              }}
            >
              Making <span className="text-[#7E8F7C]">Complex Things</span><br/>
              Feel <span className="text-[#7E8F7C]">Simple</span>.
            </Typography>

            {/* Subtitle */}
            <Typography
              variant="subtitle1"
              sx={{
                fontSize: { xs: '1.05rem', sm: '1.2rem' },
                color: '#5C544B',
                lineHeight: 1.68,
                maxWidth: 720,
                mx: 'auto',
                mb: 4.5,
              }}
            >
              Hi, I'm <strong className="text-[#2D2D2D] font-bold">{profile.name}</strong>. A {profile.title} with many years of experience building responsive, performant and pixel-perfect websites. I enjoy turning complex requirements into simple, reliable and thoughtful user experiences.
            </Typography>

            {/* CTA Buttons */}
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 2,
                mb: 5,
              }}
            >
              <Button
                variant="contained"
                size="large"
                href="#projects"
                endIcon={<ArrowRight className="w-4 h-4" />}
                sx={{
                  py: 1.5,
                  px: 3.5,
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  backgroundColor: '#2D2D2D',
                  color: '#FDFCF9',
                  boxShadow: '0 8px 20px -4px rgba(45, 45, 45, 0.25)',
                  '&:hover': {
                    backgroundColor: '#1A1918',
                  }
                }}
              >
                Explore Projects
              </Button>

              {/* <Button
                variant="outlined"
                size="large"
                onClick={onOpenResumeDoc}
                startIcon={<FileText className="w-4 h-4" />}
                sx={{
                  py: 1.5,
                  px: 3,
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  backgroundColor: '#FFFFFF',
                  borderColor: '#EBE7E0',
                  color: '#5C544B',
                  '&:hover': {
                    borderColor: '#7E8F7C',
                    backgroundColor: '#F5F2EE',
                    color: '#2D2D2D',
                  }
                }}
              >
                View Full Resume
              </Button> */}

              <Button
                variant="text"
                size="large"
                href="#contact"
                sx={{
                  py: 1.5,
                  px: 2.5,
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: '#8C7B6A',
                  '&:hover': {
                    color: '#2D2D2D',
                    backgroundColor: 'rgba(140, 123, 106, 0.08)',
                  },
                }}
              >
                Get In Touch
              </Button>
            </Box>

            {/* Quick Skills Pill Carousel */}
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 1.2 }}>
              {['ReactJS 19', 'Wordpress', 'jQuery', 'Material UI', 'UIkit', 'GSAP', 'Git'].map((tech) => (
                <Chip
                  key={tech}
                  label={tech}
                  size="small"
                  variant="outlined"
                  sx={{
                    borderColor: '#EBE7E0',
                    backgroundColor: '#FFFFFF',
                    fontSize: '0.785rem',
                    fontWeight: 500,
                    color: '#5C544B',
                    '&:hover': {
                      borderColor: '#7E8F7C',
                      backgroundColor: '#F5F2EE',
                      color: '#2D2D2D',
                    },
                  }}
                />
              ))}
            </Box>
          </Box>

          {/* Interactive Live Frontend Inspector Card */}
          {/* <LiveInspectorCard /> */}

          {/* Quick Metrics Strip */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
              gap: {xs: 1, md: 3},
              pt: 2,
            }}
          >
            {[
              { label: 'Years of Experience', value: `${profile.yearsExperience}+`, desc: 'Building for the Web' },
              { label: 'Years of Collaboration', value: '6+', desc: 'Working with Japanese Clients' },
              { label: 'Production Projects', value: `${profile.completedProjects}+`, desc: 'Built & Delivered' },
              { label: 'Curiosity', value: `∞`, desc: 'Always Learning' },
            ].map((stat, idx) => (
              <Box
                key={idx}
                sx={{
                  textAlign: 'center',
                  p: 2.5,
                  borderRadius: 3,
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #EBE7E0',
                  boxShadow: '0 2px 8px -2px rgba(92, 84, 75, 0.04)',
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: '1.8rem', md: '2.2rem' },
                    color: '#2D2D2D',
                    letterSpacing: '-0.03em',
                    mb: 0.5,
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                  }}
                >
                  {stat.value}
                </Typography>
                <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#2D2D2D', fontSize: '0.85rem' }}>
                  {stat.label}
                </Typography>
                <Typography variant="caption" sx={{ color: '#8C7B6A', display: 'block', mt: 0.25 }}>
                  {stat.desc}
                </Typography>
              </Box>
            ))}
          </Box>

        </Box>
      </Container>
    </Box>
  );
};
