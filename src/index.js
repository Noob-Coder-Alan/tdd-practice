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

function exchangeClockwise(noStudents, counts){
        const preRotateOrder = []
        const postRotateOrder = []
        for(let i = 0; i < noStudents; i++){
            preRotateOrder.push(String.fromCharCode(65 + i))
        }


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

console.log(getBMI("5'7", 130, "english"))


