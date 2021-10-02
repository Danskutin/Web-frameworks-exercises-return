import React from 'react'
import styles from './NewsNotification.module.css'

export default function NewsNotification(props) {
    return (
        <div className= { styles.container }>
            <span className= { styles.header }>{ props.topic }:</span> { props.body }
        </div>
    )
}


