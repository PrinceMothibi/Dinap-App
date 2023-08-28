import React from 'react';
import Footer from './footer/Footer.js';
import Header from './header/Header.js';
import Content from './content/Content.js';

const Page =() => {
	return (
		<div>
		    <Header/>
			<Content/>
		    <Footer/>
		</div>
	);
};

export default Page;
