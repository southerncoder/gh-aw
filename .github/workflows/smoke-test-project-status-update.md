---
description: Smoke test for create-project-status-update safe output
on: 
  workflow_dispatch:
  schedule: every 24h
  pull_request:
    types: [labeled]
    names: ["smoke-projects"]
permissions:
  contents: read
  pull-requests: read
  issues: read
name: Smoke Test - Project Status Update
engine: copilot
strict: true
network:
  allowed:
    - defaults
    - github
tools:
  bash:
    - "*"
  github:
safe-outputs:
  create-project-status-update:
    max: 5
    project: "https://github.com/orgs/github-agentic-workflows/projects/1"
  add-comment:
    max: 1
  messages:
    footer: "> 🔬 *Project status update validation by [{workflow_name}]({run_url})*"
    run-started: "🔬 Testing project status updates... [{workflow_name}]({run_url})"
    run-success: "✅ Project status update test passed! [{workflow_name}]({run_url})"
    run-failure: "❌ Project status update test failed! [{workflow_name}]({run_url}): {status}"
timeout-minutes: 10
---

# Smoke Test: Create-Project-Status-Update Safe Output

**Purpose:** Validate the `create-project-status-update` safe output for posting status updates to GitHub Projects V2.

**Test Board:** https://github.com/orgs/github-agentic-workflows/projects/1

## Test Overview

The `create-project-status-update` safe output creates status updates for projects with:
- Status indicator (ON_TRACK, AT_RISK, OFF_TRACK, COMPLETE)
- Rich text body with markdown support
- Optional start/target dates
- Visibility settings

## Test Cases

### 1. Basic Status Update - On Track
Create a simple status update indicating the project is on track:

```json
{
  "type": "create_project_status_update",
  "project": "https://github.com/orgs/github-agentic-workflows/projects/1",
  "status": "ON_TRACK",
  "body": "✅ Smoke test validation in progress - Run ${{ github.run_id }}. All systems nominal."
}
```

### 2. Status Update - At Risk
Create a status update indicating the project is at risk:

```json
{
  "type": "create_project_status_update",
  "project": "https://github.com/orgs/github-agentic-workflows/projects/1",
  "status": "AT_RISK",
  "body": "⚠️ Testing AT_RISK status - Run ${{ github.run_id }}. This is a simulated at-risk condition for testing purposes."
}
```

### 3. Status Update - Off Track
Create a status update indicating the project is off track:

```json
{
  "type": "create_project_status_update",
  "project": "https://github.com/orgs/github-agentic-workflows/projects/1",
  "status": "OFF_TRACK",
  "body": "🔴 Testing OFF_TRACK status - Run ${{ github.run_id }}. This is a simulated off-track condition for testing purposes."
}
```

### 4. Status Update with Markdown
Create a status update with rich markdown formatting:

```json
{
  "type": "create_project_status_update",
  "project": "https://github.com/orgs/github-agentic-workflows/projects/1",
  "status": "ON_TRACK",
  "body": "## Smoke Test Progress Report\n\n**Run ID:** ${{ github.run_id }}\n\n### Completed:\n- ✅ Basic status posting\n- ✅ At-risk status\n- ✅ Off-track status\n\n### In Progress:\n- 🔄 Markdown formatting test\n\n### Next Steps:\n- Default project URL test\n\n> 💡 **Note:** This is an automated smoke test validation."
}
```

### 5. Verify Default Project URL
The frontmatter configures a default project URL.
Create a status update without specifying the project in the message:

```json
{
  "type": "create_project_status_update",
  "status": "ON_TRACK",
  "body": "Testing default project URL from frontmatter - Run ${{ github.run_id }}"
}
```

This should use the default project URL from the frontmatter configuration.

### 6. Verify Max Limit
The frontmatter configures `max: 5`.
After creating 5 status updates, attempt to create a 6th and verify it respects the max limit.

## Output Requirements

Add a **concise comment** to the pull request (if triggered by PR) with:

| Test Case | Status | Notes |
|-----------|--------|-------|
| ON_TRACK status | ✅/❌ | Basic status posted |
| AT_RISK status | ✅/❌ | Warning status posted |
| OFF_TRACK status | ✅/❌ | Error status posted |
| Markdown formatting | ✅/❌ | Rich text rendered |
| Default project URL | ✅/❌ | Used frontmatter default |
| Max limit enforced | ✅/❌ | 6th update blocked |

**Overall Status:** PASS / FAIL

**Status Updates Posted:** 5 (or count of successful posts)

## Verification

After running the test:
1. Visit https://github.com/orgs/github-agentic-workflows/projects/1
2. Check the "Insights" or "Updates" section of the project
3. Verify all status updates appear correctly
4. Verify markdown formatting is rendered properly
5. Verify status indicators (colors/icons) match the specified status

## Success Criteria

- All 5 status updates post successfully
- Each status indicator (ON_TRACK, AT_RISK, OFF_TRACK) works correctly
- Markdown formatting renders properly in status updates
- Default project URL is used when not specified
- Max limit is enforced (prevents 6th update)
- Status updates are visible in the project's updates section
