---
description: Smoke test for create-project safe output
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
name: Smoke Test - Create Project
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
  create-project:
    max: 2
    target-owner: "github-agentic-workflows"
    title-prefix: "Smoke Test -"
  add-comment:
    max: 1
  messages:
    footer: "> 🔬 *Create-project validation by [{workflow_name}]({run_url})*"
    run-started: "🔬 Testing create-project... [{workflow_name}]({run_url})"
    run-success: "✅ Create-project test passed! [{workflow_name}]({run_url})"
    run-failure: "❌ Create-project test failed! [{workflow_name}]({run_url}): {status}"
timeout-minutes: 10
---

# Smoke Test: Create-Project Safe Output

**Purpose:** Validate the `create-project` safe output for creating new GitHub Projects V2.

**Test Organization:** github-agentic-workflows

## Test Overview

The `create-project` safe output creates new GitHub Projects V2 with:
- Custom title and description
- Optional custom views
- Optional custom field definitions
- Target owner (organization or user)

## Test Cases

### 1. Create Basic Project
Create a simple project with minimal configuration:

```json
{
  "type": "create_project",
  "title": "Basic Smoke Test Project",
  "owner": "github-agentic-workflows",
  "description": "Test project created by smoke test - Run ${{ github.run_id }}"
}
```

### 2. Create Project with Custom Views
Create a project with multiple views:

```json
{
  "type": "create_project",
  "title": "Multi-View Test Project",
  "owner": "github-agentic-workflows",
  "description": "Test project with custom views - Run ${{ github.run_id }}",
  "views": [
    {
      "name": "Backlog",
      "layout": "TABLE"
    },
    {
      "name": "Current Sprint",
      "layout": "BOARD"
    }
  ]
}
```

### 3. Create Project with Custom Fields
Create a project with custom field definitions:

```json
{
  "type": "create_project",
  "title": "Custom Fields Test Project",
  "owner": "github-agentic-workflows",
  "description": "Test project with custom fields - Run ${{ github.run_id }}",
  "field_definitions": [
    {
      "name": "Priority",
      "data_type": "SINGLE_SELECT",
      "options": ["High", "Medium", "Low"]
    },
    {
      "name": "Sprint",
      "data_type": "TEXT"
    }
  ]
}
```

### 4. Verify Title Prefix
The frontmatter configures `title-prefix: "Smoke Test -"`.
Verify that projects created without a title prefix in the message get the default prefix applied.

### 5. Verify Max Limit
The frontmatter configures `max: 2`.
Attempt to create a 3rd project and verify it respects the max limit.

## Output Requirements

Add a **concise comment** to the pull request (if triggered by PR) with:

| Test Case | Status | Project URL |
|-----------|--------|-------------|
| Basic project | ✅/❌ | Link to created project |
| Multi-view project | ✅/❌ | Link to created project |
| Custom fields project | ✅/❌ | Link to created project |
| Title prefix applied | ✅/❌ | Prefix correctly applied |
| Max limit enforced | ✅/❌ | 3rd project blocked |

**Overall Status:** PASS / FAIL

**Created Projects:**
- Project 1: [URL]
- Project 2: [URL]

## Cleanup

After the test completes, manually archive or delete the created test projects to avoid clutter.

## Success Criteria

- All project creation operations succeed
- Custom views and fields are created as specified
- Title prefix is applied correctly
- Max limit is enforced (prevents 3rd project)
- Created projects are accessible and properly configured
