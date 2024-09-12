
import React from 'react'
import styles from  "./Paper.module.scss"

const Paper = ({component}) => {
  return (
    <div className={styles.container_items}>
        <>
          {component}
        </>
    </div>
  )
}

export default Paper
