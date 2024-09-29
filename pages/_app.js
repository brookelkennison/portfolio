import { useEffect } from 'react';
import Script from 'next/script'; // Import Next.js Script component
import '../styles/globals.css';

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
			<Component {...pageProps} />

			{/* Load ScrollReveal first */}
			<Script
				src='https://unpkg.com/scrollreveal'
				strategy='afterInteractive' // Ensures ScrollReveal is loaded after page is interactive
				onLoad={() => {
					console.log('ScrollReveal loaded');
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
