const express = require("express");
const { ytdl } = require("ab-downloader");

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const data = await ytdl(req.query.url);
        res.json({ success: true, data });
    } catch {
        res.json({ success: false });
    }
});

module.exports = router;