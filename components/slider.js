import React, { Fragment } from 'react';
import AwesomeSlider from 'react-awesome-slider';

const slider = () => {
	return (
		<Fragment>
			<AwesomeSlider bullets={false} infinite animation="Scale-out ">
				<div data-src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
				<div data-src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
				<div data-src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
			</AwesomeSlider>
		</Fragment>
	);
};

export default slider;
