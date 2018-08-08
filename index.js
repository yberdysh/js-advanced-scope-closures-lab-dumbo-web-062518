const produceDrivingRange = function(blockRange){
	return function(blockA, blockB){
		const diff = Math.abs(Number(blockA.slice(0, 2)) - Number(blockB.slice(0,2)))
		// debugger
		if (diff > blockRange){
			return `${Math.abs(blockRange - diff)} blocks out of range`
		} else {
			return `within range by ${diff}`
		}
	}
}


const produceTipCalculator = function(percentage){
	return function(amount){
		return amount * percentage
	}
}

const createDriver = function(){
	let driverId = 0;
	return function Driver(name){
		this.name = name
		this.id = driverId++
	}
}