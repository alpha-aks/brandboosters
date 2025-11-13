import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { BackgroundImg, Rounded } from "@/components";

export default function Hero() {
	return (
		<section className="w-full rounded-b-[20px]">
			<div className="w-full pb-[200px]">
				<div className="w-full flex flex-col">
					<div className="w-full margin padding-x">
						<div>
							<h1 className="heading tracking-[-1.3px] text-[#212121] font-semibold font-FoundersGrotesk uppercase">
								<div className="flex items-center gap-[5px]">
									<motion.span
										initial={{ width: 0 }}
										animate={{ width: "auto" }}
										transition={{
											ease: [0.86, 0, 0.07, 0.995],
											duration: 1,
											delay: 0.5,
										}}
										className="leading-[130px]">
										<Image
											width={120}
											height={50}
											src="https://cdn.discordapp.com/attachments/1437492837225861312/1438417014715846657/ABS2GSmqQ7L8p2Lca6XI64rS5LCd0kxt74QeqWTWJaJ23s0rJ6besm7iDdoFxS940QdicS3uNMjoa-qKdi2sgh4gUvNyR-7cvtKSCrkJOMDRvXBYRKeVHXjlyF67OZVQu2uYSGrrR39mp-MMlihxzvJr1aF0URMMJt1TYCuNy-JGbfyNUldQBws1024-rj.png?ex=6916cdbc&is=69157c3c&hm=7b5a24a25e2dea712e5c0d640affa909bd99743b2b264dec41c0c6891dc0980d&=&format=webp&quality=lossless&width=1702&height=1702"
											alt="SEO Services"
											className="w-auto h-[95px] lg:w-auto lg:h-auto md:w-[100px] md:h-[63px] sm:w-[74px] sm:h-[45px] xm:w-[64px] xm:h-[40px] object-cover xl:mt-[15px] mt-[10px] rounded-[10px]"
										/>
									</motion.span>
									<h1 className="heading tracking-[-1.3px] text-[#212121] font-semibold font-FoundersGrotesk uppercase">
										SEO Services
									</h1>
								</div>
							</h1>
						</div>
					</div>
					<div className="w-full border-t border-[#21212155] pt-[20px] ">
						<div className="w-full flex justify-between sm:gap-[25px] xm:gap-[25px] padding-x sm:flex-col xm:flex-col">
							<div className="w-[50%] sm:w-full xm:w-full">
								<h3 className="paragraph font-medium text-secondry font-NeueMontreal">
									Description:
								</h3>
							</div>
							<div className="w-[50%] sm:w-full xm:w-full sm:flex-col xm:flex-col flex gap-[20px]">
								<div className="w-full flex flex-col gap-y-[40px]">
									<p className="paragraph font-NeueMontreal text-secondry">
										Our comprehensive SEO services are designed to improve your website's visibility and drive organic traffic. 
										We combine technical expertise with creative strategies to help your business rank higher in search results.
									</p>
									<div className="flex items-center gap-[20px]">
										<div className="w-[70px] h-[1px] bg-secondry"></div>
										<Link href="/contact" className="text-secondry">
											Get in touch
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="w-full padding-x">
				<div className="w-full h-[1px] bg-secondry"></div>
			</div>
		</section>
	);
}
