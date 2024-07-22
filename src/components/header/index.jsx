'use client';

import { SunSmile } from '@/components/icons/SunSmile';
import { cn } from '@/libs/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Button from '../button';
import { gsap } from '@/libs/gsap';
import { useLenis } from '@/libs/lenis';

export const Header = () => {
	const path = usePathname();

	const navs = [
		{
			path: '/',
			title: 'My work',
		},
		{
			path: '/about',
			title: 'About',
		},
		{
			path: '/contact',
			title: 'Contact',
		},
		{
			path: '/life',
			title: 'Life',
		},
	];

	// useLenis(() => {
	// 	gsap.to(contentRef.current, {
	// 		scale: 1 - window.scrollY / 1200, // Thay đổi tỷ lệ khi cuộn
	// 		ease: 'power1.out',
	// 		y: () => -window.scrollY * 0.85,
	// 		duration: 1,
	// 	});
	// });

	return (
		<div className="w-full py-6 px-20 bg-transparent fixed top-0 left-0 flex items-center justify-between z-50">
			<div className="flex-1">
				<SunSmile />
			</div>
			<nav className="flex-1 flex justify-center">
				<ul className="flex items-center gap-8">
					{navs.map((nav) => (
						<li key={nav.path}>
							<Link
								href={'/'}
								className={cn(
									'leading-7 font-medium text-2xl pb-2.5 text-purple-2 py-3 hover:border-b-3 hover:border-b-accent-3 hover:text-accent-3 transition-all ease-linear duration-100',
									path === nav.path && 'border-b-3 border-b-accent-3 text-accent-3'
								)}
							>
								{nav.title}
							</Link>
						</li>
					))}
				</ul>
			</nav>
			<div className="flex-1 flex justify-end">
				<Button title="Get in touch" />
			</div>
		</div>
	);
};
