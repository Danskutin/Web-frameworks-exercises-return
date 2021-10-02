import React from 'react'
import styles from './Header.module.css'


export default function Header() {
    return (
        <div className= { styles.headerBackground }>
            <div className={ styles.container }>
                <div className={ styles.brand }>HELSINGIN SANOMAT</div>
                <div className={ styles.sitesBar }>
                    <div className={ styles.sites }>Etusivu</div>
                    <div className={ styles.sites }>Uutiset</div>
                    <div className={ styles.sites }>Lehdet</div>
                    <div className={ styles.sites }>Asiakaspalvelu</div>
                </div>
                <div className={ styles.options }>
                    <div className={ styles.subscribe }>Tilaa</div>
                    <div className={ styles.login }>Kirjaudu</div>
                    <div className={ styles.menu }>Valikko</div>
                </div>
            </div>
        </div>
    )
}
