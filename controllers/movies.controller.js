import Movie from "../modals/movie.modal.js"

export const MovieIndex = async (req, res) => {
    try {
        const movies = await Movie.find()
        res.json(movies)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
export const MovieDetail = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id)
        if (movie === null) {
            res.status(404).json({ message: "Cannot find movie" })
        } else {
            res.json(movie)
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
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

export const MovieUpdate = async (req, res) => {

    try {
        const updateMovie = await Movie.findByIdAndUpdate(
            { _id: req.params.id },
            {
                title: req.body.title,
                desc: req.body.desc
            },
            { new: true }
        )
        res.status(200).json(updateMovie)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }



    // if (req.body.title !== null) {
    //     res.movie.title = req.body.title
    // }
    // if (req.body.desc !== null) {
    //     res.movie.desc = req.body.desc
    // }

    // try {
    //     const movie = await Movie.findById(req.params.id)

    //     if (movie === null) {
    //         res.status(404).json({ message: "Cannot find movie" })
    //     } else {
    //         res.json(movie)
    //     }

    // } catch (error) {
    //     res.status(500).json({ message: error.message })
    // }
}
export const MovieDelete = (req, res) => {
    res.send("Delete a movie")
}