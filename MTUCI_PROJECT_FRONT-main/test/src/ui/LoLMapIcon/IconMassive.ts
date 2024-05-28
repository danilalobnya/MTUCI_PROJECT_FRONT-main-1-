import EnemySup from './Images/EnemySupIcon.png'
import FriendlySup from './Images/FriendlySupIcon.png'
import EnemyAdc from './Images/EnemyAdcIcon.png'
import FriendlyAdc from './Images/FriendlyAdcIcon.png'
import EnemyMid from './Images/EnemyMidIcon.png'
import FriendlyMid from './Images/FriendlyMidIcon.png'
import EnemyTop from './Images/EnemyTopIcon.png'
import FriendlyTop from './Images/FriendlyTopIcon.png'



export interface IconMassiveProps {
    red: boolean
    name: any
    image: JSX.Element
}

export const IconMassive: IconMassiveProps[] = [
    {
        red: false,
        name: 'mid',
        image: FriendlyMid
    },

    {
        red: true,
        name: 'mid',
        image: EnemyMid
    },

    {
        red: false,
        name: 'top',
        image: FriendlyTop
    },

    {
        red: true,
        name: 'top',
        image: EnemyTop
    },

    {
        red: false,
        name: 'adc',
        image: FriendlyAdc
    },

    {
        red: true,
        name: 'adc',
        image: EnemyAdc
    },

    {
        red: false,
        name: 'sup',
        image: FriendlySup
    },

    {
        red: true,
        name: 'sup',
        image: EnemySup
    }
]