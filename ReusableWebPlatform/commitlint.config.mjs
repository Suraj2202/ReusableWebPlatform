export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',     // New feature
        'fix',      // Bug fix
        'docs',     // Documentation only
        'style',    // Formatting, no code change
        'refactor', // Code restructure, no behavior change
        'perf',     // Performance improvement
        'test',     // Adding/updating tests
        'chore',    // Build, tooling, dependencies
        'ci',       // CI/CD pipeline changes
        'content',  // Content/CMS updates
        'revert',   // Revert a previous commit
      ],
    ],
    'subject-case': [2, 'never', ['upper-case', 'pascal-case', 'start-case']],
    'subject-max-length': [2, 'always', 100],
    'body-max-line-length': [1, 'always', 200],
  },
};
