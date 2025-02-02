const express = require("express")

const app = express()
const PORT = process.env.PORT || 7000

app.get("/",(req,res) => {
    res.send ("<h2>Well-Come to Crossfit-wod")
})

app.listen(PORT, () => {
    console.log(`This app is opening on PORT ${PORT}`)
})