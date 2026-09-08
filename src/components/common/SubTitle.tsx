import { ReactNode } from 'react'
import { Typography } from '@mui/material'
import { FONT_CAVEAT } from '@/src/theme/muiTheme'

interface SubTitleProps {
	children: ReactNode
}

function SubTitle({ children }: SubTitleProps) {
	return (
		<Typography component='h3' sx={{ 
			fontWeight: 600,
			fontFamily: FONT_CAVEAT,
			fontSize: '2.1rem',
			color: 'theme.pallete.primary.main',
			mb: 0.5 
		}}>
			{children}
		</Typography>
	)
}

export default SubTitle
