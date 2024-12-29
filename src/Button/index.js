import React, { useContext } from 'react'
import ThemeContext from '../Contexts/ThemeContext'

export default ({ label }) => {
    const { theme } = useContext(ThemeContext)
    return <button>{label + ' - ' + theme}</button>
}
