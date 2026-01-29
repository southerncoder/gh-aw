# ⏰ Issue Expiration with Visible Checkbox

Automatically create issues with visible, user-controllable expiration dates using checkbox formatting.

## Overview

This workflow demonstrates the new visible expiration format for GitHub Agentic Workflows. Instead of hiding expiration dates in XML comments, this approach uses a visible checkbox that users can see and interact with directly in the issue body.

The visible checkbox format makes expiration dates transparent to users while still allowing automated cleanup. Users can uncheck the expiration box if they want to keep an issue open beyond the initial expiration date, giving them direct control over the lifecycle of automated issues.

This pattern is particularly useful for creating temporary demonstration issues, time-limited announcements, or automated cleanup of ephemeral content.

## Use Cases

- 📢 **Time-Limited Announcements**: Create issues that automatically expire after a specific period
- 🧪 **Demo Issues**: Generate example issues that self-clean to avoid clutter
- 🔄 **Periodic Reminders**: Create recurring issues that auto-close after being addressed
- 🗑️ **Ephemeral Content**: Manage short-lived issues that don't need permanent tracking

## Key Features

- ✅ **Visible Expiration**: Users can see exactly when an issue will expire
- 🎛️ **User Control**: Checkbox can be unchecked to prevent automatic closure
- 📅 **Human-Readable Dates**: Shows both ISO timestamp and friendly date format
- 🤖 **Automated Cleanup**: Maintenance workflow automatically closes expired issues
- 🏷️ **Label Support**: Automatically applies labels like "ephemeral" for easy filtering

## Quick Start

See [SETUP.md](./SETUP.md) for detailed installation and configuration steps, or jump to [QUICK_REFERENCE.md](./QUICK_REFERENCE.md) for common usage patterns.

## Example Output

When this workflow runs, it creates an issue with a body that includes:

```markdown
## Example Issue

This issue demonstrates the new visible expiration format for GitHub Agentic Workflows.

### What Changed

Previously, expiration was hidden in an XML comment:
```html
<!-- gh-aw-expires: 2026-01-25T12:00:00.000Z -->
```

Now, expiration is visible as a checkbox that users can interact with:
```markdown
- [x] expires <!-- gh-aw-expires: 2026-01-25T12:00:00.000Z --> on Jan 25, 2026, 12:00 PM UTC
```

### Benefits

1. **Visible**: Users can see when the issue will expire
2. **Configurable**: Users can uncheck the box to prevent expiration
3. **Informative**: Shows both ISO date and human-readable format
```

## Related Workflows

- [Slash Command with Labels](../slash-command-with-labels/) - Demonstrates label-based workflow triggering
- [Test Setup CLI](../test-setup-cli/) - Example of testing CLI installation in workflows
