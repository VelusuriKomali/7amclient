import React from 'react' 
import styles from './Footer.module.css'
 const Footer = () => {
  return <div data-testid="footer-test-div" className={`position-fixed bottom-0 bg-primary text-center  text-white ${styles.footer} fs`}>&copy; rights belongs to me</div>
}

export default Footer
