class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, '');
  }

  static titleize(string) {
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    string = this.sanitize(string);
    const words = string.split(' ');
    const newString = [];
    words.forEach(word => {
      if (exceptions.includes(word)) {
        newString.push(word);
      } else {
        newString.push(this.capitalize(word));
      }
    });
    newString[0] = this.capitalize(newString[0]);
    return newString.join(' ');
  }
}
