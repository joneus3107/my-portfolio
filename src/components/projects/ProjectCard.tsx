import React from 'react';
import { Card, CardContent, Typography, Box, Button, Chip, Tooltip } from '@mui/material';
import { ExternalLink, Github, Sparkles, ArrowUpRight, Zap, Code2 } from 'lucide-react';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  onSelectProject: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelectProject }) => {
  return (
    <Card
      elevation={0}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 2,
        border: '1px solid #EBE7E0',
        backgroundColor: '#FFFFFF',
        overflow: 'hidden',
        transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
        '&:hover': {
          transform: 'translateY(-4px)',
          borderColor: '#7E8F7C',
          boxShadow: '0 20px 40px -15px rgba(92, 84, 75, 0.1), 0 0 0 1px rgba(126, 143, 124, 0.2)',
          '& .project-img': {
            transform: 'scale(1.04)',
          },
          '& .view-arrow': {
            transform: 'translate(2px, -2px)',
          }
        },
      }}
    >
      {/* Image Thumbnail with zoom effect */}
      <Box
        onClick={() => onSelectProject(project)}
        sx={{
          position: 'relative',
          height: 220,
          overflow: 'hidden',
          backgroundColor: '#F5F2EE',
          cursor: 'pointer',
        }}
      >
        <img
          src={project.image}
          alt={project.title}
          className="project-img w-full h-full object-cover object-top transition-transform duration-500 ease-out"
          loading="lazy"
        />

        {/* Top Badges */}
        <Box
          sx={{
            position: 'absolute',
            top: 12,
            left: 12,
            right: 12,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/95 backdrop-blur-md text-[#5C5146] border border-[#EBE7E0] shadow-xs">
            {project.category}
          </span>
          {project.featured && (
            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#7E8F7C] text-white shadow-xs flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-amber-200" /> Featured
            </span>
          )}
        </Box>

        {/* Hover overlay hint */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#2D2D2D]/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <span className="text-white text-xs font-semibold flex items-center gap-1">
            View case study & architecture <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </Box>

      {/* Card Body */}
      <CardContent sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          {/* Title and Tagline */}
          <Box
            onClick={() => onSelectProject(project)}
            sx={{ cursor: 'pointer', mb: 1 }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 1, mb: 1 }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  fontSize: '1.75rem',
                  fontFamily: '"Caveat", cursive, sans-serif',
                  color: '#2D2D2D',
                  lineHeight: 1.25,
                  '&:hover': { color: '#7E8F7C' },
                }}
              >
                {project.title}
              </Typography>
              <ArrowUpRight className="view-arrow w-4 h-4 text-[#8C7B6A] transition-transform duration-200 shrink-0" />
            </Box>
            <Typography variant="body2" sx={{ color: '#8C7B6A', fontSize: '0.85rem', mt: 0.5, lineHeight: 1.5 }}>
              {project.tagline}
            </Typography>
          </Box>

          <Typography
            variant="body2"
            sx={{
              color: '#5C544B',
              fontSize: '0.85rem',
              lineHeight: 1.6,
              mb: 2.5,
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {project.description}
          </Typography>

          {/* Quick Metrics highlight */}
          {project.metrics && project.metrics.length > 0 && (
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 1, mb: 2.5, p: 1.5, backgroundColor: '#FAF8F5', borderRadius: 2, border: '1px solid #EBE7E0' }}>
              {project.metrics.slice(0, 2).map((metric, idx) => (
                <div key={idx} className='text-center'>
                  <div className="text-lg font-bold font-mono text-[#2D2D2D]">{metric.value}</div>
                  <div className="text-[10px] uppercase tracking-wider text-[#8C7B6A] truncate">{metric.label}</div>
                </div>
              ))}
            </Box>
          )}

          {/* Tech Stack Chips */}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, mb: 3 }}>
            {project.tags.slice(0, 4).map((tag) => (
              <Chip
                key={tag}
                label={tag}
                size="small"
                variant="outlined"
                sx={{
                  fontSize: '0.725rem',
                  height: 24,
                  backgroundColor: '#F5F2EE',
                  borderColor: '#EBE7E0',
                  color: '#5C544B',
                }}
              />
            ))}
            {project.tags.length > 4 && (
              <span className="text-[11px] text-[#A6998A] self-center font-medium font-mono">
                +{project.tags.length - 4} more
              </span>
            )}
          </Box>
        </div>

        {/* Action Buttons */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', pt: 2, borderTop: '1px solid #EBE7E0' }}>
          <Button
            size="small"
            variant="outlined"
            onClick={() => onSelectProject(project)}
            sx={{
              fontSize: '0.8rem',
              py: 0.6,
              px: 1.75,
              fontWeight: 600,
              borderColor: '#EBE7E0',
              color: '#5C544B',
              '&:hover': {
                borderColor: '#7E8F7C',
                backgroundColor: '#F5F2EE',
                color: '#2D2D2D',
              }
            }}
          >
            View Detail
          </Button>

          <Box sx={{ display: 'flex', gap: 1 }}>
            {project.liveUrl && (
              <Tooltip title="Open Live App">
                <Button
                  size="small"
                  variant="contained"
                  component="a"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ minWidth: 32, p: 0.75, backgroundColor: '#2D2D2D', color: '#FDFCF9', '&:hover': { backgroundColor: '#1A1918' } }}
                >
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </Tooltip>
            )}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};
