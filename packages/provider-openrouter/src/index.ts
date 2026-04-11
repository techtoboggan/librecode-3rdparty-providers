/**
 * OpenRouter provider plugin for LibreCode.
 *
 * Registers OpenRouter as a provider with API key authentication
 * and configures required referrer headers.
 */

import type { Plugin } from "@librecode/plugin"

export const OpenRouterProvider: Plugin = async (_input) => {
  return {
    auth: {
      provider: "openrouter",
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
      output.headers["HTTP-Referer"] = "https://github.com/techtoboggan/librecode/"
      output.headers["X-Title"] = "librecode"
    },
  }
}
