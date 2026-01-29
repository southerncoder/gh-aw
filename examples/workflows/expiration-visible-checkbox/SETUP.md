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
cp examples/workflows/expiration-visible-checkbox/workflow.md .github/workflows/expiration-visible-checkbox.md
```

### 2. Compile the Workflow

```bash
gh aw compile .github/workflows/expiration-visible-checkbox.md
```

This generates the `.lock.yml` file that GitHub Actions will execute.

### 3. Review Configuration

The workflow uses these default settings:

```yaml
---
engine: copilot
on: manual
safe-outputs:
  create-issue:
    title: "Example Issue with Visible Expiration"
    expires: 7  # Expires in 7 days
    labels: [example, ephemeral]
---
```

You can customize:
- `expires`: Number of days until expiration (default: 7)
- `labels`: Labels to apply to the created issue
- `title`: Title of the created issue

### 4. Enable the Workflow

Commit and push the compiled workflow:

```bash
git add .github/workflows/expiration-visible-checkbox.*
git commit -m "Add expiration-visible-checkbox workflow"
git push
```

## Configuration

### Trigger Options

By default, the workflow uses `on: manual`, meaning it only runs when manually triggered. You can change this:

**Run on a schedule:**
```yaml
on: schedule: daily
```

**Run on issue events:**
```yaml
on:
  issues:
    types: [opened, labeled]
```

### Expiration Duration

Adjust the expiration time by changing the `expires` value:

```yaml
safe-outputs:
  create-issue:
    expires: 3   # 3 days
    # or
    expires: 14  # 2 weeks
```

### Issue Labels

Customize the labels applied to created issues:

```yaml
safe-outputs:
  create-issue:
    labels: [example, ephemeral, temporary]
```

## Verification

To verify the workflow is working:

1. Navigate to **Actions** tab in your repository
2. Find "expiration-visible-checkbox" workflow
3. Click **Run workflow** to trigger it manually
4. Check the **Issues** tab for the newly created issue
5. Verify the issue contains a visible expiration checkbox

## Troubleshooting

### Common Issues

**Issue**: Workflow doesn't appear in Actions tab
- **Solution**: Ensure both `.md` and `.lock.yml` files were committed

**Issue**: Permission denied when creating issue
- **Solution**: Verify workflow has `issues: write` permission in frontmatter

**Issue**: Issue created but no expiration checkbox
- **Solution**: Check that `expires` parameter is set in `safe-outputs.create-issue`

**Issue**: Expiration checkbox shows incorrect date
- **Solution**: Verify system time is correct, expiration is calculated from current time + days
