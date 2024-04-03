const express = require('express')
const cors = require('cors')
const data = require('./data/data.json')

const app = express()
app.use(cors())
app.use(express.json())

const generateSimplePass = (req, res, nameDB)=>{
    let index = 0
    let result = ''
    const len = parseInt(req.params.len)
    if (!isNaN(len)) {
        for (let i = 0; i < len; i++) {
            index = Math.ceil(Math.random()*(data[nameDB].length-1))
            result += data[nameDB][index]
        } 

        res.send({success: true, data: result})
    }
    res.send({success: false, data: result})
}

app.get('/', (req, res) => {
    res.send({msg: 'success'})
})

app.get('/numbers/:len', (req, res) => {
    generateSimplePass(req, res, req.path.split("/")[1])
})

app.get('/letters/:len', (req, res) => {
    generateSimplePass(req, res, req.path.split("/")[1])
})

app.get('/lowerLetter/:len', (req, res) => {
    generateSimplePass(req, res, req.path.split("/")[1])
})

app.get('/upperLetter/:len', (req, res) => {
    generateSimplePass(req, res, req.path.split("/")[1])
})

app.get('/symboles/:len', (req, res) => {
    generateSimplePass(req, res, req.path.split("/")[1])
})

/*app.get('/:len', (req, res) => {
    generateSimplePass(req, res, req.path.split("/")[0])
})*/

app.get('/man', (res) => {
    res.send({msg: `
        ====== Man ======
        routes:
            - get('/') => res.send({msg: 'success'})

            - get('/numbers/:len') => Retourne un mot de passe de longueur 'len' composer de chiffre 
        
            - get('/letters/:len') => Retourne un mot de passe de longueur 'len' composer de Lettre
        
            - get('/lowerLetter/:len') => Retourne un mot de passe de longueur 'len' composer de Lettre minuscule
        
            - get('/upperLetter/:len') => Retourne un mot de passe de longueur 'len' composer de Lettre Majuscule
        
            - get('/symboles/:len') => Retourne un mot de passe de longueur 'len' composer de symbole
        
            - get('/*') =>  
        
            - get('/man', (res) => 
    `})
})

app.get('/*', (req, res) => {
    res.send({msg: 'Cette requette est invalide!!'})
})


app.listen(3001, ()=>console.log("api start on port 3001..."))
