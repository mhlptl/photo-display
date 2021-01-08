import React from "react";
import {render, fireEvent} from "@testing-library/react";
import PhotoUpload from "../src/components/PhotoUpload";

describe("<PhotoUpload/>", () => {
	test("default form should have no file selected", () => {
		const utils = render(<PhotoUpload />);
		const input: HTMLInputElement = utils.getByLabelText("Select Photo to Upload") as HTMLInputElement;
		fireEvent.click(utils.getByRole('button', {name: /submit/i}));
		expect(input.files && input.files.length).toEqual(0);
	});
});
