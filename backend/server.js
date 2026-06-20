import express from "express";
import cors from "cors";

import { fetchHistory } from "./apiFetcher.js";
import { runSmartAI } from "./smartAI.js";
import { getMemory } from "./memory.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
res.send("ZRX AI LIVE 🚀");
});

app.get("/health", (req, res) => {
res.send("OK");
});

app.get("/api/predict", async (req, res) => {

try {

```
const history = await fetchHistory();

const prediction = await runSmartAI(history);

res.json({
  success: true,
  prediction,
  memory: getMemory()
});
```

} catch (err) {

```
res.status(500).json({
  success: false,
  error: err.message
});
```

}

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
console.log("Server running on port " + PORT);
});
