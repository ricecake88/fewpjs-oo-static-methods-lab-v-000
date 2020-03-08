class Formatter {
  //add static methods here
  static capitalize(str) {
    let first_letter = str[0]
    return first_letter.toUpperCase() + str.slice(1)
  }
  
  static sanitize(str) {
    return str.replace('/[^A-Za-z0-9\-\'\s]+/g', '');
  }
  
  static titleize(str) {
    let array = str.split(" ");
    let new_array = array.slice(1).map(function(x) {
      if (['the', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'].includes(x)) {
        return x;
      } else {
        return Formatter.capitalize(x);
      }
    })
    return array[0] + new_array.join(" ")
  }
}