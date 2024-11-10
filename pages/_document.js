// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<Html lang='en'>
				<Head>
					{/* Google Fonts */}
					<meta name='viewport' content='width=device-width, initial-scale=1.0' />
					<link href='https://fonts.googleapis.com/css2?family=Londrina+Outline&family=Londrina+Shadow&display=swap' rel='stylesheet' />
					<link href='https://fonts.googleapis.com/css2?family=Londrina+Outline&family=Londrina+Shadow&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap' rel='stylesheet' />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
