const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateCommentInput(data) {
  let errors = {};


  if (Validator.isEmpty(data.text)) {
    errors.text = 'Text is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};