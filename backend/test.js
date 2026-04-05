const { igdl } = require("ab-downloader");

async function test() {
    try {
        const data = await igdl("https://www.instagram.com/reel/DWWo7DHDPYy/?utm_source=ig_web_button_share_sheet");

        console.log(data);
    } catch (err) {
        console.log("Error:", err);
    }
}

test();