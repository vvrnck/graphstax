import { useRouter } from 'next/router';
import styles from '../../styles/Information.module.css';

const Information : React.FC = () => {

    const router = useRouter();

    return (
        <>
            <div className={styles.information}>
                <span>This pipeline belongs to</span>

                <div className={styles.information__main}>
                    <span>Workwolf</span>
                    <span>Toronto, Canada</span>
                </div>

                <span className={styles.information__description} onClick={() => router.push('/description')}>
                    View Job Description
                </span>
            </div>
        </>
    );
}

export default Information;