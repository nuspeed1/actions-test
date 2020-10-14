// import {expect} from  'chai'
// import {describe} from 'mocha'
// import testfunc from '../random'
// describe("hello", ()=>{
//     it("should  work", ()=>{
//         // var result = testfunc(5)
//         expect(10).to.equal(10)
//     })
// })

var expect = require('chai').expect
var numbers = [1,2,3,4]

describe("this",()=>{
    it("should work", ()=>{
        expect(numbers).to.be.an('array').that.includes(2);
    })
})



    
