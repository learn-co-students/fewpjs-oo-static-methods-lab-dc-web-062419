class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase()+string.slice(1)
  }
  static sanitize(string){
    return string.replace(/[^A-Za-z0-9 '-]+/g, '');
  }

  static titleize(sentence){
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let arrayFromSentence = sentence.split(' ')
    let capitalized = []

    for(let i=0;i<arrayFromSentence.length;i++){
      if (i==0){
        capitalized.push(this.capitalize(arrayFromSentence[i]))
      } else {
          if (exceptions.includes(arrayFromSentence[i])){
            capitalized.push(arrayFromSentence[i])
        } else {
          capitalized.push(this.capitalize(arrayFromSentence[i]))
        }
      }
    }
    return capitalized.join(' ');
  }
}