module.exports = app => {
    app.get("/api/places", (req, res) => {
        console.log(places);
        return res.json(req.places)
    })
}

app.post("/api/places", (req, res) => {
    return res.json(req.places);

});