import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  IconButton,
  Typography,
  Box,
  Button,
  Chip,
  Grid,
  Tabs,
  Tab,
  Divider,
  Tooltip
} from '@mui/material';
import {
  X as CloseIcon,
  ExternalLink,
  Github,
  CheckCircle2,
  AlertCircle,
  Layers,
  Code2,
  Copy,
  Check,
  Monitor,
  Smartphone,
  Tablet,
  Sparkles,
  Zap
} from 'lucide-react';
import { Project } from '../../types';

interface ProjectModalProps {
  project: Project | null;
  open: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, open, onClose }) => {
  const [tabValue, setTabValue] = useState(0);
  const [copied, setCopied] = useState(false);
  const [deviceView, setDeviceView] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  if (!project) return null;

  const handleCopyCode = () => {
    if (project.codeSnippet) {
      navigator.clipboard.writeText(project.codeSnippet.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
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
            borderRadius: { xs: 3, sm: 4 },
            backgroundColor: '#FFFFFF',
            p: { xs: 1, sm: 2 },
            overflow: 'hidden',
          }
        }
      }}
    >
      {/* Top Header */}
      <Box sx={{ p: { xs: 2, sm: 3 }, pb: 1, position: 'relative' }}>
        <IconButton
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 16,
            top: 16,
            border: '1px solid #E4E4E7',
            backgroundColor: '#FAFAFA',
            '&:hover': { backgroundColor: '#F4F4F5' },
          }}
        >
          <CloseIcon fontSize="small" />
        </IconButton>

        <div className="flex items-center gap-2 mb-2">
          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-zinc-100 text-zinc-800 border border-zinc-200">
            {project.category}
          </span>
          {project.featured && (
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200 flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> Featured Case Study
            </span>
          )}
        </div>

        <Typography variant="h4" sx={{ fontWeight: 800, color: 'text.primary', mb: 1, pr: 5 }}>
          {project.title}
        </Typography>

        <Typography variant="subtitle1" sx={{ color: 'text.secondary', lineHeight: 1.5, mb: 2 }}>
          {project.tagline}
        </Typography>

        {/* Action Links */}
        <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap', mb: 2 }}>
          {project.liveUrl && (
            <Button
              variant="contained"
              size="small"
              component="a"
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              endIcon={<ExternalLink className="w-4 h-4" />}
            >
              Launch Live Application
            </Button>
          )}
          {project.githubUrl && (
            <Button
              variant="outlined"
              size="small"
              component="a"
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<Github className="w-4 h-4" />}
            >
              View Repository
            </Button>
          )}
        </Box>
      </Box>

      {/* Interactive Mockup Frame Preview */}
      <Box sx={{ px: { xs: 2, sm: 3 } }}>
        <Box
          sx={{
            borderRadius: 3,
            backgroundColor: '#F4F4F5',
            border: '1px solid #E4E4E7',
            overflow: 'hidden',
            p: 1.5,
          }}
        >
          {/* Frame Top bar with device toggles */}
          <div className="flex items-center justify-between pb-2 px-1 text-xs text-zinc-500 border-b border-zinc-200/80 mb-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
              <span className="ml-2 font-mono text-[11px] text-zinc-600 truncate max-w-[200px]">
                https://demo.{project.id}.dev
              </span>
            </div>

            {/* Device Switcher */}
            <div className="flex items-center gap-1 bg-white p-0.5 rounded-lg border border-zinc-200">
              <button
                onClick={() => setDeviceView('desktop')}
                className={`p-1 rounded ${deviceView === 'desktop' ? 'bg-zinc-900 text-white' : 'text-zinc-500 hover:text-zinc-900'}`}
                title="Desktop View"
              >
                <Monitor className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setDeviceView('tablet')}
                className={`p-1 rounded ${deviceView === 'tablet' ? 'bg-zinc-900 text-white' : 'text-zinc-500 hover:text-zinc-900'}`}
                title="Tablet View"
              >
                <Tablet className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setDeviceView('mobile')}
                className={`p-1 rounded ${deviceView === 'mobile' ? 'bg-zinc-900 text-white' : 'text-zinc-500 hover:text-zinc-900'}`}
                title="Mobile View"
              >
                <Smartphone className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Dynamic Image Container */}
          <div className={`mx-auto transition-all duration-300 overflow-hidden rounded-lg shadow-sm ${
            deviceView === 'desktop' ? 'w-full max-h-[360px]' : deviceView === 'tablet' ? 'w-[75%] max-h-[360px]' : 'w-[40%] max-h-[360px]'
          }`}>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top rounded-lg"
            />
          </div>
        </Box>
      </Box>

      {/* Dialog Tabs */}
      <Box sx={{ px: { xs: 2, sm: 3 }, mt: 3, borderBottom: '1px solid #E4E4E7' }}>
        <Tabs value={tabValue} onChange={(_, newVal) => setTabValue(newVal)}>
          <Tab label="Case Study & Overview" />
          <Tab label="Engineering Challenges" />
          <Tab label="Architecture & Code" />
        </Tabs>
      </Box>

      {/* Tab Panels */}
      <DialogContent sx={{ p: { xs: 2, sm: 3 } }}>
        {/* Tab 0: Overview */}
        {tabValue === 0 && (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <div>
              <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'text.primary', mb: 1 }}>
                Project Overview
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                {project.longDescription || project.description}
              </Typography>
            </div>

            {/* Metrics */}
            {project.metrics && project.metrics.length > 0 && (
              <div>
                <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'text.primary', mb: 1.5 }}>
                  Key Impact & Performance Metrics
                </Typography>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {project.metrics.map((metric, idx) => (
                    <Box key={idx} sx={{ p: 2, backgroundColor: '#FAFAFA', borderRadius: 2.5, border: '1px solid #F4F4F5', textAlign: 'center' }}>
                      <div className="text-xl font-bold font-mono text-zinc-900">{metric.value}</div>
                      <div className="text-xs text-zinc-500 font-medium mt-0.5">{metric.label}</div>
                    </Box>
                  ))}
                </div>
              </div>
            )}

            {/* Key Features */}
            {project.keyFeatures && (
              <div>
                <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'text.primary', mb: 1.5 }}>
                  Core Capabilities
                </Typography>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.keyFeatures.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-zinc-700 bg-zinc-50 p-2.5 rounded-xl border border-zinc-100">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack Tags */}
            <div>
              <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'text.primary', mb: 1.5 }}>
                Technologies & Tools
              </Typography>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <Chip
                    key={tag}
                    label={tag}
                    size="small"
                    variant="outlined"
                    sx={{ backgroundColor: '#FAFAFA', borderColor: '#E4E4E7', fontWeight: 500 }}
                  />
                ))}
              </div>
            </div>
          </Box>
        )}

        {/* Tab 1: Challenges & Solutions */}
        {tabValue === 1 && (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <div>
              <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'text.primary', mb: 1.5, display: 'flex', alignItems: 'center', gap: 1 }}>
                <AlertCircle className="w-4 h-4 text-amber-600" />
                Technical Hurdles & Constraints
              </Typography>
              <div className="space-y-2.5">
                {project.challenges?.map((challenge, i) => (
                  <div key={i} className="p-3 bg-amber-50/50 border border-amber-200/60 rounded-xl text-sm text-zinc-800">
                    <strong>Hurdle {i + 1}:</strong> {challenge}
                  </div>
                )) || <p className="text-sm text-zinc-500">No specific blockers recorded.</p>}
              </div>
            </div>

            <div>
              <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'text.primary', mb: 1.5, display: 'flex', alignItems: 'center', gap: 1 }}>
                <Zap className="w-4 h-4 text-emerald-600" />
                Architectural Solutions & Execution
              </Typography>
              <div className="space-y-2.5">
                {project.solutions?.map((solution, i) => (
                  <div key={i} className="p-3 bg-emerald-50/40 border border-emerald-200/60 rounded-xl text-sm text-zinc-800">
                    <strong>Solution {i + 1}:</strong> {solution}
                  </div>
                )) || <p className="text-sm text-zinc-500">Architected standard best practices.</p>}
              </div>
            </div>
          </Box>
        )}

        {/* Tab 2: Architecture & Code */}
        {tabValue === 2 && (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {project.techArchitecture && (
              <div>
                <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'text.primary', mb: 1.5, display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Layers className="w-4 h-4 text-indigo-600" />
                  Frontend Architecture Blueprint
                </Typography>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.techArchitecture.map((arch, i) => (
                    <div key={i} className="p-3 bg-zinc-50 border border-zinc-200 rounded-xl text-xs font-mono text-zinc-700">
                      • {arch}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {project.codeSnippet ? (
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-zinc-700">
                    <Code2 className="w-4 h-4 text-zinc-900" />
                    <span>Implementation: {project.codeSnippet.filename}</span>
                  </div>
                  <Button
                    size="small"
                    variant="outlined"
                    onClick={handleCopyCode}
                    startIcon={copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    sx={{ fontSize: '0.75rem', py: 0.25, px: 1.25 }}
                  >
                    {copied ? 'Copied' : 'Copy Code'}
                  </Button>
                </div>
                <div className="rounded-xl bg-zinc-950 text-zinc-100 p-4 font-mono text-xs overflow-x-auto">
                  <pre className="leading-relaxed text-zinc-300">
                    {project.codeSnippet.code}
                  </pre>
                </div>
              </div>
            ) : (
              <div className="p-6 text-center text-zinc-500 border border-dashed border-zinc-200 rounded-xl">
                Code snippet available on GitHub repository.
              </div>
            )}
          </Box>
        )}
      </DialogContent>
    </Dialog>
  );
};
