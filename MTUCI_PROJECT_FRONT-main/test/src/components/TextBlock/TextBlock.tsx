import React from "react";


const width: number = window.innerWidth

interface TextBlockProps {
    decsription: string,
    height: string
}

interface stylesProps {
    backgroundColor: string,
    color: string,
    height: string,
    fontWeight: string,
    lineHeight: string,
    fontSize: string,
    display: string,
    alignItems: string,
    justifyContent: string,
    textAlign: any,
}

export const TextBlock: React.FC<TextBlockProps> = (props: TextBlockProps) => {
    
    const styles: stylesProps = {
        backgroundColor: '#000000',
        color: '#fff',
        height: props.height,
        fontWeight: '700',
        lineHeight: width > 768 ? '30px' : '20px',
        fontSize: width > 768 ? '36.6px' : '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    }

    return(

        <div  style={styles}>
        <div style = {{whiteSpace: 'pre-wrap'}}>{props.decsription}</div>
        </div>

    )

}