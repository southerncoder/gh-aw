#!/usr/bin/env node
/**
 * Simple MCP server for testing MCP gateway integration.
 * This server implements a minimal MCP protocol and exposes a few test tools.
 * 
 * Usage: node test-mcp-server.cjs
 */

const readline = require('readline');

// Test tools exposed by this server
const TOOLS = [
  {
    name: "test_echo",
    description: "Echo back the input message",
    inputSchema: {
      type: "object",
      properties: {
        message: {
          type: "string",
          description: "Message to echo"
        }
      },
      required: ["message"]
    }
  },
  {
    name: "test_add",
    description: "Add two numbers",
    inputSchema: {
      type: "object",
      properties: {
        a: {
          type: "number",
          description: "First number"
        },
        b: {
          type: "number",
          description: "Second number"
        }
      },
      required: ["a", "b"]
    }
  },
  {
    name: "test_uppercase",
    description: "Convert text to uppercase",
    inputSchema: {
      type: "object",
      properties: {
        text: {
          type: "string",
          description: "Text to convert"
        }
      },
      required: ["text"]
    }
  }
];

// Create readline interface for JSON-RPC communication
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

// Send a JSON-RPC response
function sendResponse(id, result) {
  const response = {
    jsonrpc: "2.0",
    id: id,
    result: result
  };
  console.log(JSON.stringify(response));
}

// Send a JSON-RPC error
function sendError(id, code, message) {
  const response = {
    jsonrpc: "2.0",
    id: id,
    error: {
      code: code,
      message: message
    }
  };
  console.log(JSON.stringify(response));
}

// Handle incoming JSON-RPC requests
rl.on('line', (line) => {
  try {
    const request = JSON.parse(line);
    const { id, method, params } = request;

    switch (method) {
      case 'initialize':
        sendResponse(id, {
          protocolVersion: "2024-11-05",
          capabilities: {
            tools: {}
          },
          serverInfo: {
            name: "test-mcp-server",
            version: "1.0.0"
          }
        });
        break;

      case 'tools/list':
        sendResponse(id, {
          tools: TOOLS
        });
        break;

      case 'tools/call':
        handleToolCall(id, params);
        break;

      default:
        sendError(id, -32601, `Method not found: ${method}`);
    }
  } catch (error) {
    // Invalid JSON or error processing request
    // For simplicity, we'll ignore malformed requests
  }
});

// Handle tool calls
function handleToolCall(id, params) {
  const { name, arguments: args } = params;

  switch (name) {
    case 'test_echo':
      sendResponse(id, {
        content: [
          {
            type: "text",
            text: args.message || ""
          }
        ]
      });
      break;

    case 'test_add':
      const sum = (args.a || 0) + (args.b || 0);
      sendResponse(id, {
        content: [
          {
            type: "text",
            text: String(sum)
          }
        ]
      });
      break;

    case 'test_uppercase':
      sendResponse(id, {
        content: [
          {
            type: "text",
            text: (args.text || "").toUpperCase()
          }
        ]
      });
      break;

    default:
      sendError(id, -32601, `Tool not found: ${name}`);
  }
}

// Handle exit
process.on('SIGTERM', () => {
  process.exit(0);
});

process.on('SIGINT', () => {
  process.exit(0);
});
