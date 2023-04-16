import "dotenv/config";
import { app } from "./app";

const PORT = process.env.PORT ?? "4321";

app.listen(PORT, () => {
	console.log(`server start or port ${PORT}`);
});