import React, { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  Paper,
  Tooltip,
  IconButton,
  Grid
} from '@mui/material';
import {
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  Github,
  Linkedin,
  MessageSquare
} from 'lucide-react';
import { ProfileData, ContactMethod } from '../../types';
import SectionTag from '../common/SectionTag';

interface ContactSectionProps {
  profile: ProfileData;
  contactMethod: ContactMethod[];
}

export const ContactSection: React.FC<ContactSectionProps> = ({ 
  profile,
  contactMethod
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(profile.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 10, md: 14 },
        backgroundColor: '#FAF8F5',
        position: 'relative',
        borderTop: '1px solid #EBE7E0',
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ maxWidth: 720, mb: 7 }}>
          <SectionTag icon={<Mail className="w-3.5 h-3.5 text-[#7E8F7C]" />}>Initiate Contact</SectionTag>

          <Typography variant="h2" >Let's Build Something Exceptional.</Typography>

          <Typography variant="body1" sx={{ color: '#5C544B', fontSize: '1.05rem', lineHeight: 1.65 }}>
            Whether you have an open frontend engineering position, need design system leadership, or wish to explore a contract project, I'd love to hear from you.
          </Typography>
        </Box>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Direct Info & Quick Booking */}
          <div className="lg:col-span-5">
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {/* Direct Reach Cards */}
              <div className="space-y-2.5">
                {/* Email Item with copy */}
                <div className="p-3.5 bg-white rounded-2xl border border-[#EBE7E0] flex items-center justify-between shadow-2xs hover:border-[#7E8F7C] transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#F5F2EE] text-[#2D2D2D] flex items-center justify-center">
                      <Mail className="w-4 h-4 text-[#7E8F7C]" />
                    </div>
                    <div>
                      <div className="text-[11px] text-[#8C7B6A] font-medium">Direct Email</div>
                      <div className="text-sm font-bold text-[#2D2D2D] font-mono">{profile.email}</div>
                    </div>
                  </div>
                  <Tooltip title={copiedEmail ? 'Copied to clipboard!' : 'Copy Email Address'}>
                    <IconButton size="small" onClick={handleCopyEmail} sx={{ border: '1px solid #EBE7E0' }}>
                      {copiedEmail ? <Check className="w-4 h-4 text-[#7E8F7C]" /> : <Copy className="w-4 h-4 text-[#8C7B6A]" />}
                    </IconButton>
                  </Tooltip>
                </div>

                {/* Phone Item */}
                <div className="p-3.5 bg-white rounded-2xl border border-[#EBE7E0] flex items-center justify-between shadow-2xs hover:border-[#7E8F7C] transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#F5F2EE] text-[#2D2D2D] flex items-center justify-center">
                      <Phone className="w-4 h-4 text-[#7E8F7C]" />
                    </div>
                    <div>
                      <div className="text-[11px] text-[#8C7B6A] font-medium">Phone number</div>
                      <div className="text-sm font-bold text-[#2D2D2D] font-mono">{profile.phone}</div>
                    </div>
                  </div>
                  <Tooltip title={copiedPhone ? 'Copied to clipboard!' : 'Copy Phone Number'}>
                    <IconButton size="small" onClick={handleCopyPhone} sx={{ border: '1px solid #EBE7E0' }}>
                      {copiedPhone ? <Check className="w-4 h-4 text-[#7E8F7C]" /> : <Copy className="w-4 h-4 text-[#8C7B6A]" />}
                    </IconButton>
                  </Tooltip>
                </div>

                {/* Location */}
                <div className="p-3.5 bg-white rounded-2xl border border-[#EBE7E0] flex items-center gap-3 shadow-2xs">
                  <div className="w-9 h-9 rounded-xl bg-[#F5F2EE] text-[#2D2D2D] flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-[#7E8F7C]" />
                  </div>
                  <div>
                    <div className="text-[11px] text-[#8C7B6A] font-medium">Location Base</div>
                    <div className="text-sm font-bold text-[#2D2D2D]">{profile.location}</div>
                  </div>
                </div>
              </div>

              {/* Social Channels Strip */}
              <div className="pt-2">
                <div className="text-xs font-bold text-[#8C7B6A] uppercase tracking-wider mb-2">Professional Profiles</div>
                <div className="flex gap-2">
                  {profile.socials.github && (
                    <a
                      href={profile.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-xl bg-white border border-[#EBE7E0] text-xs font-semibold text-[#2D2D2D] hover:bg-[#F5F2EE] hover:border-[#7E8F7C] flex items-center gap-1.5 transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" /> GitHub
                    </a>
                  )}
                  {profile.socials.linkedin && (
                    <a
                      href={profile.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-xl bg-white border border-[#EBE7E0] text-xs font-semibold text-[#2D2D2D] hover:bg-[#F5F2EE] hover:border-[#7E8F7C] flex items-center gap-1.5 transition-colors"
                    >
                      <Linkedin className="w-3.5 h-3.5 text-[#5C5146]" /> LinkedIn
                    </a>
                  )}
                </div>
              </div>

            </Box>
          </div>

          {/* Right Column: Clean Interactive Contact Form */}
          <div className="lg:col-span-7">
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, sm: 4.5 },
                backgroundColor: '#FFFFFF',
                borderRadius: 4,
                border: '1px solid #EBE7E0',
                boxShadow: '0 20px 40px -15px rgba(92, 84, 75, 0.06)',
              }}
            >
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#EBE7E0]">
                <MessageSquare className="w-4 h-4 text-[#2D2D2D]" />
                <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#2D2D2D' }}>
                  Send a Direct Message
                </Typography>
              </div>

              <Grid container spacing={2}  sx={{
                mt: 3,
                justifyContent: 'center'
              }}>
                { contactMethod?.map((item) => (
                <Grid key={item.name}  size={{ xs: 12, sm: 6, md: 5 }}>
                  <Box component='a' href={item.url} target='_blank' rel="noopener" sx={{
                    display: 'block',
                    transition: 'opacity .3s ease-in-out',
                    '&:hover': {
                      opacity: '.8'
                    }
                  }}>
                    <Box component="img" src={item.qr} sx={{
                      display: 'block',
                      width: '100%',
                      aspectRatio: '984 / 1200',
                      objectFit: 'contain',
                    }} loading='lazy' alt={`${item.name}_QR`} />
                  </Box>
                </Grid>
                )) }
              </Grid>
            </Paper>
          </div>

        </div>
      </Container>
    </Box>
  );
};
