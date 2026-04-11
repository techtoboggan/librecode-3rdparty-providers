/**
 * OpenAI provider plugin for LibreCode.
 *
 * Registers OpenAI as a provider with API key authentication.
 * Uses the Responses API for model resolution.
 *
 * NOTE: The full Codex OAuth flow (from librecode core plugin/codex.ts)
 * will be migrated here in a future release. For now, API key auth only.
 */

import type { Plugin } from "@librecode/plugin"

export const OpenAIProvider: Plugin = async (_input) => {
  return {
    auth: {
      provider: "openai",
      methods: [
        {
          label: "API Key",
          type: "api" as const,
        },
        // TODO: Migrate Codex OAuth flow from librecode core
        // {
        //   label: "ChatGPT Pro/Plus (browser)",
        //   type: "oauth" as const,
        //   authorize: async () => { ... },
        // },
      ],
      async loader(getAuth, _provider) {
        const auth = await getAuth()
        const apiKey = auth.type === "api" ? auth.key : undefined
        if (!apiKey) return {}
        return { apiKey }
      },
    },
  }
}
