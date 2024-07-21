'use client';

import { Header } from '@/components/header';
import { LoadingFullPage } from '@/components/loading-full';
import { ReactLenis } from '@/libs/lenis';
import { Suspense } from 'react';

export const metadata = {
	title: 'Le Minh Quyen Portfolio',
	description: 'Đây là trang web về Lê Minh Quyền',
	keywords: '',
	metadataBase: 'https://portfolio-ivgnod-v2.vercel.app',
	openGraph: {
		title: 'Le Minh Quyen Portfolio',
		description: 'Đây là trang web về Lê Minh Quyền',
		url: '',
		images: {
			url: '/images/hero-name2.png',
			width: '100%',
			height: '100%',
		},
	},
	twitter: {
		title: 'Le Minh Quyen Portfolio',
		description: 'Đây là trang web về Lê Minh Quyền',
		images: {
			url: '/images/hero-name2.png',
			width: '100%',
			height: '100%',
		},
	},
};

export default function Layout({ children }) {
	return (
		<ReactLenis root>
			<Suspense fallback={<LoadingFullPage />}>
				<div className="flex min-h-full flex-col overflow-x-hidden">
					<Header />
					<main className="h-full">{children}</main>
				</div>
			</Suspense>
			<LoadingFullPage />
		</ReactLenis>
	);
}
