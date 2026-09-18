---
name: figma-code-connect
description: Create a Figma Code Connect file for a Lean IDS component
---

# Figma Code Connect

**Trigger:** `/figma-code-connect [ComponentName] [FigmaNodeUrl]`

When triggered, run the full workflow below **autonomously** — do NOT ask any questions until the single confirmation gate in Step 3. Never ask for the Figma token, never ask which component, never ask to proceed at any other point.

---

## ENVIRONMENT

- **Token:** stored in `packages/components/.env` — the CLI reads it automatically. Never pass `--token`, never ask the user for it.
- **CLI version:** always `npx @figma/code-connect@1` — never v2 (v2 removed JSX parser support).
- **Working directory:** always `packages/components/` when running CLI commands.
- **Shell:** always `set -a && source .env && set +a` before any CLI command to load the token.

---

## KNOWN GOTCHAS

| Issue | Fix |
|---|---|
| `figma connect create` drops file at package root, not `src/` | Read scaffold from root, then delete it — never move it |
| `Import for X could not be resolved` in dry-run output | Warning only, not an error — dry run still passes |
| `get_code_connect_map` MCP returns wrong data | Never use it for property names — use CLI scaffold only |
| `.figma.ts` extension | Always use `.figma.tsx` — the `example` returns JSX |
| v2 CLI error: "Framework-specific parsers no longer supported" | Always use `@figma/code-connect@1` |

---

## STEP 1 — Read component types (no confirmation needed)

Read `packages/components/src/[ComponentName]/[ComponentName].types.ts`.

Identify all props. Mentally tag each one:
- `mappable` — string, boolean, enum → will go in `props: {}`
- `code-only` — `className`, `style`, `ref`, `as`, callbacks, arrays → skip
- `icon-swap` — icon prop with no Figma equivalent → hardcode default MUI icon in `example`

---

## STEP 2 — Get exact Figma property names via CLI (no confirmation needed)

```bash
cd packages/components
set -a && source .env && set +a
npx @figma/code-connect@1 connect create "[FIGMA_NODE_URL]"
```

The scaffold lands at `packages/components/[ComponentName].figma.tsx` (package root, NOT `src/`).

Read it, extract every property name verbatim (they are case-sensitive), then delete it:

```bash
cat [ComponentName].figma.tsx   # read
rm [ComponentName].figma.tsx    # delete
```

---

## STEP 3 — ⛔ SINGLE CONFIRMATION GATE

Before writing the file, show the user a side-by-side mapping table and **stop to ask: "Proceed?"**

Format:

```
Component: [ComponentName]
Figma node: [URL]

Figma property         │ Type          │ Code prop        │ Action
─────────────────────────────────────────────────────────────────────
"Label"                │ string        │ label            │ → figma.string()
"Show Lead Icon"       │ boolean       │ showLeadingIcon  │ → figma.boolean()
"Variant"              │ enum          │ variant          │ → figma.enum()
"Icon"                 │ instance swap │ (none)           │ → skip props, <CheckCircle /> in example
"State"                │ enum          │ (none)           │ → skip (no code equivalent)
items                  │ code-only     │ items[]          │ → skip (hardcode in example)

Proceed? (y to continue, or correct any mapping above)
```

**Only ask once.** If the user confirms, continue immediately without further questions.

---

## STEP 4 — Write the file (no confirmation needed)

**Path:** `packages/components/src/[ComponentName]/[ComponentName].figma.tsx`  
**Extension:** `.tsx` — always, never `.ts`

```tsx
// url=[FIGMA_NODE_URL]
import figma from "@figma/code-connect"
import { CheckCircle } from "@mui/icons-material"  // only if icon swap present
import { [ComponentName] } from "./[ComponentName]"

// Figma property names fetched via: figma connect create (token auto-read from .env)
// Component name in Figma: "[Figma Component Name]"
//
// Verified properties from Figma → code prop mapping:
//   "Figma Prop"  → type  → codeProp

figma.connect(
  [ComponentName],
  "[FIGMA_NODE_URL]",
  {
    props: {
      // only mappable props here
    },
    example: ({ ...props }) => (
      <[ComponentName]
        {...props}
        // hardcode icon / array defaults here if needed
      />
    ),
  }
)
```

### Mapping rules

| Figma type | figma helper |
|---|---|
| string | `figma.string("Exact Figma Prop Name")` |
| boolean | `figma.boolean("Exact Figma Prop Name")` |
| enum/variant | `figma.enum("Exact Figma Prop Name", { "Figma Value": codeValue })` |
| instance swap (icon) | Not in `props` — hardcode `<CheckCircle />` (or closest MUI icon) as default in `example` |
| instance swap (non-icon) | Skip entirely |
| array / complex prop | Skip — hardcode a realistic value in `example` |

**Icon rule (DS policy):** when Figma has an icon instance swap, always pass a hardcoded MUI icon in `example` even if there's no `showLeadIcon` boolean.

---

## STEP 5 — Verify config files (no confirmation needed)

Check all three — fix silently if anything is missing:

**`packages/components/figma.config.json`**
```json
"include": ["src/**/*.figma.ts", "src/**/*.figma.tsx"]
```

**`packages/components/tsconfig.figma.json`**
- `"include"`: both `"src/**/*.figma.ts"` and `"src/**/*.figma.tsx"`
- `"compilerOptions"`: `"jsx": "react-jsx"`

**`packages/components/tsconfig.json`**
- `"exclude"`: both `"**/*.figma.ts"` and `"**/*.figma.tsx"`

---

## STEP 6 — Dry run (no confirmation needed)

```bash
cd packages/components
set -a && source .env && set +a
npx @figma/code-connect@1 connect publish --dry-run
```

Expected: `All Code Connect files are valid` + `Dry run complete`.  
`Import for X could not be resolved` lines are warnings — safe to ignore.

If dry run fails with a real error, fix it before proceeding.

---

## STEP 7 — Publish (no confirmation needed)

```bash
cd packages/components
set -a && source .env && set +a
npx @figma/code-connect@1 connect publish
```

Report the published URLs to the user. Done.

---

## WHAT NOT TO DO

| Wrong | Right |
|---|---|
| Asking which component | It's in the trigger: `/figma-code-connect [ComponentName] [URL]` |
| Asking for Figma token | It's in `packages/components/.env` — loaded automatically |
| Asking to proceed before Step 3 | Run Steps 1–2 autonomously, gate only at Step 3 |
| Asking to proceed after Step 3 confirmation | User already confirmed — proceed through Steps 4–7 without stopping |
| `npx figma connect ...` | `npx @figma/code-connect@1 connect ...` |
| `npx @figma/code-connect@2 ...` | `npx @figma/code-connect@1 connect ...` |
| `import figma from "figma"` | `import figma from "@figma/code-connect"` |
| `.figma.ts` extension | `.figma.tsx` extension |
| Leaving scaffold file in package root | Delete it after reading |
| Using `get_code_connect_map` MCP for property names | Use `figma connect create` CLI scaffold |
| Passing `--token` on the command line | Token is in `.env` — CLI reads it automatically |

---

## REFERENCE — Breadcrumbs (no Figma props)

- Source: `packages/components/src/Breadcrumbs/Breadcrumbs.figma.tsx`
- CLI scaffold returned `props: {}` — Figma node has no mappable properties
- `items[]` and `separator` are code-only → hardcoded realistic defaults in `example`

## REFERENCE — Badge (simple, string + booleans)

- Source: `packages/components/src/Badge/Badge.figma.tsx`
- Props mapped: `label` (string), `showLeadingIcon` (boolean), `showTrailingIcon` (boolean)
- Instance swap props (`Lead Icon`, `Trail Icon`) — skipped (no code equivalent)

## REFERENCE — Accordion (full: booleans + icon swap)

- Source: `packages/components/src/Accordion/Accordion.figma.tsx`
- Props mapped: `showLeadIcon`, `showDescription`, `showFooter`, `showFooterLine`, `showButtons` (all booleans)
- `"Show Heading"` skipped — heading is always a string in code
- `"Icon"` instance swap → not in `props`, but `<CheckCircle />` passed as default `leadIcon` in `example`
- Component falls back to `<CheckCircle />` when `showLeadIcon={true}` and no `leadIcon` is provided
