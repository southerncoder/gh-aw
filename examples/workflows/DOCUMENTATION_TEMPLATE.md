# 📚 Workflow Documentation Template

This template provides a standardized structure for documenting agentic workflows. High-scoring workflows consistently include 3-6 documentation files that make workflows more discoverable, easier to adopt, and simpler to customize.

## Standard Documentation Files

### 1. 📖 README.md (Required)

**Purpose**: Provide a high-level overview of the workflow

**Content Guidelines**:
- **Overview** (2-3 paragraphs): What the workflow does and why it's useful
- **Use Cases** (bulleted list): Specific scenarios where this workflow adds value
- **Key Features** (bulleted list with emojis): 4-6 standout capabilities
- **Quick Start** (brief): Single command or link to SETUP.md
- **Example Output** (optional): Screenshot or sample result
- **Related Workflows** (optional): Links to complementary workflows

**Format Example**:
```markdown
# 🤖 Workflow Name

Brief one-line description of what this workflow does.

## Overview

2-3 paragraphs explaining:
- The problem this workflow solves
- How it solves it
- Who should use it

## Use Cases

- 📊 Use case 1: Description
- 🔍 Use case 2: Description
- 🚀 Use case 3: Description

## Key Features

- ✨ **Feature 1**: Brief description
- 🎯 **Feature 2**: Brief description
- 🔒 **Feature 3**: Brief description

## Quick Start

See [SETUP.md](./SETUP.md) for detailed installation and configuration steps.

## Related Workflows

- [Related Workflow 1](../workflow-1/) - What it does
- [Related Workflow 2](../workflow-2/) - What it does
```

### 2. 🛠️ SETUP.md (Required)

**Purpose**: Provide step-by-step installation and configuration instructions

**Content Guidelines**:
- **Prerequisites** (checklist): Required permissions, tools, or repository settings
- **Installation Steps** (numbered): Clear, sequential instructions
- **Configuration** (subsections): How to customize key settings
- **Verification** (optional): How to test the workflow is working
- **Troubleshooting** (optional): Common issues and solutions

**Format Example**:
```markdown
# 🛠️ Setup Guide

## Prerequisites

Before setting up this workflow, ensure you have:

- [ ] Repository write access
- [ ] GitHub Actions enabled
- [ ] Required permissions: `issues: write`, `contents: read`
- [ ] (Optional) Additional requirement

## Installation Steps

### 1. Add the Workflow File

Copy the workflow file to your repository:

\`\`\`bash
mkdir -p .github/workflows
cp examples/your-workflow.md .github/workflows/
\`\`\`

### 2. Compile the Workflow

\`\`\`bash
gh aw compile .github/workflows/your-workflow.md
\`\`\`

### 3. Configure Settings

Edit the frontmatter in the workflow file:

\`\`\`yaml
---
engine: copilot
on: schedule: daily
permissions:
  issues: write
---
\`\`\`

### 4. Enable the Workflow

Commit and push the compiled workflow:

\`\`\`bash
git add .github/workflows/your-workflow.{md,lock.yml}
git commit -m "Add your-workflow"
git push
\`\`\`

## Configuration

### Trigger Frequency

Change the \`on:\` trigger to control when the workflow runs:

- \`schedule: daily\` - Runs once per day
- \`schedule: every 6h\` - Runs every 6 hours
- \`issues: types: [opened]\` - Runs on new issues

### Permissions

Adjust permissions based on what the workflow needs to access:

\`\`\`yaml
permissions:
  contents: read      # Read repository contents
  issues: write       # Create/edit issues
  pull-requests: read # Read PRs
\`\`\`

## Verification

To verify the workflow is working:

1. Navigate to **Actions** tab in your repository
2. Find the workflow in the list
3. Click **Run workflow** to trigger it manually
4. Check the logs for any errors

## Troubleshooting

### Common Issues

**Issue**: Workflow doesn't appear in Actions tab
- **Solution**: Ensure the \`.lock.yml\` file was committed

**Issue**: Permission denied errors
- **Solution**: Check that required permissions are set in frontmatter

**Issue**: Workflow runs but takes no action
- **Solution**: Verify the trigger conditions match your use case
```

### 3. ⚡ QUICK_REFERENCE.md (Required)

**Purpose**: Provide a cheat sheet for common usage patterns

**Content Guidelines**:
- **Common Commands** (code blocks): Frequently used CLI commands
- **Usage Patterns** (examples): Typical scenarios with example commands
- **Configuration Options** (table): Quick reference for settings
- **Safe Outputs** (table): Available safe output actions
- **Tools** (list): Available tools and their purpose

**Format Example**:
```markdown
# ⚡ Quick Reference

## Common Commands

### Compile Workflow
\`\`\`bash
gh aw compile .github/workflows/your-workflow.md
\`\`\`

### Run Workflow Manually
\`\`\`bash
gh workflow run your-workflow.lock.yml
\`\`\`

### View Workflow Logs
\`\`\`bash
gh aw logs --workflow your-workflow
\`\`\`

## Usage Patterns

### Pattern 1: Daily Automation
\`\`\`yaml
---
on: schedule: daily
timeout-minutes: 30
---
\`\`\`

### Pattern 2: Issue-Triggered
\`\`\`yaml
---
on:
  issues:
    types: [opened, labeled]
---
\`\`\`

## Configuration Options

| Option | Values | Description |
|--------|--------|-------------|
| \`engine\` | \`copilot\`, \`claude\`, \`codex\` | AI engine to use |
| \`strict\` | \`true\`, \`false\` | Enable strict mode |
| \`timeout-minutes\` | \`10-600\` | Maximum execution time |

## Safe Outputs

| Action | Parameters | Description |
|--------|------------|-------------|
| \`create-issue\` | \`title\`, \`labels\`, \`expires\` | Create a new issue |
| \`add-comment\` | \`issue_number\`, \`body\` | Add comment to issue |
| \`add-labels\` | \`issue_number\`, \`labels\` | Add labels to issue |

## Available Tools

- **github**: Query repository data, issues, PRs
- **bash**: Execute shell commands
- **web-fetch**: Fetch external web content
- **playwright**: Browser automation
```

### 4. 🎨 CUSTOMIZATION.md (Optional)

**Purpose**: Guide users through adapting the workflow to their specific needs

**Content Guidelines**:
- **When to Customize** (intro): Scenarios where customization is beneficial
- **Framework-Specific Adaptations** (sections): How to adapt for different tech stacks
- **Advanced Configurations** (examples): Complex use cases
- **Extension Points** (list): Where to add custom logic
- **Best Practices** (tips): Dos and don'ts for customization

**Format Example**:
```markdown
# 🎨 Customization Guide

## When to Customize

Consider customizing this workflow when:

- Your repository uses a specific tech stack or framework
- You need to integrate with external tools
- Your team has unique process requirements
- You want to add additional validation steps

## Framework-Specific Adaptations

### For Python Projects

Add Python-specific checks:

\`\`\`yaml
tools:
  bash:
    - "python3 *"
    - "pip *"
\`\`\`

### For JavaScript Projects

Add Node.js tooling:

\`\`\`yaml
tools:
  bash:
    - "node *"
    - "npm *"
\`\`\`

## Advanced Configurations

### Multi-Repository Support

To run across multiple repositories:

\`\`\`yaml
safe-outputs:
  create-issue:
    repositories:
      - owner/repo1
      - owner/repo2
\`\`\`

## Extension Points

Key areas where you can add custom logic:

1. **Pre-processing**: Add validation before main workflow logic
2. **Post-processing**: Add cleanup or notification after completion
3. **Error handling**: Customize how errors are reported
4. **Output formatting**: Adjust report structure

## Best Practices

✅ **Do**:
- Test customizations on a fork first
- Document your changes in comments
- Keep security permissions minimal
- Version control your customizations

❌ **Don't**:
- Remove error handling logic
- Increase permissions unnecessarily
- Hard-code credentials or tokens
- Skip testing after major changes
```

### 5. 🧪 TESTING.md (Optional)

**Purpose**: Explain how to safely test the workflow

**Content Guidelines**:
- **Testing Strategy** (overview): How to test without affecting production
- **Test Scenarios** (numbered): Specific test cases to verify
- **Mock Data** (examples): Sample data for testing
- **Validation Checklist** (checkboxes): What to verify after testing
- **Rollback Procedures** (steps): How to undo if something goes wrong

**Format Example**:
```markdown
# 🧪 Testing Guide

## Testing Strategy

To safely test this workflow without affecting production:

1. **Fork the repository** or use a test repository
2. **Reduce scope** by limiting to test labels or issues
3. **Enable dry-run mode** if available
4. **Monitor carefully** during first few runs
5. **Review outputs** before promoting to production

## Test Scenarios

### Scenario 1: Manual Trigger

1. Go to Actions tab
2. Select the workflow
3. Click "Run workflow"
4. Verify output in logs

Expected result: Workflow completes without errors

### Scenario 2: Automated Trigger

1. Create a test issue with label \`test-workflow\`
2. Wait for workflow to trigger automatically
3. Check that workflow processes the issue
4. Verify expected actions were taken

Expected result: Issue is processed correctly

## Mock Data

Use these test inputs to verify behavior:

\`\`\`markdown
Test Issue Title: "Test: Workflow Verification"
Labels: ["test", "workflow-verification"]
Body: "This is a test issue to verify workflow functionality."
\`\`\`

## Validation Checklist

After running tests, verify:

- [ ] Workflow triggered correctly
- [ ] Permissions were sufficient
- [ ] Outputs were created as expected
- [ ] No errors in logs
- [ ] Performance within acceptable limits
- [ ] Side effects as intended (comments, labels, etc.)

## Rollback Procedures

If the workflow causes issues:

### Immediate Stop

\`\`\`bash
# Disable the workflow
gh workflow disable your-workflow.lock.yml
\`\`\`

### Clean Up Test Data

\`\`\`bash
# Remove test issues
gh issue list --label "test-workflow" --json number -q '.[].number' | xargs -I {} gh issue close {}

# Remove test labels
gh label delete test-workflow
\`\`\`

### Restore Previous Version

\`\`\`bash
git checkout HEAD~1 .github/workflows/your-workflow.*
git commit -m "Rollback workflow to previous version"
git push
\`\`\`
```

## Usage Guidelines

### Minimum Requirements

Every workflow should have at least:
1. ✅ **README.md** - Overview and quick start
2. ✅ **SETUP.md** - Installation instructions
3. ✅ **QUICK_REFERENCE.md** - Common usage patterns

### Recommended Structure

For comprehensive documentation, include all 5 files:
1. README.md (overview)
2. SETUP.md (setup)
3. QUICK_REFERENCE.md (reference)
4. CUSTOMIZATION.md (adaptations)
5. TESTING.md (testing)

### Formatting Conventions

- **Use emojis** in headers for visual organization
- **Progressive disclosure** with `<details>` tags for long sections
- **Code blocks** with language syntax highlighting
- **Tables** for structured reference data
- **Checklists** for verification and prerequisites
- **Bold** for emphasis on key terms
- **Links** to related documentation and workflows

## Examples

See these workflows for reference implementations:
- [Example 1](../expiration-visible-checkbox/) - Issue expiration workflow
- [Example 2](../slash-command-with-labels/) - Label-based triggering
- [Example 3](../test-setup-cli/) - CLI setup workflow
