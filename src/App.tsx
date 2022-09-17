import * as React from 'react'
import { ChakraProvider, Box, VStack, Grid, theme } from '@chakra-ui/react'
import { ColorModeSwitcher } from './chakraUiConfig/ColorModeSwitcher'

export const App = () => (
    <ChakraProvider theme={theme}>
        <Box textAlign="center" fontSize="xl">
            <Grid minH="100vh" p={3}>
                <ColorModeSwitcher justifySelf="flex-end" />
                <VStack spacing={8}>
                    <Box>Hello</Box>
                </VStack>
            </Grid>
        </Box>
    </ChakraProvider>
)
