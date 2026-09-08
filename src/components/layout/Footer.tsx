import React from 'react';
import { Container, Box, Typography, IconButton, Tooltip, Divider } from '@mui/material';
import { 
  ArrowUp, 
  Github, 
  Linkedin,
  Heart,
  Code2,
  Mail,
  Sparkles
} from 'lucide-react';
import { ProfileData } from '../../types';

interface FooterProps {
  profile: ProfileData;
}

export const Footer: React.FC<FooterProps> = ({ profile }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#FDFCF9',
        borderTop: '1px solid #EBE7E0',
        py: { xs: 6, md: 8 },
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', md: 'center' },
            gap: 4,
            mb: 5,
          }}
        >
          {/* Brand and Summary */}
          <Box sx={{ maxWidth: 460 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
              <div className="w-12 h-12 rounded-lg bg-[#2D2D2D] text-[#FDFCF9] flex items-center justify-center font-serif font-bold text-sm shadow-xs">
                {profile.name.charAt(0)}
              </div>
              <div>
                <Typography sx={{ fontWeight: 600, fontFamily: '"Newsreader", Georgia, serif', fontSize: '1.25rem', lineHeight: 1.2, color: '#2D2D2D' }}>
                  {profile.name}
                </Typography>
                <Typography component='p' variant="caption" sx={{ color: '#8C7B6A', fontWeight: 500 }}>
                  {profile.title}
                </Typography>
              </div>
            </Box>
            <Typography variant="body2" sx={{ color: '#5C544B', mb: 2, lineHeight: 1.6 }}>
              Crafting modern, accessible, and ultra-responsive web interfaces with React, TypeScript, and clean design systems.
            </Typography>
            
            {/* Direct Email Badge */}
            <a 
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#5C544B] bg-[#F5F2EE] border border-[#EBE7E0] hover:bg-[#EBE7E0] px-3 py-1.5 rounded-lg transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#7E8F7C]" />
              {profile.email}
            </a>
          </Box>

          {/* Quick Links & Socials */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#2D2D2D' }}>
              Connect & Socials
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, flexWrap: 'wrap' }}>
              {profile.socials.github && (
                <Tooltip title="GitHub">
                  <IconButton
                    component="a"
                    href={profile.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      border: '1px solid #EBE7E0',
                      backgroundColor: '#FFFFFF',
                      color: '#5C544B',
                      '&:hover': { backgroundColor: '#F5F2EE', color: '#2D2D2D', borderColor: '#7E8F7C' },
                    }}
                  >
                    <Github className="w-4 h-4" />
                  </IconButton>
                </Tooltip>
              )}
              {profile.socials.linkedin && (
                <Tooltip title="LinkedIn">
                  <IconButton
                    component="a"
                    href={profile.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      border: '1px solid #EBE7E0',
                      backgroundColor: '#FFFFFF',
                      color: '#5C544B',
                      '&:hover': { backgroundColor: '#F5F2EE', color: '#2D2D2D', borderColor: '#7E8F7C' },
                    }}
                  >
                    <Linkedin className="w-4 h-4" />
                  </IconButton>
                </Tooltip>
              )}
            </Box>
          </Box>
        </Box>

        <Divider sx={{ my: 3, borderColor: '#EBE7E0' }} />

        {/* Bottom bar */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'center', sm: 'center' },
            gap: 2,
            fontSize: '0.85rem',
            color: '#8C7B6A',
          }}
        >
          <Typography variant="body2" sx={{ color: '#8C7B6A', fontSize: '0.85rem' }}>
            © {new Date().getFullYear()} All rights reserved.
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <span className="inline-flex items-center gap-1.5 text-xs text-[#8C7B6A] font-mono">
              <Code2 className="w-3.5 h-3.5 text-[#7E8F7C]" />
              React + TypeScript + MUI
            </span>

            {/* Back to top button */}
            <Tooltip title="Back to top">
              <IconButton
                onClick={scrollToTop}
                size="small"
                sx={{
                  border: '1px solid #EBE7E0',
                  backgroundColor: '#FFFFFF',
                  color: '#2D2D2D',
                  '&:hover': { backgroundColor: '#F5F2EE', borderColor: '#7E8F7C' },
                }}
              >
                <ArrowUp className="w-4 h-4" />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
