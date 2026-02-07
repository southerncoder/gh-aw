package workflow

import (
	"fmt"

	"github.com/github/gh-aw/pkg/logger"
)

var toolsValidationLog = logger.New("workflow:tools_validation")

// validateBashToolConfig validates that bash tool configuration is explicit (not nil/anonymous)
func validateBashToolConfig(tools *Tools, workflowName string) error {
	if tools == nil {
		return nil
	}

	// Check if bash is present in the raw map but Bash field is nil
	// This indicates the anonymous syntax (bash:) was used
	if rawMap := tools.ToMap(); rawMap != nil {
		if _, hasBash := rawMap["bash"]; hasBash && tools.Bash == nil {
			toolsValidationLog.Printf("Invalid bash tool configuration in workflow: %s", workflowName)
			return fmt.Errorf("invalid bash tool configuration: anonymous syntax 'bash:' is not supported. Use 'bash: true' (enable all commands), 'bash: false' (disable), or 'bash: [\"cmd1\", \"cmd2\"]' (specific commands). Run 'gh aw fix' to automatically migrate")
		}
	}

	return nil
}

// validateGitHubModeConfig validates that GitHub tool mode is either "local" or "remote"
func validateGitHubModeConfig(tools *Tools, workflowName string) error {
	if tools == nil || tools.GitHub == nil {
		return nil
	}

	// Check if mode is explicitly set in the raw map
	if rawMap := tools.ToMap(); rawMap != nil {
		if githubTool, hasGitHub := rawMap["github"]; hasGitHub {
			if toolConfig, ok := githubTool.(map[string]any); ok {
				if modeSetting, exists := toolConfig["mode"]; exists {
					if modeStr, ok := modeSetting.(string); ok {
						if modeStr != "local" && modeStr != "remote" {
							toolsValidationLog.Printf("Invalid GitHub tool mode in workflow %s: %s", workflowName, modeStr)
							return fmt.Errorf("invalid tools.github.mode: %q (must be 'local' or 'remote')", modeStr)
						}
					}
				}
			}
		}
	}

	return nil
}
