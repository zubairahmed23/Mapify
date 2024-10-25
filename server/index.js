const e = require("express");
const path = require("path");

const app = e();

app.use(e.static(path.join(__dirname, "../dist")));
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../dist/index.html"));
});

app.listen(3000);