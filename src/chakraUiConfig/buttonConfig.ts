import type { ComponentStyleConfig } from '@chakra-ui/theme'

export const Button: ComponentStyleConfig = {
    variants: {
        digitBtn: {
            border: '1px solid',
            fontSize: 'medium',
            borderRadius: 'none',
        },
        operationBtn: {
            border: '1px solid',
            fontSize: 'medium',
            borderRadius: 'none',
            color: 'gray.200',
            backgroundColor: 'orange.300',
            _hover: { backgroundColor: '' },
            _active: { backgroundColor: 'orange.500' },
        },
    },
    defaultProps: {
        size: 'lg',
    },
}
