import React from 'react';
import { Container, Box, Typography, Grid, Paper, Avatar, Tooltip } from '@mui/material';
import { Quote, MessageSquareQuote, Linkedin, Star } from 'lucide-react';
import { Testimonial } from '../../types';

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => {
  return (
    <Box
      id="testimonials"
      sx={{
        py: { xs: 10, md: 14 },
        backgroundColor: '#FDFCF9',
        position: 'relative',
        borderTop: '1px solid #EBE7E0',
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ maxWidth: 720, mb: 7 }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F2EE] border border-[#EBE7E0] text-[11px] font-bold uppercase tracking-widest text-[#8C7B6A] mb-3">
            <MessageSquareQuote className="w-3.5 h-3.5 text-[#7E8F7C]" />
            <span>Peer Endorsements & Recommendations</span>
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
            What Leaders & Peers Say.
          </Typography>

          <Typography variant="body1" sx={{ color: '#5C544B', fontSize: '1.05rem', lineHeight: 1.65 }}>
            Feedback from engineering leaders, product designers, and staff engineers I've collaborated with.
          </Typography>
        </Box>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <div key={item.id}>
              <Paper
                elevation={0}
                sx={{
                  p: 3.5,
                  backgroundColor: '#FFFFFF',
                  borderRadius: 4,
                  border: '1px solid #EBE7E0',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: '#7E8F7C',
                    transform: 'translateY(-4px)',
                    boxShadow: '0 15px 30px -10px rgba(92, 84, 75, 0.08)',
                  },
                }}
              >
                <div>
                  {/* Rating Stars & Quote Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex text-amber-500/80 gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-500" />
                      ))}
                    </div>
                    <Quote className="w-5 h-5 text-[#D8D2C7]" />
                  </div>

                  <Typography
                    variant="body2"
                    sx={{
                      color: '#2D2D2D',
                      lineHeight: 1.7,
                      fontSize: '0.925rem',
                      fontStyle: 'italic',
                      mb: 4,
                    }}
                  >
                    "{item.content}"
                  </Typography>
                </div>

                {/* Author Info */}
                <div className="pt-3 border-t border-[#EBE7E0] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar
                      src={item.avatar}
                      alt={item.name}
                      sx={{ width: 44, height: 44, border: '2px solid #EBE7E0' }}
                    />
                    <div>
                      <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#2D2D2D', lineHeight: 1.2 }}>
                        {item.name}
                      </Typography>
                      <Typography variant="caption" sx={{ color: '#8C7B6A', display: 'block', mt: 0.25 }}>
                        {item.role}, <strong>{item.company}</strong>
                      </Typography>
                    </div>
                  </div>

                  {item.linkedinUrl && (
                    <Tooltip title="View LinkedIn Recommendation">
                      <a
                        href={item.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg text-[#8C7B6A] hover:text-[#2D2D2D] hover:bg-[#F5F2EE] transition-colors"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    </Tooltip>
                  )}
                </div>
              </Paper>
            </div>
          ))}
        </div>
      </Container>
    </Box>
  );
};
