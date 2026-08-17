import React, { useState, useEffect } from 'react';
import { 
  Container, 
  Box, 
  Typography, 
  Button, 
  Chip, 
  Grid, 
  Paper, 
  Tooltip,
  IconButton
} from '@mui/material';
import { 
  ArrowRight, 
  Sparkles, 
  Download, 
  FileText, 
  CheckCircle2, 
  Zap, 
  Layers, 
  Cpu, 
  Code2, 
  Flame, 
  Terminal, 
  Play, 
  RefreshCw,
  ExternalLink,
  Copy,
  Check
} from 'lucide-react';
import { ProfileData } from '../../types';

interface HeroSectionProps {
  profile: ProfileData;
  onOpenResumeDoc: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ profile, onOpenResumeDoc }) => {
  // Interactive HUD state for hero demonstration
  const [activeTab, setActiveTab] = useState<'metrics' | 'code' | 'sandbox'>('metrics');
  const [renderCount, setRenderCount] = useState(1);
  const [renderLatency, setRenderLatency] = useState(0.8);
  const [activePreset, setActivePreset] = useState<'Standard' | 'Optimized' | 'Concurrent'>('Optimized');
  const [copiedCode, setCopiedCode] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setRenderLatency(Number((0.6 + Math.random() * 0.4).toFixed(2)));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleSimulateRender = () => {
    setRenderCount(prev => prev + 1);
    setRenderLatency(Number((0.3 + Math.random() * 0.4).toFixed(2)));
  };

  const handleCopySnippet = () => {
    navigator.clipboard.writeText(`// React 19 Optimized Hook
export function useFastState<T>(initialValue: T) {
  const [state, setState] = useState(initialValue);
  const startTransition = useTransition()[1];
  
  const update = useCallback((next: T) => {
    startTransition(() => setState(next));
  }, []);

  return [state, update] as const;
}`);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <Box
      id="about"
      sx={{
        pt: { xs: 15, md: 19 },
        pb: { xs: 10, md: 14 },
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, #FDFCF9 0%, #F6F3EE 100%)',
      }}
      className="bg-grid-pattern"
    >
      {/* Subtle warm natural background glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-gradient-to-b from-[#EBE4DA]/40 via-[#F5F2EE]/30 to-transparent blur-3xl pointer-events-none -z-10" />

      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          
          {/* Main Hero Header Row */}
          <Box sx={{ maxWidth: 920, mx: 'auto', textAlign: 'center' }}>
            
            {/* Status Pill Badge */}
            <Box sx={{ display: 'inline-flex', alignItems: 'center', mb: 3 }}>
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-[#EBE7E0] shadow-xs text-xs font-medium text-[#5C544B] animate-float-slow">
                <span className="w-2.5 h-2.5 rounded-full bg-[#7E8F7C] shadow-[0_0_8px_rgba(126,143,124,0.6)]"></span>
                <span className="font-semibold text-[#2D2D2D]">Available for select projects & full-time roles</span>
                <span className="text-[#D8D2C7]">|</span>
                <span className="text-[#8C7B6A] font-mono text-[11px] uppercase tracking-wider">React 19 • Next.js • MUI</span>
              </div>
            </Box>

            {/* Main Headline */}
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '3rem', sm: '4.25rem', md: '5.25rem' },
                fontWeight: 600,
                color: '#2D2D2D',
                letterSpacing: '0.01em',
                lineHeight: 1.1,
                mb: 3,
                fontFamily: '"Caveat", cursive, sans-serif',
              }}
            >
              Crafting digital experiences with{' '}
              <span className="text-[#7E8F7C]">
                natural simplicity
              </span>
              .
            </Typography>

            {/* Subtitle */}
            <Typography
              variant="subtitle1"
              sx={{
                fontSize: { xs: '1.05rem', sm: '1.2rem' },
                color: '#5C544B',
                lineHeight: 1.68,
                maxWidth: 720,
                mx: 'auto',
                mb: 4.5,
              }}
            >
              Hi, I'm <strong className="text-[#2D2D2D] font-bold">{profile.name}</strong>. A {profile.title} building performant, accessible web applications and organic design systems that prioritize clarity and calm interactions.
            </Typography>

            {/* CTA Buttons */}
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 2,
                mb: 5,
              }}
            >
              <Button
                variant="contained"
                size="large"
                href="#projects"
                endIcon={<ArrowRight className="w-4 h-4" />}
                sx={{
                  py: 1.5,
                  px: 3.5,
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  backgroundColor: '#2D2D2D',
                  color: '#FDFCF9',
                  boxShadow: '0 8px 20px -4px rgba(45, 45, 45, 0.25)',
                  '&:hover': {
                    backgroundColor: '#1A1918',
                  }
                }}
              >
                Explore Projects
              </Button>

              <Button
                variant="outlined"
                size="large"
                onClick={onOpenResumeDoc}
                startIcon={<FileText className="w-4 h-4" />}
                sx={{
                  py: 1.5,
                  px: 3,
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  backgroundColor: '#FFFFFF',
                  borderColor: '#EBE7E0',
                  color: '#5C544B',
                  '&:hover': {
                    borderColor: '#7E8F7C',
                    backgroundColor: '#F5F2EE',
                    color: '#2D2D2D',
                  }
                }}
              >
                View Full Resume
              </Button>

              <Button
                variant="text"
                size="large"
                href="#contact"
                sx={{
                  py: 1.5,
                  px: 2.5,
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: '#8C7B6A',
                  '&:hover': {
                    color: '#2D2D2D',
                    backgroundColor: 'rgba(140, 123, 106, 0.08)',
                  },
                }}
              >
                Get In Touch
              </Button>
            </Box>

            {/* Quick Skills Pill Carousel */}
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 1.2 }}>
              {['TypeScript', 'React 19', 'Next.js 15', 'Material UI', 'Tailwind CSS', 'Framer Motion', 'WCAG AAA', 'GraphQL', 'TanStack Query'].map((tech) => (
                <Chip
                  key={tech}
                  label={tech}
                  size="small"
                  variant="outlined"
                  sx={{
                    borderColor: '#EBE7E0',
                    backgroundColor: '#FFFFFF',
                    fontSize: '0.785rem',
                    fontWeight: 500,
                    color: '#5C544B',
                    '&:hover': {
                      borderColor: '#7E8F7C',
                      backgroundColor: '#F5F2EE',
                      color: '#2D2D2D',
                    },
                  }}
                />
              ))}
            </Box>
          </Box>

          {/* Interactive Live Frontend Inspector Card */}
          <Box sx={{ maxWidth: 940, mx: 'auto', width: '100%' }}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 2.5, sm: 3.5 },
                backgroundColor: '#FFFFFF',
                border: '1px solid #EBE7E0',
                borderRadius: 4,
                boxShadow: '0 20px 40px -15px rgba(92, 84, 75, 0.07), 0 0 0 1px rgba(235, 231, 224, 0.5)',
              }}
            >
              {/* Card Header with tabs */}
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  justifyContent: 'space-between',
                  alignItems: { xs: 'flex-start', sm: 'center' },
                  gap: 2,
                  pb: 2.5,
                  borderBottom: '1px solid #EBE7E0',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <div className="w-9 h-9 rounded-xl bg-[#2D2D2D] text-[#FDFCF9] flex items-center justify-center shadow-sm">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <div>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#2D2D2D' }}>
                      Frontend Engine Telemetry & Architecture
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#8C7B6A', display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7E8F7C]"></span>
                      Real-time interactive benchmark demo
                    </Typography>
                  </div>
                </Box>

                {/* Tabs */}
                <Box sx={{ display: 'flex', backgroundColor: '#F5F2EE', p: 0.5, borderRadius: 2 }}>
                  <button
                    onClick={() => setActiveTab('metrics')}
                    className={`px-3 py-1 text-xs font-semibold rounded-md transition-all ${
                      activeTab === 'metrics'
                        ? 'bg-white text-[#2D2D2D] shadow-xs'
                        : 'text-[#8C7B6A] hover:text-[#2D2D2D]'
                    }`}
                  >
                    Core Vitals
                  </button>
                  <button
                    onClick={() => setActiveTab('code')}
                    className={`px-3 py-1 text-xs font-semibold rounded-md transition-all ${
                      activeTab === 'code'
                        ? 'bg-white text-[#2D2D2D] shadow-xs'
                        : 'text-[#8C7B6A] hover:text-[#2D2D2D]'
                    }`}
                  >
                    Clean Code Spec
                  </button>
                  <button
                    onClick={() => setActiveTab('sandbox')}
                    className={`px-3 py-1 text-xs font-semibold rounded-md transition-all ${
                      activeTab === 'sandbox'
                        ? 'bg-white text-[#2D2D2D] shadow-xs'
                        : 'text-[#8C7B6A] hover:text-[#2D2D2D]'
                    }`}
                  >
                    Interactive Tester
                  </button>
                </Box>
              </Box>

              {/* Tab 1: Core Vitals & Metrics */}
              {activeTab === 'metrics' && (
                <Box sx={{ pt: 3 }}>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <Box sx={{ p: 2, backgroundColor: '#FAF8F5', borderRadius: 3, border: '1px solid #EBE7E0' }}>
                      <div className="flex items-center justify-between text-xs text-[#8C7B6A] font-medium mb-1">
                        <span>Lighthouse Performance</span>
                        <Zap className="w-3.5 h-3.5 text-[#7E8F7C]" />
                      </div>
                      <div className="text-2xl font-extrabold text-[#2D2D2D] font-mono">100 / 100</div>
                      <div className="text-[11px] text-[#7E8F7C] font-semibold mt-1">● 0.4s Largest Contentful Paint</div>
                    </Box>

                    <Box sx={{ p: 2, backgroundColor: '#FAF8F5', borderRadius: 3, border: '1px solid #EBE7E0' }}>
                      <div className="flex items-center justify-between text-xs text-[#8C7B6A] font-medium mb-1">
                        <span>Cumulative Layout Shift</span>
                        <Layers className="w-3.5 h-3.5 text-[#7E8F7C]" />
                      </div>
                      <div className="text-2xl font-extrabold text-[#2D2D2D] font-mono">0.000</div>
                      <div className="text-[11px] text-[#7E8F7C] font-semibold mt-1">● Zero Visual Jitter</div>
                    </Box>

                    <Box sx={{ p: 2, backgroundColor: '#FAF8F5', borderRadius: 3, border: '1px solid #EBE7E0' }}>
                      <div className="flex items-center justify-between text-xs text-[#8C7B6A] font-medium mb-1">
                        <span>Interaction to Next Paint</span>
                        <Cpu className="w-3.5 h-3.5 text-[#7E8F7C]" />
                      </div>
                      <div className="text-2xl font-extrabold text-[#2D2D2D] font-mono">&lt; 16ms</div>
                      <div className="text-[11px] text-[#7E8F7C] font-semibold mt-1">● 60-120 FPS Fluidity</div>
                    </Box>

                    <Box sx={{ p: 2, backgroundColor: '#FAF8F5', borderRadius: 3, border: '1px solid #EBE7E0' }}>
                      <div className="flex items-center justify-between text-xs text-[#8C7B6A] font-medium mb-1">
                        <span>Accessibility (a11y)</span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#7E8F7C]" />
                      </div>
                      <div className="text-2xl font-extrabold text-[#2D2D2D] font-mono">100%</div>
                      <div className="text-[11px] text-[#7E8F7C] font-semibold mt-1">● WCAG AAA Compliant</div>
                    </Box>
                  </div>

                  <Box sx={{ mt: 2.5, p: 2, backgroundColor: '#F5F2EE', borderRadius: 2.5, border: '1px solid #EBE7E0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2 }}>
                    <div className="flex items-center gap-2 text-xs text-[#5C544B]">
                      <Sparkles className="w-4 h-4 text-[#7E8F7C]" />
                      <span><strong>Philosophy:</strong> Prioritize natural harmony, semantic contracts, and responsive zero-dependency styling.</span>
                    </div>
                    <Button
                      size="small"
                      variant="outlined"
                      onClick={handleSimulateRender}
                      startIcon={<RefreshCw className="w-3.5 h-3.5" />}
                      sx={{ fontSize: '0.75rem', py: 0.5, px: 1.5, borderColor: '#D8D2C7' }}
                    >
                      Trigger Test Render ({renderCount})
                    </Button>
                  </Box>
                </Box>
              )}

              {/* Tab 2: Clean Code Spec */}
              {activeTab === 'code' && (
                <Box sx={{ pt: 2 }}>
                  <div className="relative rounded-xl bg-[#232220] text-[#EDE8E1] p-4 font-mono text-xs overflow-x-auto border border-[#3D3A36]">
                    <div className="flex items-center justify-between pb-3 border-b border-[#3D3A36] text-[#A6998A]">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#8C7B6A]"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-[#A6998A]"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-[#7E8F7C]"></span>
                        <span className="ml-2 text-[#EDE8E1] font-medium">useFastState.ts</span>
                      </div>
                      <IconButton size="small" onClick={handleCopySnippet} sx={{ color: '#A6998A' }}>
                        {copiedCode ? <Check className="w-3.5 h-3.5 text-[#7E8F7C]" /> : <Copy className="w-3.5 h-3.5" />}
                      </IconButton>
                    </div>
                    <pre className="mt-3 leading-relaxed text-[#EDE8E1]">
{`// Strict type safety with zero-overhead transitions
import { useState, useTransition, useCallback } from 'react';

export function useOptimisticMutation<TData, TVariables>(
  mutationFn: (vars: TVariables) => Promise<TData>,
  rollbackData: TData
) {
  const [data, setData] = useState<TData>(rollbackData);
  const [isPending, startTransition] = useTransition();

  const mutate = useCallback(async (variables: TVariables, optimisticValue: TData) => {
    setData(optimisticValue); // Instant zero-latency UI update
    startTransition(async () => {
      try {
        const result = await mutationFn(variables);
        setData(result);
      } catch (err) {
        setData(rollbackData); // Graceful rollback on failure
      }
    });
  }, [mutationFn, rollbackData]);

  return { data, mutate, isPending };
}`}
                    </pre>
                  </div>
                </Box>
              )}

              {/* Tab 3: Interactive Component Sandbox */}
              {activeTab === 'sandbox' && (
                <Box sx={{ pt: 2 }}>
                  <Box sx={{ p: 3, border: '1px dashed #D8D2C7', borderRadius: 3, backgroundColor: '#FAF8F5' }}>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-[#8C7B6A]">Live State Stress Test</div>
                        <div className="text-sm font-semibold text-[#2D2D2D]">
                          Current Mode: <span className="text-[#7E8F7C] font-bold">{activePreset}</span> (Simulated Latency: {renderLatency}ms)
                        </div>
                      </div>
                      <div className="flex gap-1.5">
                        {(['Standard', 'Optimized', 'Concurrent'] as const).map((mode) => (
                          <button
                            key={mode}
                            onClick={() => {
                              setActivePreset(mode);
                              handleSimulateRender();
                            }}
                            className={`px-3 py-1 text-xs rounded-lg font-medium transition-all ${
                              activePreset === mode
                                ? 'bg-[#2D2D2D] text-[#FDFCF9]'
                                : 'bg-white border border-[#EBE7E0] text-[#5C544B] hover:bg-[#F5F2EE]'
                            }`}
                          >
                            {mode}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="p-3 bg-white rounded-xl border border-[#EBE7E0] shadow-xs">
                        <div className="text-xs text-[#8C7B6A]">Render Counter</div>
                        <div className="text-xl font-bold font-mono text-[#2D2D2D]">{renderCount} cycles</div>
                      </div>
                      <div className="p-3 bg-white rounded-xl border border-[#EBE7E0] shadow-xs">
                        <div className="text-xs text-[#8C7B6A]">FPS Stability</div>
                        <div className="text-xl font-bold font-mono text-[#7E8F7C]">60.0 FPS</div>
                      </div>
                      <div className="p-3 bg-white rounded-xl border border-[#EBE7E0] shadow-xs">
                        <div className="text-xs text-[#8C7B6A]">Memory Allocation</div>
                        <div className="text-xl font-bold font-mono text-[#2D2D2D]">4.2 MB (Clean)</div>
                      </div>
                    </div>

                    <div className="mt-4 flex justify-end">
                      <Button
                        size="small"
                        variant="contained"
                        onClick={handleSimulateRender}
                        startIcon={<Play className="w-3.5 h-3.5" />}
                        sx={{ fontSize: '0.8rem', backgroundColor: '#2D2D2D' }}
                      >
                        Fire State Update
                      </Button>
                    </div>
                  </Box>
                </Box>
              )}
            </Paper>
          </Box>

          {/* Quick Metrics Strip */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
              gap: 3,
              pt: 2,
            }}
          >
            {[
              { label: 'Years of Experience', value: `${profile.yearsExperience}+`, desc: 'Building React & Web Apps' },
              { label: 'Production Projects', value: `${profile.completedProjects}+`, desc: 'Shipped to 100k+ Users' },
              { label: 'Avg Lighthouse Score', value: '99%', desc: 'Top 1% Web Performance' },
              { label: 'Open Source Commits', value: `${profile.openSourceContributions}+`, desc: 'MUI & React Ecosystem' },
            ].map((stat, idx) => (
              <Box
                key={idx}
                sx={{
                  textAlign: 'center',
                  p: 2.5,
                  borderRadius: 3,
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #EBE7E0',
                  boxShadow: '0 2px 8px -2px rgba(92, 84, 75, 0.04)',
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: '1.8rem', md: '2.2rem' },
                    color: '#2D2D2D',
                    letterSpacing: '-0.03em',
                    mb: 0.5,
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                  }}
                >
                  {stat.value}
                </Typography>
                <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#2D2D2D', fontSize: '0.85rem' }}>
                  {stat.label}
                </Typography>
                <Typography variant="caption" sx={{ color: '#8C7B6A', display: 'block', mt: 0.25 }}>
                  {stat.desc}
                </Typography>
              </Box>
            ))}
          </Box>

        </Box>
      </Container>
    </Box>
  );
};
