import React from 'react'
import styles from './Ads.module.css'

export default function Ads(props) {
    return (
        <div className= { styles.container }>
            <span className= { styles.header }>{ props.topic }:</span> { props.body }
        </div>
    )
}
