
const usuarios = {};
usuarios.get = (req, res) => {
    res.json({
        msg: "GET - Usuarios - controllers"

    })

}
usuarios.post = (req, res) => {
    res.json({
        msg: "POST - Usuarios - controllers"

    })

}

usuarios.put= (req, res) => {
    res.json({
        msg: "PUT - Usuarios - controllers"

    })

}

usuarios.patch = (req, res) => {
    res.json({
        msg: "PATH - Usuarios - controllers"

    })

}

usuarios.delete = (req, res) => {
    res.json({
        msg: "DELETE - Usuarios - controllers"

    })

}
export default usuarios;