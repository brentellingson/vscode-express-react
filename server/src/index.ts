import express from "express";

const app = express();
const PORT = process.env.PORT || 5001;

app.get("/api/hello", (req, res) => {
  res.json([
    "hello, world",
    "안녕하세요",
    "hola, mundo",
    "你好",
    "bonjour, le monde",
    "Hallo, Welt",
    "Dia duit, a dhomhan",
    "こんにちは",
    "Привет",
    "שלום",
    "مرحبا",
    "नमस्ते",
    "สวัสดี",
  ]);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
