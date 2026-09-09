import { ReactNode } from 'react'

interface ResumeIconTextProps {
	icon?: ReactNode,
	children: ReactNode
}

function ResumeIconText({icon, children}: ResumeIconTextProps) {
	return (
		<p className="flex sm:justify-end items-center gap-1.5">
			{icon}
			<span>{children}</span>
		</p>
	)
}

export default ResumeIconText
