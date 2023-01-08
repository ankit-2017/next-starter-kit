import styles from './Navbar.module.scss'


const Navbar = () => (
    <nav className={styles.container}>
        <a href="#" className={styles.brandName}>Logo name</a>
        <div className={styles.NavMenu}>
            <ul>
                <li>Services</li>
                <li>Template</li>
                <li>Login</li>
                <li>About Us</li>
            </ul>
        </div>
        
    </nav>
)

export default Navbar