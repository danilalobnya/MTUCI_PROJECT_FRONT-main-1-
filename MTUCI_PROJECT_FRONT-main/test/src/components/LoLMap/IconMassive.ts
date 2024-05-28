



export interface MyMass {
    role: string
    red: boolean
    top: string
    left: string
}

export const IconMassive: MyMass[] = [
    {
       role: 'mid',
       red: true,
       top: '40%',
       left:'41%'
    },
        {
       role: 'mid',
       red: false,
       top: '45%',
       left:'50%'
    },
    {
        role: 'top',
        red: false,
        top: '20%',
        left:'80%'
     },
     {
        role: 'top',
        red: true,
        top: '10%',
        left:'70%'
     },
     {
        role: 'adc',
        red: true,
        top: '65%',
        left:'6%'
     },
     {
        role: 'adc',
        red: false,
        top: '78%',
        left:'18%'
     },
     {
        role: 'sup',
        red: true,
        top: '65%',
        left:'11%'
     },
     {
        role: 'sup',
        red: false,
        top: '78%',
        left:'23%'
     },
]