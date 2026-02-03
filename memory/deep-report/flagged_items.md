## Flagged Items for Monitoring (2026-02-03)

- Copilot session analysis reports 56% missing logs and 100% failure rate for Security Guard Agent sessions; both indicate systemic logging/config issues.
- MCP structural analysis shows list_code_scanning_alerts returning ~95K tokens, exceeding practical limits; requires pagination/minimal mode or alternative query patterns.
- Remote GitHub MCP auth-test continues failing due to toolset loading, suggesting environment/tooling misconfiguration rather than auth failure.
- High per-run token outliers (Agent Persona Explorer, jsweep, CI Failure Doctor) and high-volume dispatch workflows remain cost hotspots.
- Weekly workflow analysis shows heavy "action_required" concentration for PR review bots on a single PR; potential redundancy and notification noise.
