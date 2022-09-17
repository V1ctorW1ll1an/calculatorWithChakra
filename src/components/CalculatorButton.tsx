import React from 'react'
import { Button, ButtonProps, useColorModeValue } from '@chakra-ui/react'

type Props = {
    label: string
    btnType?: 'operation' | 'digit'
    click?: CallableFunction
    buttonStyle?: ButtonProps
}

export const CalculatorButton: React.FC<Props> = (props) => {
    const customStyle = {
        bg: useColorModeValue('gray.200', 'gray.600'),
        color: useColorModeValue('gray.700', 'gray.200'),
        active: {
            bg: useColorModeValue('gray.700', 'gray.200'),
            color: useColorModeValue('gray.200', 'gray.700'),
        },
        borderColor: useColorModeValue('gray.300', 'gray.600'),
    }
    const variant = props.btnType && props.btnType === 'operation' ? 'operationBtn' : 'digitBtn'
    const hasPropsStyle = props.buttonStyle?.background || props.buttonStyle?.backgroundColor
    const bg = hasPropsStyle ? hasPropsStyle : props.btnType ? '' : customStyle.bg
    const borderColor = props.buttonStyle?.borderColor || customStyle.borderColor
    const color = props.buttonStyle?.color || customStyle.color

    return (
        <Button
            variant={variant}
            bg={bg}
            borderColor={borderColor}
            color={color}
            _active={{
                background: customStyle.active.bg,
                color: customStyle.active.color,
            }}
            {...props.buttonStyle}
            onClick={() => props.click && props.click(props.label)}
        >
            {props.label}
        </Button>
    )
}
