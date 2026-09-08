import React, { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
  Paper,
  Chip,
  LinearProgress,
  Tooltip
} from '@mui/material';
import {
  Code,
  Layout,
  Layers,
  Cpu,
  Wrench,
  CheckCircle2,
  Sparkles,
  Zap,
  ShieldCheck,
  Feather
} from 'lucide-react';
import { SkillCategory } from '../../types';
import { frontendPillars } from '../../data/portfolioData';
import SectionTag from '../common/SectionTag';

interface SkillsSectionProps {
  skillCategories: SkillCategory[];
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skillCategories }) => {
  const [selectedCategoryIdx, setSelectedCategoryIdx] = useState<number>(0);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code': return <Code className="w-4 h-4" />;
      case 'Layout': return <Layout className="w-4 h-4" />;
      case 'Layers': return <Layers className="w-4 h-4" />;
      case 'Cpu': return <Cpu className="w-4 h-4" />;
      default: return <Wrench className="w-4 h-4" />;
    }
  };

  const getMastery = (score:number) => {
    switch (score) {
      case 1:
        return 'Familiar';

      case 2:
        return 'Standard';

      case 3:
        return 'Strong';

      case 4:
        return 'Expert';
    
      default:
        return 'Familiar';
    }
  }

  const currentCategory = skillCategories[selectedCategoryIdx] || skillCategories[0];

  return (
    <Box
      id="skills"
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
          <SectionTag icon={<Cpu className="w-3.5 h-3.5 text-[#7E8F7C]" />}>Core Competencies & Tooling</SectionTag>

          <Typography variant="h2" >Technical Mastery & Tooling.</Typography>

          <Typography variant="body1" sx={{ color: '#5C544B', fontSize: '1.05rem', lineHeight: 1.65 }}>
            Bridging solid frontend engineering with bespoke CMS architecture and automated development workflows.
          </Typography>
        </Box>

        {/* Technical Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12">
          
          {/* Left Category Selector Pills */}
          <div className="md:col-span-4">
            <div className="space-y-2">
              {skillCategories.map((cat, idx) => {
                const isSelected = selectedCategoryIdx === idx;
                return (
                  <button
                    key={cat.category}
                    onClick={() => setSelectedCategoryIdx(idx)}
                    className={`w-full text-left p-3.5 rounded-2xl transition-all flex items-center justify-between border ${
                      isSelected
                        ? 'bg-[#2D2D2D] text-[#FDFCF9] border-[#2D2D2D] shadow-sm'
                        : 'bg-white text-[#5C544B] border-[#EBE7E0] hover:border-[#7E8F7C] hover:bg-[#FAF8F5]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-xl ${isSelected ? 'bg-[#43403D] text-[#FDFCF9]' : 'bg-[#F5F2EE] text-[#5C544B]'}`}>
                        {getCategoryIcon(cat.iconName)}
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-bold leading-tight">{cat.category}</div>
                        <div className={`text-[11px] mt-0.5 line-clamp-1 ${isSelected ? 'text-[#D8D2C7]' : 'text-[#8C7B6A]'}`}>
                          {cat.skills.length} core technologies
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Skills Panel */}
          <div className="md:col-span-8">
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, sm: 4.5 },
                backgroundColor: '#FFFFFF',
                borderRadius: 4,
                border: '1px solid #EBE7E0',
                height: '100%',
              }}
            >
              <div className="flex items-start justify-between pb-4 mb-6 border-b border-[#EBE7E0]">
                <div>
                  <Typography variant="h6" sx={{ fontWeight: 600, fontFamily: '"Newsreader", Georgia, serif', fontSize: '1.35rem', color: '#2D2D2D' }}>
                    {currentCategory.category}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#8C7B6A', mt: 0.5 }}>
                    {currentCategory.description}
                  </Typography>
                </div>
              </div>

              {/* Skill Bars List */}
              <div className="space-y-5">
                {currentCategory.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between text-xs sm:text-sm mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-[#2D2D2D]">{skill.name}</span>
                      </div>
                      <div className="flex items-center gap-2 font-mono text-xs">
                        <span className="text-[#8C7B6A]">{skill.experience}</span>
                        <span className="font-bold text-[#2D2D2D]">{getMastery(skill.mastery)}</span>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-2 bg-[#F5F2EE] rounded-full overflow-hidden">
                      <Box
                        className="h-full bg-[#7E8F7C] rounded-full transition-all duration-500"
                        sx={{ width: `${(skill.mastery / 4) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Paper>
          </div>
        </div>

        {/* 4 Architectural Engineering Pillars */}
        <Box sx={{ pt: 2 }}>
          <div className="text-center max-w-xl mx-auto mb-6">
            <Typography variant="h5" sx={{ fontWeight: 600, fontFamily: '"Caveat", cursive, sans-serif', fontSize: '2.1rem', color: '#2D2D2D', mb: 0.5 }}>
              Work Approach
            </Typography>
            <Typography variant="body2" sx={{ color: '#8C7B6A' }}>
              A practical approach focused on code quality, performance, and dependable delivery.
            </Typography>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {frontendPillars.map((pillar, idx) => (
              <div key={idx}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    backgroundColor: '#FFFFFF',
                    borderRadius: 3.5,
                    border: '1px solid #EBE7E0',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div className="w-8 h-8 rounded-xl bg-[#F5F2EE] text-[#5C5146] border border-[#EBE7E0] flex items-center justify-center font-mono font-bold text-xs mb-3">
                      0{idx + 1}
                    </div>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#2D2D2D', mb: 1 }}>
                      {pillar.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#5C544B', fontSize: '0.825rem', lineHeight: 1.55 }}>
                      {pillar.description}
                    </Typography>
                  </div>

                  <div className="pt-3 mt-3 border-t border-[#EBE7E0] text-[11px] font-semibold text-[#8C7B6A] flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#7E8F7C] shrink-0" />
                    <span>{pillar.metric}</span>
                  </div>
                </Paper>
              </div>
            ))}
          </div>
        </Box>

      </Container>
    </Box>
  );
};
