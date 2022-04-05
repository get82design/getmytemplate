
import React from 'react'

export const primaryColor = (props: any) => {
    return props.colorMode === 'light' ? 'cyan.500' : 'cyan.300'
} 

export const primaryColorReverse = (props: any) => {
    return props.colorMode === 'light' ? 'cyan.300' : 'cyan.500'
} 

export const buttonTextPrimaryColor = (props: any) => {
    return props.colorMode === 'light' ? 'white' : 'gray.800'
}

export const bgCardColor = (props: any) => {
    return props.colorMode === 'light' ? 'gray.50' : 'gray.700'
}

export const textGeneralColor = (props: any) => {
    return props.colorMode === 'light' ? 'gray.800' : 'white'
}