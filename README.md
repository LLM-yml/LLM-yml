# LLM.yml - Standardized Documentation for AI Assistants 🤖

[![Specification Version](https://img.shields.io/badge/LLM.yml-v1.0.0-blue)](./SPECIFICATION.md)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)
[![Contributing](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](./CONTRIBUTING.md)

## What is LLM.yml?

LLM.yml is a standardized format for documenting code libraries and APIs specifically optimized for AI assistants and language models. Unlike traditional documentation written for human developers, LLM.yml provides structured, parseable information that helps AI assistants understand and use your code more effectively.

## Why LLM.yml?

As AI assistants become integral to development workflows, they need documentation designed for their unique requirements:

- **🚀 Faster Integration**: AI assistants can immediately understand your library
- **🎯 Better Recommendations**: Structured decision trees guide optimal usage
- **📋 Ready-to-Use Examples**: Copy-paste patterns that work immediately
- **🔧 Error Prevention**: Clear error-to-solution mappings
- **📊 Structured Data**: YAML format optimized for LLM parsing

## Quick Start

### 1. Add LLM.yml to Your Project

Create an `LLM.yml` file in your project root:

```yaml
library:
  name: your-awesome-library
  version: 1.0.0
  purpose: Brief description of what your library does
  key_value: Why developers should use your library

quick_usage:
  - pattern: "Basic usage"
    code: |
      const lib = require('your-awesome-library');
      const result = lib.doSomething();
    when_to_use: "For simple use cases"

# See full specification for all sections
```

### 2. Validate Your LLM.yml

```bash
npx llm-yml validate LLM.yml
```

### 3. Generate from Existing Docs (Coming Soon)

```bash
npx llm-yml generate --from README.md --output LLM.yml
```

## Specification

The full [LLM.yml Specification](./SPECIFICATION.md) defines:

- Required and optional sections
- Data structure and types
- Best practices
- Validation rules

## Examples

Check out the [examples](./examples) directory for LLM.yml files from popular libraries:

- [Express.js Example](./examples/express-llm.yml)
- [React Example](./examples/react-llm.yml)
- [FastAPI Example](./examples/fastapi-llm.yml)
- [SuperClaude SDK Example](./examples/superclaude-sdk-llm.yml)

## Tools

### Validator

The LLM.yml validator ensures your documentation follows the specification:

```bash
# Install globally
npm install -g llm-yml

# Validate a single file
llm-yml validate LLM.yml

# Validate all files in a directory
llm-yml validate ./examples/

# Validate recursively
llm-yml validate . --recursive

# Skip best practice warnings
llm-yml validate LLM.yml --no-best-practices
```

See the [Validator README](./validator/README.md) for detailed usage instructions.

### VS Code Extension (Coming Soon)

- Syntax highlighting
- Schema validation
- Auto-completion
- Preview

## Benefits for Library Authors

1. **Improved AI Integration**: AI assistants can use your library more effectively
2. **Reduced Support Burden**: Better AI understanding means fewer basic questions
3. **Wider Adoption**: AI-friendly libraries get recommended more often
4. **Future-Proof**: Prepare for AI-driven development workflows

## Benefits for AI Assistants

1. **Structured Information**: Parse library capabilities reliably
2. **Decision Logic**: Choose optimal approaches automatically
3. **Error Handling**: Provide accurate solutions to common problems
4. **Usage Patterns**: Apply best practices without deep analysis

## Community

- **Discussions**: [GitHub Discussions](https://github.com/llm-yml/llm-yml/discussions)
- **Issues**: [GitHub Issues](https://github.com/llm-yml/llm-yml/issues)
- **Twitter**: [@llmyml](https://twitter.com/llmyml)

## Contributing

We welcome contributions! See our [Contributing Guide](./CONTRIBUTING.md) for:

- How to propose specification changes
- Adding examples
- Developing tools
- Improving documentation

## Roadmap

- [x] Initial specification (v1.0.0)
- [x] Basic examples
- [x] Validation schema
- [ ] npm package with CLI tools
- [ ] VS Code extension
- [ ] GitHub Action for validation
- [ ] Auto-generation from existing docs
- [ ] Test suite for LLM comprehension
- [ ] Multi-language support

## Projects Using LLM.yml

- [SuperClaude SDK Wrapper](https://github.com/example/superclaude-sdk-wrapper)
- [Your Project Here] - [Submit a PR](./CONTRIBUTING.md)

## FAQ

**Q: Is LLM.yml only for JavaScript/TypeScript?**  
A: No! LLM.yml is language-agnostic. Use it for Python, Rust, Go, or any language.

**Q: Should LLM.yml replace README.md?**  
A: No, LLM.yml complements traditional documentation. Keep your README for humans!

**Q: What if my library is complex?**  
A: Focus on the most common use cases. LLM.yml prioritizes practical usage over comprehensive documentation.

**Q: Can I use JSON instead of YAML?**  
A: Yes! LLM.json is also supported with the same structure.

## License

MIT - See [LICENSE](./LICENSE) file

---

<div align="center">
  <h3>Make your library AI-friendly with LLM.yml</h3>
  <p>
    <a href="./SPECIFICATION.md">Read the Spec</a> •
    <a href="./examples">See Examples</a> •
    <a href="./CONTRIBUTING.md">Contribute</a>
  </p>
</div>