# Changelog

All notable changes to the LLM.yml specification and tools will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-06-23

### Added
- Initial LLM.yml specification v1.0.0
- JSON Schema for validation
- Command-line validator tool
- Example files for popular libraries:
  - Express.js
  - React
  - FastAPI
  - SuperClaude SDK
- Contributing guidelines
- GitHub issue and PR templates

### Specification Features
- Required sections: library, quick_usage, api_essentials
- Optional sections for enhanced documentation
- Support for YAML, JSON, and TOML formats
- Structured format optimized for LLM parsing

### Tools
- `llm-yml validate` command for file validation
- Best practice warnings
- Directory scanning support

## [Unreleased]

### Planned
- VS Code extension for syntax highlighting
- Auto-generation from existing documentation
- Multi-language specification support
- GitHub Action for CI validation
- Web-based validator
- LLM comprehension test suite

---

To see what's being worked on, check our [GitHub Issues](https://github.com/llm-yml/llm-yml/issues).