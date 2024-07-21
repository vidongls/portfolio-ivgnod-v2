'use client';

import { Header } from '@/components/header';
import { LoadingFullPage } from '@/components/loading-full';
import { ReactLenis } from '@/libs/lenis';
import { Suspense } from 'react';

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
