import { ReactNode } from 'react';

interface SectionTagProps {
  icon?: ReactNode;
  children: ReactNode;
}

function SectionTag({icon, children}: SectionTagProps) {
	return (
		<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F2EE] border border-[#EBE7E0] text-[11px] font-bold uppercase tracking-widest text-[#8C7B6A] mb-3" aria-hidden="true">
			{icon}
			<span>{children}</span>
		</div>
	)
}

export default SectionTag


