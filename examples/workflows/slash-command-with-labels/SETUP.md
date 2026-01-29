# 🛠️ Setup Guide

## Prerequisites

Before setting up this workflow, ensure you have:

- [ ] Repository write access
- [ ] GitHub Actions enabled
- [ ] `gh-aw` CLI installed (`gh extension install githubnext/gh-aw`)
- [ ] Required permissions: `issues: write`, `contents: read`

## Installation Steps

### 1. Add the Workflow File

Copy the workflow file to your repository:

```bash
mkdir -p .github/workflows
cp examples/workflows/slash-command-with-labels/workflow.md .github/workflows/slash-command-with-labels.md
```

### 2. Compile the Workflow

```bash
gh aw compile .github/workflows/slash-command-with-labels.md
```

This generates the `.lock.yml` file that GitHub Actions will execute.

### 3. Review Configuration

The workflow uses these settings:

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

Key configuration points:
- `slash_command: triage` - Responds to `/triage` comments
- `issues: types: [labeled]` - Automatically triggers on label additions
- `toolsets: [issues]` - Enables GitHub Issues API access

### 4. Enable the Workflow

Commit and push the compiled workflow:

```bash
git add .github/workflows/slash-command-with-labels.*
git commit -m "Add slash-command-with-labels workflow"
git push
```

## Configuration

### Custom Slash Commands

Change the command that triggers the workflow:

```yaml
on:
  slash_command: review  # Responds to /review
```

### Multiple Label Types

React to both label additions and removals:

```yaml
on:
  slash_command: triage
  issues:
    types: [labeled, unlabeled]
```

### GitHub Tools Configuration

Adjust which GitHub APIs are available:

```yaml
tools:
  github:
    toolsets: [issues, pull_requests]  # Add PR support
```

## Verification

To verify the workflow is working:

### Test Manual Trigger

1. Open any issue in your repository
2. Add a comment: `/triage`
3. Navigate to **Actions** tab
4. Verify workflow run appears and completes

### Test Automatic Trigger

1. Open any issue in your repository
2. Add any label to the issue
3. Navigate to **Actions** tab
4. Verify workflow run appears automatically

## Troubleshooting

### Common Issues

**Issue**: Workflow doesn't trigger on slash command
- **Solution**: Ensure workflow file is committed and slash command syntax is correct (`/triage`)

**Issue**: Workflow doesn't trigger on label changes
- **Solution**: Verify `issues: types: [labeled]` is in the frontmatter

**Issue**: Permission denied when accessing GitHub API
- **Solution**: Check that `tools.github.toolsets` includes necessary permissions

**Issue**: Context text is empty
- **Solution**: Ensure you're using `needs.activation.outputs.text` to access sanitized inputs

**Issue**: Workflow triggers on unlabeled events
- **Solution**: Check if `unlabeled` is included in the types list; remove if not needed
