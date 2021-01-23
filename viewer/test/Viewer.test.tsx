import React from "react";
import {render} from '@testing-library/react';
import Viewer from "../src/components/Viewer";

describe("<Viewer/>", () => {
	test("empty imageLink", () => {
		const component = render(<Viewer imageLink='' />);
		const image = component.getByAltText(/no image available/i) as HTMLImageElement;
		expect(image.src).toBe('http://localhost/');
	});

	test("imageLink - Google Logo", () => {
		const link = 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
		const component = render(<Viewer imageLink={link} />);
		const image = component.getByAltText(/no image available/i) as HTMLImageElement;
		expect(image.src).toBe(link);
	});
});
