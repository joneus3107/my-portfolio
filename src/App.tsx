/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { createAppTheme } from './theme/muiTheme';
import {
  initialProfile,
  sampleProjects,
  workExperiences,
  educationList,
  certificationsList,
  skillCategories,
  testimonials,
} from './data/portfolioData';
import { ProfileData, Project } from './types';

// Layout & Sections
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/hero/HeroSection';
import { ProjectsSection } from './components/projects/ProjectsSection';
import { ResumeSection } from './components/resume/ResumeSection';
import { SkillsSection } from './components/skills/SkillsSection';
import { InteractivePlayground } from './components/playground/InteractivePlayground';
import { TestimonialsSection } from './components/testimonials/TestimonialsSection';
import { ContactSection } from './components/contact/ContactSection';

// Modals & Floating AI
import { ResumeDocumentModal } from './components/resume/ResumeDocumentModal';
import { ProfileCustomizerModal } from './components/customizer/ProfileCustomizerModal';
import { AiPortfolioAssistant } from './components/ai/AiPortfolioAssistant';

export default function App() {
  const theme = createAppTheme();

  // App State
  const [profile, setProfile] = useState<ProfileData>(initialProfile);
  const [projects, setProjects] = useState<Project[]>(sampleProjects);
  const [resumeDocOpen, setResumeDocOpen] = useState(false);
  const [customizerOpen, setCustomizerOpen] = useState(false);

  const handleUpdateProfile = (newProfile: ProfileData) => {
    setProfile(newProfile);
  };

  const handleAddProject = (newProject: Project) => {
    setProjects([newProject, ...projects]);
  };

  const handleResetDefaults = () => {
    setProfile(initialProfile);
    setProjects(sampleProjects);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          backgroundColor: '#FAFAFA',
          color: '#18181B',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
        }}
      >
        {/* Sticky Frosted Navbar */}
        <Navbar
          profile={profile}
          onOpenCustomizer={() => setCustomizerOpen(true)}
          onOpenResumeDoc={() => setResumeDocOpen(true)}
        />

        {/* Main Content Sections */}
        <Box component="main" sx={{ flexGrow: 1 }}>
          {/* Hero Section with interactive live metrics & philosophy */}
          <HeroSection
            profile={profile}
            onOpenResumeDoc={() => setResumeDocOpen(true)}
          />

          {/* Selected Case Studies & Projects */}
          <ProjectsSection projects={projects} />

          {/* Resume & Work History Timeline */}
          <ResumeSection
            profile={profile}
            experiences={workExperiences}
            education={educationList}
            certifications={certificationsList}
            onOpenDocModal={() => setResumeDocOpen(true)}
          />

          {/* Technical Skills & Architecture Pillars */}
          <SkillsSection skillCategories={skillCategories} />

          {/* Live UI Playground & Design Token Studio */}
          {/* <InteractivePlayground /> */}

          {/* Peer & Leader Testimonials */}
          {/* <TestimonialsSection testimonials={testimonials} /> */}

          {/* Contact Section & Booking */}
          <ContactSection profile={profile} />
        </Box>

        {/* Clean Footer */}
        <Footer profile={profile} />

        {/* Floating AI Recruiter & Experience Assistant */}
        <AiPortfolioAssistant
          profile={profile}
          projects={projects}
          experiences={workExperiences}
        />

        {/* Printable/Full Formatted Resume Modal */}
        <ResumeDocumentModal
          open={resumeDocOpen}
          onClose={() => setResumeDocOpen(false)}
          profile={profile}
          experiences={workExperiences}
          education={educationList}
          certifications={certificationsList}
        />

        {/* Portfolio Details Personalizer Modal */}
        <ProfileCustomizerModal
          open={customizerOpen}
          onClose={() => setCustomizerOpen(false)}
          profile={profile}
          onUpdateProfile={handleUpdateProfile}
          onAddProject={handleAddProject}
          onResetDefaults={handleResetDefaults}
        />
      </Box>
    </ThemeProvider>
  );
}
