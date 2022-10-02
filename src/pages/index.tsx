import styles from '../styles/Home.module.css';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { ReactElement, ReactNode } from 'react';
import FormLayout from '../layouts/FormLayout';
import { Header, Information, Footer } from '../components';


//preventing next serve side render
const Form = dynamic(() => import('../components/form/Form'), {
    ssr: false,
});

/* 	
	that type (NextPageWithLayout) can be exported on 'interfaces' folder,
	since this project only have the index.tsx and description.tsx pages, this tiny piece of code
 	is being copied from _app.tsx. 
	If there were more pages, making it an import, would be a 'must go' codewise.
*/
type NextPageWithLayout = NextPage & {
	getLayout?: (page: ReactElement) => ReactNode
}

const Home: NextPageWithLayout = () => {
	return (
		<>
			<section className='wrapper'>
				<div>
					<Header />
				</div>

				<hr></hr>

				<div>
					<Information />
				</div>

				<div>
					<Form />
				</div>

				<Footer />
			</section>
		</>
	)
}

Home.getLayout = function getLayout(page: ReactElement) {
	return (
		<FormLayout>
			{page}
		</FormLayout>
	)
}

export default Home;