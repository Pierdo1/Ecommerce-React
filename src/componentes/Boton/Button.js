import React, { useEffect } from 'react'

const Button = () => {

    const handleClick = () => {
        alert('hola')
    }

    useEffect(() => {
        const button = document.getElementById('button')
        
        button.addEventListener('click', handleClick)

        return () => {
            button.removeEventListener('click', handleClick)
        }
    }, [])

 

    return (
        <button id='button'>Boton</button>   
    )
}

export default Button