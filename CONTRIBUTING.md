# Contributing to LLM.yml

First off, thank you for considering contributing to LLM.yml! This project aims to establish a standard for AI-friendly documentation, and your contributions help make it better for everyone.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Specification Changes](#specification-changes)
- [Adding Examples](#adding-examples)
- [Developing Tools](#developing-tools)
- [Submitting Changes](#submitting-changes)
- [Style Guidelines](#style-guidelines)
- [Community](#community)

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code. Please be respectful and inclusive in all interactions.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check existing issues. When creating a bug report, include:

- Clear description of the issue
- Steps to reproduce
- Expected behavior
- Actual behavior
- LLM.yml version
- Any relevant error messages

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, provide:

- Clear use case description
- Proposed solution
- Alternative solutions considered
- Impact on existing users

### Your First Contribution

Unsure where to begin? Look for these labels:

- `good first issue` - Simple issues for newcomers
- `help wanted` - Issues needing attention
- `documentation` - Documentation improvements

## Specification Changes

Changes to the LLM.yml specification require careful consideration:

### Process

1. **Discuss First**: Open an issue describing the proposed change
2. **Get Consensus**: Wait for community feedback (minimum 1 week)
3. **Submit RFC**: Create a detailed RFC (Request for Comments) as a PR
4. **Review Period**: Allow 2 weeks for review
5. **Implementation**: Once approved, implement the change

### RFC Template

```markdown
# RFC: [Title]

## Summary
Brief description of the change

## Motivation
Why is this change needed?

## Detailed Design
Complete specification of the change

## Backwards Compatibility
Impact on existing LLM.yml files

## Alternatives Considered
Other approaches and why they weren't chosen

## Implementation Plan
Steps to implement this change
```

## Adding Examples

Examples help users understand LLM.yml better:

### Guidelines

1. **Real Libraries**: Use actual, popular libraries
2. **Complete Examples**: Include all required sections
3. **Best Practices**: Demonstrate recommended patterns
4. **Validation**: Ensure examples pass schema validation

### Process

1. Create example file in `examples/[library-name]-llm.yml`
2. Follow the specification exactly
3. Test with the validator
4. Submit PR with description of the library

### Example Structure

```yaml
# [Library Name] LLM Documentation Example
library:
  name: actual-library-name
  version: current.version.here
  # ... rest of the example
```

## Developing Tools

### Validator Improvements

The validator is crucial for LLM.yml adoption:

1. **Features**: Add useful validation features
2. **Error Messages**: Improve clarity and helpfulness
3. **Performance**: Optimize for large files
4. **Tests**: Include comprehensive tests

### New Tools

Consider developing:

- **Generators**: Convert existing docs to LLM.yml
- **Linters**: Style and best practice checks
- **Converters**: Transform between formats
- **Integrations**: IDE plugins, CI tools

### Tool Requirements

- Written in JavaScript/TypeScript or Python
- Well-documented
- Tested
- Follow project coding standards

## Submitting Changes

### Pull Request Process

1. **Fork & Clone**: Fork the repo and clone locally
2. **Branch**: Create a feature branch from `main`
3. **Commit**: Make focused, well-described commits
4. **Test**: Ensure all tests pass
5. **Push**: Push to your fork
6. **PR**: Submit a pull request

### PR Guidelines

- **Title**: Clear, descriptive title
- **Description**: Explain what and why
- **Testing**: Describe testing done
- **Issues**: Reference related issues

### Commit Messages

Follow conventional commits:

```
type(scope): subject

body (optional)

footer (optional)
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `spec`: Specification change
- `test`: Test addition/modification
- `chore`: Maintenance

Example:
```
feat(examples): add Django LLM.yml example

Added comprehensive example for Django web framework
demonstrating all required and optional sections.

Closes #123
```

## Style Guidelines

### YAML Style

- Use 2 spaces for indentation
- No tabs
- Prefer explicit strings over implicit
- Use `|` for multi-line strings
- Keep lines under 100 characters

### Documentation Style

- Clear, concise language
- Active voice
- Present tense
- Code examples should be runnable
- Use American English spelling

### Code Style

- ESLint for JavaScript/TypeScript
- Black for Python
- Include type annotations
- Comment complex logic
- Keep functions focused

## Community

### Getting Help

- **Discussions**: Use GitHub Discussions for questions
- **Chat**: Join our Discord server (coming soon)
- **Twitter**: Follow [@llmyml](https://twitter.com/llmyml)

### Recognition

Contributors are recognized in:
- [CONTRIBUTORS.md](./CONTRIBUTORS.md)
- Release notes
- Project website (coming soon)

### Maintainer Guidelines

Maintainers should:
- Respond to issues within 3 days
- Review PRs within 1 week
- Be respectful and helpful
- Follow the code of conduct
- Document decisions

## Development Setup

### Prerequisites

- Node.js 16+
- npm or yarn
- Git

### Setup

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/llm-yml.git
cd llm-yml

# Install dependencies
npm install

# Run tests
npm test

# Run validator
npm run validate examples/express-llm.yml
```

### Testing

- Write tests for new features
- Ensure all tests pass
- Add examples that exercise new features
- Test on multiple Node versions

## Release Process

Releases follow semantic versioning:

1. **Version Bump**: Update version in package.json
2. **Changelog**: Update CHANGELOG.md
3. **Tag**: Create git tag
4. **Release**: Create GitHub release
5. **Publish**: Publish to npm

Only maintainers can create releases.

## Questions?

Feel free to open an issue or start a discussion. We're here to help!

---

Thank you for contributing to LLM.yml! 🎉