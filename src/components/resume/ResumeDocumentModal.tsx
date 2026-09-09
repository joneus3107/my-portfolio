import React from 'react';
import {
  Dialog,
  DialogContent,
  IconButton,
  Typography,
  Box,
  Button,
} from '@mui/material';
import {
  X as CloseIcon,
  Printer,
  Download,
  Mail,
  Phone,
  MapPin,
  Cake,
} from 'lucide-react';
import { ProfileData, WorkExperience, Education, Certification, Project } from '../../types';
import ResumeIconText from './ResumeIconText';
import ResumeTitle from './ResumeTitle';

interface ResumeDocumentModalProps {
  open: boolean;
  onClose: () => void;
  profile: ProfileData;
  experiences: WorkExperience[];
  education: Education[];
  certifications: Certification[];
  projects: Project[]
}

export const ResumeDocumentModal: React.FC<ResumeDocumentModalProps> = ({
  open,
  onClose,
  profile,
  experiences,
  education,
  certifications,
  projects
}) => {
  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    
  };

  const showProjectInfo = (project: Project) => {
    return (
      <div className='project-block'>
        <h3 className="text-sm font-bold text-zinc-900 mb-1">
          {project.title}
          {project.practice && (
            <small className='inline-block pl-3'>(Side project)</small>
          )}
        </h3>
        <div className='pl-3'>
          <p className="text-xs text-zinc-600 mb-1.5 leading-relaxed">
            {project.longDescription}
          </p>
          {project.scope && (
            <>
              <h4 className="text-xs font-bold text-zinc-900 mb-1 mt-1">Scope</h4>
              <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-zinc-700 leading-relaxed mb-2">
                {project.scope.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </>
          )}
          <h4 className="text-xs font-bold text-zinc-900 mb-1 mt-1">Tech Stack</h4>
          <ul className='list-disc list-outside pl-4 space-y-1 text-xs text-zinc-700 leading-relaxed'>
            {project.techStack.map(tech => (
              <li>
                <strong>{`${tech.label} :`}</strong>
                <span>{tech.value.join(', ')}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

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
            '@media print': {
              p: 1,
            }
          }
        }
      }}
      className='printerContent'
    >
      {/* Top Action Bar (Non-print) */}
      <Box
        className="no-print"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          px: { xs: 2, sm: 3 },
          py: 2,
          borderBottom: '1px solid #E4E4E7',
        }}
      >
        <div className="flex items-center gap-2">
          <Button
            size="small"
            variant="contained"
            onClick={handlePrint}
            startIcon={<Printer className="w-4 h-4" />}
            sx={{ fontSize: '0.8rem', py: 0.5 }}
          >
            Print / Download
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
          <div className="border-b-2 border-zinc-900 pb-5 mb-6 project-block">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div>
                <Typography component="h1" variant="h3" sx={{ fontWeight: 800, fontSize: { xs: '1.75rem', sm: '2.2rem' }, color: '#09090B' }}>
                  {profile.name}
                </Typography>
                <Typography component="p" sx={{ fontWeight: 600, color: '#3F3F46', fontSize: '1.05rem', mt: 0.5 }}>
                  {profile.title}
                </Typography>
              </div>

              <ul className="text-xs text-zinc-600 space-y-1 sm:text-right font-mono">
                <li>
                  <ResumeIconText
                    icon={<Cake className="w-3 h-3 text-zinc-400" />}
                  >{profile.birthday}</ResumeIconText>
                </li>
                <li>
                  <ResumeIconText
                    icon={<Mail className="w-3 h-3 text-zinc-400" />}
                  >{profile.email}</ResumeIconText>
                </li>
                <li>
                  <ResumeIconText
                    icon={<Phone className="w-3 h-3 text-zinc-400" />}
                  >{profile.phone}</ResumeIconText>
                </li>
                <li>
                  <ResumeIconText
                    icon={<MapPin className="w-3 h-3 text-zinc-400" />}
                  >{profile.location}</ResumeIconText>
                </li>
              </ul>
            </div>
          </div>

          {/* Executive Summary */}
          <section className="mb-6 project-block">
            <ResumeTitle>Executive Summary</ResumeTitle>
            <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
              {profile.bio}
            </p>
          </section>

          {/* Core Technical Matrix */}
          <section className="mb-6 project-block">
            <ResumeTitle>Technical Proficiencies & Tools</ResumeTitle>
            <ul className="text-xs sm:text-sm text-zinc-700 space-y-1 leading-relaxed">
              <li><strong>Core:</strong> ReactJS 19, TypeScript, JavaScript, jQuery, HTML5/CSS3, Redux Toolkit, WordPress</li>
              <li><strong>Styling & Design Systems:</strong> Material UI (MUI), UIkit, Boostrap</li>
              <li><strong>Tooling:</strong> Git/GitHub, Vite, Netlify</li>
            </ul>
          </section>

          {/* Projects */}
          <section className="mb-6">
            <ResumeTitle>Some Projects</ResumeTitle>
            <div className='flex flex-col gap-2'>
              {projects.filter(project => project.id === 'netflix-ui').map(project => (
                <div key={project.id}>
                  {showProjectInfo(project)}
                </div>
              ))}
              {projects.filter(project => project.id !== 'netflix-ui').slice(0, 2).map(project => (
                <div key={project.id}>
                  {showProjectInfo(project)}
                </div>
              ))}
            </div>
          </section>

          {/* Professional Experience */}
          <section className="mb-6">
            <ResumeTitle>Professional Experience</ResumeTitle>

            <div className="space-y-5">
              {experiences.map((exp) => (
                <div key={exp.id} className='project-block'>
                  <h3 className="text-sm font-bold text-zinc-900">{exp.role}</h3>
                  <div className="mb-1">
                    <time className="text-xs font-mono font-medium text-zinc-600">
                      {exp.startDate} – {exp.endDate}
                    </time>
                    <div className='flex sm:flex-row sm:items-baseline'>
                      <span className="text-xs font-semibold text-zinc-800">{exp.company}</span>
                      <span className="text-zinc-400 mx-1.5" aria-hidden="true">|</span>
                      <address className="flex gap-1 text-xs text-zinc-500"><MapPin className="w-3 h-3 text-zinc-400" />{exp.location}</address>
                    </div>
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
          </section>

          {/* Side-by-Side Sections */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            {/* Education */}
            <section className='project-block'>
              <ResumeTitle>Education</ResumeTitle>
              {education.map((edu) => (
                <div key={edu.id} className="mb-2 text-xs">
                  <div className="font-bold text-zinc-900">{edu.degree}</div>
                  <div className="text-zinc-600">{edu.institution} — {edu.location}</div>
                </div>
              ))}
            </section>

            {/* Certifications */}
            <section className='project-block'>
              <ResumeTitle>Certifications</ResumeTitle>
              <div className="space-y-1.5 text-xs text-zinc-700">
                {certifications.map((c) => (
                  <div key={c.id}>
                    <span className="font-bold text-zinc-900">{c.name}</span>
                    <div className="text-[11px] text-zinc-500 font-mono">{c.issuer} — {c.date}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Certifications */}
            <section className='project-block'>
              <ResumeTitle>Recommendation Letter</ResumeTitle>
              <ul className="flex gap-1">
                <li>
                  <a href="https://drive.google.com/file/d/1oBhXmrw5n5kNOlFTjOiK8IaGJraC9O31/view" target='_blank' rel='noopener'>
                    <img src="/images/rec_letter_qr.png" alt="Recommendation letter QR" width='100' />
                  </a>
                </li>
              </ul>
            </section>

             {/* Certifications */}
            <section className='project-block'>
              <ResumeTitle>Personal Portfolio</ResumeTitle>
              <ul className="flex gap-1">
                <li>
                  <a href="https://lelacbinhportfolio.netlify.app/" target='_blank' rel='noopener'>
                    <img src="/images/portfolio_qr.png" alt="Personal portfolio QR" width='100' />
                  </a>
                </li>
              </ul>
            </section>
          </div>

        </Box>
      </DialogContent>
    </Dialog>
  );
};
