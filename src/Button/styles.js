export const getStyles = (theme, color) => {
    return {
        base: {
            ...theme.typography.button,
            paddingTop: 8,
            paddingBottom: 8,
            minWidth: 120,
            borderRadius: theme.shape.borderRadius,
            cursor: 'pointer',
            textAlign: 'center',
            transition: 'all 0.1s ease-in-out',
            transform: 'translateY(-2px)',
        },
        contained: {
            base: {
                border: 'none',
                backgroundColor: theme.palette[color].main,
                color: theme.palette[color].contrastText,
                boxShadow: theme.shadows[4],
            },
            hover: {
                backgroundColor: theme.palette[color].light,
            },
            active: {
                transform: 'translateY(0)',
                boxShadow: theme.shadows[0],
            },
            disabled: {
                cursor: 'not-allowed',
                boxShadow: theme.shadows[0],
                backgroundColor: theme.palette[color].dark,
            },
        },
        outlined: {
            base: {
                borderStyle: 'solid',
                borderWidth: 1,
                borderColor: theme.palette[color].main,
                backgroundColor: 'transparent',
                color: theme.palette[color].main,
                boxShadow: theme.shadows[4],
            },
            hover: {
                borderColor: theme.palette[color].light,
                color: theme.palette[color].light,
            },
            active: {
                transform: 'translateY(0)',
                boxShadow: theme.shadows[0],
            },
            disabled: {
                cursor: 'not-allowed',
                boxShadow: theme.shadows[0],
                borderColor: theme.palette[color].dark,
                color: theme.palette[color].dark,
            },
        },
        text: {
            base: {
                border: 'none',
                backgroundColor: 'transparent',
                color: theme.palette[color].main,
                boxShadow: theme.shadows[0],
            },
            hover: {
                backgroundColor: theme.palette[color].light,
                color: theme.palette[color].contrastText,
            },
            active: {
                transform: 'translateY(0)',
            },
            disabled: {
                cursor: 'not-allowed',
                color: theme.palette[color].dark,
            },
        },
    }
}
