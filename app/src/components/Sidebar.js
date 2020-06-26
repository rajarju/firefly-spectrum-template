import React from 'react'
import {ListBox, Section, Item} from '@react-spectrum/listbox'
export const Sidebar = () => {

  const navigateTo = (items) => {
    const values = [...items]
    window.location.hash = `#/${values[0]}`
  }

  return <ListBox aria-label="label" onSelectionChange={navigateTo} selectionMode="single">
  <Section title="APP Menu">
    <Item key={``}>Home</Item>
    <Item key={`about`}>About</Item>
  </Section>
</ListBox>
}