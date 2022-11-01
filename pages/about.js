import Head from "next/head";
import AnimatedText from "../Components/AnimatedText";

export default function About() {
	return (
		// <div style={{background: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9)) 0% 0% / cover no-repeat scroll, url("https://i.imgur.com/bduTQyk.png")', backgroundRepeat: 'no-repeat !important', backgroundPosition: 'center !important', backgroundSize: 'cover !important'}} className="text-white flex items-center justify-center min-h-screen">
		<div className="bg-black text-white flex items-center justify-center min-h-screen">
			<Head>
				<title>About - Anton</title>
				<meta name="description" content="About us" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="flex flex-col">
				<AnimatedText text="coming soon:)" />
			</div>
		</div>
	);
}
