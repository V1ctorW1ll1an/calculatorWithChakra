import React from 'react'
import { Button, ButtonProps, useColorModeValue } from '@chakra-ui/react'

type Props = {
    label: string
    click?: CallableFunction
    buttonStyle?: ButtonProps
}

export const CalculatorButton: React.FC<Props> = (props) => {
    const customStyle = {
        bg: useColorModeValue('gray.200', 'gray.700'),
        color: useColorModeValue('gray.700', 'gray.200'),
        active: {
            bg: useColorModeValue('gray.700', 'gray.200'),
            color: useColorModeValue('gray.200', 'gray.700'),
        },
    }

    return (
        <Button
            bg={customStyle.bg}
            border="1px solid"
            borderColor="gray.500"
            fontSize={'medium'}
            color={customStyle.color}
            _active={{
                background: customStyle.active.bg,
                color: customStyle.active.color,
            }}
            rounded="none"
            size={'lg'}
            {...props.buttonStyle}
            onClick={() => props.click && props.click(props.label)}
        >
            {props.label}
        </Button>
    )
}
