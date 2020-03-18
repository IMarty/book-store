import { Book } from '../model/book';

export default class Utils {

  sortString(bookArray: any[], property, order = 1) {
    return bookArray.sort((a, b) => {
      // Use toUpperCase() to ignore character casing
      const stringA = a[property].toUpperCase();
      const stringB = b[property].toUpperCase();

      let comparison = 0;
      if (stringA > stringB) {
        comparison = 1;
      } else if (stringA < stringB) {
        comparison = -1;
      }
      return order * comparison;
    });
  }

  sortNumber(bookArray: any[], property, order = 1) {
    return bookArray.sort((a, b) => {
      // Use toUpperCase() to ignore character casing
      const numberA = a[property];
      const numberB = b[property];
      return order * (numberA - numberB);
    });
  }

}

