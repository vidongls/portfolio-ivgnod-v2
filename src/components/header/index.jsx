'use client';

import { SunSmile } from '@/components/icons/SunSmile';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Button from '../button';

export const Header = () => {
	const path = usePathname();
	console.log('🧙 ~ path:', path);

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

	return (
		<div className="w-full py-6 px-20 bg-transparent fixed top-0 left-0 flex items-center justify-between">
			<SunSmile />
			<nav>
				<ul className="flex items-center gap-8">
					{navs.map((nav) => (
						<li key={nav.path}>
							<Link
								href={'/'}
								className={cn(
									'leading-7 font-medium text-2xl pb-2.5 text-purple-2 py-3 hover:border-b-3 hover:border-b-accent-3 hover:text-accent-3 transition-all ease-linear duration-150',
									path === nav.path && 'border-b-3 border-b-accent-3 text-accent-3'
								)}
							>
								{nav.title}
							</Link>
						</li>
					))}
				</ul>
			</nav>
			<div>
				<Button title="Get in touch" />
			</div>
		</div>
	);
};