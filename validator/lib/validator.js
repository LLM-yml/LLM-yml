/**
 * Core validation logic for LLM.yml files
 */

const Ajv = require('ajv');
const { BestPractices } = require('./best-practices');
const { ValidationError } = require('./errors');

class LLMYmlValidator {
  constructor(schema) {
    this.ajv = new Ajv({ allErrors: true, verbose: true });
    this.validate = this.ajv.compile(schema);
    this.bestPractices = new BestPractices();
  }

  /**
   * Validate data against schema
   * @param {object} data - Parsed YAML data
   * @returns {object} Validation result
   */
  validateData(data) {
    const result = {
      valid: false,
      errors: [],
      warnings: []
    };

    // Schema validation
    const schemaValid = this.validate(data);
    
    if (!schemaValid) {
      result.errors = this.formatSchemaErrors(this.validate.errors);
      return result;
    }

    // Best practices check
    const bpResult = this.bestPractices.check(data);
    result.warnings = bpResult.warnings;

    result.valid = true;
    return result;
  }

  /**
   * Format schema validation errors
   * @param {array} errors - AJV errors
   * @returns {array} Formatted errors
   */
  formatSchemaErrors(errors) {
    return errors.map(err => ({
      path: err.instancePath || '/',
      message: err.message,
      params: err.params,
      schemaPath: err.schemaPath
    }));
  }

  /**
   * Get human-readable error message
   * @param {object} error - Error object
   * @returns {string} Formatted error message
   */
  getErrorMessage(error) {
    let message = `${error.path}: ${error.message}`;
    
    if (error.params) {
      if (error.params.allowedValues) {
        message += ` (allowed: ${error.params.allowedValues.join(', ')})`;
      }
      if (error.params.limit) {
        message += ` (limit: ${error.params.limit})`;
      }
    }
    
    return message;
  }
}

module.exports = { LLMYmlValidator };