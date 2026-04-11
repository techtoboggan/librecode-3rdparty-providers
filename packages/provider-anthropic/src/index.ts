/**
 * Anthropic (Claude) provider plugin for LibreCode.
 *
 * Registers Anthropic as a provider with API key authentication and
 * configures the required beta headers for Claude features.
 */

import type { Plugin } from "@librecode/plugin"

const ANTHROPIC_BETA_HEADERS =
  "claude-code-20250219,interleaved-thinking-2025-05-14,fine-grained-tool-streaming-2025-05-14"

export const AnthropicProvider: Plugin = async (_input) => {
  return {
    auth: {
      provider: "anthropic",
      methods: [
        {
          label: "API Key",
          type: "api" as const,
        },
      ],
      async loader(getAuth, _provider) {
        const auth = await getAuth()
        const apiKey = auth.type === "api" ? auth.key : undefined
        if (!apiKey) return {}
        return { apiKey }
      },
    },
    "chat.headers": async (_input, output) => {
      output.headers["anthropic-beta"] = ANTHROPIC_BETA_HEADERS
    },
  }
}
