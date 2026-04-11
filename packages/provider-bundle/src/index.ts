/**
 * LibreCode Provider Bundle
 *
 * Meta-package that re-exports all community provider plugins.
 * Install this single package to get all providers at once.
 *
 * Usage in librecode config:
 *   { "plugin": ["@librecode/provider-bundle@latest"] }
 */

export { AnthropicProvider } from "@librecode/provider-anthropic"
export { OpenAIProvider } from "@librecode/provider-openai"
export { OpenRouterProvider } from "@librecode/provider-openrouter"
