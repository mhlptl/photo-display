import React, {FormEvent} from "react";
import {render, fireEvent, RenderResult} from "@testing-library/react";
import PhotoUpload from "../src/components/PhotoUpload";

describe("<PhotoUpload/>", () => {
	let utils: RenderResult;
	let onChange: jest.Mock;
	let onSubmit: jest.Mock;

	beforeEach(() => {
		onChange = jest.fn();
		onSubmit = jest.fn((e: FormEvent) => {
			e.preventDefault();
		});

		utils = render(<PhotoUpload handleChange={onChange} handleSubmit={onSubmit} />);
	});

	test("default form should have no file selected", () => {
		const input: HTMLInputElement = utils.getByLabelText("Select Photo to Upload") as HTMLInputElement;
		fireEvent.click(utils.getByRole("button", {name: /upload/i}));
		expect(input.files && input.files.length).toEqual(0);
	});

	test("attach xml file to form", () => {
		const input: HTMLInputElement = utils.getByTestId("form-file") as HTMLInputElement;
		const file = new File(["(⌐□_□)"], "file.xml", {type: "application/xml"});
		fireEvent.change(input, {target: {files: [file]}});
		expect(onChange).toBeCalledTimes(1);
		expect(input.files && input.files.length).toEqual(1);
		expect(input.files && input.files[0].type).toEqual("application/xml");

		fireEvent.click(utils.getByRole("button", {name: /upload/i}));

		expect(onSubmit).toBeCalledTimes(1);
	});

	test("attach image to form", () => {
		const input: HTMLInputElement = utils.getByTestId("form-file") as HTMLInputElement;
		const file = new File(["(⌐□_□)"], "file.png", {type: "image/png"});
		fireEvent.change(input, {target: {files: [file]}});
		expect(onChange).toBeCalledTimes(1);
		expect(input.files && input.files.length).toEqual(1);
		expect(input.files && input.files[0].type).toEqual("image/png");

		fireEvent.click(utils.getByRole("button", {name: /upload/i}));

		expect(onSubmit).toBeCalledTimes(1);
	});
});
