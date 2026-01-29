# 🏷️ Slash Command with Labels

Demonstrates combining slash command triggers with label-based automation for flexible workflow activation.

## Overview

This workflow showcases the **label-only exception** pattern in GitHub Agentic Workflows. It combines manual slash command triggers (`/triage`) with automatic label-based triggers, allowing workflows to be activated both on-demand and automatically.

The label-only exception is a special rule that permits combining `slash_command` with `issues` or `pull_request` events, as long as those events only specify `labeled` or `unlabeled` types. This pattern is powerful for workflows that need dual-mode operation: manual intervention when needed, but automatic processing when specific labels are applied.

This approach is ideal for triage workflows, routing systems, and any automation that benefits from both manual control and automatic responses to classification changes.

## Use Cases

- 🔍 **Manual Triage**: Use `/triage` command when manual review is needed
- 🤖 **Auto-Routing**: Automatically process issues when labels are added
- 📊 **Hybrid Workflows**: Combine on-demand and automatic triggering
- 🚦 **Label-Based Actions**: React to label changes with intelligent automation

## Key Features

- ⚡ **Dual Triggers**: Responds to both slash commands and label changes
- �� **Label-Only Exception**: Leverages special rule for combined triggers
- 📝 **Context Aware**: Receives sanitized issue context via safe inputs
- 🔧 **GitHub Tools**: Integrated with GitHub API for issue operations
- 🛡️ **Safe Defaults**: Uses safe-inputs for sanitized issue content

## Quick Start

See [SETUP.md](./SETUP.md) for detailed installation and configuration steps, or jump to [QUICK_REFERENCE.md](./QUICK_REFERENCE.md) for common usage patterns.

## How It Works

### Manual Trigger
1. User comments `/triage` on an issue
2. Workflow activates and responds to the command
3. Can perform triage actions based on command context

### Automatic Trigger
1. Label is added to an issue (e.g., `bug`, `feature-request`)
2. Workflow automatically activates
3. Can perform routing or classification based on the new label

Both triggers receive the same context through `needs.activation.outputs.text`, which contains the sanitized issue title and body.

## Related Workflows

- [Expiration Visible Checkbox](../expiration-visible-checkbox/) - Demonstrates visible expiration formatting
- [Test Setup CLI](../test-setup-cli/) - Example of testing CLI installation
