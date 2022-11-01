import Head from "next/head";

export default function Careers() {
	return (
		// <div style={{background: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9)) 0% 0% / cover no-repeat scroll, url("https://i.imgur.com/bduTQyk.png")', backgroundRepeat: 'no-repeat !important', backgroundPosition: 'center !important', backgroundSize: 'cover !important'}} className="text-white flex items-center justify-center min-h-screen">
		<div className="bg-black text-white flex items-center justify-center min-h-screen">
			<Head>
				<title>Careers - Anton</title>
				<meta name="description" content="We are hiring!" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="flex flex-col text-base md:text-xl font-normal">
				<p>
					we are currently hiring UI/UX designers🎨, and backend developers⚒️, reach
					out with proof of work to{" "}
					<a
                        className="hover:underline"
						href="https://twitter.com/0xsohom"
						target="_blank"
						rel="noreferrer"
					>
						@sohom
					</a>
				</p>
			</div>
		</div>
	);
}
