/**
 * Best practices checker for LLM.yml files
 */

class BestPractices {
  constructor() {
    this.maxCodeLines = 20;
    this.maxFileSize = 100 * 1024; // 100KB
    this.recommendedSections = ['decision_tree', 'common_patterns', 'error_handling'];
  }

  /**
   * Check for best practices
   * @param {object} data - Parsed LLM.yml data
   * @returns {object} Result with warnings
   */
  check(data) {
    const warnings = [];

    // Check code example length
    this.checkCodeExampleLength(data, warnings);

    // Check for recommended sections
    this.checkRecommendedSections(data, warnings);

    // Check quick_usage patterns
    this.checkQuickUsagePatterns(data, warnings);

    // Check error_handling completeness
    this.checkErrorHandling(data, warnings);

    // Check decision tree depth
    this.checkDecisionTreeDepth(data, warnings);

    return { warnings };
  }

  checkCodeExampleLength(data, warnings) {
    if (data.quick_usage) {
      data.quick_usage.forEach((usage, i) => {
        const lines = usage.code.split('\n').length;
        if (lines > this.maxCodeLines) {
          warnings.push({
            type: 'code_length',
            path: `quick_usage[${i}]`,
            message: `Code example has ${lines} lines (recommended: <${this.maxCodeLines})`,
            severity: 'minor'
          });
        }
      });
    }

    if (data.common_patterns) {
      data.common_patterns.forEach((pattern, i) => {
        const lines = pattern.code.split('\n').length;
        if (lines > this.maxCodeLines) {
          warnings.push({
            type: 'code_length',
            path: `common_patterns[${i}]`,
            message: `Code example has ${lines} lines (recommended: <${this.maxCodeLines})`,
            severity: 'minor'
          });
        }
      });
    }
  }

  checkRecommendedSections(data, warnings) {
    this.recommendedSections.forEach(section => {
      if (!data[section]) {
        warnings.push({
          type: 'missing_section',
          path: '/',
          message: `Missing recommended section: ${section}`,
          severity: 'moderate'
        });
      }
    });
  }

  checkQuickUsagePatterns(data, warnings) {
    if (data.quick_usage && data.quick_usage.length < 2) {
      warnings.push({
        type: 'insufficient_examples',
        path: 'quick_usage',
        message: 'Consider adding more usage examples (recommended: 2-4)',
        severity: 'minor'
      });
    }
  }

  checkErrorHandling(data, warnings) {
    if (data.error_handling) {
      data.error_handling.forEach((error, i) => {
        if (!error.example && error.solution) {
          warnings.push({
            type: 'missing_example',
            path: `error_handling[${i}]`,
            message: 'Consider adding a code example for this error solution',
            severity: 'minor'
          });
        }
      });
    }
  }

  checkDecisionTreeDepth(data, warnings) {
    if (data.decision_tree) {
      const depth = this.getObjectDepth(data.decision_tree);
      if (depth > 4) {
        warnings.push({
          type: 'deep_nesting',
          path: 'decision_tree',
          message: `Decision tree has ${depth} levels of nesting (recommended: ≤4)`,
          severity: 'moderate'
        });
      }
    }
  }

  getObjectDepth(obj, currentDepth = 0) {
    if (typeof obj !== 'object' || obj === null) {
      return currentDepth;
    }

    let maxDepth = currentDepth;
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const depth = this.getObjectDepth(obj[key], currentDepth + 1);
        maxDepth = Math.max(maxDepth, depth);
      }
    }

    return maxDepth;
  }

  /**
   * Check file size
   * @param {number} fileSize - File size in bytes
   * @returns {object|null} Warning if file is too large
   */
  checkFileSize(fileSize) {
    if (fileSize > this.maxFileSize) {
      const sizeKB = (fileSize / 1024).toFixed(1);
      return {
        type: 'file_size',
        path: '/',
        message: `File size ${sizeKB}KB exceeds recommended ${this.maxFileSize / 1024}KB`,
        severity: 'moderate'
      };
    }
    return null;
  }
}

module.exports = { BestPractices };