const supertest = require('supertest')
const server = require('../server')
const request = supertest(server.app)

describe('Server Test' ,  ()=>{
    it('Rout Test /',async ()=>{
        const req = await request.get('/')
        expect(req.statusCode).toBe(200)
    })
    it('Rout Test / Square',async ()=>{
        const res = await request.get('/square/?num=2')
        expect(res.statusCode).toBe(200)
        expect(res._body.num).toBe(4)
    })
    it('Rout Test / Square',async ()=>{
        const res = await request.get('/square/?num=text')
        expect(res.statusCode).toBe(500)
    })
})