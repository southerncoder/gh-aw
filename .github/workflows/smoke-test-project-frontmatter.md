---
description: Smoke test for project top-level frontmatter configuration
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
name: Smoke Test - Project Frontmatter
engine: copilot
strict: true
project: "https://github.com/orgs/github-agentic-workflows/projects/1"
network:
  allowed:
    - defaults
    - github
tools:
  bash:
    - "*"
  github:
safe-outputs:
  add-comment:
    max: 1
  messages:
    footer: "> 🔬 *Project frontmatter validation by [{workflow_name}]({run_url})*"
    run-started: "🔬 Testing project frontmatter... [{workflow_name}]({run_url})"
    run-success: "✅ Project frontmatter test passed! [{workflow_name}]({run_url})"
    run-failure: "❌ Project frontmatter test failed! [{workflow_name}]({run_url}): {status}"
timeout-minutes: 10
---

# Smoke Test: Project Top-Level Frontmatter

**Purpose:** Validate that the `project:` top-level frontmatter field automatically configures safe outputs for project tracking.

**Test Board:** https://github.com/orgs/github-agentic-workflows/projects/1

## Test Overview

This workflow tests that when a `project:` field is present in the frontmatter, the compiler automatically:
1. Creates `update-project` safe-output configuration with default max of 100
2. Creates `create-project-status-update` safe-output configuration with default max of 1
3. Enforces the top-level project URL on both safe outputs (security feature)

## Test Cases

### 1. Verify Environment Variables
Check that the `GH_AW_PROJECT_URL` environment variable is set to the project URL from frontmatter:

```bash
echo "Project URL from env: $GH_AW_PROJECT_URL"
```

Expected: `https://github.com/orgs/github-agentic-workflows/projects/1`

### 2. Verify Safe Output Configuration
The frontmatter declares only the `project:` field without explicit safe-outputs configuration.
Verify that the compiler automatically created the necessary safe output configurations.

### 3. Test Update Project Output
Create a test draft issue and update it in the project board:

```json
{
  "type": "update_project",
  "content_type": "draft_issue",
  "draft_title": "Smoke Test - Project Frontmatter - Run ${{ github.run_id }}",
  "fields": {
    "status": "Todo"
  }
}
```

This should succeed because:
- The project URL defaults from the frontmatter
- The `update-project` safe output was auto-configured

### 4. Test Project Status Update
Create a project status update:

```json
{
  "type": "create_project_status_update",
  "body": "Smoke test validation - frontmatter project URL working correctly (Run: ${{ github.run_id }})",
  "status": "ON_TRACK"
}
```

This should succeed because:
- The project URL defaults from the frontmatter
- The `create-project-status-update` safe output was auto-configured

## Output Requirements

Add a **concise comment** to the pull request (if triggered by PR) with:

| Test | Status | Notes |
|------|--------|-------|
| Environment variable set | ✅/❌ | GH_AW_PROJECT_URL value |
| Auto-configured update-project | ✅/❌ | Max: 100 (default) |
| Auto-configured status updates | ✅/❌ | Max: 1 (default) |
| Update project draft issue | ✅/❌ | Draft created in board |
| Create status update | ✅/❌ | Status posted |

**Overall Status:** PASS / FAIL

## Success Criteria

- All 5 test cases pass
- Draft issue appears in the test board
- Status update is posted to the project
- No errors in workflow logs
