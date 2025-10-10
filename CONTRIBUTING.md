# Contributing to ngx-toastr-message

Thank you for your interest in contributing! This document explains how to report bugs, suggest and implement new features, and submit pull requests (PRs). It's written with newcomers in mind — if you're unsure about anything, please open an issue and we'll help.

## Table of Contents
- How to report a bug
- How to suggest a feature
- How to implement changes
- Pull Request (PR) workflow
- Coding style and tests
- Communication and code of conduct

## How to report a bug
When filing a bug report, please include the following information to help maintainers reproduce and fix the problem quickly:

1. A clear and descriptive title (one line).
2. Steps to reproduce the issue (a minimal, copy-pastable example is best).
3. Expected behavior and actual behavior.
4. Environment details:
   - OS and version (e.g., macOS 14.2, Ubuntu 22.04)
   - Node.js and npm/yarn versions (e.g., Node 20.4.0, npm 10.2.0)
   - Angular version used (if relevant)
   - Browser and version (if applicable)
5. Relevant logs, stack traces, or screenshots.
6. A small code snippet or repository branch that reproduces the issue (if possible).

Example bug report:
```
Title: Toastr not dismissing after duration in Angular 18
Steps to reproduce:
1. Install ngx-toastr-message v0.3.0
2. Add <lib-ngx-toastr-message> to AppComponent
3. Call toastrService.show('Hello', 'success', { duration: 2000 })
Expected: Toast disappears after ~2s
Actual: Toast remains visible until manually closed
Env: macOS 14.2, Node 20.4.0, npm 10.2.0, Angular 18.2.x
Stack trace / logs: (paste here)
```

## How to suggest a feature
If you have an idea for an improvement or a new feature:
1. Search existing issues to see if the idea has already been proposed.
2. If not found, open a new feature request issue with:
   - A short title
   - A description of the problem or improvement
   - Proposed API or usage example (code samples help)
   - Why it is useful and any potential alternatives

Maintainters may ask follow-up questions and may ask you to draft a simple PR for discussion.

## How to implement changes
If you want to implement a bug fix or feature, follow these steps:

1. Fork the repository to your GitHub account.
2. Clone your fork locally and set the original repo as an upstream remote:
   ```bash
   git clone https://github.com/<your-username>/ngx-toastr-message.git
   cd ngx-toastr-message
   git remote add upstream https://github.com/prathamtomar99/ngx-toastr-message.git
   ```
3. Create a new branch. Use descriptive names and include your username as a prefix if you'd like. Example branch names:
   - `pratham/fix-duration-issue`
   - `pratham/new-position-option`

   Example:
   ```bash
   git checkout -b pratham/new_fe
   ```
4. Install dependencies and run tests locally:
   ```bash
   npm install
   npm test
   ```
5. Make your changes. Keep commits small, focused, and well-described.
6. Run builds or linting and ensure tests pass before committing:
   ```bash
   ng build
   npm test
   ```
7. Rebase or merge from upstream/main to keep your branch up-to-date before opening a PR:
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

## Pull Request (PR) workflow
1. Push your branch to your fork:
   ```bash
   git push -u origin pratham/new_fe
   ```
2. Open a Pull Request (PR) against the `main` branch of `user_name/repo_name`.
3. In the PR description, include:
   - What the change does and why
   - Any related issue number (e.g. `closes #38`)
   - How to test the change locally
4. Wait for maintainers to review. Respond to review comments promptly and update the PR as requested.
5. Once approved, a maintainer will merge your PR. If your PR is large or risky it may be merged after additional testing.

## Coding style and tests
- Follow the existing TypeScript & Angular style in the repository.
- Write unit tests for new features and bug fixes where applicable.
- Run the test suite and linters before opening a PR.

## Communication and Code of Conduct
Be respectful and constructive in all interactions. This project follows the standard open-source etiquette. If you have any concerns, open an issue or reach out to a maintainer.

---
Thanks again for contributing — your help makes this project better for everyone!