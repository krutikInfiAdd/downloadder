import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Mock endpoints for the downloader
  const platforms = [
    "instagram", "tiktok", "facebook", "twitter", "youtube", 
    "mediafire", "capcut", "drive", "pinterest"
  ];

  platforms.forEach(platform => {
    app.get(`/${platform}`, (req, res) => {
      const { url } = req.query;
      if (!url) {
        return res.status(400).json({ error: "URL is required" });
      }

      // Simulate processing delay
      setTimeout(() => {
        res.json({
          platform,
          url,
          downloadUrl: `https://example.com/download/${platform}/${Buffer.from(url as string).toString('base64').substring(0, 10)}`,
          title: `Media from ${platform}`,
          thumbnail: `https://picsum.photos/seed/${platform}/400/225`
        });
      }, 1500);
    });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
