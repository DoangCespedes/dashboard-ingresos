import React from 'react'
import styles from  "./CardContainer.module.scss"
import { useSwitch } from "@/Components/Context/contextSwitch";

const CardContainer = ({ body, title, icon }) => {
    const {company} = useSwitch()

    return (
        <div className={styles.container_principal}>
            <div className= {styles.container_card} >
                <div className={company ? styles.container_icon_oceanica : styles.container_icon_piramide }>
                    {icon}
                </div>
                <div className={styles.title_client}>
                    {title}
                </div>
            </div>
            <hr className={styles.divider} />
            <div className={styles.card_body_container}>
                {body}
            </div>
        </div>
    )
}

export default CardContainer
