import React, { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  Paper,
  Grid,
  Button,
  Chip,
  Divider,
  Tooltip
} from '@mui/material';
import {
  Briefcase,
  GraduationCap,
  Award,
  Calendar,
  MapPin,
  ExternalLink,
  FileText,
  Printer,
  Sparkles,
  CheckCircle2,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { ProfileData, WorkExperience, EducationItem, Certification } from '../../types';
import SectionTag from '../common/SectionTag';
import IconTitle from '../common/IconTitle';
import SubTitle from '../common/SubTitle';

import { FONT_NEWSREADER } from '@/src/theme/muiTheme';

interface ResumeSectionProps {
  profile: ProfileData;
  experiences: WorkExperience[];
  education: EducationItem[];
  certifications: Certification[];
  onOpenDocModal: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({
  profile,
  experiences,
  education,
  certifications,
  onOpenDocModal,
}) => {
  const [expandedExpId, setExpandedExpId] = useState<string | null>(experiences[0]?.id || null);

  const toggleExpand = (id: string) => {
    setExpandedExpId(prev => prev === id ? null : id);
  };

  return (
    <Box
      id="resume"
      component="section"
      sx={{
        py: { xs: 10, md: 14 },
        backgroundColor: '#FAF8F5',
        position: 'relative',
        borderTop: '1px solid #EBE7E0',
      }}
    >
      <Container maxWidth="lg">
        
        {/* Section Header */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', md: 'flex-end' },
            gap: 3,
            mb: 7,
          }}
        >
          <Box sx={{ maxWidth: 700 }}>
            <SectionTag icon={<Briefcase className="w-3.5 h-3.5 text-[#7E8F7C]" />}>Career Trajectory & Experience</SectionTag>

            <Typography variant="h2" >Work Experience & Background.</Typography>

            <Typography variant="body1" sx={{ color: '#5C544B', fontSize: '1.05rem', lineHeight: 1.65 }}>
              A track record of building dependable web solutions, translating complex designs into clean, responsive code, and delivering seamless user experiences.
            </Typography>
          </Box>

          {/* Quick Action Button */}
          {/* <Button
            variant="contained"
            size="medium"
            onClick={onOpenDocModal}
            startIcon={<FileText className="w-4 h-4" />}
            sx={{
              py: 1.25,
              px: 3,
              fontSize: '0.875rem',
              fontWeight: 600,
              backgroundColor: '#2D2D2D',
              color: '#FDFCF9',
              boxShadow: '0 4px 14px 0 rgba(45, 45, 45, 0.15)',
              '&:hover': {
                backgroundColor: '#1A1918',
              }
            }}
          >
            Open Formatted CV (PDF / Print)
          </Button> */}
        </Box>

        {/* Main Grid: Work Experience Timeline on Left, Education & Certs on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Work Experience Column */}
          <div className="lg:col-span-8">
            <div className="space-y-4">
              <SubTitle>Work Experience</SubTitle>
              {experiences.map((exp, index) => {
                const isExpanded = expandedExpId === exp.id;
                const isLatest = index === 0;

                return (
                  <Paper
                    key={exp.id}
                    elevation={0}
                    sx={{
                      p: { xs: 3, sm: 3.5 },
                      backgroundColor: '#FFFFFF',
                      borderRadius: 3.5,
                      border: isLatest ? '1.5px solid #7E8F7C' : '1px solid #EBE7E0',
                      boxShadow: isLatest ? '0 10px 30px -10px rgba(126, 143, 124, 0.12)' : '0 2px 8px -2px rgba(92, 84, 75, 0.03)',
                      transition: 'all 0.25s ease',
                      '&:hover': {
                        borderColor: '#7E8F7C',
                      },
                    }}
                  >
                    {/* Top Row: Role, Company, Dates */}
                    <Box
                      onClick={() => toggleExpand(exp.id)}
                      sx={{ cursor: 'pointer' }}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                        <div>
                          <div className="flex items-center gap-2">
                            <Typography component='h4' sx={{ fontWeight: 600, fontSize: '1.2rem', fontFamily: FONT_NEWSREADER, color: 'theme.palette.text.primary' }}>
                              {exp.role}
                            </Typography>
                            {exp.current && (
                              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#F5F2EE] text-[#5C5146] border border-[#EBE7E0]">
                                Current Role
                              </span>
                            )}
                          </div>
                          <div className="text-sm font-semibold text-[#5C544B] flex items-center gap-1.5 mt-0.5">
                            <span>{exp.company}</span>
                            <span className="text-[#D8D2C7]" aria-hidden="true">•</span>
                            <address className="text-xs font-normal text-[#8C7B6A] flex items-center gap-1" aria-hidden="true">
                              <MapPin className="w-3 h-3 text-[#7E8F7C]" /> {exp.location}
                            </address>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#F5F2EE] text-[#5C544B] border border-[#EBE7E0]">
                            <Calendar className="w-3 h-3 text-[#8C7B6A]" />
                            {exp.startDate} – {exp.endDate}
                          </span>
                          <button className="text-[#8C7B6A] hover:text-[#2D2D2D] p-1">
                            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                          </button>
                        </div>
                      </div>

                      {/* Brief description */}
                      <Typography variant="body2" sx={{ color: '#5C544B', lineHeight: 1.6, mt: 1 }}>
                        {exp.description}
                      </Typography>
                    </Box>

                    {/* Expandable Achievements */}
                    {isExpanded && (
                      <Box sx={{ pt: 2.5, mt: 2, borderTop: '1px solid #EBE7E0' }}>
                        <Typography component="h5" sx={{
                          fontSize: '.8rem',
                          textTransform: 'uppercase',
                          fontWeight: 600,
                          color: 'theme.pallete.primary.main',
                          mb: 1.2
                        }}>
                          Key Deliverables & Impact
                        </Typography>
                        <ul className="space-y-2 mb-3.5">
                          {exp.achievements.map((item, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#5C544B] leading-relaxed">
                              <CheckCircle2 className="w-4 h-4 text-[#7E8F7C] shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Tech pills */}
                        <div className="flex flex-wrap gap-1.5 pt-2" aria-hidden="true">
                          {exp.technologies.map((t) => (
                            <span
                              key={t}
                              className="px-2 py-0.5 text-xs font-mono rounded bg-[#F5F2EE] text-[#5C544B] border border-[#EBE7E0]"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </Box>
                    )}
                  </Paper>
                );
              })}
            </div>
          </div>

          {/* Education & Certifications Column */}
          <div className="lg:col-span-4" aria-hidden="true">
            <SubTitle>Background</SubTitle>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              
              {/* Education Block */}
              <Paper
                elevation={0}
                sx={{
                  p: 3.5,
                  backgroundColor: '#FFFFFF',
                  borderRadius: 3.5,
                  border: '1px solid #EBE7E0',
                }}
              >
                <IconTitle icon={<GraduationCap className="w-4 h-4" />}>Education</IconTitle>

                {education.map((edu) => (
                  <div key={edu.id} className="pt-2">
                    <Typography variant="subtitle2" sx={{ fontWeight: 600, fontFamily: FONT_NEWSREADER, fontSize: '1.05rem', color: '#2D2D2D', lineHeight: 1.3 }}>
                      {edu.degree}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#5C544B', fontWeight: 500, mt: 0.5 }}>
                      {edu.institution}
                    </Typography>
                    <div className="flex items-center justify-between text-xs text-[#8C7B6A] font-mono mt-1">
                      <span>{edu.location}</span>
                      <span>{edu.year}</span>
                    </div>
                  </div>
                ))}
              </Paper>

              {/* Certifications Block */}
              <Paper
                elevation={0}
                sx={{
                  p: 3.5,
                  backgroundColor: '#FFFFFF',
                  borderRadius: 3.5,
                  border: '1px solid #EBE7E0',
                }}
              >
                <IconTitle icon={<Award className="w-4 h-4" />}>Certifications & Badges</IconTitle>

                <div className="space-y-3 pt-1">
                  {certifications.map((cert) => (
                    <div
                      key={cert.id}
                      className="p-3 bg-[#FAF8F5] rounded-xl border border-[#EBE7E0] shadow-2xs hover:border-[#7E8F7C] transition-colors"
                    >
                      <div className="flex items-start justify-between gap-1">
                        <div className="font-bold text-xs text-[#2D2D2D] leading-snug">
                          {cert.name}
                        </div>
                        {cert.badge && (
                          <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#F5F2EE] text-[#5C5146] shrink-0 border border-[#EBE7E0]">
                            {cert.badge}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center justify-between text-[11px] text-[#8C7B6A] mt-1">
                        <span>{cert.issuer}</span>
                        <span className="font-mono">{cert.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </Paper>

              {/* Ready to hire box */}
              <Paper
                elevation={0}
                sx={{
                  p: 3.5,
                  backgroundColor: '#2D2D2D',
                  color: '#FDFCF9',
                  borderRadius: 3.5,
                  border: '1px solid #43403D',
                }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                    Hiring for a Frontend Role?
                  </Typography>
                </div>
                <Typography variant="body2" sx={{ color: 'rgba(253, 252, 249, 0.8)', fontSize: '0.825rem', mb: 2.5, lineHeight: 1.5 }}>
                  I'm available for full-time roles and client projects. Let’s connect to build high-performance web experiences together.
                </Typography>
                <Button
                  fullWidth
                  variant="contained"
                  href="#contact"
                  sx={{
                    backgroundColor: '#FDFCF9',
                    color: '#2D2D2D',
                    fontWeight: 700,
                    '&:hover': {
                      backgroundColor: '#EBE7E0',
                    },
                  }}
                >
                  Initiate Conversation
                </Button>
              </Paper>

            </Box>
          </div>
        </div>
      </Container>
    </Box>
  );
};
