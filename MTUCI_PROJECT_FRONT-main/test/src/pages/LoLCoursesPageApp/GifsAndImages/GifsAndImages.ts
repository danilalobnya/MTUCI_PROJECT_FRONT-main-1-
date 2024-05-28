import eazyBlock1_1 from './Images/eazyBlock1_1.png'
import eazyBlock1_2 from './Images/eazyBlock1_2.png'
import eazyBlock1_3 from './Images/eazyBlock1_3.png'
import champ1 from './Images/champ1.png'
import champ2 from './Images/champ2.png'
import champ3 from './Images/champ3.png'
import champ4 from './Images/champ4.png'
import gif1 from './Images/gif1.png'
import gif2 from './Images/gif2.png'
import gif3 from './Images/gif3.png'



const image1: string = eazyBlock1_3
const image2: string = eazyBlock1_2
const image3: string = eazyBlock1_1

export const imagesBlock1: string[] = [image1, image2, image3]


interface champsProps {
    champ1: string,
    champ2: string,
    champ3: string,
    champ4: string,
}

interface gifsProps {
    gif1: string,
    gif2: string,
    gif3: string,
}



export const SVGmassive = {
    imagesBlock1
}