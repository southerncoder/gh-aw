# ⚡ Quick Reference

## Common Commands

### Compile Workflow
```bash
gh aw compile .github/workflows/slash-command-with-labels.md
```

### Run Workflow via Slash Command
```bash
# Comment on any issue:
/triage
```

### View Recent Runs
```bash
gh run list --workflow=slash-command-with-labels.lock.yml
```

### Check Workflow Logs
```bash
gh run view --log
```

## Usage Patterns

### Pattern 1: Basic Triage (Default)
```yaml
---
on:
  slash_command: triage
  issues:
    types: [labeled]
tools:
  github:
    toolsets: [issues]
---
```

### Pattern 2: Label and Unlabel
```yaml
---
on:
  slash_command: triage
  issues:
    types: [labeled, unlabeled]
---
```

### Pattern 3: Pull Request Support
```yaml
---
on:
  slash_command: review
  pull_request:
    types: [labeled]
tools:
  github:
    toolsets: [pull_requests]
---
```

## Configuration Options

| Option | Values | Description |
|--------|--------|-------------|
| `slash_command` | Any string | Command to trigger workflow (without `/`) |
| `issues.types` | `labeled`, `unlabeled` | Issue events to trigger on |
| `pull_request.types` | `labeled`, `unlabeled` | PR events to trigger on |

## GitHub Toolsets

Available toolsets for GitHub API access:

| Toolset | Provides Access To |
|---------|-------------------|
| `issues` | Issue reading, commenting, labeling |
| `pull_requests` | PR reading, reviewing, commenting |
| `repos` | Repository information, contents |
| `default` | Includes issues, pull_requests, repos |

## Trigger Scenarios

### Manual via Slash Command

```text
User Action: Comment "/triage" on issue #123
Result: Workflow runs with issue context
Context Available: Issue title, body, labels, author
```

### Automatic via Label

```text
User Action: Add "bug" label to issue #456
Result: Workflow runs automatically
Context Available: Issue title, body, all labels, author
```

## Label-Only Exception Rules

✅ **Allowed Combinations**:
```yaml
on:
  slash_command: triage
  issues:
    types: [labeled]  # ✓ Only label events
```

❌ **Not Allowed**:
```yaml
on:
  slash_command: triage
  issues:
    types: [opened, labeled]  # ✗ Includes non-label event
```

## Context Access

Access sanitized issue content via safe inputs:

```markdown
The workflow receives context through `needs.activation.outputs.text` 
which contains the sanitized issue title and body.
```

## Tips

💡 **Tip 1**: Use descriptive slash command names that match workflow purpose

💡 **Tip 2**: Limit to label events only to comply with exception rules

💡 **Tip 3**: Test slash commands in a test issue first

💡 **Tip 4**: Combine with specific label filters in workflow logic for targeted processing

💡 **Tip 5**: Use `issues.types: [labeled, unlabeled]` to react to label removals too
