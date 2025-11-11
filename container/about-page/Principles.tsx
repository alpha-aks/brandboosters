import Image from "next/image";
import { principles1, principles2 } from "@/public";

export default function Principles() {
	return (
		<section className="w-full padding-y rounded-t-[20px] bg-background">
			<div>
				<h1 className="sub-heading padding-x font-medium font-NeueMontreal text-secondry mb-[50px]">
					Core principles that drive our approach to
					<br className="sm:hidden xm:hidden" /> marketing and branding excellence:
				</h1>
			</div>
			<div className="w-full border-t border-[#21212155]">
				<div className="w-full padding-x mt-[50px] flex justify-between gap-[30px] items-center sm:flex-col xm:flex-col">
					<div className="w-[50%] sm:w-full xm:w-full flex flex-col gap-[20px]">
						<Image
							src={principles1}
							alt="img"
							className="w-full rounded-[15px]"
						/>
						<div className="flex flex-col gap-[20px]">
							<p className="paragraph font-NeueMontreal text-secondry">
								Every brand has a unique story that deserves to be<br />
								told in a way that captivates and converts.
								<br /> We combine data-driven insights with creative<br />
								excellence to craft compelling brand narratives.
							</p>
						</div>
					</div>
					<div className="w-[50%] sm:w-full xm:w-full flex flex-col gap-[20px]">
						<Image
							src={principles2}
							alt="img"
							className="w-full rounded-[15px]"
						/>
						<div className="flex flex-col gap-[20px]">
							<p className="paragraph font-NeueMontreal text-secondry">
								Great marketing reveals the extraordinary in the<br />
								ordinary. We transform complex ideas into clear,<br />
								impactful messages that resonate with your audience<br />
								and drive meaningful engagement.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
