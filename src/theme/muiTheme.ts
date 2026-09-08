import { createTheme } from '@mui/material/styles';

export const FONT_CAVEAT = '"Caveat", cursive, sans-serif'
export const FONT_NEWSREADER = '"Newsreader", Georgia, "Playfair Display", serif'
export const FONT_PLUS_JAKARTA = '"Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'

export const createAppTheme = () => {
  return createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#2D2D2D',
        light: '#4A453E',
        dark: '#1A1918',
        contrastText: '#FDFCF9',
      },
      secondary: {
        main: '#7E8F7C',
        light: '#9EB09C',
        dark: '#5C6D5A',
        contrastText: '#FFFFFF',
      },
      background: {
        default: '#FDFCF9',
        paper: '#FFFFFF',
      },
      text: {
        primary: '#2D2D2D',
        secondary: '#6E645A',
        disabled: '#A6998A',
      },
      divider: '#EBE7E0',
    },
    typography: {
      fontFamily: FONT_PLUS_JAKARTA,
      h1: {
        fontFamily: FONT_CAVEAT,
        fontWeight: 600,
        letterSpacing: '0.01em',
        lineHeight: 1.15,
      },
      h2: {
        fontSize: '2.5rem',
        fontFamily: FONT_CAVEAT,
        fontWeight: 600,
        letterSpacing: '0.01em',
        lineHeight: 1.2,
        color: '#2D2D2D',
        marginBottom: '1.5rem',
        '@media (min-width:600px)': {
          fontSize: '3.4rem',
        },
      },
      h3: {
        fontFamily: FONT_NEWSREADER,
        fontWeight: 600,
        letterSpacing: '-0.02em',
        lineHeight: 1.22,
      },
      h4: {
        fontWeight: 600,
        letterSpacing: '-0.015em',
        lineHeight: 1.3,
      },
      h5: {
        fontWeight: 600,
        letterSpacing: '-0.01em',
      },
      h6: {
        fontWeight: 600,
      },
      subtitle1: {
        fontSize: '1.05rem',
        lineHeight: 1.6,
        letterSpacing: '-0.01em',
        color: '#5C544B',
        fontWeight: 700
      },
      body1: {
        fontSize: '0.975rem',
        lineHeight: 1.65,
        color: '#2D2D2D',
      },
      body2: {
        fontSize: '0.875rem',
        lineHeight: 1.55,
        color: '#6E645A',
      },
      button: {
        textTransform: 'none',
        fontWeight: 600,
        letterSpacing: '-0.01em',
      },
    },
    shape: {
      borderRadius: 14,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            padding: '9px 20px',
            fontSize: '0.9rem',
            transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
            boxShadow: 'none',
            '&:hover': {
              boxShadow: '0 4px 14px 0 rgba(92, 84, 75, 0.1)',
            },
          },
          contained: {
            backgroundColor: '#2D2D2D',
            color: '#FDFCF9',
            '&:hover': {
              backgroundColor: '#1A1918',
              transform: 'translateY(-1px)',
            },
          },
          outlined: {
            borderColor: '#EBE7E0',
            color: '#2D2D2D',
            backgroundColor: '#FFFFFF',
            '&:hover': {
              borderColor: '#7E8F7C',
              backgroundColor: '#F5F2EE',
              transform: 'translateY(-1px)',
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 16,
            backgroundColor: '#FFFFFF',
            border: '1px solid #EBE7E0',
            boxShadow: '0 1px 3px 0 rgba(92, 84, 75, 0.04)',
            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            '&:hover': {
              borderColor: '#7E8F7C',
              boxShadow: '0 12px 30px -8px rgba(92, 84, 75, 0.09)',
            },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
            borderColor: '#EBE7E0',
          },
          rounded: {
            borderRadius: 16,
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            fontWeight: 500,
            fontSize: '0.785rem',
            letterSpacing: '-0.01em',
            backgroundColor: '#F5F2EE',
            color: '#5C544B',
          },
          outlined: {
            borderColor: '#EBE7E0',
            backgroundColor: '#FFFFFF',
            color: '#5C544B',
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-root': {
              borderRadius: 12,
              backgroundColor: '#FFFFFF',
              transition: 'all 0.2s ease',
              '& fieldset': {
                borderColor: '#EBE7E0',
              },
              '&:hover fieldset': {
                borderColor: '#8C7B6A',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#7E8F7C',
                borderWidth: '1.5px',
              },
            },
          },
        },
      },
      MuiDialog: {
        styleOverrides: {
          paper: {
            borderRadius: 20,
            border: '1px solid #EBE7E0',
            boxShadow: '0 25px 60px -15px rgba(92, 84, 75, 0.16)',
            backgroundColor: '#FDFCF9',
          },
        },
      },
      MuiTabs: {
        styleOverrides: {
          indicator: {
            backgroundColor: '#7E8F7C',
            height: 2.5,
            borderRadius: 2,
          },
        },
      },
      MuiTab: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            fontWeight: 600,
            fontSize: '0.925rem',
            color: '#8C7B6A',
            '&.Mui-selected': {
              color: '#2D2D2D',
            },
          },
        },
      },
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            backgroundColor: '#2D2D2D',
            color: '#FDFCF9',
            fontSize: '0.75rem',
            borderRadius: 8,
            padding: '6px 12px',
          },
          arrow: {
            color: '#2D2D2D',
          },
        },
      },
      MuiTypography: {
        defaultProps: {
          variantMapping: {
            subtitle1: 'p',
            subtitle2: 'p',
          }
        },
        styleOverrides: {
          root: ({ theme }) => ({
          '&.color-secondary-main': {
            color: theme.palette.secondary.main,
          },
        }),
        },
      }
    },
  });
};
