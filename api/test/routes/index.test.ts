import request from "supertest";
import {app} from "../../src";

describe("endpoint - /", () => {
	test('GET - should respond with 200 and "Welcome to the Photo Display API"', async () => {
		const res: request.Response = await request(app).get("/api/v1");
		expect(res.status).toEqual(200);
		expect(res.text).toEqual("Welcome to the Photo Display API");
	});

	test("POST - should respond with 404", async () => {
		const res: request.Response = await request(app).post("/api/v1");
		expect(res.status).toEqual(404);
	});
});
