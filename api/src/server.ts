import {app} from "./index";

const PORT: number = parseInt(process.env.PORT || "5000");

app.listen(PORT, () => {
	console.log(`Server listening at PORT=${PORT}`);
});
