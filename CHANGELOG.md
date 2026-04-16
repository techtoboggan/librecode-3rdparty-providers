# Changelog

Format: [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) · [SemVer](https://semver.org/).

## [1.0.0-preview.1] — 2026-04-15

Aligned with LibreCode main repo v1.0.0-preview.1.

### Changed

- All 4 packages bumped to `1.0.0-preview.1`:
  - `@librecode/provider-anthropic`
  - `@librecode/provider-openai`
  - `@librecode/provider-openrouter`
  - `@librecode/provider-bundle`
- `@librecode/plugin` peer dependency bumped to `^1.0.0-preview.1`.

### Fixed (since 0.1.0, unpublished until now)

- **CI / npm publish workflow**:
  - Ordering and workspace dep rewrite (#40bc893)
  - Stripped workspace root before `npm install` to avoid `workspace:*` resolution (#dfc4a4c)
  - Bumped `@librecode/plugin` dep to `^0.1.0` in all packages (#f5a8fa0)
  - Removed `NODE_AUTH_TOKEN=""` so OIDC trusted publisher auth works (#6943902)
  - Used `NPM_TOKEN` secret for publish auth (#d07b2ee)
  - Added `repository.url` to package.json before publish for npm provenance (#6c0bbaa)
  - Removed flaky npm self-update step (#9c60a1f)

## [0.1.0] — Initial release

- Anthropic (Claude) provider (`@librecode/provider-anthropic`)
- OpenAI (GPT, o-series, Codex) provider (`@librecode/provider-openai`)
- OpenRouter provider (`@librecode/provider-openrouter`)
- Meta-package bundling all three (`@librecode/provider-bundle`)
