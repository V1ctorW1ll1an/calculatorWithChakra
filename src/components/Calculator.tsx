import React, { useState } from 'react'
import { Grid, Box } from '@chakra-ui/react'
import { CalculatorButton } from './CalculatorButton'
import { CalculatorDisplay } from './CalculatorDisplay'
import _ from 'lodash'

type InitialState = {
    displayValue: string
    clearDisplay: boolean
    operation: string | null
    current: number
}

export const Calculator = () => {
    const initialState: InitialState = {
        displayValue: '0',
        clearDisplay: false,
        operation: null,
        current: 0,
    }

    const calcValueInitialState = [0, 0]

    const [state, setState] = useState(_.cloneDeep(initialState))
    const [calcValue, setCalcValue] = useState(_.cloneDeep(calcValueInitialState))

    const actionButtonsStyle = {
        color: 'gray.200',
        backgroundColor: 'orange.300',
        _hover: { backgroundColor: '' },
        _active: { backgroundColor: 'orange.500' },
    }

    const clearMemory = () => {
        setState(_.cloneDeep(initialState))
        setCalcValue(_.cloneDeep(calcValueInitialState))
    }

    const setOperation = (operation: string) => {
        if (state.current === 0) {
            setState({
                ...state,
                operation,
                current: 1,
                clearDisplay: true,
            })
        } else {
            const equals = operation === '='
            const currentOperation = state.operation

            const values = [...calcValue]
            try {
                values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`)
            } catch (e) {
                values[0] = Number(state.displayValue)
            }

            values[1] = 0

            setState({
                ...state,
                displayValue: String(values[0]),
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                clearDisplay: !equals,
            })

            setCalcValue(values)
        }
    }

    const addDigit = (digit: string) => {
        if (digit === '.' && state.displayValue.includes('.')) {
            return
        }

        const cleanDisplay = state.displayValue === '0' || state.clearDisplay
        const currentValue = cleanDisplay ? '' : state.displayValue
        const displayValue = currentValue + digit
        setState({ ...state, displayValue, clearDisplay: false })

        if (digit !== '.') {
            const i = state.current
            const newValue = parseFloat(displayValue)
            const values = [...calcValue]
            values[i] = newValue
            setCalcValue(values)
        }
    }

    return (
        <Box width="100%" maxW="235px">
            <Grid gridTemplateColumns="repeat(4,25%)" gridTemplateRows="1fr repeat(5, 48px)">
                <CalculatorDisplay value={state.displayValue} />
                <CalculatorButton label="AC" click={clearMemory} buttonStyle={{ gridColumn: 'span 3' }} />
                <CalculatorButton label="/" buttonStyle={actionButtonsStyle} click={setOperation} />
                <CalculatorButton label="7" click={addDigit} />
                <CalculatorButton label="8" click={addDigit} />
                <CalculatorButton label="9" click={addDigit} />
                <CalculatorButton label="*" buttonStyle={actionButtonsStyle} click={setOperation} />
                <CalculatorButton label="4" click={addDigit} />
                <CalculatorButton label="5" click={addDigit} />
                <CalculatorButton label="6" click={addDigit} />
                <CalculatorButton label="-" buttonStyle={actionButtonsStyle} click={setOperation} />
                <CalculatorButton label="1" click={addDigit} />
                <CalculatorButton label="2" click={addDigit} />
                <CalculatorButton label="3" click={addDigit} />
                <CalculatorButton label="+" buttonStyle={actionButtonsStyle} click={setOperation} />
                <CalculatorButton label="0" click={addDigit} buttonStyle={{ gridColumn: 'span 2' }} />
                <CalculatorButton label="." click={addDigit} />
                <CalculatorButton label="=" buttonStyle={actionButtonsStyle} click={setOperation} />
            </Grid>
        </Box>
    )
}
