import React, { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  Paper,
  Grid,
  Slider,
  Button,
  Chip,
  IconButton,
  Tooltip
} from '@mui/material';
import {
  Code2,
  Sliders,
  Sparkles,
  RefreshCw,
  Copy,
  Check,
  Zap,
  Layers,
  Palette,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const InteractivePlayground: React.FC = () => {
  const [accentColor, setAccentColor] = useState('#7E8F7C');
  const [borderRadius, setBorderRadius] = useState(14);
  const [elevation, setElevation] = useState(2);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [progressVal, setProgressVal] = useState(78);
  const [copiedTokens, setCopiedTokens] = useState(false);
  const [activePreset, setActivePreset] = useState<'Default' | 'NeoMinimal' | 'SoftPill' | 'Geometric'>('Default');

  const presetHues = [
    { name: 'Sage Leaf', value: '#7E8F7C' },
    { name: 'Warm Charcoal', value: '#2D2D2D' },
    { name: 'Earth Taupe', value: '#8C7B6A' },
    { name: 'Terracotta Warm', value: '#B36B4C' },
    { name: 'Olive Forest', value: '#586854' },
  ];

  const handleApplyPreset = (preset: 'Default' | 'NeoMinimal' | 'SoftPill' | 'Geometric') => {
    setActivePreset(preset);
    if (preset === 'Default') {
      setAccentColor('#7E8F7C');
      setBorderRadius(14);
      setElevation(2);
    } else if (preset === 'NeoMinimal') {
      setAccentColor('#2D2D2D');
      setBorderRadius(6);
      setElevation(4);
    } else if (preset === 'SoftPill') {
      setAccentColor('#8C7B6A');
      setBorderRadius(28);
      setElevation(1);
    } else if (preset === 'Geometric') {
      setAccentColor('#586854');
      setBorderRadius(0);
      setElevation(3);
    }
  };

  const handleTestInteract = () => {
    setButtonLoading(true);
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.8 },
      colors: [accentColor, '#7E8F7C', '#8C7B6A', '#EBE7E0'],
    });
    setTimeout(() => {
      setButtonLoading(false);
    }, 1200);
  };

  const generatedCode = `// Generated Natural Design Tokens & MUI Theme Override
export const customThemeTokens = {
  palette: {
    primary: { main: '${accentColor}' },
    background: { default: '#FDFCF9', paper: '#FFFFFF' },
  },
  shape: {
    borderRadius: ${borderRadius}, // px
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: ${borderRadius},
          boxShadow: '${elevation === 0 ? 'none' : `0 ${elevation * 3}px ${elevation * 8}px -2px rgba(92,84,75,0.08)`}',
          transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
        },
      },
    },
  },
};`;

  const handleCopyTokens = () => {
    navigator.clipboard.writeText(generatedCode);
    setCopiedTokens(true);
    setTimeout(() => setCopiedTokens(false), 2000);
  };

  return (
    <Box
      id="playground"
      sx={{
        py: { xs: 10, md: 14 },
        backgroundColor: '#FAF8F5',
        position: 'relative',
        borderTop: '1px solid #EBE7E0',
      }}
      className="bg-dot-pattern-dense"
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ maxWidth: 720, mb: 6 }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F2EE] border border-[#EBE7E0] text-[11px] font-bold uppercase tracking-widest text-[#8C7B6A] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#7E8F7C]" />
            <span>Interactive Frontend Component Lab</span>
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
            Live Design Token & State Sandbox.
          </Typography>

          <Typography variant="body1" sx={{ color: '#5C544B', fontSize: '1.05rem', lineHeight: 1.65 }}>
            Adjust design tokens and micro-interaction parameters below in real-time. Witness atomic re-renders with zero performance overhead.
          </Typography>
        </Box>

        {/* Main Lab Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Controls Column */}
          <div className="lg:col-span-5">
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, sm: 4 },
                backgroundColor: '#FFFFFF',
                borderRadius: 4,
                border: '1px solid #EBE7E0',
                height: '100%',
              }}
            >
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#EBE7E0]">
                <div className="flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-[#2D2D2D]" />
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#2D2D2D' }}>
                    Token Controls
                  </Typography>
                </div>

                {/* Reset */}
                <button
                  onClick={() => handleApplyPreset('Default')}
                  className="text-xs text-[#8C7B6A] hover:text-[#2D2D2D] flex items-center gap-1"
                >
                  <RefreshCw className="w-3 h-3" /> Reset
                </button>
              </div>

              {/* Style Presets */}
              <div className="mb-5">
                <label className="text-[11px] font-bold text-[#8C7B6A] uppercase tracking-wider block mb-2">
                  Style System Presets
                </label>
                <div className="grid grid-cols-2 gap-1.5">
                  {(['Default', 'NeoMinimal', 'SoftPill', 'Geometric'] as const).map((preset) => (
                    <button
                      key={preset}
                      onClick={() => handleApplyPreset(preset)}
                      className={`px-3 py-2 text-xs rounded-xl font-medium text-left transition-all ${
                        activePreset === preset
                          ? 'bg-[#2D2D2D] text-[#FDFCF9] font-bold'
                          : 'bg-[#F5F2EE] text-[#5C544B] hover:bg-[#EBE7E0] border border-[#EBE7E0]'
                      }`}
                    >
                      {preset}
                    </button>
                  ))}
                </div>
              </div>

              {/* Accent Color Picker */}
              <div className="mb-5">
                <label className="text-[11px] font-bold text-[#8C7B6A] uppercase tracking-wider block mb-2">
                  Primary Accent Token
                </label>
                <div className="flex items-center gap-2 flex-wrap">
                  {presetHues.map((hue) => (
                    <button
                      key={hue.value}
                      onClick={() => setAccentColor(hue.value)}
                      className={`w-7 h-7 rounded-full transition-transform ${
                        accentColor === hue.value ? 'scale-115 ring-2 ring-offset-2 ring-[#2D2D2D]' : 'hover:scale-105'
                      }`}
                      style={{ backgroundColor: hue.value }}
                      title={hue.name}
                    />
                  ))}
                </div>
              </div>

              {/* Border Radius Slider */}
              <div className="mb-5">
                <div className="flex justify-between text-xs font-bold text-[#8C7B6A] uppercase tracking-wider mb-1">
                  <span>Border Radius</span>
                  <span className="font-mono text-[#2D2D2D] lowercase">{borderRadius}px</span>
                </div>
                <Slider
                  value={borderRadius}
                  min={0}
                  max={32}
                  onChange={(_, val) => setBorderRadius(val as number)}
                  sx={{ color: accentColor }}
                />
              </div>

              {/* Elevation Depth */}
              <div className="mb-5">
                <div className="flex justify-between text-xs font-bold text-[#8C7B6A] uppercase tracking-wider mb-1">
                  <span>Shadow Elevation Depth</span>
                  <span className="font-mono text-[#2D2D2D] lowercase">Level {elevation}</span>
                </div>
                <Slider
                  value={elevation}
                  min={0}
                  max={5}
                  step={1}
                  onChange={(_, val) => setElevation(val as number)}
                  sx={{ color: accentColor }}
                />
              </div>

              {/* Progress Slider */}
              <div>
                <div className="flex justify-between text-xs font-bold text-[#8C7B6A] uppercase tracking-wider mb-1">
                  <span>Simulated State Value</span>
                  <span className="font-mono text-[#2D2D2D] lowercase">{progressVal}%</span>
                </div>
                <Slider
                  value={progressVal}
                  min={10}
                  max={100}
                  onChange={(_, val) => setProgressVal(val as number)}
                  sx={{ color: accentColor }}
                />
              </div>
            </Paper>
          </div>

          {/* Live Preview Column */}
          <div className="lg:col-span-7">
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, height: '100%' }}>
              
              {/* Dynamic Render Surface */}
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3, sm: 4 },
                  backgroundColor: '#FFFFFF',
                  borderRadius: 4,
                  border: '1px solid #EBE7E0',
                }}
              >
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#EBE7E0]">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#8C7B6A] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#7E8F7C] animate-pulse"></span>
                    Live Render Preview Surface
                  </span>
                  <span className="text-xs font-mono text-[#8C7B6A]">0 dropped frames</span>
                </div>

                {/* Simulated UI Components Card */}
                <div
                  className="p-6 transition-all duration-300 bg-white"
                  style={{
                    borderRadius: `${borderRadius}px`,
                    boxShadow: elevation === 0 ? 'none' : `0 ${elevation * 4}px ${elevation * 10}px -2px rgba(92,84,75,0.08)`,
                    border: '1px solid #EBE7E0',
                  }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-base font-bold text-[#2D2D2D]">Settlement Velocity Engine</div>
                      <div className="text-xs text-[#8C7B6A]">Autonomous Transaction Pipeline</div>
                    </div>
                    <span
                      className="px-2.5 py-1 text-xs font-bold text-white transition-all duration-300"
                      style={{
                        backgroundColor: accentColor,
                        borderRadius: `${Math.min(borderRadius, 12)}px`,
                      }}
                    >
                      Active
                    </span>
                  </div>

                  {/* Dynamic Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-xs font-medium text-[#5C544B] mb-1">
                      <span>Sync Completion</span>
                      <span className="font-mono font-bold">{progressVal}%</span>
                    </div>
                    <div className="w-full h-2.5 bg-[#F5F2EE] rounded-full overflow-hidden">
                      <div
                        className="h-full transition-all duration-300"
                        style={{
                          width: `${progressVal}%`,
                          backgroundColor: accentColor,
                        }}
                      />
                    </div>
                  </div>

                  {/* Micro Bar Chart Preview */}
                  <div className="mb-6 pt-2">
                    <div className="text-xs text-[#8C7B6A] font-medium mb-2">Throughput Distribution</div>
                    <div className="flex items-end gap-1.5 h-16 pt-2">
                      {[40, 65, 30, 85, 95, 70, 90, 60, progressVal].map((val, i) => (
                        <div
                          key={i}
                          className="flex-1 transition-all duration-300 hover:opacity-80 rounded-t"
                          style={{
                            height: `${(val / 100) * 100}%`,
                            backgroundColor: i === 8 ? accentColor : '#EBE7E0',
                          }}
                          title={`Val: ${val}%`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Interactive Button */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-[#EBE7E0]">
                    <button
                      onClick={handleTestInteract}
                      disabled={buttonLoading}
                      className="px-4 py-2 text-xs font-bold text-white transition-all duration-200 flex items-center gap-2"
                      style={{
                        backgroundColor: accentColor,
                        borderRadius: `${borderRadius}px`,
                      }}
                    >
                      {buttonLoading ? (
                        <>
                          <RefreshCw className="w-3.5 h-3.5 animate-spin" /> Processing...
                        </>
                      ) : (
                        <>
                          <Zap className="w-3.5 h-3.5" /> Trigger State Mutation
                        </>
                      )}
                    </button>

                    <button
                      className="px-4 py-2 text-xs font-semibold text-[#5C544B] bg-[#F5F2EE] border border-[#EBE7E0] hover:bg-[#EBE7E0] transition-all duration-200"
                      style={{
                        borderRadius: `${borderRadius}px`,
                      }}
                    >
                      Reset State
                    </button>
                  </div>
                </div>
              </Paper>

              {/* Code Export Box */}
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  backgroundColor: '#FFFFFF',
                  borderRadius: 4,
                  border: '1px solid #EBE7E0',
                }}
              >
                <div className="flex items-center justify-between mb-2 text-xs">
                  <div className="flex items-center gap-1.5 font-bold text-[#2D2D2D]">
                    <Code2 className="w-4 h-4 text-[#7E8F7C]" />
                    <span>Generated MUI Token Config</span>
                  </div>
                  <Button
                    size="small"
                    variant="outlined"
                    onClick={handleCopyTokens}
                    startIcon={copiedTokens ? <Check className="w-3.5 h-3.5 text-[#7E8F7C]" /> : <Copy className="w-3.5 h-3.5" />}
                    sx={{ fontSize: '0.75rem', py: 0.25, px: 1.25, borderColor: '#EBE7E0', color: '#5C544B' }}
                  >
                    {copiedTokens ? 'Copied' : 'Copy Tokens'}
                  </Button>
                </div>
                <div className="p-3 bg-[#232220] text-[#EDE8E1] font-mono text-[11px] rounded-xl overflow-x-auto border border-[#3D3A36]">
                  <pre>{generatedCode}</pre>
                </div>
              </Paper>

            </Box>
          </div>
        </div>
      </Container>
    </Box>
  );
};
