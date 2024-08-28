import express from "express";
interface Idata {
	id: string;
	data: string;
}
let datas: Idata[] = [];

const app = express();

app.get("/", () => "Hello Express");

app.get("/data", (req, res) => {
	return res.json(datas);
});

app.get("/data/:id", (req, res) => {
	datas.push({
		id: req.params.id,
		data: Math.random().toString().slice(-10),
	});
	return res.json(datas);
});

app.post("/data", (req, res) => {
	datas = [];
	return res.json(datas);
});

app.listen(8080);

console.log(`🦊 Express is running at 8080`);
