import Head from "next/head";
import Link from "next/link";
import AnimatedText from "../Components/AnimatedText";

export default function About() {
	return (
		// <div style={{background: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9)) 0% 0% / cover no-repeat scroll, url("https://i.imgur.com/bduTQyk.png")', backgroundRepeat: 'no-repeat !important', backgroundPosition: 'center !important', backgroundSize: 'cover !important'}} className="text-white flex items-center justify-center min-h-screen">
		<div className="bg-black text-white flex items-center justify-center min-h-screen relative">
			<Head>
				<title>About - Anton</title>
				<meta name="description" content="About us" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

            <Link href="/" className="absolute top-10 left-10">
				<svg
					stroke="currentColor"
					fill="currentColor"
					strokeWidth="0"
					viewBox="0 0 512 512"
					height="1.25em"
					width="1.25em"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill="none"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="48"
						d="M244 400L100 256l144-144M120 256h292"
					></path>
				</svg>
			</Link>
			<div className="flex flex-col">
				<AnimatedText text="coming soon:)" />
			</div>
		</div>
	);
}
