import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  IconButton,
  Typography,
  Box,
  Button,
  TextField,
  Alert
} from '@mui/material';
import { X as CloseIcon, Calendar, Clock, Video, CheckCircle2, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface CoffeeChatModalProps {
  open: boolean;
  onClose: () => void;
  developerName: string;
}

export const CoffeeChatModal: React.FC<CoffeeChatModalProps> = ({ open, onClose, developerName }) => {
  const [selectedDate, setSelectedDate] = useState('Tomorrow');
  const [selectedSlot, setSelectedSlot] = useState('10:00 AM PST');
  const [guestEmail, setGuestEmail] = useState('');
  const [guestName, setGuestName] = useState('');
  const [isBooked, setIsBooked] = useState(false);

  const dates = ['Tomorrow (Tue)', 'Wednesday', 'Thursday', 'Friday'];
  const timeSlots = ['09:30 AM PST', '10:00 AM PST', '01:30 PM PST', '03:00 PM PST', '04:30 PM PST'];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestEmail) return;
    setIsBooked(true);
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  const handleReset = () => {
    setIsBooked(false);
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
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
          <div className="w-7 h-7 rounded-lg bg-zinc-900 text-white flex items-center justify-center">
            <Video className="w-3.5 h-3.5" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-zinc-600">Quick Sync</span>
        </div>

        <Typography variant="h5" sx={{ fontWeight: 800, color: 'text.primary', mb: 0.5 }}>
          Book a 15-Min Intro Chat
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Choose a convenient time to discuss frontend roles, project scope, or technical consulting with {developerName}.
        </Typography>
      </Box>

      <DialogContent sx={{ p: 2.5, pt: 0 }}>
        {isBooked ? (
          <Box sx={{ textAlign: 'center', py: 4 }}>
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center mb-3">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <Typography variant="h6" sx={{ fontWeight: 800, color: 'text.primary', mb: 1 }}>
              Meeting Scheduled!
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', maxWidth: 360, mx: 'auto', mb: 3 }}>
              Google Meet invite sent to <strong>{guestEmail}</strong> for <strong>{selectedDate} at {selectedSlot}</strong>.
            </Typography>
            <Button variant="contained" onClick={handleReset} sx={{ borderRadius: 3 }}>
              Done
            </Button>
          </Box>
        ) : (
          <form onSubmit={handleBooking} className="space-y-4">
            {/* Date Selection */}
            <div>
              <label className="text-xs font-bold text-zinc-700 block mb-1.5 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" /> Select Date
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                {dates.map((d) => (
                  <button
                    type="button"
                    key={d}
                    onClick={() => setSelectedDate(d)}
                    className={`py-2 px-2 text-xs rounded-xl font-medium border text-center transition-all ${
                      selectedDate === d
                        ? 'bg-zinc-900 text-white border-zinc-900 font-bold'
                        : 'bg-zinc-50 text-zinc-700 border-zinc-200 hover:bg-zinc-100'
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            {/* Time Slot */}
            <div>
              <label className="text-xs font-bold text-zinc-700 block mb-1.5 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> Select Time Slot (15 mins)
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
                {timeSlots.map((slot) => (
                  <button
                    type="button"
                    key={slot}
                    onClick={() => setSelectedSlot(slot)}
                    className={`py-2 px-2 text-xs rounded-xl font-medium border text-center transition-all ${
                      selectedSlot === slot
                        ? 'bg-zinc-900 text-white border-zinc-900 font-bold'
                        : 'bg-zinc-50 text-zinc-700 border-zinc-200 hover:bg-zinc-100'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            {/* Attendee Details */}
            <div className="pt-2 border-t border-zinc-100 space-y-3">
              <TextField
                size="small"
                fullWidth
                required
                label="Your Name"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                placeholder="e.g. Sarah Connor"
              />
              <TextField
                size="small"
                fullWidth
                required
                type="email"
                label="Your Work Email"
                value={guestEmail}
                onChange={(e) => setGuestEmail(e.target.value)}
                placeholder="sarah@company.com"
              />
            </div>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              sx={{ mt: 2, py: 1.25, fontWeight: 700 }}
            >
              Confirm 15-Min Sync
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};
