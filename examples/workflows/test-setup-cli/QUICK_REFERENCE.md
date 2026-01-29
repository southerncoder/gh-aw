# ⚡ Quick Reference

## Common Commands

### Compile Workflow
```bash
gh aw compile .github/workflows/test-setup-cli.md
```

### Run Workflow Manually
```bash
gh workflow run test-setup-cli.lock.yml
```

### View Recent Runs
```bash
gh run list --workflow=test-setup-cli.lock.yml
```

### Check Installation Locally
```bash
gh extension list | grep gh-aw
gh aw version
```

## Usage Patterns

### Pattern 1: Single Version Test
```yaml
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: ./actions/setup-cli
        with:
          version: v0.37.18
      - run: gh aw version
```

### Pattern 2: Matrix Testing
```yaml
jobs:
  test:
    strategy:
      matrix:
        version: [v0.37.18, v0.37.17]
    steps:
      - uses: actions/checkout@v4
      - uses: ./actions/setup-cli
        with:
          version: ${{ matrix.version }}
      - run: gh aw version
```

### Pattern 3: With Verification
```yaml
- name: Install gh-aw
  id: install
  uses: ./actions/setup-cli
  with:
    version: v0.37.18

- name: Verify
  run: |
    echo "Installed: ${{ steps.install.outputs.installed-version }}"
    gh aw --help
```

## Configuration Options

| Option | Values | Description |
|--------|--------|-------------|
| `version` | `v0.x.x` | Specific release version to install |

## Action Outputs

| Output | Description |
|--------|-------------|
| `installed-version` | The version that was installed |

## Verification Commands

After installation, verify with:

```bash
# Check version
gh aw version

# Check help
gh aw --help

# List commands
gh aw

# Test compile
gh aw compile workflow.md
```

## Matrix Strategy Examples

### Test Recent Versions
```yaml
strategy:
  matrix:
    version:
      - v0.37.18
      - v0.37.17
      - v0.37.16
```

### Test Across OS
```yaml
strategy:
  matrix:
    os: [ubuntu-latest, macos-latest]
    version: [v0.37.18]
runs-on: ${{ matrix.os }}
```

### Fail Fast vs Continue
```yaml
strategy:
  fail-fast: false  # Continue testing other versions
  matrix:
    version: [v0.37.18, v0.37.17]
```

## Common Use Cases

### CI/CD Workflow Compilation
```yaml
- uses: ./actions/setup-cli
  with:
    version: v0.37.18
- run: gh aw compile .github/workflows/*.md
```

### Pre-commit Validation
```yaml
- uses: ./actions/setup-cli
  with:
    version: v0.37.18
- run: |
    for file in .github/workflows/*.md; do
      gh aw compile "$file"
    done
```

## Tips

💡 **Tip 1**: Pin to specific versions for reproducible builds

💡 **Tip 2**: Use matrix testing to ensure backward compatibility

💡 **Tip 3**: Cache the installation if running multiple jobs

💡 **Tip 4**: Use `installed-version` output for conditional logic

💡 **Tip 5**: Test against both current and previous versions
