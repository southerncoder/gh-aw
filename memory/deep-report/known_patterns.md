## Known Patterns (2026-02-03)

- Token usage is now tracked daily; spend concentrates in a small set of high-volume workflows (Test YAML Import, Test Dispatcher Workflow, Issue Monster), while per-run outliers (Agent Persona Explorer, jsweep, CI Failure Doctor) dominate cost/run.
- Copilot session outcomes skew toward "action_required" and "skipped" with low completion rates; successful sessions correlate strongly with high-quality, long-context prompts and 4-12 minute run durations.
- GitHub MCP structural analysis confirms extreme response bloat for list_code_scanning_alerts (~95K tokens) and continued verbosity for list_releases/list_pull_requests; core repo tools remain efficient.
- Remote GitHub MCP auth-test failures continue to be tool-loading issues (toolsets not available), not authentication failures.
- Workflow lockfiles remain highly standardized in size/structure (149 lockfiles, 50-100 KB cluster), with strong adoption of schedule + workflow_dispatch and minimal workflow-level permissions.
