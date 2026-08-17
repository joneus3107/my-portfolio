import React from 'react';
import {
  Dialog,
  DialogContent,
  IconButton,
  Typography,
  Box,
  Button,
  Divider,
  Chip
} from '@mui/material';
import {
  X as CloseIcon,
  Printer,
  Download,
  Mail,
  Phone,
  MapPin,
  Globe,
  Github,
  Linkedin,
  ExternalLink,
  Award,
  BookOpen,
  Briefcase
} from 'lucide-react';
import { ProfileData, WorkExperience, Education, Certification } from '../../types';

interface ResumeDocumentModalProps {
  open: boolean;
  onClose: () => void;
  profile: ProfileData;
  experiences: WorkExperience[];
  education: Education[];
  certifications: Certification[];
}

export const ResumeDocumentModal: React.FC<ResumeDocumentModalProps> = ({
  open,
  onClose,
  profile,
  experiences,
  education,
  certifications,
}) => {
  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Generate text/markdown document or download
    const content = `# ${profile.name} - ${profile.title}
Email: ${profile.email} | Phone: ${profile.phone} | Location: ${profile.location}

## Professional Summary
${profile.bio}

## Work Experience
${experiences.map(exp => `
### ${exp.role} — ${exp.company} (${exp.startDate} - ${exp.endDate})
${exp.description}
Achievements:
${exp.achievements.map(a => `- ${a}`).join('\n')}
Technologies: ${exp.technologies.join(', ')}
`).join('\n')}

## Education
${education.map(e => `- ${e.degree}, ${e.institution} (${e.year})`).join('\n')}

## Certifications
${certifications.map(c => `- ${c.name} (${c.issuer}, ${c.date})`).join('\n')}
`;

    const blob = new Blob([content], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${profile.name.replace(/\s+/g, '_')}_Frontend_Developer_Resume.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      scroll="body"
      slotProps={{
        paper: {
          sx: {
            borderRadius: { xs: 2, sm: 3 },
            backgroundColor: '#FFFFFF',
            p: { xs: 1, sm: 2 },
          }
        }
      }}
    >
      {/* Top Action Bar (Non-print) */}
      <Box
        className="no-print"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: { xs: 2, sm: 3 },
          py: 2,
          borderBottom: '1px solid #E4E4E7',
        }}
      >
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
          <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'text.primary' }}>
            Official Curriculum Vitae
          </Typography>
        </div>

        <div className="flex items-center gap-2">
          <Button
            size="small"
            variant="outlined"
            onClick={handlePrint}
            startIcon={<Printer className="w-4 h-4" />}
            sx={{ fontSize: '0.8rem', py: 0.5 }}
          >
            Print
          </Button>

          <Button
            size="small"
            variant="contained"
            onClick={handleDownload}
            startIcon={<Download className="w-4 h-4" />}
            sx={{ fontSize: '0.8rem', py: 0.5 }}
          >
            Export Markdown
          </Button>

          <IconButton onClick={onClose} size="small" sx={{ border: '1px solid #E4E4E7', ml: 1 }}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </div>
      </Box>

      {/* Printable Sheet View */}
      <DialogContent sx={{ p: { xs: 2, sm: 5 }, color: '#18181B' }}>
        <Box sx={{ maxWidth: 740, mx: 'auto', backgroundColor: '#FFFFFF' }}>
          
          {/* Header */}
          <div className="border-b-2 border-zinc-900 pb-5 mb-6">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div>
                <Typography variant="h3" sx={{ fontWeight: 800, fontSize: { xs: '1.75rem', sm: '2.2rem' }, color: '#09090B' }}>
                  {profile.name}
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 600, color: '#3F3F46', fontSize: '1.05rem', mt: 0.5 }}>
                  {profile.title}
                </Typography>
              </div>

              <div className="text-xs text-zinc-600 space-y-1 sm:text-right font-mono">
                <div className="flex sm:justify-end items-center gap-1.5">
                  <Mail className="w-3 h-3 text-zinc-400" />
                  <span>{profile.email}</span>
                </div>
                <div className="flex sm:justify-end items-center gap-1.5">
                  <Phone className="w-3 h-3 text-zinc-400" />
                  <span>{profile.phone}</span>
                </div>
                <div className="flex sm:justify-end items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-zinc-400" />
                  <span>{profile.location}</span>
                </div>
              </div>
            </div>

            {/* Social handles */}
            <div className="flex flex-wrap gap-4 text-xs font-mono text-zinc-700 mt-3 pt-3 border-t border-zinc-100">
              {profile.socials.github && (
                <span>github.com/alexvance</span>
              )}
              {profile.socials.linkedin && (
                <span>linkedin.com/in/alexvance</span>
              )}
              <span>Portfolio: alexvance.dev</span>
            </div>
          </div>

          {/* Executive Summary */}
          <div className="mb-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 mb-2 border-b border-zinc-200 pb-1">
              Executive Summary
            </h4>
            <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
              {profile.bio} Proven track record across enterprise design systems, high-concurrency SaaS applications, sub-second Core Web Vitals optimization, and leading front-of-the-frontend agile engineering squads.
            </p>
          </div>

          {/* Core Technical Matrix */}
          <div className="mb-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 mb-2 border-b border-zinc-200 pb-1">
              Technical Proficiencies & Tools
            </h4>
            <div className="text-xs sm:text-sm text-zinc-700 space-y-1 leading-relaxed">
              <div><strong>Core Frontend:</strong> React 19, Next.js 15, TypeScript, JavaScript (ESNext), HTML5/CSS3 Semantic Standards, Redux Toolkit, Zustand, React Query (TanStack)</div>
              <div><strong>Styling & Design Systems:</strong> Material UI (MUI), Tailwind CSS, Framer Motion, Emotion, CSS Modules, Storybook, Design Tokens, Figma-to-Code Sync</div>
              <div><strong>Testing & Architecture:</strong> Vitest, Jest, React Testing Library, Playwright, WCAG AAA Accessibility (a11y), Microfrontends, Webpack, Vite</div>
              <div><strong>DevOps & Tooling:</strong> Git/GitHub Actions, Docker, Vercel, AWS S3/CloudFront, Turborepo, REST/GraphQL</div>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="mb-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 mb-3 border-b border-zinc-200 pb-1 flex items-center justify-between">
              <span>Professional Experience</span>
              <span className="text-[10px] font-mono text-zinc-500 font-normal">Chronological History</span>
            </h4>

            <div className="space-y-5">
              {experiences.map((exp) => (
                <div key={exp.id}>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                    <div>
                      <span className="text-sm font-bold text-zinc-900">{exp.role}</span>
                      <span className="text-zinc-400 mx-1.5">|</span>
                      <span className="text-xs font-semibold text-zinc-800">{exp.company}</span>
                      <span className="text-zinc-400 mx-1.5">|</span>
                      <span className="text-xs text-zinc-500">{exp.location}</span>
                    </div>
                    <span className="text-xs font-mono font-medium text-zinc-600">
                      {exp.startDate} – {exp.endDate}
                    </span>
                  </div>

                  <p className="text-xs text-zinc-600 mb-1.5 leading-relaxed">
                    {exp.description}
                  </p>

                  <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-zinc-700 leading-relaxed mb-2">
                    {exp.achievements.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>

                  <div className="text-[11px] text-zinc-500 font-mono">
                    <span className="font-semibold">Technologies:</span> {exp.technologies.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications Side-by-Side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            {/* Education */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 mb-2 border-b border-zinc-200 pb-1">
                Education
              </h4>
              {education.map((edu) => (
                <div key={edu.id} className="mb-2 text-xs">
                  <div className="font-bold text-zinc-900">{edu.degree}</div>
                  <div className="text-zinc-600">{edu.institution} — {edu.location}</div>
                  <div className="font-mono text-zinc-500 text-[11px]">{edu.year} {edu.honors && `• ${edu.honors}`}</div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 mb-2 border-b border-zinc-200 pb-1">
                Certifications & Accreditations
              </h4>
              <div className="space-y-1.5 text-xs text-zinc-700">
                {certifications.map((c) => (
                  <div key={c.id}>
                    <span className="font-bold text-zinc-900">{c.name}</span>
                    <div className="text-[11px] text-zinc-500 font-mono">{c.issuer} — {c.date}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </Box>
      </DialogContent>
    </Dialog>
  );
};
