import React, { useContext, useState } from 'react'
import ThemeContext from '../Contexts/ThemeContext'
import { getStyles } from './styles'
import { validColors, validButtonVariants } from '@satriacorp/utils'

export default ({ variant, color, disabled, children, onClick, style }) => {
    variant = validButtonVariants.includes(variant) ? variant : validButtonVariants[0]
    color = validColors.includes(color) ? color : validColors[0]

    const { theme } = useContext(ThemeContext)
    const styles = getStyles(theme, color)

    const [isActive, setIsActive] = useState(false)
    const [isHover, setIsHover] = useState(false)

    const baseStyle = styles.base
    const variantStyle = styles[variant].base || styles.contained.base
    const hoverStyle = isHover ? styles[variant].hover : null
    const activeStyle = isActive ? styles[variant].active : null
    const disabledStyle = disabled ? styles[variant].disabled : null

    const combinedStyle = { ...baseStyle, ...variantStyle, ...hoverStyle, ...activeStyle, ...disabledStyle, ...style }

    return (
        <button
            style={combinedStyle}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            onMouseDown={() => setIsActive(true)}
            onMouseUp={() => setIsActive(false)}
            disabled={disabled}
            onClick={onClick}>
            {children}
        </button>
    )
}
