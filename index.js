class Formatter {
  //add static methods here
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  static sanitize(str) {
    return str.replace(/[^a-zA-Z0-9-' ]/g, '');
  }

  static titleize(str) {
    const words = str.split(' ');
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];

    for (let i = 0; i < words.length; i++) {
      const word = words[i].toLowerCase();
      if (i === 0 || !exceptions.includes(word)) {
        words[i] = word.charAt(0).toUpperCase() + word.slice(1);
      }
    }

    return words.join(' ');
  }
}