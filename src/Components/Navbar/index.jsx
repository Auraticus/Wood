import styles from './styles.module.css'
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
    const navigate = useNavigate();

    return (
        <nav className={styles.navbar}>
            <a href="/" className={styles.logo}>

            </a>
            <ul className={styles.navLinks}>
                <li>
                    <button onClick={() => navigate('/gallery')} className={styles.navButton}>
                        Gallery
                    </button>
                </li>
                <li>
                    <button onClick={() => navigate('/prices')} className={styles.navButton}>
                        Prices for services
                    </button>
                </li>
                <li>
                    <button onClick={() => navigate('/about')} className={styles.navButton}>
                        About us
                    </button>
                </li>
                <li>
                    <button onClick={() => navigate('/contact')} className={styles.navButton}>
                        Contact
                    </button>
                </li>
            </ul>
        </nav>
    );
}
