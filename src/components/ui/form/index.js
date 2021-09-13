import React from "react";
import { FormWrap } from './form.style'
import { FormGroup } from './form-group'
import { Error } from './error'
import { Input, InputCurrency } from './input.style'
import { Radio, RadioLabel } from './radio.style'
import { Select } from './select.style'
import { Textarea } from './textarea.style'

const Form = ({ children, ...props }) => {
	return <FormWrap {...props}>{children}</FormWrap>
}

export { FormGroup, Input, Select, Textarea, Error, Radio, RadioLabel, InputCurrency };

export default Form
