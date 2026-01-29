# 🧪 Test Setup CLI Action

Demonstrates installing and verifying the gh-aw CLI in GitHub Actions workflows.

## Overview

This workflow showcases how to use the `setup-cli` action to install specific versions of the `gh-aw` CLI extension in GitHub Actions workflows. It provides a complete example of installation verification and version testing across multiple releases.

The `setup-cli` action simplifies the process of adding `gh-aw` to your CI/CD pipeline. It handles downloading the correct release binary, installing it as a GitHub CLI extension, and verifying the installation was successful.

This pattern is essential for CI/CD pipelines that need to compile workflows, validate workflow syntax, or automate workflow management tasks as part of their build and deployment process.

## Use Cases

- 🔄 **CI/CD Integration**: Install gh-aw in automated build pipelines
- ✅ **Version Testing**: Verify compatibility across multiple gh-aw versions
- 🚀 **Automated Deployment**: Compile and deploy workflows automatically
- 🧪 **Testing Workflows**: Validate workflow files before merging changes

## Key Features

- 📦 **Version Pinning**: Install specific gh-aw versions for reproducibility
- 🔍 **Installation Verification**: Automatically verifies successful installation
- 🎯 **Matrix Testing**: Test against multiple versions simultaneously
- 📊 **Output Variables**: Provides installed version as workflow output

## Quick Start

See [SETUP.md](./SETUP.md) for detailed installation and configuration steps, or jump to [QUICK_REFERENCE.md](./QUICK_REFERENCE.md) for common usage patterns.

## How It Works

### Single Version Installation

```yaml
- name: Install gh-aw
  uses: ./actions/setup-cli
  with:
    version: v0.37.18

- name: Verify installation
  run: |
    gh aw version
    gh aw --help
```

### Matrix Testing

```yaml
strategy:
  matrix:
    version: [v0.37.18, v0.37.17]
steps:
  - name: Install gh-aw version ${{ matrix.version }}
    uses: ./actions/setup-cli
    with:
      version: ${{ matrix.version }}
```

## Example Output

When the workflow runs successfully:

```text
✓ Installed gh-aw v0.37.18
✓ Verification passed:
  - gh aw version: v0.37.18
  - gh aw --help: OK
```

## Related Workflows

- [Expiration Visible Checkbox](../expiration-visible-checkbox/) - Demonstrates visible expiration formatting
- [Slash Command with Labels](../slash-command-with-labels/) - Shows label-based triggering
