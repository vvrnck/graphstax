import Image from 'next/image';
import styles from '../../styles/Header.module.css';

const Header : React.FC = () => {
    return (
        <>
            <header className={styles.header}>
                <span className={styles.header__image}>
                    <Image 
                        src='/vercel.svg'
                        width={80} 
                        height={40}
                        alt="graphstax_logo" 
                    />
                </span>
                
                <h1 className={styles.header__title}>GraphStax</h1>
            </header>
        </>
    )
}

export default Header;