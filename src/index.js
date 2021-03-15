
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (!matrix){
        return [];
    } else  {
        for (var i=1; i <matrix.length; i++){
            if ( i%2 !== 0 ){
                matrix[i].reverse();
            }
        }
        return [].concat(...matrix)
    }

}
