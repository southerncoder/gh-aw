# ⚡ Quick Reference

## Common Commands

### Compile Workflow
```bash
gh aw compile .github/workflows/expiration-visible-checkbox.md
```

### Run Workflow Manually
```bash
gh workflow run expiration-visible-checkbox.lock.yml
```

### View Recent Runs
```bash
gh run list --workflow=expiration-visible-checkbox.lock.yml
```

### Check Created Issues
```bash
gh issue list --label ephemeral
```

## Usage Patterns

### Pattern 1: Manual Trigger (Default)
```yaml
---
engine: copilot
on: manual
safe-outputs:
  create-issue:
    expires: 7
---
```

### Pattern 2: Daily Creation
```yaml
---
engine: copilot
on: schedule: daily
safe-outputs:
  create-issue:
    expires: 1  # Expires next day
---
```

### Pattern 3: Custom Expiration
```yaml
---
engine: copilot
on: manual
safe-outputs:
  create-issue:
    title: "Weekly Status Update"
    expires: 7
    labels: [status, weekly, ephemeral]
---
```

## Configuration Options

| Option | Values | Description |
|--------|--------|-------------|
| `engine` | `copilot`, `claude`, `codex` | AI engine to use |
| `on` | `manual`, `schedule`, `issues` | Trigger type |
| `expires` | `1-365` (days) | Days until automatic expiration |
| `labels` | Array of strings | Labels to apply to issue |

## Safe Outputs

This workflow uses the `create-issue` safe output:

| Parameter | Type | Description |
|-----------|------|-------------|
| `title` | string | Title of the issue to create |
| `expires` | integer | Number of days until expiration |
| `labels` | array | Labels to apply to the issue |

## Expiration Checkbox Format

Issues created with expiration will include:

```markdown
- [x] expires <!-- gh-aw-expires: 2026-01-25T12:00:00.000Z --> on Jan 25, 2026, 12:00 PM UTC
```

**Checkbox States**:
- `[x]` (checked): Issue will be automatically closed at expiration
- `[ ]` (unchecked): Issue will not be automatically closed

## Workflow Prompts

You can customize the issue body by modifying the prompt in the workflow file. The default prompt creates:
- Issue overview explaining visible expiration
- Comparison of old vs new format
- Benefits list
- How it works section

## Tips

💡 **Tip 1**: Use `ephemeral` label for easy filtering of temporary issues

💡 **Tip 2**: Set shorter expiration times (1-3 days) for demo purposes

💡 **Tip 3**: Uncheck the expiration box in created issues to prevent auto-closure

💡 **Tip 4**: Combine with scheduled triggers for recurring temporary issues
