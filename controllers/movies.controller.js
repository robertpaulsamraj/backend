import Movie from "../modals/movie.modal.js"

export const MovieIndex = (req, res) => {
    res.send("Get a movie")
}

export const MovieCreate = async (req, res) => {

    // id,title,desc

    // Validate your user

    const newMovie = new Movie({
        title: req.body.title,
        desc: req.body.desc
    })

    try {
        const movie = await newMovie.save();
        return res.status(200).json(movie)
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }

    return res.json(req.body)
}
export const MovieUpdate = (req, res) => {
    res.send("Update a movie")
}
export const MovieDelete = (req, res) => {
    res.send("Delete a movie")
}