'use client';

import { PersonName } from '@/components/icons/PersonName';
import Image from 'next/image';
import { gsap, useGSAP, ScrollTrigger } from '@/libs/gsap';
import { useLenis } from '@/libs/lenis';
import { useRef } from 'react';

const MainSection = () => {
	const contentRef = useRef(null);

	useLenis(() => {
		gsap.to(contentRef.current, {
			scale: 1 - window.scrollY / 1600, // Thay đổi tỷ lệ khi cuộn
			ease: 'power1.out',
			y: () => -window.scrollY,
			duration: 1,
		});
	});

	return (
		<section
			className="panel w-screen h-screen bg-purple pt-[104px] text-center flex flex-col items-center justify-center "
			id="main-section"
		>
			<div className="flex flex-col items-center justify-center" ref={contentRef}>
				<h2 className="font-semibold text-[64px] text-accent-3 leading-[76px] text-center tracking-tighter mb-10">
					UX
					<span className="ml-2.5 px-10 inline-block text-primary bg-gradient-primary rounded-tl-[10px] rounded-bl-[10px] rounded-tr-[40px] rounded-br-sm">
						DESIGNER
					</span>
				</h2>
				<p className="text-2xl text-accent-3 leading-9 mb-20">
					<Image
						src={'/icons/handshake.svg'}
						alt="Say hi Le Minh Quyen"
						width={24}
						height={36}
						className="inline mb-1"
					/>
					Hi! My name is Quyen and i am a Product Designer dedicated <br /> to crafting mindful solutions.
				</p>
				<PersonName />
				<h1 className="absolute left-[-9999px]">Le Minh Quyen</h1>
			</div>
		</section>
	);
};

export default MainSection;
