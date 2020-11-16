function getBMI(height, weight, system){
    if(system === "english"){
        const ftInch = height.split("'")
        const heightTotal = Number(ftInch[0])*12 + Number(ftInch[1])
        return Math.round((703*(weight/heightTotal**2))*10)/10
    }
    else if(system === "metric"){
        return Math.round((weight/(height/100)**2)*10)/10
    }
}

function preExchangeOrderGenerator(noStudents){
    const order = []
    for(let i = 0; i < noStudents; i++){
        order.push(String.fromCharCode(65 + i))
    }

    return order
}

function exchangeClockwiseFromArr(noStudents, counts, preRotateOrderArr){
    const postRotateOrder = []

    for(let i=0; i < noStudents; i++){
        if(preRotateOrderArr.indexOf(preRotateOrderArr[i]) + counts >= noStudents){
            postRotateOrder[(preRotateOrderArr.indexOf(preRotateOrderArr[i]) + counts)%noStudents] = preRotateOrderArr[i]
        } else {
            postRotateOrder[preRotateOrderArr.indexOf(preRotateOrderArr[i]) + counts] = preRotateOrderArr[i]
        }
    }

    return postRotateOrder
}


function exchangeClockwise(noStudents, counts){
        const preRotateOrder = preExchangeOrderGenerator(noStudents)
        return {
            preClockwise: preRotateOrder,
            postClockwise: exchangeClockwiseFromArr(noStudents, counts, preRotateOrder)
        }
}

export {exchangeClockwise, getBMI, seatmateSwap}


