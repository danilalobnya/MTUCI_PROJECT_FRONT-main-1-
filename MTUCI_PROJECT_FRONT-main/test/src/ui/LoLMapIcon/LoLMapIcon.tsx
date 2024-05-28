import React from "react";
import styles from "./LoLMapIcons.module.css"
import { IconMassive } from "./IconMassive.ts";


interface LoLMapIconProps {
    red: boolean,
    role: string,
}

const roles = ['jungler', 'mid', 'top', 'adc', 'sup']

export const LoLMapIcon: React.FC<LoLMapIconProps> = (props: LoLMapIconProps) => {

    const IconMass = IconMassive.filter(item => item.name === props.role && item.red === props.red)

    if (roles.includes(props.role)) {

    return (
        <div className={styles.wrapper} style={{backgroundImage: `url(${IconMass[0].image})`}}>
        </div>
    )
    }

    else {return <></>}
}