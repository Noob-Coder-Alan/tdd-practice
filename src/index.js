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


function exchangeClockwise(noStudents, counts){
        const preRotateOrder = preExchangeOrderGenerator(noStudents)
        const postRotateOrder = []

        for(let i=0; i < noStudents; i++){
            if(preRotateOrder.indexOf(preRotateOrder[i]) + counts >= noStudents){
                postRotateOrder[(preRotateOrder.indexOf(preRotateOrder[i]) + counts)%noStudents] = preRotateOrder[i]
            } else {
                postRotateOrder[preRotateOrder.indexOf(preRotateOrder[i]) + counts] = preRotateOrder[i]
            }
        }

        return {
            preClockwise: preRotateOrder,
            postClockwise: postRotateOrder
        }
}


export {exchangeClockwise, getBMI}

console.log(exchangeClockwise(6,4))

