---
description: Smoke test for copy-project safe output
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
name: Smoke Test - Copy Project
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
  copy-project:
    max: 2
    source-project: "https://github.com/orgs/github-agentic-workflows/projects/1"
    target-owner: "github-agentic-workflows"
  add-comment:
    max: 1
  messages:
    footer: "> 🔬 *Copy-project validation by [{workflow_name}]({run_url})*"
    run-started: "🔬 Testing copy-project... [{workflow_name}]({run_url})"
    run-success: "✅ Copy-project test passed! [{workflow_name}]({run_url})"
    run-failure: "❌ Copy-project test failed! [{workflow_name}]({run_url}): {status}"
timeout-minutes: 10
---

# Smoke Test: Copy-Project Safe Output

**Purpose:** Validate the `copy-project` safe output for duplicating GitHub Projects V2.

**Test Organization:** github-agentic-workflows
**Source Project:** https://github.com/orgs/github-agentic-workflows/projects/1

## Test Overview

The `copy-project` safe output duplicates an existing project with:
- All custom views (board, table, roadmap layouts)
- All custom field definitions
- Project settings and configuration
- Items can optionally be copied (draft issues, linked issues, etc.)

## Test Cases

### 1. Basic Project Copy
Copy the source project with a new title:

```json
{
  "type": "copy_project",
  "source_project": "https://github.com/orgs/github-agentic-workflows/projects/1",
  "target_owner": "github-agentic-workflows",
  "new_title": "Smoke Test Copy 1 - Run ${{ github.run_id }}",
  "include_draft_issues": false
}
```

This should create a new project with:
- Same views as the source
- Same custom fields
- Same configuration
- No items copied (since include_draft_issues is false)

### 2. Copy with Draft Issues
Copy the source project including draft issues:

```json
{
  "type": "copy_project",
  "source_project": "https://github.com/orgs/github-agentic-workflows/projects/1",
  "target_owner": "github-agentic-workflows",
  "new_title": "Smoke Test Copy 2 - Run ${{ github.run_id }}",
  "include_draft_issues": true
}
```

This should create a new project with:
- Same views, fields, and configuration
- All draft issues from the source project copied

### 3. Verify Default Source Project
The frontmatter configures a default source project.
Create a copy without specifying the source project in the message:

```json
{
  "type": "copy_project",
  "target_owner": "github-agentic-workflows",
  "new_title": "Smoke Test Copy 3 - Run ${{ github.run_id }}"
}
```

This should use the default source project from the frontmatter.

### 4. Verify Max Limit
The frontmatter configures `max: 2`.
Attempt to create a 3rd copy and verify it respects the max limit.

## Output Requirements

Add a **concise comment** to the pull request (if triggered by PR) with:

| Test Case | Status | Project URL |
|-----------|--------|-------------|
| Basic copy (no items) | ✅/❌ | Link to copied project |
| Copy with draft issues | ✅/❌ | Link to copied project |
| Default source used | ✅/❌ | Default applied correctly |
| Max limit enforced | ✅/❌ | 3rd copy blocked |

**Verification Checklist:**
- [ ] Copied projects have same views as source
- [ ] Copied projects have same custom fields as source
- [ ] Draft issues copied when requested (test 2)
- [ ] Draft issues not copied when not requested (test 1)

**Overall Status:** PASS / FAIL

**Created Projects:**
- Copy 1: [URL]
- Copy 2: [URL]

## Cleanup

After the test completes, manually archive or delete the copied test projects to avoid clutter.

## Success Criteria

- All copy operations succeed
- Views and custom fields are replicated correctly
- Draft issues are copied only when requested
- Default source project is used when not specified
- Max limit is enforced (prevents 3rd copy)
- Copied projects are fully functional
