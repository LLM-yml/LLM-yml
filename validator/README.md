# LLM.yml Validator

A command-line tool for validating LLM.yml files against the official specification.

## Installation

### Global Installation (Recommended)
```bash
npm install -g llm-yml
```

### Local Installation
```bash
npm install llm-yml
```

### Development Installation
```bash
# Clone the repository
git clone https://github.com/llm-yml/llm-yml.git
cd llm-yml
npm install
```

## Usage

### Command Line Interface

#### Validate a Single File
```bash
llm-yml validate path/to/LLM.yml
```

#### Validate Multiple Files in a Directory
```bash
llm-yml validate path/to/directory/
```

#### Validate Recursively
```bash
llm-yml validate . --recursive
```

### Options

- `-r, --recursive` - Search directories recursively for LLM.yml files
- `-q, --quiet` - Only show errors, suppress warnings
- `--no-best-practices` - Skip best practice checks (only validate schema)
- `--help` - Show help message
- `--version` - Show validator version

### File Naming Patterns

The validator looks for files matching these patterns:
- `LLM.yml` or `LLM.yaml`
- `LLM.json`
- `*-llm.yml` or `*-llm.yaml` (e.g., `myproject-llm.yml`)
- `*-llm.json`
- `*.llm.yml` or `*.llm.yaml` (e.g., `myproject.llm.yml`)
- `*.llm.json`

### Examples

```bash
# Validate a specific file
llm-yml validate ./LLM.yml

# Validate all LLM.yml files in examples directory
llm-yml validate ./examples/

# Validate entire project recursively
llm-yml validate . --recursive

# Validate with only errors (no warnings)
llm-yml validate ./LLM.yml --quiet

# Skip best practice warnings
llm-yml validate ./LLM.yml --no-best-practices
```

## Exit Codes

- `0` - All files valid
- `1` - Validation errors found
- `2` - Other errors (file not found, parse errors, etc.)

## Validation Types

### Schema Validation

Checks that your LLM.yml file conforms to the official schema:
- Required fields are present
- Field types are correct
- Values match expected patterns (e.g., semantic versioning)
- Structure follows the specification

### Best Practice Checks

Provides warnings for recommended practices:
- Missing recommended sections (decision_tree, common_patterns, error_handling)
- Too few usage examples (recommends 2-4)
- File size warnings (>50KB moderate, >100KB severe)
- Missing helpful sections that improve AI understanding

## Output Format

### Success
```
✓ Valid LLM.yml file
```

### Schema Errors
```
✗ Schema Validation Failed:
  /library/version: must match pattern "^\d+\.\d+\.\d+"
  /library: must have required property 'key_value'
```

### Parse Errors
```
✗ YAML Parse Error: unexpected end of the stream within a flow collection (5:10)
```

### Best Practice Warnings
```
⚠ Best Practice Warnings:
  [moderate] Missing recommended section: decision_tree
  [minor] Consider adding more usage examples (recommended: 2-4)
```

## Programmatic Usage

```javascript
const { validateFile, validator } = require('llm-yml');

// Validate a file
const isValid = validateFile('./LLM.yml');

// Get detailed validation results
const data = require('./LLM.yml');
const result = validator.validateData(data);
console.log(result);
// { valid: true, errors: [], warnings: [...] }
```

## npm Scripts

If using the development version:

```bash
# Validate a specific file
npm run validate path/to/LLM.yml

# Validate all examples
npm run validate:examples

# Run tests
npm test
```

## Common Issues

### File Not Found
- Ensure the file path is correct
- Check file naming matches expected patterns

### Version Format Errors
- Use semantic versioning: `1.0.0`, not `1.0`
- Pre-release versions: `1.0.0-beta.1`
- Build metadata: `1.0.0+build.123`

### Missing Required Fields
- `library.name` - Library name
- `library.version` - Semantic version
- `library.purpose` - Brief description
- `library.key_value` - Why use this library
- `quick_usage` - At least one usage example
- `api_essentials` - Core API information

### YAML Syntax Errors
- Check indentation (use spaces, not tabs)
- Ensure proper quote escaping
- Validate multi-line strings use `|` or `>`

## Contributing

See the main [Contributing Guide](../CONTRIBUTING.md) for information on:
- Reporting validator bugs
- Proposing new validation rules
- Improving error messages
- Adding best practice checks