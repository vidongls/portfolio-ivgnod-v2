import { PersonName } from '@/components/icons/PersonName';

const MainSection = () => {
	return (
		<div className="w-screen h-screen bg-purple pt-[104px] flex flex-col items-center justify-center text-center">
			<h2 className="font-semibold text-[64px] text-accent-3 leading-[76px] text-center tracking-tighter mb-10">
				UX
				<span className="ml-2.5 px-10 inline-block text-primary bg-gradient-primary rounded-tl-[10px] rounded-bl-[10px] rounded-tr-[40px] rounded-br-sm">
					DESIGNER
				</span>
			</h2>
			<p className="text-2xl text-accent-3 leading-9 mb-20">
				👋 Hi! My name is Quyen and i am a Product Designer dedicated <br /> to crafting mindful solutions.
			</p>
			<PersonName />
		</div>
	);
};

export default MainSection;
