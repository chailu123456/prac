define(['./a.js'],function(until){
    var aUtil = {
        aGetdata:function(data) {
            console.log(until.getFromdate(data,1))
            return until.getFromdate(data,1)
        }
    }
    return aUtil
})