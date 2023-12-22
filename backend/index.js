const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
    const { username, secret } = req.body;
    
    try {
        const response = await axios.put(
            'https://api.chatengine.io/users/',
            { username: username, secret: username, first_name: username },
            { headers: { "PRIVATE-KEY": "{d7381037-1ae6-488a-b53f-b1c2ac346e8d}" } }
        );

        return res.status(response.status).json(response.data);
    } catch (error) {
        console.error("Error:", error.message);
        if (error.response) {
            console.error("Response status:", error.response.status);
            console.error("Response data:", error.response.data);
        }
        return res.status(500).json({ error: "Internal Server Error" });
    }
});

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
