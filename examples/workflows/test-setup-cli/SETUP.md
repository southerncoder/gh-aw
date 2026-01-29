# 🛠️ Setup Guide

## Prerequisites

Before setting up this workflow, ensure you have:

- [ ] Repository with GitHub Actions enabled
- [ ] Access to `actions/setup-cli` action (local or published)
- [ ] Appropriate permissions to run workflows

## Installation Steps

### 1. Add the Workflow File

Copy the workflow file to your repository:

```bash
mkdir -p .github/workflows
cp examples/workflows/test-setup-cli/workflow.md .github/workflows/test-setup-cli.md
```

### 2. Compile the Workflow

```bash
gh aw compile .github/workflows/test-setup-cli.md
```

This generates the `.lock.yml` file that GitHub Actions will execute.

### 3. Review Configuration

The workflow uses these settings:

```yaml
---
name: Test setup-cli action
engine: copilot
on:
  workflow_dispatch:
---
```

Key configuration:
- `workflow_dispatch` - Manual trigger only
- Uses local `./actions/setup-cli` action
- Tests specific version installations

### 4. Ensure setup-cli Action Exists

This workflow requires the `setup-cli` action to be present:

```bash
ls -la actions/setup-cli/action.yml
```

If not present, you need to either:
- Use this workflow in the gh-aw repository
- Copy the setup-cli action to your repository
- Reference a published version

### 5. Enable the Workflow

Commit and push the compiled workflow:

```bash
git add .github/workflows/test-setup-cli.*
git commit -m "Add test-setup-cli workflow"
git push
```

## Configuration

### Using Different Versions

Modify the version parameter:

```yaml
- name: Install gh-aw using release tag
  uses: ./actions/setup-cli
  with:
    version: v0.38.0  # Change to desired version
```

### Testing Multiple Versions

Use a matrix strategy:

```yaml
strategy:
  matrix:
    version:
      - v0.37.18
      - v0.37.17
      - v0.36.0
```

### Using Published Action

If the action is published, reference it:

```yaml
- name: Install gh-aw
  uses: githubnext/gh-aw/actions/setup-cli@main
  with:
    version: v0.37.18
```

## Verification

To verify the workflow is working:

1. Navigate to **Actions** tab in your repository
2. Find "Test setup-cli action" workflow
3. Click **Run workflow** button
4. Select the branch and click "Run workflow"
5. Wait for completion and check logs

Expected output:
```text
Installed version: v0.37.18
gh-aw version v0.37.18
[Help output from gh aw --help]
```

## Troubleshooting

### Common Issues

**Issue**: Action not found error
- **Solution**: Ensure `actions/setup-cli` exists or use published action reference

**Issue**: Version not found
- **Solution**: Verify the version tag exists in gh-aw releases

**Issue**: Permission denied during installation
- **Solution**: Check that workflow has appropriate permissions

**Issue**: gh command not found
- **Solution**: GitHub CLI is pre-installed on GitHub-hosted runners; check runner type

**Issue**: Extension install fails
- **Solution**: Check network connectivity and release asset availability
