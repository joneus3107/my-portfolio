import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  IconButton,
  Typography,
  Box,
  Button,
  TextField,
  Divider,
  Alert,
  Tabs,
  Tab,
  MenuItem
} from '@mui/material';
import {
  X as CloseIcon,
  Sliders,
  Sparkles,
  User,
  Plus,
  RotateCcw,
  Check,
  FolderPlus
} from 'lucide-react';
import { ProfileData, Project } from '../../types';

interface ProfileCustomizerModalProps {
  open: boolean;
  onClose: () => void;
  profile: ProfileData;
  onUpdateProfile: (newProfile: ProfileData) => void;
  onAddProject: (newProject: Project) => void;
  onResetDefaults: () => void;
}

export const ProfileCustomizerModal: React.FC<ProfileCustomizerModalProps> = ({
  open,
  onClose,
  profile,
  onUpdateProfile,
  onAddProject,
  onResetDefaults,
}) => {
  const [tabValue, setTabValue] = useState(0);
  const [formData, setFormData] = useState<ProfileData>(profile);

  // New Project Form State
  const [newTitle, setNewTitle] = useState('');
  const [newTagline, setNewTagline] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newCategory, setNewCategory] = useState<'React & Next.js' | 'Design Systems' | 'Tools & Apps' | 'Full-Stack'>('React & Next.js');
  const [newTags, setNewTags] = useState('React, TypeScript, MUI, Tailwind');
  const [newImageUrl, setNewImageUrl] = useState('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80');
  const [projectAddedMsg, setProjectAddedMsg] = useState(false);

  const handlePreset = (roleType: 'DesignSystem' | 'FullStack' | 'Creative') => {
    if (roleType === 'DesignSystem') {
      const updated: ProfileData = {
        ...formData,
        title: 'Design System & Frontend Architect',
        subtitle: 'Engineering accessible, scalable design token systems and enterprise React component libraries.',
        bio: 'Passionate about design-to-code velocity, zero-runtime styling, WCAG AAA accessibility, and creating joyous developer experiences.',
      };
      setFormData(updated);
      onUpdateProfile(updated);
    } else if (roleType === 'FullStack') {
      const updated: ProfileData = {
        ...formData,
        title: 'Senior Frontend & Full-Stack Engineer',
        subtitle: 'Specialized in Next.js 15, React Server Components, TypeScript, and high-throughput real-time APIs.',
        bio: 'Building end-to-end cloud web applications with relentless focus on sub-100ms response times and bulletproof state synchronisation.',
      };
      setFormData(updated);
      onUpdateProfile(updated);
    } else if (roleType === 'Creative') {
      const updated: ProfileData = {
        ...formData,
        title: 'Creative Frontend & UI/UX Developer',
        subtitle: 'Crafting immersive micro-interactions, physics-based fluid motions, and award-winning minimalist interfaces.',
        bio: 'Bridging design and technology with Framer Motion, WebGL, Tailwind, and pixel-perfection across all viewport dimensions.',
      };
      setFormData(updated);
      onUpdateProfile(updated);
    }
  };

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateProfile(formData);
    onClose();
  };

  const handleCreateProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newDescription.trim()) return;

    const project: Project = {
      id: `custom-proj-${Date.now()}`,
      title: newTitle,
      tagline: newTagline || newTitle,
      description: newDescription,
      category: newCategory,
      featured: true,
      image: newImageUrl,
      tags: newTags.split(',').map(t => t.trim()).filter(Boolean),
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      metrics: [
        { label: 'Performance', value: '100 / 100' },
        { label: 'Time to Interactive', value: '0.4s' },
      ],
    };

    onAddProject(project);
    setProjectAddedMsg(true);
    setNewTitle('');
    setNewTagline('');
    setNewDescription('');
    setTimeout(() => {
      setProjectAddedMsg(false);
      onClose();
    }, 1200);
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
            borderRadius: 4,
            backgroundColor: '#FFFFFF',
            p: { xs: 1, sm: 2 },
          }
        }
      }}
    >
      <Box sx={{ p: 2.5, position: 'relative' }}>
        <IconButton
          onClick={onClose}
          sx={{ position: 'absolute', right: 12, top: 12, border: '1px solid #E4E4E7' }}
        >
          <CloseIcon fontSize="small" />
        </IconButton>

        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 rounded-lg bg-zinc-900 text-white flex items-center justify-center">
            <Sliders className="w-4 h-4" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-zinc-600">Personalize Portfolio</span>
        </div>

        <Typography variant="h5" sx={{ fontWeight: 800, color: 'text.primary', mb: 0.5 }}>
          Customize Portfolio Info & Add Works
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Instantly adjust the developer profile details or insert your own custom projects to tailor this portfolio to your exact specifications.
        </Typography>
      </Box>

      {/* Tabs */}
      <Box sx={{ px: 2.5, borderBottom: '1px solid #E4E4E7' }}>
        <Tabs value={tabValue} onChange={(_, val) => setTabValue(val)}>
          <Tab label="Edit Profile Information" icon={<User className="w-4 h-4" />} iconPosition="start" />
          <Tab label="Add New Project" icon={<FolderPlus className="w-4 h-4" />} iconPosition="start" />
        </Tabs>
      </Box>

      <DialogContent sx={{ p: 2.5 }}>
        {/* Tab 0: Profile Info */}
        {tabValue === 0 && (
          <form onSubmit={handleSaveProfile} className="space-y-4">
            
            {/* Quick Presets */}
            <div className="p-3 bg-zinc-50 rounded-2xl border border-zinc-200/80 mb-4">
              <span className="text-xs font-bold text-zinc-700 block mb-2">
                Quick Role Presets:
              </span>
              <div className="flex flex-wrap gap-2">
                <Button
                  size="small"
                  variant="outlined"
                  onClick={() => handlePreset('DesignSystem')}
                  sx={{ fontSize: '0.75rem', py: 0.5 }}
                >
                  Design Systems Specialist
                </Button>
                <Button
                  size="small"
                  variant="outlined"
                  onClick={() => handlePreset('FullStack')}
                  sx={{ fontSize: '0.75rem', py: 0.5 }}
                >
                  Next.js / Full-Stack
                </Button>
                <Button
                  size="small"
                  variant="outlined"
                  onClick={() => handlePreset('Creative')}
                  sx={{ fontSize: '0.75rem', py: 0.5 }}
                >
                  Creative UI/UX Engineer
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <TextField
                  fullWidth
                  size="small"
                  label="Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <TextField
                  fullWidth
                  size="small"
                  label="Professional Title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                />
              </div>

              <div className="sm:col-span-2">
                <TextField
                  fullWidth
                  size="small"
                  label="Hero Subtitle / Tagline"
                  value={formData.subtitle}
                  onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                />
              </div>

              <div className="sm:col-span-2">
                <TextField
                  fullWidth
                  multiline
                  rows={3}
                  size="small"
                  label="About Bio"
                  value={formData.bio}
                  onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                />
              </div>

              <div>
                <TextField
                  fullWidth
                  size="small"
                  label="Contact Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div>
                <TextField
                  fullWidth
                  size="small"
                  label="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div>
                <TextField
                  fullWidth
                  size="small"
                  label="Location"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                />
              </div>
              <div>
                <TextField
                  fullWidth
                  size="small"
                  label="Avatar Image URL"
                  value={formData.avatarUrl}
                  onChange={(e) => setFormData({ ...formData, avatarUrl: e.target.value })}
                />
              </div>
            </div>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pt: 3, borderTop: '1px solid #E4E4E7' }}>
              <Button
                variant="text"
                color="inherit"
                onClick={() => {
                  onResetDefaults();
                  onClose();
                }}
                startIcon={<RotateCcw className="w-3.5 h-3.5" />}
                sx={{ fontSize: '0.8rem', color: '#71717A' }}
              >
                Reset to Original Data
              </Button>

              <Button
                type="submit"
                variant="contained"
                sx={{ px: 3, fontWeight: 700 }}
              >
                Save Changes
              </Button>
            </Box>
          </form>
        )}

        {/* Tab 1: Add New Project */}
        {tabValue === 1 && (
          <form onSubmit={handleCreateProject} className="space-y-4">
            {projectAddedMsg && (
              <Alert severity="success" sx={{ mb: 2 }}>
                Project added successfully to your showcase!
              </Alert>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
              <div className="sm:col-span-7">
                <TextField
                  fullWidth
                  size="small"
                  required
                  label="Project Title"
                  placeholder="e.g. Zenith Web App"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                />
              </div>
              <div className="sm:col-span-5">
                <TextField
                  fullWidth
                  select
                  size="small"
                  label="Category"
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value as any)}
                >
                  <MenuItem value="React & Next.js">React & Next.js</MenuItem>
                  <MenuItem value="Design Systems">Design Systems</MenuItem>
                  <MenuItem value="Tools & Apps">Tools & Apps</MenuItem>
                  <MenuItem value="Full-Stack">Full-Stack</MenuItem>
                </TextField>
              </div>

              <div className="sm:col-span-12">
                <TextField
                  fullWidth
                  size="small"
                  label="Short Tagline"
                  placeholder="e.g. Real-time collaborative workspace for frontend teams"
                  value={newTagline}
                  onChange={(e) => setNewTagline(e.target.value)}
                />
              </div>

              <div className="sm:col-span-12">
                <TextField
                  fullWidth
                  required
                  multiline
                  rows={3}
                  size="small"
                  label="Detailed Description"
                  placeholder="Describe the application, architecture highlights, and impact..."
                  value={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
                />
              </div>

              <div className="sm:col-span-6">
                <TextField
                  fullWidth
                  size="small"
                  label="Technologies (comma separated)"
                  value={newTags}
                  onChange={(e) => setNewTags(e.target.value)}
                />
              </div>
              <div className="sm:col-span-6">
                <TextField
                  fullWidth
                  size="small"
                  label="Cover Image URL (Unsplash or direct)"
                  value={newImageUrl}
                  onChange={(e) => setNewImageUrl(e.target.value)}
                />
              </div>
            </div>

            <Box sx={{ display: 'flex', justifyContent: 'flex-end', pt: 3, borderTop: '1px solid #E4E4E7' }}>
              <Button
                type="submit"
                variant="contained"
                startIcon={<Plus className="w-4 h-4" />}
                sx={{ px: 3, fontWeight: 700 }}
              >
                Add Project to Portfolio
              </Button>
            </Box>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};
