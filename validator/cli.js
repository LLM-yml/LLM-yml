#!/usr/bin/env node

/**
 * LLM.yml Validator CLI
 * Command-line interface for validating LLM.yml files
 */

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const { LLMYmlValidator } = require('./lib/validator');
const { ErrorFormatter } = require('./lib/errors');
const { BestPractices } = require('./lib/best-practices');

// ANSI color codes
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  gray: '\x1b[90m'
};

// Load schema
const schemaPath = path.join(__dirname, '..', 'spec', 'latest', 'schema.json');
const schema = JSON.parse(fs.readFileSync(schemaPath, 'utf8'));

// Initialize components
const validator = new LLMYmlValidator(schema);
const errorFormatter = new ErrorFormatter(colors);
const bestPractices = new BestPractices();

/**
 * Validate a single LLM.yml file
 */
function validateFile(filePath) {
  console.log(`\n${colors.blue}Validating:${colors.reset} ${filePath}`);
  
  try {
    // Read file
    const content = fs.readFileSync(filePath, 'utf8');
    const stats = fs.statSync(filePath);
    
    // Parse YAML/JSON
    let data;
    try {
      if (filePath.endsWith('.json')) {
        data = JSON.parse(content);
      } else {
        data = yaml.load(content);
      }
    } catch (e) {
      console.error(errorFormatter.formatParseError(e));
      return false;
    }
    
    // Validate
    const result = validator.validateData(data);
    
    // Check file size
    const sizeWarning = bestPractices.checkFileSize(stats.size);
    if (sizeWarning) {
      result.warnings.push(sizeWarning);
    }
    
    // Display results
    if (result.valid) {
      console.log(`${colors.green}✓ Valid LLM.yml file${colors.reset}`);
      
      // Show warnings if any
      if (result.warnings.length > 0) {
        console.log(`\n${colors.yellow}⚠ Best Practice Warnings:${colors.reset}`);
        result.warnings.forEach(warning => {
          console.log(errorFormatter.formatWarning(warning));
        });
      }
      
      return true;
    } else {
      console.error(`${colors.red}✗ Schema Validation Failed:${colors.reset}`);
      
      // Show errors
      result.errors.forEach(error => {
        console.error(errorFormatter.formatValidationError(error));
      });
      
      return false;
    }
  } catch (e) {
    console.error(`${colors.red}✗ Error:${colors.reset} ${e.message}`);
    return false;
  }
}

/**
 * Validate multiple files
 */
function validateFiles(files) {
  let allValid = true;
  let validCount = 0;
  
  files.forEach(file => {
    if (validateFile(file)) {
      validCount++;
    } else {
      allValid = false;
    }
  });
  
  console.log(`\n${colors.blue}Summary:${colors.reset} ${validCount}/${files.length} file(s) valid`);
  return allValid;
}

/**
 * Find LLM.yml files in directory
 */
function findLLMFiles(dir, recursive = true) {
  const files = [];
  
  function scan(directory, depth = 0) {
    const entries = fs.readdirSync(directory, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(directory, entry.name);
      
      if (entry.isDirectory() && !entry.name.startsWith('.') && (recursive || depth === 0)) {
        scan(fullPath, depth + 1);
      } else if (entry.isFile() && entry.name.match(/(^LLM|[-.]llm)\.(yml|yaml|json)$/i)) {
        files.push(fullPath);
      }
    }
  }
  
  scan(dir);
  return files;
}

/**
 * Show help message
 */
function showHelp() {
  console.log(`
${colors.blue}LLM.yml Validator${colors.reset}

Usage:
  llm-yml <file>           Validate a single LLM.yml file
  llm-yml <directory>      Validate all LLM.yml files in directory
  llm-yml --help          Show this help
  llm-yml --version       Show version

Options:
  -r, --recursive         Search directories recursively
  -q, --quiet            Only show errors, no warnings
  --no-best-practices    Skip best practice checks

Examples:
  llm-yml LLM.yml
  llm-yml examples/
  llm-yml ./my-project/LLM.yml
  llm-yml . --recursive

Exit codes:
  0 - All files valid
  1 - Validation errors found
  2 - Other errors
`);
}

/**
 * Show version
 */
function showVersion() {
  const pkg = require('../package.json');
  console.log(`llm-yml v${pkg.version}`);
}

/**
 * CLI entry point
 */
function main() {
  const args = process.argv.slice(2);
  
  // Parse options
  const options = {
    recursive: args.includes('-r') || args.includes('--recursive'),
    quiet: args.includes('-q') || args.includes('--quiet'),
    noBestPractices: args.includes('--no-best-practices')
  };
  
  // Filter out option flags
  const targets = args.filter(arg => !arg.startsWith('-'));
  
  // Handle commands
  if (args.length === 0 || args.includes('--help') || args.includes('-h')) {
    showHelp();
    process.exit(0);
  }
  
  if (args.includes('--version') || args.includes('-v')) {
    showVersion();
    process.exit(0);
  }
  
  if (targets.length === 0) {
    console.error(`${colors.red}Error:${colors.reset} No file or directory specified`);
    showHelp();
    process.exit(2);
  }
  
  const target = targets[0];
  const targetPath = path.resolve(target);
  
  try {
    const stats = fs.statSync(targetPath);
    
    if (stats.isDirectory()) {
      // Validate directory
      console.log(`${colors.blue}Scanning directory:${colors.reset} ${targetPath}`);
      
      const files = findLLMFiles(targetPath, options.recursive);
      
      if (files.length === 0) {
        console.log(`${colors.yellow}No LLM.yml files found${colors.reset}`);
        process.exit(1);
      }
      
      const valid = validateFiles(files);
      process.exit(valid ? 0 : 1);
      
    } else {
      // Validate single file
      const valid = validateFile(targetPath);
      process.exit(valid ? 0 : 1);
    }
  } catch (e) {
    console.error(`${colors.red}Error:${colors.reset} ${e.message}`);
    process.exit(2);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

// Export for programmatic use
module.exports = { validateFile, validateFiles, validator };