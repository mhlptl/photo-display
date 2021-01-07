import React from 'react';
import { render } from '@testing-library/react'
import App from "../src/App";

describe('<App/>', () => {
	test('should display hello world', () => {
		render(<App/>);
		expect(document.querySelector('h1')!.textContent).toBe('Hello world!');
	});
});
