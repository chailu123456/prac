define(['./a.js'],function(until){
    var aUtil = {
        aGetdata:function(data) {
            return until.getFromdate(data,2)
        }
    }
    return aUtil
})