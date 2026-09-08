import {ReactNode} from 'react'
import { Typography } from '@mui/material'

interface IconTitleProps {
	icon: ReactNode
	children: ReactNode
}

function IconTitle({ icon, children }: IconTitleProps) {
	return (
		<div className="flex items-center gap-2 mb-3">
			<div className="w-8 h-8 rounded-lg bg-[#2D2D2D] text-[#FDFCF9] flex items-center justify-center">
				{icon}
			</div>
			<Typography component="h4" variant="subtitle1" sx={{ color: '#2D2D2D' }}>
				{children}
			</Typography>
		</div>
	)
}

export default IconTitle
