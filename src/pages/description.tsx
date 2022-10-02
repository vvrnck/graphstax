import styles from '../styles/Description.module.css';
import { NextPage, GetStaticProps, InferGetStaticPropsType, GetStaticPropsResult } from 'next'
import { ReactElement, ReactNode } from 'react'
import FormLayout from '../layouts/FormLayout'
import { useRouter } from 'next/router';
import { IData } from '../interfaces/description';
import { getDescriptionData } from '../pages/api/description';

type TData = {
    data: IData | null
}

const Description = ({ data } : TData) => {
    const router = useRouter();

    const GoBack = () => (
        <button className={styles.back} onClick={() => router.push('/')}>    
            <span className={styles.back__text}>{'<'} Go Back</span>
        </button>
    )

    if (!data) return <GoBack />;

	return (
		<>
			<section className='wrapper'>
                <ul>
                    {Object.keys(data).map((key) => (
                        key === 'description' ?
                            <div key={key}>
                                <li>{key}:</li>
                                <div className={styles.description__example}>
                                    <div dangerouslySetInnerHTML={{ __html: data[key] }}></div>
                                </div>
                            </div>
                        :
                        <li key={key}>
                            {key}: <strong>{!data[key as keyof IData] ? 'null' : data[key as keyof IData]?.toString()}</strong>
                        </li>
                    ))}
                </ul>
                <GoBack />            
			</section>
		</>
	)
}

Description.getLayout = function getLayout(page: ReactElement) {
	return (
		<FormLayout>
			{page}
		</FormLayout>
	)
}

export async function getStaticProps(context : GetStaticProps) : Promise<GetStaticPropsResult<TData>> {
    const data : IData | null = await getDescriptionData();

    return {
      props: { data }
    }
}

export default Description;