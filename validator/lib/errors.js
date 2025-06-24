/**
 * Custom error types for LLM.yml validation
 */

class ValidationError extends Error {
  constructor(message, errors = []) {
    super(message);
    this.name = 'ValidationError';
    this.errors = errors;
  }
}

class ParseError extends Error {
  constructor(message, line, column) {
    super(message);
    this.name = 'ParseError';
    this.line = line;
    this.column = column;
  }
}

class SchemaError extends Error {
  constructor(message, schemaPath) {
    super(message);
    this.name = 'SchemaError';
    this.schemaPath = schemaPath;
  }
}

/**
 * Format errors for CLI output
 */
class ErrorFormatter {
  constructor(colors) {
    this.colors = colors;
  }

  formatValidationError(error) {
    const path = error.path || '/';
    const message = error.message;
    let output = `  ${this.colors.yellow}${path}${this.colors.reset}: ${message}`;
    
    if (error.params) {
      output += `\n  ${this.colors.gray}Details: ${JSON.stringify(error.params)}${this.colors.reset}`;
    }
    
    return output;
  }

  formatWarning(warning) {
    const severity = warning.severity || 'minor';
    const color = severity === 'moderate' ? this.colors.yellow : this.colors.gray;
    
    return `  ${color}[${severity}]${this.colors.reset} ${warning.message}`;
  }

  formatParseError(error) {
    let output = `${this.colors.red}✗ YAML Parse Error:${this.colors.reset} ${error.message}`;
    
    if (error.line && error.column) {
      output += `\n  ${this.colors.gray}at line ${error.line}, column ${error.column}${this.colors.reset}`;
    }
    
    return output;
  }
}

module.exports = { ValidationError, ParseError, SchemaError, ErrorFormatter };