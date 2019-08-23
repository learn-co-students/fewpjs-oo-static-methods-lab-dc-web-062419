class Formatter {
  //add static methods here



  static capitalize(string){

    return string[0].toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    
    return string.replace(/[^A-Za-z0-9-' ]+/g, '')
  }


  static titleize(string){
    let arr = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let newArr = []
      let newString = string.split(' ')
    newString.forEach(elem => {
      
        if(arr.includes(elem)) {
          newArr.push(elem) 
        }
        else{
          newArr.push(Formatter.capitalize(elem))
        }
      
    })
    newArr[0] = Formatter.capitalize(newArr[0])
    newArr = newArr.join(" ")
    return newArr
  }
  

}

Formatter.titleize("This string here should be capitalized")