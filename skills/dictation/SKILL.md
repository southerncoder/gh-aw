---
name: Dictation Instructions
description: Fix speech-to-text errors and improve text clarity in dictated content related to GitHub Agentic Workflows
applyTo: "**/*"
---

# Dictation Instructions

## Technical Context

GitHub Agentic Workflows (gh-aw) is a CLI tool for writing agentic workflows in natural language using markdown files and running them as GitHub Actions. When fixing dictated text, use these project-specific terms and conventions, and improve text clarity by removing filler words and making it more professional.

## Project Glossary

@copilot
actionlint
add-comment
add-labels
add-reviewer
agentic
agentic-workflows
agent-factory
agent-session
agents
allowed-domains
allowed-exts
anthropic
api-key
assign-milestone
assign-to-agent
assign-to-user
auto-close
autofix
automation
bash
blob
branch
cache-memory
campaign
chatops
checkout
claude
cli
close-discussion
close-issue
close-pull-request
codex
comment-triggered
commit
compilation
compile
concurrency
config
container
contents
context
copilot
cron
cross-repository
custom-agents
custom-engines
dailyops
defaults
deterministic
dev
dictation
discussion
discussions
dispatch
dispatch-workflow
dispatchops
docker
docs
domains
ecosystem
edit
engine
env
environment
ephemerals
error
escalation
events
expires
factory
feature-flags
features
fine-grained
firewall
fork
forks
format
frontmatter
fuzzy-schedule
gateway
gh-aw
github
github-actions
github-mcp
github-token
githubnext
glossary
graphql
group
guides
hash
header
hide-comment
hourly
http
https
implementation
import
imports
input
inputs
inspector
instructions
integration
issue
issueops
issues
javascript
jobs
json
label
labelops
labels
link-sub-issue
lint
local
lock-file
lockdown
lockfile
logs
manual-approval
markdown
markitdown
max
max-size
max-updates
mcp
mcp-gateway
mcp-registry
mcp-server
mcp-servers
memory
memoryops
message
messages
metadata
milestone
minimize-comment
missing-data
missing-tool
mode
model
modelcontextprotocol
multirepo
multirepoops
network
noop
notification
notifications
npx
on
operations
optional
orchestrator
orgs
output
outputs
owner
packaging
path
pat
patterns
peli
permission
permissions
personal-access-token
playwright
post-steps
poutine
prefix
priority
private-key
project
projectops
projects
prompt
pull-request
pull-requests
push
push-to-pull-request-branch
python
query
reaction
read
read-only
recompile
reference
refactoring
registry
release
releases
remote
remove-labels
repo
repo-memory
repos
repositories
repository
required
research
researchplanassign
resolution
reviewer
role
roles
run-failure
run-name
run-started
run-success
runs-on
runtimes
safe
safe-inputs
safe-jobs
safe-output
safe-outputs
sandbox
sarif
sbom
schedule
schema
script
search
secrets
security
serena
server
servers
services
setup
shell
slack
slash-command
source
specops
staged
staged-mode
status
status-update
status-updates
stdio
steps
strict
string
sub-issue
sync
syntax
target
target-repo
template
templating
test
threat
timeout
timeout-minutes
title-prefix
token
toolset
toolsets
tools
tracker-id
tracking
trial
trialops
triage
trigger
triggered
triggers
type
types
ubuntu
update
update-discussion
update-issue
update-project
update-pull-request
update-release
upgrade
upload
upload-asset
url
validation
validator
variables
version
visibility
web-fetch
web-search
webhook
weekly
workflow
workflow-dispatch
workflow-run-id
workflow-structure
workflows
workspace
wrap
write
write-all
yaml
zizmor

## Fix Speech-to-Text Errors

Common speech-to-text misrecognitions and their corrections:

### Safe Outputs/Inputs
- "safe output" → safe-output
- "safe outputs" → safe-outputs
- "safe input" → safe-input
- "safe inputs" → safe-inputs
- "save outputs" → safe-outputs
- "save output" → safe-output

### Workflow Terms
- "agent ic workflows" → agentic workflows
- "agent tick workflows" → agentic workflows
- "work flow" → workflow
- "work flows" → workflows
- "G H A W" → gh-aw
- "G age A W" → gh-aw

### Configuration
- "front matter" → frontmatter
- "tool set" → toolset
- "tool sets" → toolsets
- "M C P servers" → MCP servers
- "M C P server" → MCP server
- "lock file" → lockfile

### Commands & Operations
- "re compile" → recompile
- "runs on" → runs-on
- "time out minutes" → timeout-minutes
- "work flow dispatch" → workflow-dispatch
- "pull request" → pull-request (in YAML contexts)

### GitHub Actions
- "add comment" → add-comment
- "add labels" → add-labels
- "close issue" → close-issue
- "create issue" → create-issue
- "pull request review" → pull-request-review

### AI Engines & Bots
- "co-pilot" → copilot (when referring to the engine)
- "Co-Pilot" → Copilot
- "at copilot" → @copilot (when assigning/mentioning the bot)
- "@ copilot" → @copilot
- "copilot" → @copilot (when context indicates assignment or mention)
- "code X" → codex
- "Code X" → Codex

### Spacing/Hyphenation Ambiguity
When context suggests a GitHub Actions key or CLI flag:
- Use hyphens: `timeout-minutes`, `runs-on`, `cache-memory`
- In YAML: prefer hyphenated form
- In prose: either form acceptable, prefer hyphenated for consistency

## Clean Up and Improve Text

Make dictated text clearer and more professional by:

### Remove Filler Words
Common filler words and verbal tics to remove:
- "humm", "hmm", "hm"
- "um", "uh", "uhh", "er", "err"
- "you know"
- "like" (when used as filler, not for comparisons)
- "basically", "actually", "essentially" (when redundant)
- "sort of", "kind of" (when used to hedge unnecessarily)
- "I mean", "I think", "I guess"
- "right?", "yeah", "okay" (at start/end of sentences)
- Repeated words: "the the", "and and", etc.

### Improve Clarity
- Make sentences more direct and concise
- Use active voice instead of passive voice where appropriate
- Remove redundant phrases
- Fix run-on sentences by splitting them appropriately
- Ensure proper sentence structure and punctuation
- Replace vague terms with specific technical terms from the glossary

### Maintain Professional Tone
- Keep technical accuracy
- Preserve the user's intended meaning
- Use neutral, technical language
- Avoid overly casual or conversational tone in technical contexts
- Maintain appropriate formality for documentation and technical discussions

### Examples
- "Um, so like, you need to basically compile the workflow, you know?" → "Compile the workflow."
- "I think we should, hmm, use safe-outputs for this" → "Use safe-outputs for this."
- "The workflow is kind of slow, actually" → "The workflow is slow."
- "You know, the MCP server needs to be configured" → "The MCP server needs to be configured."

## Guidelines

You do not have enough background information to plan or provide code examples.
- Do NOT generate code examples
- Do NOT plan steps or provide implementation guidance
- Focus on fixing speech-to-text errors (misrecognized words, spacing, hyphenation)
- Remove filler words and verbal tics (humm, you know, um, uh, like, etc.)
- Improve clarity and professionalism of the text
- Make text more direct and concise
- When unsure, prefer the hyphenated form for technical terms
- Preserve the user's intended meaning while correcting transcription errors and improving clarity

## Fix Speech-to-Text Errors

Common speech-to-text misrecognitions and their corrections:

### Safe Outputs/Inputs
- "safe output" → safe-output
- "safe outputs" → safe-outputs
- "safe input" → safe-input
- "safe inputs" → safe-inputs
- "save outputs" → safe-outputs
- "save output" → safe-output

### Workflow Terms
- "agent ic workflows" → agentic workflows
- "agent tick workflows" → agentic workflows
- "work flow" → workflow
- "work flows" → workflows
- "G H A W" → gh-aw
- "G age A W" → gh-aw

### Configuration
- "front matter" → frontmatter
- "tool set" → toolset
- "tool sets" → toolsets
- "M C P servers" → MCP servers
- "M C P server" → MCP server
- "lock file" → lockfile

### Commands & Operations
- "re compile" → recompile
- "runs on" → runs-on
- "time out minutes" → timeout-minutes
- "work flow dispatch" → workflow-dispatch
- "pull request" → pull-request (in YAML contexts)

### GitHub Actions
- "add comment" → add-comment
- "add labels" → add-labels
- "close issue" → close-issue
- "create issue" → create-issue
- "pull request review" → pull-request-review

### AI Engines & Bots
- "co-pilot" → copilot (when referring to the engine)
- "Co-Pilot" → Copilot
- "at copilot" → @copilot (when assigning/mentioning the bot)
- "@ copilot" → @copilot
- "copilot" → @copilot (when context indicates assignment or mention)
- "code X" → codex
- "Code X" → Codex

### Spacing/Hyphenation Ambiguity
When context suggests a GitHub Actions key or CLI flag:
- Use hyphens: `timeout-minutes`, `runs-on`, `cache-memory`
- In YAML: prefer hyphenated form
- In prose: either form acceptable, prefer hyphenated for consistency

## Clean Up and Improve Text

Make dictated text clearer and more professional by:

### Remove Filler Words
Common filler words and verbal tics to remove:
- "humm", "hmm", "hm"
- "um", "uh", "uhh", "er", "err"
- "you know"
- "like" (when used as filler, not for comparisons)
- "basically", "actually", "essentially" (when redundant)
- "sort of", "kind of" (when used to hedge unnecessarily)
- "I mean", "I think", "I guess"
- "right?", "yeah", "okay" (at start/end of sentences)
- Repeated words: "the the", "and and", etc.

### Improve Clarity
- Make sentences more direct and concise
- Use active voice instead of passive voice where appropriate
- Remove redundant phrases
- Fix run-on sentences by splitting them appropriately
- Ensure proper sentence structure and punctuation
- Replace vague terms with specific technical terms from the glossary

### Maintain Professional Tone
- Keep technical accuracy
- Preserve the user's intended meaning
- Use neutral, technical language
- Avoid overly casual or conversational tone in technical contexts
- Maintain appropriate formality for documentation and technical discussions

### Examples
- "Um, so like, you need to basically compile the workflow, you know?" → "Compile the workflow."
- "I think we should, hmm, use safe-outputs for this" → "Use safe-outputs for this."
- "The workflow is kind of slow, actually" → "The workflow is slow."
- "You know, the MCP server needs to be configured" → "The MCP server needs to be configured."

## Guidelines

You do not have enough background information to plan or provide code examples.
- Do NOT generate code examples
- Do NOT plan steps or provide implementation guidance
- Focus on fixing speech-to-text errors (misrecognized words, spacing, hyphenation)
- Remove filler words and verbal tics (humm, you know, um, uh, like, etc.)
- Improve clarity and professionalism of the text
- Make text more direct and concise
- When unsure, prefer the hyphenated form for technical terms
- Preserve the user's intended meaning while correcting transcription errors and improving clarity
