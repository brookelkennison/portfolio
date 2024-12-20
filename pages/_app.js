import { useEffect } from 'react';
import Script from 'next/script'; // Import Next.js Script component
import '../styles/globals.css';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }) {
	useEffect(() => {
		if (typeof window !== 'undefined' && window.sr) {
			// Initialize ScrollReveal after it's loaded
			window.sr = ScrollReveal();
			window.sr.reveal('.my-element');
		}
	}, []);

	return (
		<>
			<Head>
				<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css' integrity='sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==' crossOrigin='anonymous' referrerPolicy='no-referrer' />
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
			</Head>
			<Component {...pageProps} />

			{/* Load ScrollReveal first */}
			<Script
				src='https://unpkg.com/scrollreveal'
				strategy='afterInteractive' // Ensures ScrollReveal is loaded after page is interactive
				onLoad={() => {
					// Now load main.js after ScrollReveal is ready
					if (document) {
						const mainScript = document.createElement('script');
						mainScript.src = 'main.js';
						mainScript.async = true;
						document.body.appendChild(mainScript);
					}
				}}
			/>
		</>
	);
}
