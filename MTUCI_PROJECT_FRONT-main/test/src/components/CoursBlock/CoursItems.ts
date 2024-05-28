import firstItemIcon from './Icons/LoLIcon.png'
import midIcon from './Icons/MidIcon.png'
import DotaIcon from './Icons/DotaIcon.png'
import DotaTitan from './Icons/DotaTitan.png'


export interface MyMass {
    title: string
    titleIcon: string
    timeInfo: string
    thesis: string[]
}


export const CoursItems: MyMass[] = [
    {
        title: 'Что такое League of Legends ?',
        titleIcon: firstItemIcon,
        timeInfo: '6 часов / 5 блоков',
        thesis: ['Основные механики игры', 'Основные механики игры', 'Основные механики игры']     
    },

    {
        title: 'Что такое League of Legends ?',
        titleIcon: midIcon,
        timeInfo: '6 часов / 5 блоков',
        thesis: ['Основные механики игры', 'Основные механики игры', 'Основные механики игры']     
    },

    {
        title: 'Что такое League of Legends ?',
        titleIcon: firstItemIcon,
        timeInfo: '6 часов / 5 блоков',
        thesis: ['Основные механики игры', 'Основные механики игры', 'Основные механики игры']     
    }
]



export const CoursItemsDota: MyMass[] = [
    {
        title: 'Что такое Dota ?',
        titleIcon: DotaIcon,
        timeInfo: '6 часов / 5 блоков',
        thesis: ['Основные механики игры', 'Основные механики игры', 'Основные механики игры']     
    },

    {
        title: 'База для поднятия MMR',
        titleIcon: DotaTitan,
        timeInfo: '6 часов / 5 блоков',
        thesis: ['Основные механики игры', 'Основные механики игры', 'Основные механики игры']     
    }
]