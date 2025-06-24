# LLM.yml Specification v1.0.0

## Table of Contents

1. [Introduction](#introduction)
2. [File Format](#file-format)
3. [Schema Definition](#schema-definition)
4. [Required Sections](#required-sections)
5. [Optional Sections](#optional-sections)
6. [Best Practices](#best-practices)
7. [Validation Rules](#validation-rules)
8. [Version History](#version-history)

## Introduction

LLM.yml is a standardized format for documenting software libraries optimized for consumption by Large Language Models (LLMs) and AI assistants. This specification defines the structure, required fields, and best practices for creating LLM-friendly documentation.

### Goals

- **Structured Information**: Provide easily parseable documentation
- **Rapid Comprehension**: Enable LLMs to understand libraries quickly
- **Practical Usage**: Focus on how to use rather than how it works
- **Error Prevention**: Guide correct usage through patterns and examples

### Non-Goals

- Replace human-readable documentation
- Document internal implementation details
- Provide comprehensive API documentation
- Support complex narrative explanations

## File Format

LLM.yml files must be valid YAML 1.2 documents. Alternative formats are also supported:

- `LLM.yml` - YAML format (recommended)
- `LLM.json` - JSON format
- `LLM.toml` - TOML format (experimental)

### File Location

The LLM documentation file should be placed in the project root directory alongside README.md:

```
project/
├── README.md      # Human documentation
├── LLM.yml        # LLM documentation
├── package.json
└── src/
```

## Schema Definition

### Root Structure

```yaml
# Required sections
library: LibraryInfo
quick_usage: QuickUsage[]
api_essentials: APIEssentials

# Optional sections
decision_tree: DecisionTree
common_patterns: Pattern[]
error_handling: ErrorMapping[]
configuration: ConfigExample
dependencies: Dependencies
flags_reference: FlagsReference
integration_tips: Tip[]
```

## Required Sections

### library

Basic information about the library.

```yaml
library:
  name: string          # Package/library name
  version: string       # Current version (semver)
  purpose: string       # One-line description (max 100 chars)
  key_value: string     # Why use this library (max 100 chars)
```

**Example:**
```yaml
library:
  name: express
  version: 4.18.0
  purpose: Fast, unopinionated, minimalist web framework for Node.js
  key_value: Production-ready HTTP server with minimal configuration
```

### quick_usage

At least one basic usage example.

```yaml
quick_usage:
  - pattern: string         # Name of the pattern (max 50 chars)
    code: string           # Working code example
    when_to_use: string    # When to apply this pattern (max 100 chars)
```

**Example:**
```yaml
quick_usage:
  - pattern: "Basic HTTP server"
    code: |
      const express = require('express');
      const app = express();
      
      app.get('/', (req, res) => {
        res.send('Hello World!');
      });
      
      app.listen(3000);
    when_to_use: "Creating a simple web server"
```

### api_essentials

Core API elements that cover 80% of use cases.

```yaml
api_essentials:
  main_class: string           # Primary class/function/module
  key_methods:                 # Most important methods/functions
    - string                   # Method signature or name
  instantiation: string        # How to create/initialize
```

**Example:**
```yaml
api_essentials:
  main_class: express.Application
  key_methods:
    - app.get(path, handler)
    - app.post(path, handler)
    - app.use(middleware)
    - app.listen(port)
  instantiation: "const app = express()"
```

## Optional Sections

### decision_tree

Hierarchical structure for choosing approaches based on use case.

```yaml
decision_tree:
  [scenario]:
    [sub_scenario]:
      use: string              # What to use
      example: string          # Brief example
      why: string              # Brief reasoning
```

**Example:**
```yaml
decision_tree:
  api_type:
    rest_api:
      use: "express + body-parser"
      example: "app.use(express.json())"
      why: "Built-in REST support"
    graphql_api:
      use: "express + apollo-server-express"
      example: "applyMiddleware({ app })"
      why: "GraphQL integration"
```

### common_patterns

Frequently used code patterns.

```yaml
common_patterns:
  - name: string               # Pattern name
    code: string               # Complete working example
    description: string        # What this pattern does
    tags: string[]             # Categories (optional)
```

### error_handling

Common errors and their solutions.

```yaml
error_handling:
  - error: string              # Error message or type
    cause: string              # Why this happens
    solution: string           # How to fix it
    example: string            # Code example (optional)
```

### configuration

Configuration examples for common scenarios.

```yaml
configuration:
  minimal: string              # Minimal config
  recommended: string          # Recommended config
  advanced: string             # Advanced config (optional)
```

### dependencies

Required and optional dependencies.

```yaml
dependencies:
  required:
    - name: version           # Dependency name and version
  optional:
    - name: version           # Optional dependency
  peer:
    - name: version           # Peer dependency
```

### flags_reference

Command-line flags or options (if applicable).

```yaml
flags_reference:
  [category]:
    [flag_name]:
      effect: string           # What the flag does
      default: any             # Default value
      use_for: string          # When to use this flag
```

### integration_tips

Quick tips for common integration scenarios.

```yaml
integration_tips:
  - scenario: string           # Integration scenario
    tip: string                # Quick tip
    example: string            # Brief example (optional)
```

## Best Practices

### 1. Conciseness

- Keep descriptions under 100 characters where specified
- Use code examples that fit on one screen
- Focus on the most common 80% of use cases

### 2. Practicality

- Every code example should be runnable
- Include imports and setup in examples
- Prefer real-world scenarios over abstract examples

### 3. Structure

- Use consistent key names across sections
- Maintain shallow nesting (max 4 levels)
- Group related information together

### 4. Language

- Use imperative mood for instructions
- Avoid jargon and complex explanations
- Write for LLMs, not humans

### 5. Maintenance

- Update version number with library releases
- Test examples with each major version
- Remove deprecated patterns promptly

## Validation Rules

### Required Field Validation

1. `library.name` must match the package name
2. `library.version` must be valid semver
3. `library.purpose` max 100 characters
4. `library.key_value` max 100 characters
5. At least one `quick_usage` entry required
6. `api_essentials` must have all required fields

### Code Example Validation

1. Code blocks must be syntactically valid
2. Import statements must be included
3. Examples should be self-contained
4. Maximum 50 lines per example

### Structure Validation

1. Maximum nesting depth: 4 levels
2. Maximum file size: 100KB
3. Must be valid YAML/JSON/TOML
4. UTF-8 encoding required

## Version History

### v1.0.0 (Current)

- Initial specification release
- Core required sections defined
- Optional sections for common use cases
- YAML as primary format

### Future Versions

Planned enhancements:

- v1.1.0: Multi-language support
- v1.2.0: Interactive examples
- v1.3.0: Performance hints
- v2.0.0: LLM feedback incorporation

## Conformance

To claim LLM.yml conformance, a file must:

1. Include all required sections with valid data
2. Pass schema validation
3. Follow naming conventions
4. Use supported file formats

## References

- [YAML 1.2 Specification](https://yaml.org/spec/1.2/spec.html)
- [JSON Schema](https://json-schema.org/)
- [Semantic Versioning](https://semver.org/)

---

This specification is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). To propose changes, see [CONTRIBUTING.md](./CONTRIBUTING.md).