import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'

export default function Home() {
  return (
    // <div style={{background: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9)) 0% 0% / cover no-repeat scroll, url("https://i.imgur.com/bduTQyk.png")', backgroundRepeat: 'no-repeat !important', backgroundPosition: 'center !important', backgroundSize: 'cover !important'}} className="text-white flex items-center justify-center min-h-screen">
    <div className="bg-black text-white flex px-4 sm:px-8 md:px-12 xl:px-16 py-4 sm:pt-8"> 
      <Head>
        <title>Anton</title>
        <meta name="description" content="we are drowning in information, but starving for answers." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-20ZJE8X981"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-20ZJE8X981');
        `}
      </Script>

      <div className='flex flex-col'>
        {/* <AnimatedText text1="we are drowning in information," text2="but starving for answers." /> */}
        <div>
          <h1 className='text-[16px] md:text-[24px] font-semibold text-[#D7E5CF]'>why are we doing this?</h1>
          {/* <img className='py-4 md:py-8 w-[500px] h-[300px] md:h-auto' src='https://i.imgur.com/bduTQyk.png' alt="we are drowning" /> */}
          <div className='my-3 md:my-6 w-[300px] h-[300px] md:w-[500px] md:h-[500px] relative'>
            <Image src='/mvp.png' alt="mvp" layout='fill' objectFit='cover' />
          </div>
          <div className='flex flex-col justify-center items-start gap-2  '>
            <Link href='/about'>
              <p className='hover:underline text-[#D7E5CF] text-[14px] md:text-base'>know more about us</p>
            </Link>
            <Link href='/careers'>
              <p className='hover:underline text-[#D7E5CF] text-[14px] md:text-base'>interested? we are hiring⚡</p>
            </Link>
            {/* <button className='px-6 py-2 bg-black text-white border rounded-xl transform transition-all hover:scale-105 hover:bg-white hover:text-black'>register</button> */}
            {/* <button className='px-6 py-2 bg-black text-white border rounded-xl transform transition-all hover:scale-105 hover:bg-white hover:text-black'>join us!</button> */}
          </div>
        </div>
      </div>
    </div>
  )
}
