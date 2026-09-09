import { ReactNode } from 'react'

interface ResumeTitleProps {
	children: ReactNode
}

function ResumeTitle({ children }: ResumeTitleProps) {
	return (
		<h2 className="text-sm font-bold uppercase tracking-wider text-zinc-900 mb-2 border-b border-zinc-200 pb-1">
			{ children }
		</h2>
	)
}

export default ResumeTitle
