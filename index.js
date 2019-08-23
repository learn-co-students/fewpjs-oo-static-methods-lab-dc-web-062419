class Formatter {
  //add static methods here

  static capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  static sanitize(str){
    return str.replace(/[^A-Za-z0-9 '-]/g, '');
  }

  static titleize(str){
    let no = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
    let r = [];
    let arr = str.split( " " )
    for ( let n = 0; n < arr.length; n++ ) {
      if ( n == 0 ) {
        r.push( this.capitalize( arr[ n ] ) )
      } else {
        if ( no.includes( arr[ n ] ) ) {
          r.push( arr[ n ] )
        } else {
          r.push( this.capitalize( arr[ n ] ) )
        }
      }

    }
    return r.join( " " );
  }
}

