import { Flex, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

type Props = {
    value: string | number
}

export const CalculatorDisplay: React.FC<Props> = (props) => {
    const customStyle = {
        bg: useColorModeValue('gray.700', 'gray.200'),
        color: useColorModeValue('gray.200', 'gray.700'),
    }

    return (
        <Flex
            justifyContent="end"
            gridColumn="span 4"
            p={5}
            bg={customStyle.bg}
            color={customStyle.color}
        >
            <Text fontSize={21}>{props.value}</Text>
        </Flex>
    )
}
