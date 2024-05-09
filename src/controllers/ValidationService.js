
class ValidationService {
    validateAge(age) {
      if (!age || isNaN(age)) {
        throw new Error('Invalid value for parameter');
      }
    }
  }
  
  module.exports = ValidationService;
  