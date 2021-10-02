import React from 'react';
import styles from './SearchResult.module.css';

export default function SearchResult(props) {
  return (
    <div className={ styles.product }>
        <div>
          <div><img className={ styles.image } src={`/images/${props.image}`} /></div>
          <div className={ styles.name }>{ props.name }</div>
          <div>{ props.publisher }</div>
          <div>{ props.console }</div>
          <div>{ props.genre }</div>
          <div>${ props.price }</div>
        </div>
    </div>
  )
}

