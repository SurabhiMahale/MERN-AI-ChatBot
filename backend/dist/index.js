import app from "./app.js";
import { connectToDatabase } from "./db/connections.js";
//connections and Lsiteners
const PORT = process.env.PORT || 5000;
connectToDatabase().then(() => {
    app.listen(PORT, () => console.log("server open"));
})
    .catch((error) => console.log(error));
//# sourceMappingURL=index.js.map