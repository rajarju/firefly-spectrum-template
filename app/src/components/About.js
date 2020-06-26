import React from 'react'
import {Content} from '@react-spectrum/view'
import {Heading, Text} from '@react-spectrum/text'

export const PageAbout = () => {
  return <Content>
    <Heading level={1}>About</Heading>
    <Text>
    React Spectrum is a React implementation of Spectrum, Adobe's design system. It provides components that are adaptive to interactions and screen sizes across devices, and includes full screen reader and keyboard navigation support for accessibility.
    </Text>
  </Content>
}