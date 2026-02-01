---
description: Smoke test for update-project safe output
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
name: Smoke Test - Update Project
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
  update-project:
    max: 10
    project: "https://github.com/orgs/github-agentic-workflows/projects/1"
  add-comment:
    max: 1
  messages:
    footer: "> 🔬 *Update-project validation by [{workflow_name}]({run_url})*"
    run-started: "🔬 Testing update-project... [{workflow_name}]({run_url})"
    run-success: "✅ Update-project test passed! [{workflow_name}]({run_url})"
    run-failure: "❌ Update-project test failed! [{workflow_name}]({run_url}): {status}"
timeout-minutes: 10
---

# Smoke Test: Update-Project Safe Output

**Purpose:** Validate all operations of the `update-project` safe output.

**Test Board:** https://github.com/orgs/github-agentic-workflows/projects/1

## Test Overview

The `update-project` safe output supports multiple operations:
- `add_draft_issue` - Add a draft issue to the project
- `update_item` - Update an existing project item (issue/draft/PR)
- `remove_item` - Remove an item from the project
- `archive_item` - Archive an item in the project
- `create_view` - Create a new project view
- `create_fields` - Create custom fields in the project

## Test Cases

### 1. Add Draft Issue
Create a new draft issue in the project:

```json
{
  "type": "update_project",
  "operation": "add_draft_issue",
  "project": "https://github.com/orgs/github-agentic-workflows/projects/1",
  "draft_title": "Smoke Test Draft - Run ${{ github.run_id }}",
  "draft_body": "This is a test draft issue created by the update-project smoke test.",
  "fields": {
    "status": "Todo"
  }
}
```

### 2. Update Item Fields
Update the draft issue we just created (you'll need to track the item ID from step 1):

```json
{
  "type": "update_project",
  "operation": "update_item",
  "project": "https://github.com/orgs/github-agentic-workflows/projects/1",
  "item_id": "<item-id-from-step-1>",
  "fields": {
    "status": "In Progress"
  }
}
```

### 3. Add Real Issue
Add an existing issue to the project (use any issue from the repository):

```json
{
  "type": "update_project",
  "operation": "add_item",
  "project": "https://github.com/orgs/github-agentic-workflows/projects/1",
  "content_id": "<issue-node-id>",
  "content_type": "Issue"
}
```

### 4. Archive Item
Archive the draft issue we created:

```json
{
  "type": "update_project",
  "operation": "archive_item",
  "project": "https://github.com/orgs/github-agentic-workflows/projects/1",
  "item_id": "<item-id-from-step-1>"
}
```

### 5. Create Custom View (Optional)
Create a test view in the project:

```json
{
  "type": "update_project",
  "operation": "create_view",
  "project": "https://github.com/orgs/github-agentic-workflows/projects/1",
  "view_name": "Smoke Test View - ${{ github.run_id }}",
  "view_layout": "TABLE"
}
```

## Output Requirements

Add a **concise comment** to the pull request (if triggered by PR) with:

| Operation | Status | Notes |
|-----------|--------|-------|
| Add draft issue | ✅/❌ | Item ID created |
| Update item fields | ✅/❌ | Status changed |
| Add real issue | ✅/❌ | Issue added to board |
| Archive item | ✅/❌ | Item archived |
| Create view | ✅/❌ | View created (optional) |

**Overall Status:** PASS / FAIL

## Success Criteria

- All core operations (1-4) complete successfully
- Items appear in the test board as expected
- No errors in workflow logs
- All operations respect the max limit (10)
