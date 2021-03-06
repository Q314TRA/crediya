import React from "react";
import PropTypes from "prop-types";
import { CloseButtonWrap } from './close-button.style'

const CloseButton = ({ onClick, ...restProps }) => {
	return (
		<CloseButtonWrap onClick={onClick} {...restProps}>
			<span></span>
		</CloseButtonWrap>
	)
}

CloseButton.propTypes = {
	onClick: PropTypes.func
}

export default CloseButton
