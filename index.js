function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!` 
}

const mondayWork = function(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

const wrapAdjective = function(visual="*") {
    return function(arg="special") {
        return `You are ${visual}${arg}${visual}!`
    }
}

const Calculator = {
    add: function(a, b) {
        return a + b 
    },

    subtract: function(a, b) {
        return a - b 
    },

    multiply: function(a, b) {
        return a * b 
    },

    divide: function(a, b) {
        return a / b
    }
}

const actionApplyer = function(start, arr) {
    let a = start
  
    for (let i = 0; i < arr.length; i++ ){
      a = arr[i](a)
    }
  
    return a
  }