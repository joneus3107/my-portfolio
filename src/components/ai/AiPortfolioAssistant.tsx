import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  Paper,
  Typography,
  IconButton,
  TextField,
  Button,
  Avatar,
  Chip,
  Tooltip
} from '@mui/material';
import {
  Sparkles,
  X as CloseIcon,
  Send,
  Bot,
  User,
  Zap,
  ChevronDown,
  RotateCcw,
  CheckCircle2
} from 'lucide-react';
import { ProfileData, Project, WorkExperience } from '../../types';

interface AiPortfolioAssistantProps {
  profile: ProfileData;
  projects: Project[];
  experiences: WorkExperience[];
}

interface Message {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  timestamp: string;
}

export const AiPortfolioAssistant: React.FC<AiPortfolioAssistantProps> = ({
  profile,
  projects,
  experiences,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'ai',
      text: `Hello! I'm ${profile.name}'s AI Portfolio Assistant. Ask me anything about ${profile.name}'s React expertise, design systems, projects, or performance achievements.`,
      timestamp: 'Just now',
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const quickQuestions = [
    'Tell me about design system experience',
    'What are the key React & Next.js projects?',
    'What is the availability status?',
    'Generate a hiring pitch for a Lead Frontend role',
  ];

  const handleSendMessage = (textToSend?: string) => {
    const userText = textToSend || input;
    if (!userText.trim()) return;

    const userMsg: Message = {
      id: String(Date.now()),
      sender: 'user',
      text: userText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    setTimeout(() => {
      let reply = '';
      const query = userText.toLowerCase();

      if (query.includes('design system') || query.includes('aurora') || query.includes('component')) {
        reply = `${profile.name} built the enterprise "Aurora UI Design System" featuring 60+ WCAG AAA compliant components, zero-runtime tokens, and automated visual regression testing. It reduced UI delivery turnaround by 40% across 14 distributed squads.`;
      } else if (query.includes('project') || query.includes('next.js') || query.includes('react')) {
        const topProjects = projects.slice(0, 3).map(p => `• **${p.title}**: ${p.tagline}`).join('\n');
        reply = `${profile.name} has architected high-impact projects including:\n\n${topProjects}\n\nAll built with TypeScript, sub-second TTIs, and strict accessibility standards.`;
      } else if (query.includes('availab') || query.includes('hire') || query.includes('rate') || query.includes('start')) {
        reply = `${profile.name} is currently **${profile.availability}** for full-time Senior / Lead Frontend Developer positions, design system contracts, and technical advisory. You can reach out directly at **${profile.email}** or schedule a 15-min sync in the contact section!`;
      } else if (query.includes('pitch') || query.includes('why hire') || query.includes('lead')) {
        reply = `**Why hire ${profile.name}?**\n1. **Sub-second Web Performance**: Cut LCP by 64% and maintains top-1% Core Web Vitals.\n2. **Design-to-Code Mastery**: Bridges Figma and resilient TypeScript component libraries.\n3. **Proven Scale**: 6+ years experience leading frontend initiatives used by 100k+ active users.`;
      } else {
        reply = `${profile.name} is a ${profile.title} with 6+ years specializing in React 19, Next.js, TypeScript, and Material UI. Experience includes leading frontend architecture at Veloce Digital and HyperScale Cloud. Feel free to download the full CV above or reach out at ${profile.email}!`;
      }

      const aiMsg: Message = {
        id: String(Date.now() + 1),
        sender: 'ai',
        text: reply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 650);
  };

  return (
    <Box sx={{ position: 'fixed', bottom: 24, right: 24, zIndex: 1200 }}>
      {/* Collapsed Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2.5 px-4 py-3 bg-[#2D2D2D] text-[#FDFCF9] rounded-full shadow-xl hover:bg-[#1A1918] hover:scale-105 transition-all duration-200 border border-[#43403D]"
        >
          <div className="w-6 h-6 rounded-full bg-[#43403D] flex items-center justify-center">
            <Sparkles className="w-3.5 h-3.5 text-amber-200 animate-pulse" />
          </div>
          <span className="text-xs font-bold tracking-tight">Ask Portfolio AI</span>
        </button>
      )}

      {/* Expanded Chat Window */}
      {isOpen && (
        <Paper
          elevation={4}
          sx={{
            width: { xs: 'calc(100vw - 32px)', sm: 380 },
            height: 500,
            borderRadius: 4,
            backgroundColor: '#FFFFFF',
            border: '1px solid #EBE7E0',
            boxShadow: '0 25px 50px -12px rgba(92, 84, 75, 0.15)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}
        >
          {/* Header */}
          <Box
            sx={{
              p: 2,
              backgroundColor: '#2D2D2D',
              color: '#FDFCF9',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#43403D] text-amber-200 flex items-center justify-center">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold font-serif text-[#FDFCF9]">{profile.name} AI Assistant</div>
                <div className="text-[10px] text-[#D8D2C7]">Ask about skills, projects & availability</div>
              </div>
            </div>

            <IconButton size="small" onClick={() => setIsOpen(false)} sx={{ color: '#FDFCF9' }}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>

          {/* Messages Body */}
          <Box sx={{ p: 2, flexGrow: 1, overflowY: 'auto', backgroundColor: '#FAF8F5' }}>
            <div className="space-y-3">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex gap-2 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {m.sender === 'ai' && (
                    <div className="w-6 h-6 rounded-full bg-[#7E8F7C] text-white flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold">
                      AI
                    </div>
                  )}
                  <div
                    className={`p-3 rounded-2xl text-xs max-w-[82%] leading-relaxed ${
                      m.sender === 'user'
                        ? 'bg-[#2D2D2D] text-[#FDFCF9] rounded-br-xs font-medium'
                        : 'bg-white text-[#2D2D2D] border border-[#EBE7E0] shadow-2xs rounded-bl-xs'
                    }`}
                  >
                    <div className="whitespace-pre-line">{m.text}</div>
                    <div className={`text-[9px] mt-1 text-right ${m.sender === 'user' ? 'text-[#D8D2C7]' : 'text-[#8C7B6A]'}`}>
                      {m.timestamp}
                    </div>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-2 items-center text-xs text-[#8C7B6A] pl-8">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7E8F7C] animate-bounce"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7E8F7C] animate-bounce delay-100"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7E8F7C] animate-bounce delay-200"></span>
                  <span className="text-[10px] ml-1">Analyzing portfolio data...</span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Prompts */}
            {messages.length < 4 && (
              <div className="pt-3 mt-3 border-t border-[#EBE7E0]">
                <div className="text-[10px] font-bold text-[#8C7B6A] uppercase tracking-wider mb-1.5">
                  Suggested Prompts:
                </div>
                <div className="flex flex-col gap-1">
                  {quickQuestions.map((q, i) => (
                    <button
                      key={i}
                      onClick={() => handleSendMessage(q)}
                      className="text-left text-[11px] font-medium text-[#5C544B] bg-white border border-[#EBE7E0] hover:bg-[#F5F2EE] hover:border-[#7E8F7C] p-1.5 rounded-lg transition-colors truncate"
                    >
                      • {q}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </Box>

          {/* Input Footer */}
          <Box sx={{ p: 1.5, borderTop: '1px solid #EBE7E0', backgroundColor: '#FFFFFF' }}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-1.5"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about engineering background..."
                className="flex-1 text-xs py-2 px-3 bg-[#F5F2EE] border border-[#EBE7E0] rounded-xl outline-none focus:ring-1 focus:ring-[#7E8F7C] text-[#2D2D2D] placeholder-[#8C7B6A]"
              />
              <button
                type="submit"
                disabled={!input.trim() || isTyping}
                className="p-2 rounded-xl bg-[#2D2D2D] text-[#FDFCF9] disabled:opacity-40 hover:bg-[#1A1918] transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </Box>
        </Paper>
      )}
    </Box>
  );
};
