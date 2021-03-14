module.exports = function towelSort (matrix) {
    if ( matrix === undefined) {
        return []
    } else {
        let arrayTowelSort = []
        for (let i = 0; i < matrix.length; i++) {
            if (i % 2 === 0) {
                arrayTowelSort.push(...matrix[i])
            } else {
                let reverseMatrixArray = matrix[i].reverse()
                arrayTowelSort.push(...reverseMatrixArray)
            }
        }
        return arrayTowelSort;
    }
}
