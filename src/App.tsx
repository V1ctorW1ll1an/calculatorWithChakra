import * as React from 'react'
import { ChakraProvider, Box, VStack, Grid, theme, Heading } from '@chakra-ui/react'
import { ColorModeSwitcher } from './chakraUiConfig/ColorModeSwitcher'
import { CalculatorButton } from './components/CalculatorButton'
import { CalculatorDisplay } from './components/CalculatorDisplay'
import { Calculator } from './components/Calculator'

export const App = () => {
    return (
        <ChakraProvider theme={theme}>
            <Box textAlign="center" fontSize="xl">
                <Grid minH="100vh" p={3} placeItems="center">
                    <ColorModeSwitcher
                        position="absolute"
                        justifySelf="flex-end"
                        alignSelf="flex-start"
                    />
                    <VStack>
                        <Heading>Calculadora</Heading>
                        <Calculator />
                    </VStack>
                </Grid>
            </Box>
        </ChakraProvider>
    )
}
