const express = require("express");
const cors = require("cors");


const PORT = 8080
const app = express();
app.use(cors());

app.get("/", (req, res) => {
    const details = {
        email: "etuks.blessing@gmail.com", 
        current_datetime: new Date().toISOString(),
        github_url: "https://github.com/Tukkieee/Basic_Info.git", 
      }

      res.status(200).json(details)
})

app.listen(PORT, () => {
    console.log("Listening")
})