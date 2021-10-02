import React from 'react'
import styles from './SideSection.module.css'

export default function SideSection(props) {
    return (
        <div className={ styles.container }>
            <div>
                <span className= { styles.header } >{ props.number }</span>
            </div>
            <div>
                <span className= { styles.topic }>{ props.topic }</span> | <span className= { styles.body }>{ props.body }</span>
            </div>
        </div>
    )
}
