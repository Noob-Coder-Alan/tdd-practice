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


function seatmateSwapEven(noStudents, preSwapOrderArr){
    const postSwapOrder = []
    
    if(noStudents%2 === 0){
        const aSeatmates = []
        const bSeatmates = []
        preSwapOrderArr.forEach( student => {
            if(preSwapOrderArr.indexOf(student) % 2 === 0){
                aSeatmates.push(student)
            } else {
                bSeatmates.push(student)
            }
        })
        for(let i=0; i < noStudents; i++){
            if(i%2===0){
                postSwapOrder.push(bSeatmates.shift())
            } else {
                postSwapOrder.push(aSeatmates.shift())
            }
        }
    }

    return postSwapOrder
}

function seatmateSwap(noStudents){
    const preSwapOrder = preExchangeOrderGenerator(noStudents)
    if(noStudents%2 === 0){
        return {
            preSwap: preSwapOrder,
            postSwap: seatmateSwapEven(noStudents, preSwapOrder)
        }

    } else {
        const pairedStudents = preSwapOrder.slice(0, noStudents-3)
        const pairedStudentsSwapped = seatmateSwapEven(pairedStudents.length, pairedStudents)
        const oddStudents = exchangeClockwiseFromArr(3, 2, preSwapOrder.slice(noStudents-3, Infinity))
        return {
            preSwap: preSwapOrder,
            postSwap: pairedStudentsSwapped.concat(oddStudents)
        }
    }
}

export {exchangeClockwise, getBMI}


