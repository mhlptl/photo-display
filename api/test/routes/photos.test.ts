import request from "supertest";
import {app} from "../../src";
import {pool} from "../../src/database";
import * as path from "path";

afterAll(async () => {
	pool.end();
});

describe("endpoint - /photos/upload", () => {
	test("GET - should respond with 404", async () => {
		const res: request.Response = await request(app).get("/api/v1/photos/upload");
		expect(res.status).toEqual(404);
	});

	test("POST jpeg file - should respond with 201", async () => {
		const res: request.Response = await request(app)
			.post("/api/v1/photos/upload")
			.attach("image", path.join(__dirname, "../", "testfiles/", "image.jpg"));
		expect(res.body.message).toEqual("Photo Uploaded");
		expect(res.status).toEqual(201);
	});

	test("POST txt file - should respond with 404", async () => {
		const res: request.Response = await request(app)
			.post("/api/v1/photos/upload")
			.attach("image", path.join(__dirname, "../", "testfiles/", "note.txt"));
		expect(res.status).toEqual(400);
	});
});

describe("endpoint - /photos/random", () => {
	test("GET - should respond with 404", async () => {
		const res: request.Response = await request(app).get("/api/v1/photos/random");
		expect(res.status).toEqual(404);
	});

	test("POST - should respond with 200", async () => {
		const res: request.Response = await request(app).post("/api/v1/photos/random");
		expect(res.status).toEqual(200);
	});
});
