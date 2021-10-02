import React from 'react'
import styles from './Header.module.css'

export default function Header() {
    return (
        <div className= { styles.headerBackground }>
            <div className={ styles.container }>
                <div className={ styles.brand }>Game<span className={ styles.logo }>Begin</span></div>
                <div className={ styles.sitesBar }>
                    <div className={ styles.sites }>Games&nbsp;&nbsp;</div>
                    <div className={ styles.sites }>Consoles</div>
                    <div className={ styles.sites }>Equipment</div>
                    <div className={ styles.sites }>Contact us</div>
                </div>
                <div className={ styles.options }>
                    <div className={ styles.login }>Login</div>
                    <div className={ styles.help }>Help</div>
                    <div className={ styles.menu }>Menu</div>
                </div>
            </div>
        </div>
    )
}
