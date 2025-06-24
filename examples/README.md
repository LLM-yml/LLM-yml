# LLM.yml Examples

This directory contains examples of LLM.yml files for various libraries and frameworks. These examples demonstrate best practices and different use cases for the LLM.yml format.

## Directory Structure

### `libraries/`
Traditional libraries with focused functionality:
- **express-llm.yml** - Express.js web framework (Node.js)
- **react-llm.yml** - React UI library (JavaScript)
- **fastapi-llm.yml** - FastAPI web framework (Python)

### `frameworks/`
Full frameworks and SDKs with extensive functionality:
- **superclaude-sdk-llm.yml** - SuperClaude SDK Wrapper

### `minimal/`
Minimal valid examples showing required fields only:
- **hello-world-llm.yml** - Absolute minimum valid LLM.yml

### `advanced/` (Coming Soon)
Complex examples demonstrating advanced features:
- Multi-language libraries
- Libraries with plugins
- Complex dependency structures

## How to Use These Examples

1. **As Templates**: Copy and modify for your own library
2. **As Reference**: See how different sections are used
3. **For Testing**: Validate your understanding of the format
4. **For Learning**: Understand best practices

## Validation

All examples in this directory are validated against the schema:

```bash
# Validate all examples
npm run validate:examples

# Validate specific example
npm run validate examples/libraries/express-llm.yml
```

## Contributing Examples

When adding a new example:

1. Choose the appropriate subdirectory
2. Use the actual library name and current version
3. Include all required sections
4. Follow best practices from the specification
5. Validate before submitting PR

Example filename format: `[library-name]-llm.yml`

## Best Practices Demonstrated

### Concise Descriptions
- `purpose` and `key_value` under 100 characters
- Clear, actionable `when_to_use` guidance

### Practical Code Examples
- Runnable code with imports
- Common real-world scenarios
- Under 20 lines per example

### Helpful Error Handling
- Common errors developers encounter
- Clear solutions with examples
- Cause and effect explained

### Decision Trees
- Logical organization of choices
- Clear use cases for each option
- Brief explanations of "why"

## Learn More

- [LLM.yml Specification](../spec/latest/README.md)
- [Contributing Guide](../CONTRIBUTING.md)
- [Validation Schema](../spec/latest/schema.json)