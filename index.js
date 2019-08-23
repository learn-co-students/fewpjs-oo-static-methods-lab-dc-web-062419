class Formatter {
  //add static methods here
  static capitalize(str){
    return str[0].toUpperCase() + str.slice(1)
  }

  static sanitize(str){
    return str.replace(/[^A-Za-z0-9 '-]/g, '')
  }

  static titleize(str){
    let exceptions = ['a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from', 'the']
    let newArray = []
   let words = str.split(" ")
   debugger
   newArray.push(this.capitalize(words[0]))
  
   for (let n=1; n<words.length; n++){
     debugger
     if (exceptions.includes(words[n])) {
       newArray.push(words[n])
     } else {
       newArray.push(this.capitalize(words[n]))
     }
    }
    return newArray.join(' ')
  }

}