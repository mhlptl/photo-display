import React from 'react';
import {render} from '@testing-library/react';
import App from '../src/App';

describe('<App/>', () => {
	test('should expect image to be in the document', () => {
		const component = render(<App/>);
		const image = component.getAllByRole('img')[0] as HTMLImageElement;
		expect(image).toBeInTheDocument();
	});
})
