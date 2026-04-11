# LibreCode Third-Party Providers

Community-maintained LLM provider plugins for [LibreCode](https://github.com/techtoboggan/librecode).

LibreCode core ships with local-first providers (LiteLLM, AWS Bedrock, Azure). This repo contains provider plugins for cloud APIs and other services.

## Available Providers

| Package | Provider | Auth Type |
|---------|----------|-----------|
| `@librecode/provider-anthropic` | Anthropic (Claude) | API Key |
| `@librecode/provider-openai` | OpenAI (GPT, Codex) | OAuth + API Key |
| `@librecode/provider-openrouter` | OpenRouter | API Key |
| `@librecode/provider-bundle` | All providers | Meta-package |

## Installation

Add a provider to your LibreCode config:

```json
{
  "plugin": ["@librecode/provider-anthropic@latest"]
}
```

Or install all community providers:

```json
{
  "plugin": ["@librecode/provider-bundle@latest"]
}
```

LibreCode automatically installs the package on startup.

## Creating a Provider

Each provider is a standard LibreCode plugin that exports a `Plugin` function:

```typescript
import type { Plugin } from "@librecode/plugin"

export const MyProvider: Plugin = async (_input) => {
  return {
    auth: {
      provider: "my-provider",
      methods: [{ type: "api", label: "API Key" }],
      async loader(getAuth) {
        const auth = await getAuth()
        if (auth.type !== "api") return {}
        return { apiKey: auth.key }
      },
    },
  }
}
```

See [LibreCode Provider Guide](https://github.com/techtoboggan/librecode/blob/main/docs/providers.md) for full documentation.

## Development

```bash
bun install
bun run typecheck
bun run test
```

## License

MIT
