//Declare and initialize the global variables 
const speedLimit = 70
let demeritPoint = 0

//Prompt the user to enter the driver's speed, accept the input and store it in a variable
let driverSpeed = prompt("Enter the driver's speed: ")


//Define a function that checks the driver's speed and accepts it as a parameter
function speedDetector(speed){
    if(speed <= speedLimit){//Prints ok if the speed is below speed limit
    alert("Ok")
}else if(speed > speedLimit){//if speed is above speed limit
    let overSpeedLimit = driverSpeed - speedLimit //calculates by how much the speed limit has been exceeded
    demeritPoint =  Math.floor(overSpeedLimit / 5) //calculates how many demerit points to assign depending on the overspeed limit, divides the value by 5 to get the number of points to be assigned to driver
    alert(`Points: ${demeritPoint}`)//prints the points
    if(demeritPoint > 12){//checks if the points are greater than 12, if they are, prints suspended message
        alert("License suspended")
    }
}
}
speedDetector(driverSpeed)//call the speedDetector function and pass the driver's speed as an argument