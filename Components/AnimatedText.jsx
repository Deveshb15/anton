import { motion } from "framer-motion";
import React from "react";

const AnimatedText = ({ text }) => {
	const words = text.split(" ");

	const container = {
		hidden: { opacity: 0 },
		visible: (i = 1) => ({
			opacity: 1,
			transition: { staggerChildren: 0.4, delayChildren: 0.001 * i },
		}),
	};

	const child = {
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				type: "spring",
				damping: 12,
				stiffness: 100,
			},
		},
		hidden: {
			opacity: 0,
			x: 20,
			transition: {
				type: "spring",
				damping: 12,
				stiffness: 100,
			},
		},
	};

	return (
		<motion.div 
            className="overflow-hidden flex flex-col min-h-screen items-center justify-center gap-4"
            variants={container}
            initial="hidden"
            animate="visible"
        >
			{words.map((word, i) => {
				return (
					<motion.span variants={child} className="ml-4 text-2xl font-normal" key={i}>
						{word}
					</motion.span>
				);
			})}
		</motion.div>
	);
};

export default AnimatedText;
