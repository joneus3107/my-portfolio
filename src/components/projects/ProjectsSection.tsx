import React, { useState, useMemo } from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
  Button,
  TextField,
  InputAdornment,
  Chip
} from '@mui/material';
import { Search, Sparkles, Filter, Code2, FolderGit2 } from 'lucide-react';
import { Project } from '../../types';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';

interface ProjectsSectionProps {
  projects: Project[];
}

const categories = ['All', 'WordPress', 'ReactJS', 'Full-Stack'] as const;

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !query ||
        p.title.toLowerCase().includes(query) ||
        p.tagline.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.tags.some(tag => tag.toLowerCase().includes(query));

      return matchesCategory && matchesQuery;
    });
  }, [projects, selectedCategory, searchQuery]);

  return (
    <Box
      id="projects"
      sx={{
        py: { xs: 10, md: 14 },
        backgroundColor: '#FDFCF9',
        position: 'relative',
        borderTop: '1px solid #EBE7E0',
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ maxWidth: 720, mb: 6 }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F2EE] border border-[#EBE7E0] text-[11px] font-bold uppercase tracking-widest text-[#8C7B6A] mb-3">
            <FolderGit2 className="w-3.5 h-3.5 text-[#7E8F7C]" />
            <span>Featured Portfolio Works</span>
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
            Projects
          </Typography>

          <Typography variant="body1" sx={{ color: '#5C544B', fontSize: '1.05rem', lineHeight: 1.65 }}>
            A handpicked selection from my broader body of work, showcasing client websites and modern web applications built with clean code and precision.
          </Typography>
        </Box>

        {/* Filter Controls Row */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'stretch', md: 'center' },
            gap: 2.5,
            mb: 5,
            p: 1.5,
            backgroundColor: '#F5F2EE',
            borderRadius: 3,
            border: '1px solid #EBE7E0',
          }}
        >
          {/* Category Filter Buttons */}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {categories.map((cat) => {
              const count = cat === 'All' ? projects.length : projects.filter(p => p.category === cat).length;
              const isSelected = selectedCategory === cat;

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-[#2D2D2D] text-[#FDFCF9] shadow-xs'
                      : 'bg-white border border-[#EBE7E0] text-[#5C544B] hover:bg-[#FAF8F5]'
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                    isSelected ? 'bg-[#43403D] text-[#EDE8E1]' : 'bg-[#F5F2EE] text-[#8C7B6A]'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </Box>

          {/* Search Query Input */}
          <Box sx={{ minWidth: { xs: '100%', md: 280 } }}>
            <TextField
              size="small"
              fullWidth
              placeholder="ex: WordPress, ReactJS..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search className="w-4 h-4 text-[#8C7B6A]" />
                    </InputAdornment>
                  ),
                  sx: {
                    fontSize: '0.85rem',
                    backgroundColor: '#FFFFFF',
                    borderRadius: 2.5,
                  }
                }
              }}
            />
          </Box>
        </Box>

        {/* Project Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div key={project.id}>
                <ProjectCard
                  project={project}
                  onSelectProject={(p) => setActiveProject(p)}
                />
              </div>
            ))}
          </div>
        ) : (
          <Box
            sx={{
              p: 8,
              textAlign: 'center',
              backgroundColor: '#FAFAFA',
              borderRadius: 4,
              border: '1px dashed #D4D4D8',
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 700, color: 'text.primary', mb: 1 }}>
              No projects found
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>
              Try clearing your search query or selecting a different category filter.
            </Typography>
            <Button
              variant="outlined"
              size="small"
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
            >
              Reset Filters
            </Button>
          </Box>
        )}

        {/* Case Study Dialog Modal */}
        <ProjectModal
          project={activeProject}
          open={Boolean(activeProject)}
          onClose={() => setActiveProject(null)}
        />
      </Container>
    </Box>
  );
};
