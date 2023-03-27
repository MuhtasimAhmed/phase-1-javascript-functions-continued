function saturdayFun(funActivity ='roller-skate'){
    return (`This Saturday, I want to ${funActivity}!`)
  }

  function mondayWork(workName = "go to the office"){
    return `This Monday, I will ${workName}.`
  }

  function wrapAdjective(flair){
    return function(argument = "special"){
        return `You are ${flair}${argument}${flair}!`
    }

  }