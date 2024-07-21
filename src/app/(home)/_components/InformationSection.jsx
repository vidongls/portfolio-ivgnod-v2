import { WhyDesign } from '@/components/icons/WhyDesign';
import React from 'react';

const InformationSection = () => {
	return (
		<section className="panel w-screen h-screen bg-primary py-20 px-10 text-center flex flex-col items-center justify-center pt-[104px]">
			<h2 className="text-accent-5 absolute left-[-99999px]">Why Design?</h2>
			<WhyDesign />
			<div className="bg-secondary rounded-sm w-full mt-10 xl:mt-20 p-10 flex gap-x-10">
				<div className="w-full">
					<div className="rounded-3xl bg-accent flex flex-col items-center justify-center text-primary mb-10 py-[18px]">
						<span className="font-bold text-5xl leading-[72px]">20+</span>
						<p className="text-base leading-6">Projects completed</p>
					</div>
					<div className="rounded-3xl bg-accent-2 flex flex-col items-center justify-center text-primary py-[18px]">
						<span className="font-bold text-5xl leading-[72px]">2.5 years</span>
						<p className="text-base leading-6">Of experience</p>
					</div>
				</div>
				<div className="bg-accent-4 text-[32px] leading-[48px] text-primary tracking-tighter rounded-3xl flex items-center justify-center text-left px-6">
					UX Design creates something that contributes to a better future. I enjoy contributing to a product
					or service.
				</div>
			</div>
		</section>
	);
};

export default InformationSection;
