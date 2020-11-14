let chai = require('chai')
let chaiHttp = require('chai-http')
let server = require('../../app')
let expect = chai.expect

chai.use(chaiHttp)

describe('Hello World Server', () => {
    it('returns 200 ok', done => {
        chai.request(server)
          .get('/')
          .end((err, res) => {
            expect(res.status).to.equal(200);
            expect(res.text).to.equal('Hello World!');
            done()
          })
      })
})

