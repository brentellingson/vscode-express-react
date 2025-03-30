import express from "express";

const app = express();
const PORT = process.env.PORT || 5001;

app.get("/api/hello", (req, res) => {
    res.json([
        "hello, world",
        "안녕하세요",
        "你好",
        "こんにちは",
        "Bonjour",
        "Hola",
        "Привет",
        "שלום",
        "مرحبا",
        "नमस्ते",
        "สวัสดี",
        "Ciao",
        "Merhaba",
    ])
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
