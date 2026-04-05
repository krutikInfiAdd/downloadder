const express = require("express");
const { capcutdl } = require("ab-downloader");

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const data = await capcutdl(req.query.url);
        res.json({ success: true, data });
    } catch {
        res.json({ success: false });
    }
});

module.exports = router;