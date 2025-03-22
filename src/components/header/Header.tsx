import styles from "./header.module.css"
import Navbar from './Navbar';
const Header = () => {
  return (
    <header className={styles.header}>
      <Navbar/>
      
    </header>
  )
}

export default Header
