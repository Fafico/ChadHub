import React from "react";
import css from './HelpCard.module.css'

export default function HelpCard(title) {
    return(
        <div className={css.HelpCard}>
            <hr />
            <h3>{title}</h3>
        </div>
    )
}