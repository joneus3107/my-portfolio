import React, { useState, useEffect } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Container, 
  Button, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemText, 
  Box, 
  Chip, 
  Tooltip,
  Avatar,
  Typography
} from '@mui/material';
import { 
  Menu as MenuIcon, 
  X as CloseIcon, 
  FileText, 
  Sliders, 
  Send,
  Github,
  Linkedin,
  Sparkles
} from 'lucide-react';
import { ProfileData } from '../../types';

interface NavbarProps {
  profile: ProfileData;
  onOpenCustomizer: () => void;
  onOpenResumeDoc: () => void;
}

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Resume', href: '#resume' },
  { label: 'Skills', href: '#skills' },
  // { label: 'Playground', href: '#playground' },
  // { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ profile, onOpenCustomizer, onOpenResumeDoc }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple scrollspy to highlight active link
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (href: string) => {
    setMobileOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: scrolled ? 'rgba(253, 252, 249, 0.92)' : 'rgba(253, 252, 249, 0.75)',
        backdropFilter: 'blur(16px)',
        borderBottom: scrolled ? '1px solid #EBE7E0' : '1px solid transparent',
        color: 'text.primary',
        transition: 'all 0.3s ease',
        zIndex: 1100,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ height: { xs: 64, md: 74 }, justifyContent: 'space-between' }}>
          
          {/* Logo / Monogram */}
          <Box 
            component="a" 
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#about');
            }}
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 1.5,
              textDecoration: 'none',
              color: 'inherit',
              cursor: 'pointer',
            }}
          >
            <Avatar 
              src={profile.avatarUrl} 
              alt={profile.name}
              sx={{ 
                width: 38, 
                height: 38, 
                border: '2px solid #EBE7E0',
                boxShadow: '0 2px 8px rgba(92, 84, 75, 0.08)' 
              }}
            >
              {profile.name.charAt(0)}
            </Avatar>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <span className="font-serif font-semibold text-lg tracking-tight text-[#2D2D2D]">
                  {profile.name}
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-[#F5F2EE] text-[#5C5146] border border-[#EBE7E0]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7E8F7C] animate-pulse"></span>
                  Available
                </span>
              </Box>
              <span className="text-[10px] uppercase tracking-[0.15em] text-[#8C7B6A] font-semibold">
                {profile.title}
              </span>
            </Box>
          </Box>

          {/* Desktop Navigation Links */}
          <Box sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: 'center', gap: 0.5 }}>
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <Button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  sx={{
                    px: 1.5,
                    py: 0.75,
                    fontSize: '0.825rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    fontWeight: isActive ? 700 : 600,
                    color: isActive ? '#2D2D2D' : '#8C7B6A',
                    position: 'relative',
                    '&:hover': {
                      color: '#5C5146',
                      backgroundColor: 'rgba(140, 123, 106, 0.05)',
                    },
                    '&::after': isActive ? {
                      content: '""',
                      position: 'absolute',
                      bottom: 4,
                      left: '20%',
                      right: '20%',
                      height: '2px',
                      backgroundColor: '#7E8F7C',
                      borderRadius: '2px',
                    } : {},
                  }}
                >
                  {item.label}
                </Button>
              );
            })}
          </Box>

          {/* Action Buttons */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            
            {/* Customizer Tooltip Button */}
            {/* <Tooltip title="Customize Portfolio Data (Name, Bio, Projects)">
              <IconButton
                onClick={onOpenCustomizer}
                size="small"
                sx={{
                  border: '1px solid #EBE7E0',
                  backgroundColor: '#FFFFFF',
                  color: '#6E645A',
                  '&:hover': {
                    backgroundColor: '#F5F2EE',
                    color: '#2D2D2D',
                    borderColor: '#7E8F7C',
                  },
                }}
              >
                <Sliders className="w-4 h-4" />
              </IconButton>
            </Tooltip> */}

            {/* Resume Button */}
            <Button
              variant="outlined"
              size="small"
              startIcon={<FileText className="w-4 h-4" />}
              onClick={onOpenResumeDoc}
              sx={{
                display: { xs: 'none', sm: 'inline-flex' },
                fontSize: '0.825rem',
                fontWeight: 600,
                py: 0.75,
                px: 1.75,
                borderColor: '#EBE7E0',
                color: '#5C544B',
                '&:hover': {
                  borderColor: '#7E8F7C',
                  backgroundColor: '#F5F2EE',
                }
              }}
            >
              Resume
            </Button>

            {/* Quick Contact CTA */}
            <Button
              variant="contained"
              size="small"
              endIcon={<Send className="w-3.5 h-3.5" />}
              onClick={() => scrollToSection('#contact')}
              sx={{
                fontSize: '0.825rem',
                fontWeight: 600,
                py: 0.75,
                px: 2,
                backgroundColor: '#2D2D2D',
                color: '#FDFCF9',
                '&:hover': {
                  backgroundColor: '#1A1918',
                }
              }}
            >
              Hire Me
            </Button>

            {/* Mobile Hamburger Toggle */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { lg: 'none' }, ml: 0.5, color: '#2D2D2D' }}
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor="top"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        slotProps={{
          paper: {
            sx: {
              top: { xs: '64px', md: '74px' },
              backgroundColor: 'rgba(253, 252, 249, 0.98)',
              backdropFilter: 'blur(16px)',
              borderBottom: '1px solid #EBE7E0',
              boxShadow: '0 20px 30px rgba(92, 84, 75, 0.08)',
              px: 2,
              py: 2,
            }
          }
        }}
      >
        <List sx={{ pt: 0 }}>
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <ListItem key={item.label} disablePadding sx={{ mb: 0.5 }}>
                <ListItemButton
                  onClick={() => scrollToSection(item.href)}
                  sx={{
                    borderRadius: 2,
                    backgroundColor: isActive ? '#F5F2EE' : 'transparent',
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? '#2D2D2D' : '#6E645A',
                  }}
                >
                  <ListItemText
                    primary={
                      <Typography sx={{ fontWeight: isActive ? 700 : 500, fontSize: '0.95rem' }}>
                        {item.label}
                      </Typography>
                    }
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
          
          <Box sx={{ pt: 2, mt: 1, borderTop: '1px solid #EBE7E0', display: 'flex', gap: 1.5, flexDirection: 'column' }}>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<FileText className="w-4 h-4" />}
              onClick={() => {
                setMobileOpen(false);
                onOpenResumeDoc();
              }}
            >
              View & Print Full Resume
            </Button>
            <Button
              fullWidth
              variant="contained"
              startIcon={<Sliders className="w-4 h-4" />}
              onClick={() => {
                setMobileOpen(false);
                onOpenCustomizer();
              }}
            >
              Customize Portfolio Details
            </Button>
          </Box>
        </List>
      </Drawer>
    </AppBar>
  );
};
