const express = require("express");
const { ytdl } = require("ab-downloader");

const router = express.Router();

// 🎬 Preview YouTube
router.get("/preview", async (req, res) => {
    const url = req.query.url;

    if (!url) {
        return res.json({ success: false, message: "URL required" });
    }

    try {
        const data = await ytdl(url);

        if (!data || data.length === 0) {
            return res.json({ success: false });
        }

        const video = data[0];

        res.json({
            success: true,
            title: video.title || "YouTube Video",
            thumbnail: video.thumbnail,
            videoUrl: video.url
        });

    } catch (err) {
        console.log(err);
        res.json({ success: false });
    }
});

// ⬇️ Download YouTube
router.get("/download", async (req, res) => {
    const url = req.query.url;

    if (!url) {
        return res.send("❌ URL required");
    }

    try {
        const data = await ytdl(url);

        if (!data || data.length === 0) {
            return res.send("❌ Video not found");
        }

        const videoUrl = data[0].url;

        console.log("✅ YouTube Video:", videoUrl);

        // Redirect to direct video
        res.redirect(videoUrl);

    } catch (err) {
        console.log(err);
        res.send("❌ Failed to fetch video");
    }
});

module.exports = router;