import React, { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
  Paper,
  TextField,
  Button,
  MenuItem,
  Tooltip,
  Alert,
  Snackbar,
  IconButton
} from '@mui/material';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Copy,
  Check,
  Calendar,
  Sparkles,
  Github,
  Linkedin,
  Clock,
  CheckCircle2,
  MessageSquare
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { ProfileData } from '../../types';
import { CoffeeChatModal } from './CoffeeChatModal';

interface ContactSectionProps {
  profile: ProfileData;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ profile }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [coffeeModalOpen, setCoffeeModalOpen] = useState(false);

  // Form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('Full-time Senior Frontend Role');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setSubmitted(true);
    setSnackbarOpen(true);

    confetti({
      particleCount: 70,
      spread: 80,
      origin: { y: 0.7 },
      colors: ['#18181B', '#10B981', '#6366F1', '#F59E0B'],
    });

    // Reset after delay or keep confirmation
    setTimeout(() => {
      setName('');
      setEmail('');
      setMessage('');
    }, 1500);
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F2EE] border border-[#EBE7E0] text-[11px] font-bold uppercase tracking-widest text-[#8C7B6A] mb-3">
            <Mail className="w-3.5 h-3.5 text-[#7E8F7C]" />
            <span>Initiate Contact</span>
          </div>

          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2.5rem', sm: '3.4rem' },
              fontWeight: 600,
              color: '#2D2D2D',
              letterSpacing: '0.01em',
              mb: 1.5,
              fontFamily: '"Caveat", cursive, sans-serif',
            }}
          >
            Let's Build Something Exceptional.
          </Typography>

          <Typography variant="body1" sx={{ color: '#5C544B', fontSize: '1.05rem', lineHeight: 1.65 }}>
            Whether you have an open frontend engineering position, need design system leadership, or wish to explore a contract project, I'd love to hear from you.
          </Typography>
        </Box>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Direct Info & Quick Booking */}
          <div className="lg:col-span-5">
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              
              {/* Availability Status Card */}
              <Paper
                elevation={0}
                sx={{
                  p: 3.5,
                  backgroundColor: '#FFFFFF',
                  borderRadius: 3.5,
                  border: '1px solid #EBE7E0',
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#7E8F7C] animate-ping"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#7E8F7C] -ml-4.5"></span>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#2D2D2D' }}>
                    Current Availability Status
                  </Typography>
                </div>
                <Typography variant="body2" sx={{ color: '#5C544B', lineHeight: 1.6, mb: 2 }}>
                  Actively evaluating full-time Senior / Lead Frontend Developer positions, advisory roles, and high-impact design system contracts.
                </Typography>
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => setCoffeeModalOpen(true)}
                  startIcon={<Calendar className="w-4 h-4 text-[#7E8F7C]" />}
                  sx={{
                    backgroundColor: '#F5F2EE',
                    borderColor: '#EBE7E0',
                    color: '#2D2D2D',
                    fontSize: '0.825rem',
                    fontWeight: 600,
                    '&:hover': {
                      backgroundColor: '#EBE7E0',
                      borderColor: '#7E8F7C',
                    }
                  }}
                >
                  Schedule 15-Min Quick Sync
                </Button>
              </Paper>

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

              {submitted && (
                <Alert
                  severity="success"
                  icon={<CheckCircle2 className="w-5 h-5 text-[#7E8F7C]" />}
                  sx={{ mb: 3, borderRadius: 2.5, backgroundColor: '#F5F2EE', color: '#2D2D2D', border: '1px solid #EBE7E0' }}
                >
                  <strong>Thank you!</strong> Your message has been dispatched successfully. I will get back to you within 24 hours.
                </Alert>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <TextField
                      fullWidth
                      required
                      label="Your Name"
                      placeholder="e.g. Rachel Adams"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div>
                    <TextField
                      fullWidth
                      required
                      type="email"
                      label="Your Email"
                      placeholder="rachel@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <TextField
                  fullWidth
                  select
                  label="Inquiry Purpose / Opportunity Type"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                >
                  <MenuItem value="Full-time Senior Frontend Role">Full-time Senior / Lead Frontend Role</MenuItem>
                  <MenuItem value="Contract / Design System Engineering">Contract / Design System Engineering</MenuItem>
                  <MenuItem value="Technical Advisory / Architecture Consulting">Technical Advisory / Architecture Consulting</MenuItem>
                  <MenuItem value="Freelance Web Application">Freelance Web Application</MenuItem>
                  <MenuItem value="General Inquiries & Networking">General Inquiries & Networking</MenuItem>
                </TextField>

                <TextField
                  fullWidth
                  required
                  multiline
                  rows={4}
                  label="Project Details or Message"
                  placeholder="Tell me about your team, tech stack, timeline, or project goals..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  helperText={`${message.length} characters`}
                />

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    endIcon={<Send className="w-4 h-4" />}
                    sx={{
                      py: 1.35,
                      px: 3.5,
                      fontWeight: 700,
                      backgroundColor: '#2D2D2D',
                      color: '#FDFCF9',
                      boxShadow: '0 8px 20px -4px rgba(45, 45, 45, 0.2)',
                      '&:hover': {
                        backgroundColor: '#1A1918',
                      }
                    }}
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </Paper>
          </div>

        </div>
      </Container>

      {/* Coffee Chat Modal */}
      <CoffeeChatModal
        open={coffeeModalOpen}
        onClose={() => setCoffeeModalOpen(false)}
        developerName={profile.name}
      />

      {/* Snackbar notification */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={5000}
        onClose={() => setSnackbarOpen(false)}
        message="Message dispatched successfully!"
      />
    </Box>
  );
};
