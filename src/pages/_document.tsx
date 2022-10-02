import Document, { Html, Head, Main, NextScript } from 'next/document';

/* 
	A few parts are documented because its mostly used for SEO and/or PWA on a full real world application.
	Because of that, it will be on comments.
	Same applies to the FONTS section bellow.

	To make it work - under the public folder, do:
	
	1) Create a 'manifest.json' file within PWA app information;
	2) Create an 'assets' folder;
	3) Create 'fonts', 'icons' and 'images' folders under the assets folders (step 2);
	4) Under the 'images' folder, create a folder that contains all splash screens;
	5) Fill all those folders within it relatives contents (use comment code bellow as a reference).
*/

class MyDocument extends Document {
  render() {
    return (
		<Html>
			<Head>
				<meta charSet="utf-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="description" content="GraphStax" />
				<meta name="keywords" content="GraphStax" />

				{/* <!-- Pinned Sites  --> */}
				<meta name='application-name' content='GraphStax' />
				<meta name="msapplication-tooltip" content="Tooltip Text" />
				<meta name="msapplication-starturl" content="/" />

				{/* <!-- iOS --> */}
				<meta name="apple-mobile-web-app-title" content="GraphStax" />
				<meta name='apple-mobile-web-app-capable' content='yes' />
				<meta name="apple-touch-fullscreen" content="yes" /> 
				<meta name='apple-mobile-web-app-status-bar-style' content='black' />
				<meta name='apple-mobile-web-app-title' content='GraphStax' />
				
				{/* <!-- Android  --> */}
				<meta name='theme-color' content='#FFF' />
				<meta name='format-detection' content='telephone=no' />
				<meta name='mobile-web-app-capable' content='yes' />
				
				{/* <!-- Windows  --> */}
				<meta name="msapplication-navbutton-color" content="#0f172a" />
				<meta name="msapplication-TileColor" content="#0f172a" />
				<meta name="msapplication-TileImage" content="ms-icon-144x144.png" />
				<meta name="msapplication-config" content="browserconfig.xml" />
				<meta name="msapplication-tap-highlight" content="no" />
				
				{/* IOS */}
				{/* <link rel='apple-touch-icon' href='/assets/icons/apple-touch-icon-180x180.png' />
				<link rel='apple-touch-icon' sizes='120x120' href='/assets/icons/apple-touch-icon-120x120.png' />
				<link rel='apple-touch-icon' sizes='152x152' href='/assets/icons/apple-touch-icon-152x152.png' />
				<link rel='apple-touch-icon' sizes='167x167' href='/assets/icons/apple-touch-icon-167x167.png' />
				<link rel='apple-touch-icon' sizes='180x180' href='/assets/icons/apple-touch-icon-180x180.png' />

				<link rel="apple-touch-startup-image" href="/images/splash/launch-640x1136.jpeg" />
				
				
				<link rel='icon' type='image/png' sizes='32x32' href='/assets/icons/favicon-32x32.png' />
				<link rel='icon' type='image/png' sizes='16x16' href='/assets/icons/favicon-16x16.png' /> */}
				
				{/* <link rel='manifest' href='/manifest.json' /> */}
				<link rel='shortcut icon' href='/favicon.ico' />				
			


				{/* FONTS */}
				{/* @TODO - Check which font the technical assignment uses and load then here */}

				
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