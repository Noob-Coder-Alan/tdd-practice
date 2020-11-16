function getBMI(h, w, system){
    if(system === "english"){
        const ftInch = h.split("'")
        const height = Number(ftInch[0])*12 + Number(ftInch[1])
        return Math.round((703*(w/height**2))*10)/10
    }
    else if(system === "metric"){
        return Math.round((w/(h/100)**2)*10)/10
    }
}
export default getBMI;