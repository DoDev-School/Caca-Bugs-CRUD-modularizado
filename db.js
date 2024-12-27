const delay = (time) =>
    new Promise(resolve =>
        setTimeout(resolve, time)
    )


const usuariosDataBase = (() => {
    let idSequence = 1
    const usuarios = []
    const insert = async (usuario) => {
        await delay(400)
        const id = idSequence++
        const data = { ...usuario, id }
        usuarios[id] = data
        return data
    }

    const list = async () => {
        await delay(100)
        return Object.values(usuarios)
    }

    const get = async (id) => {
        await delay(200)
        return usuarios[id]
    }

    const update = async (usuario, id) => {
        await delay(400)
        usuarios[id] = { ...usuario, id }
        return usuario
    }

    const del = async (id) => {
        await delay(500)
        delete usuarios[id]
    }

    return {
        insert,
        list,
        get,
        update,
        del,
    }

})

module.exports = {
    usuariosDataBase
}