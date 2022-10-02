import styles from '../../styles/Footer.module.css';

const Footer : React.FC = () => {
    return (
        <>
            <div className={styles.footer}>
                <div className={styles.footer__account}>
                    <div></div>
                    <div>Already have an account?</div>
                    <div></div>
                </div>

                <div className='align__center'>
                    <button className={styles.footer__button} onClick={() => alert('should go to sign in')}>
                        Sign In
                    </button>
                </div>
            </div>
        </>
    )
}

export default Footer;