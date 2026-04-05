const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

// Routes
app.use("/instagram", require("./routes/instagram"));
app.use("/youtube", require("./routes/youtube"));
app.use("/tiktok", require("./routes/tiktok"));
app.use("/facebook", require("./routes/facebook"));
app.use("/twitter", require("./routes/twitter"));
app.use("/mediafire", require("./routes/mediafire"));
app.use("/capcut", require("./routes/capcut"));
app.use("/drive", require("./routes/drive"));
app.use("/pinterest", require("./routes/pinterest"));

// Home
app.get("/", (req, res) => {
    res.json({
        status: "🔥 AIO Downloader Running",
        platforms: [
            "Instagram",
            "TikTok",
            "Facebook",
            "Twitter",
            "YouTube",
            "MediaFire",
            "CapCut",
            "Google Drive",
            "Pinterest"
        ]
    });
});

app.listen(3001, () => {
    console.log("🚀 Server running on http://localhost:3001");
});