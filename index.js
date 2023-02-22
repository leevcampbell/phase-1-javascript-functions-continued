// code your solution here
function saturdayFun(a = 'roller-skate'){
    return `This Saturday, I want to ${a}!`
}

const mondayWork = function(b = 'go to the office'){
    return `This Monday, I will ${b}.`
} 
    
function wrapAdjective(adj, defaultAdj = '*') {
    return function(string, defualtString = 'special'){
        return `You are ${adj}${string}${adj}!`
    }

}
