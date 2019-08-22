class Formatter {
  static capitalize(str){
    return str.slice(0,1).toUpperCase() + str.slice(1);
  }

  static sanitize(str){
    return str.replace(/[^A-Za-z0-9-' ]+/g, '');
  }
  
  static titleize(str){
    const wordArray = str.split(" ");
    const newWordArray = [];
    let word;
    for (let i = 0; i < wordArray.length; i++) {
        word = this.sanitize(wordArray[i]);
        if (["the","a","an","but","of","and","for","at","by","from"].includes(word)){
            newWordArray.push(word)
        } else {
            newWordArray.push(this.capitalize(word))
        }
    };
    return this.capitalize(newWordArray.join(" "));
  }
}