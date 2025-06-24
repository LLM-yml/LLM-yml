# LLM.yml Frequently Asked Questions

## General Questions

### What is LLM.yml?

LLM.yml is a standardized documentation format specifically designed for AI assistants and Large Language Models (LLMs). It provides structured, easily parseable documentation that helps AI assistants understand and use code libraries more effectively.

### Why not just use README.md?

Traditional README files are written for human developers with narrative prose, installation guides, and background information. LLMs work better with:
- Structured data formats
- Ready-to-use code examples
- Clear decision trees
- Direct error-to-solution mappings

LLM.yml complements README.md - it doesn't replace it.

### Is LLM.yml only for JavaScript/TypeScript?

No! LLM.yml is language-agnostic. You can use it for:
- Python libraries
- Rust crates
- Go modules
- Ruby gems
- Any programming language or framework

## Technical Questions

### What formats are supported?

- **LLM.yml** - YAML format (recommended)
- **LLM.json** - JSON format
- **LLM.toml** - TOML format (experimental)

### Where should I place the LLM.yml file?

Place it in your project root directory, alongside README.md:

```
my-project/
├── README.md     # For humans
├── LLM.yml       # For AI assistants
├── package.json
└── src/
```

### What are the minimum required fields?

```yaml
library:
  name: your-library
  version: 1.0.0
  purpose: Brief description (max 100 chars)
  key_value: Why use this library (max 100 chars)

quick_usage:
  - pattern: "Basic usage"
    code: |
      # Working example
    when_to_use: "When to use this pattern"

api_essentials:
  main_class: MainClass
  key_methods:
    - method1()
  instantiation: "new MainClass()"
```

### How do I validate my LLM.yml file?

Install the validator:
```bash
npm install -g llm-yml
```

Validate your file:
```bash
llm-yml LLM.yml
```

## Best Practices

### How many examples should I include?

- **quick_usage**: 2-4 examples covering common use cases
- **common_patterns**: 3-6 patterns for typical scenarios
- **error_handling**: 5-10 common errors developers encounter

### How long should code examples be?

Keep examples under 20 lines. They should be:
- Complete and runnable
- Include necessary imports
- Focus on one concept
- Avoid unnecessary complexity

### Should I include my entire API?

No. Follow the 80/20 rule - document the 20% of your API that covers 80% of use cases. LLMs can refer to full documentation when needed.

### How detailed should descriptions be?

- `purpose`: Maximum 100 characters
- `key_value`: Maximum 100 characters
- `when_to_use`: Maximum 100 characters
- Other descriptions: Clear and concise

## Schema and Validation

### How do I know if my LLM.yml is valid?

Use the validator:
```bash
llm-yml validate LLM.yml
```

It checks:
- Required fields are present
- Data types are correct
- Character limits are respected
- Structure follows the schema

### Can I extend the schema?

The schema is designed to be comprehensive. If you need additional fields, consider:
1. Using existing optional sections
2. Proposing changes via GitHub issues
3. Waiting for community consensus

### What version of the spec should I use?

Always use the latest stable version. Check the specification version in:
- [spec/latest/README.md](../spec/latest/README.md)
- Badge in the main README

## Integration Questions

### How do AI assistants use LLM.yml?

AI assistants can:
1. Parse the structured format quickly
2. Find appropriate code examples
3. Make decisions using decision trees
4. Provide accurate error solutions
5. Choose the right API methods

### Can I generate LLM.yml from existing docs?

Tools for auto-generation are in development. For now:
1. Start with the minimal template
2. Add sections gradually
3. Validate frequently
4. Test with AI assistants

### How do I test if my LLM.yml is effective?

1. Ask an AI assistant to use your library with only the LLM.yml
2. Check if it can:
   - Understand basic usage
   - Choose appropriate methods
   - Handle common errors
   - Make correct decisions

## Contributing

### How can I contribute to LLM.yml?

- Report issues on GitHub
- Submit example files
- Propose specification improvements
- Develop tools and integrations
- Share your experience

### How do I propose spec changes?

1. Open a GitHub issue
2. Discuss with the community
3. Submit an RFC (Request for Comments)
4. Wait for review period
5. Implement if approved

### Where can I get help?

- GitHub Discussions
- GitHub Issues
- Twitter: @llmyml
- Examples in this repository

## Future Plans

### What's on the roadmap?

- VS Code extension
- Auto-generation tools
- Multi-language documentation
- GitHub Action for CI
- Web-based validator
- LLM comprehension testing

### Will there be breaking changes?

We follow semantic versioning:
- Major versions may have breaking changes
- Minor versions add features
- Patch versions fix bugs

Always check the [CHANGELOG](../CHANGELOG.md) when updating.

### How can I stay updated?

- Watch the GitHub repository
- Follow @llmyml on Twitter
- Subscribe to releases on GitHub
- Join community discussions