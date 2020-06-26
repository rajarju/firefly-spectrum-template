import React from 'react'
import {Form} from '@react-spectrum/form'
import {RadioGroup, Radio} from '@react-spectrum/radio'
import {TextField} from '@react-spectrum/textfield'
import {Content} from '@react-spectrum/view'
import {Button} from '@react-spectrum/button'
import {Heading} from '@react-spectrum/text'

export const PageForm = () => {
  return <Content>
    <Heading level={1}>Form</Heading>
    <Form maxWidth="size-3600" aria-labelledby="label-3">
      <TextField label="First Name" placeholder="John" />
      <TextField label="Last Name" placeholder="Smith" />
      <RadioGroup label="Favorite pet">
        <Radio value="dogs">Dogs</Radio>
        <Radio value="cats">Cats</Radio>
        <Radio value="dragons">Dragons</Radio>
      </RadioGroup>
      <Button variant="cta">Save</Button>
    </Form>
  </Content>
}