// url=https://www.figma.com/design/krtBe5bwqddbHpFjYC5S13/Lean---IDS?node-id=4194-19753&m=dev
import figma from "@figma/code-connect"
import { Search } from "@mui/icons-material"
import { Textarea } from "./Textarea"

// Figma property names fetched via: figma connect create (token auto-read from .env)
// Component name in Figma: "Textarea"
//
// Verified properties from Figma → code prop mapping:
//   "Field Label"           → string  → label
//   "Placeholder text"      → string  → placeholder
//   "Show Label"            → boolean → showLabel
//   "Show field importance" → boolean → showFieldImportance
//   "Show helping text"     → boolean → showInlineText
//   "Show leading icon"     → boolean → leadingIcon (true=<Search />, false=undefined)
//   "Show trailing icon"    → boolean → trailingIcon (true=<Search />, false=undefined)
//   "Show Label Line"       → boolean → skipped (no code equivalent)
//   "Icon"                  → instance swap → skipped (no code equivalent)

figma.connect(
  Textarea,
  "https://www.figma.com/design/krtBe5bwqddbHpFjYC5S13/Lean---IDS?node-id=4194-19753&m=dev",
  {
    props: {
      label: figma.string("Field Label"),
      placeholder: figma.string("Placeholder text"),
      showLabel: figma.boolean("Show Label"),
      showFieldImportance: figma.boolean("Show field importance"),
      showInlineText: figma.boolean("Show helping text"),
      leadingIcon: figma.boolean("Show leading icon", {
        true: <Search />,
        false: undefined,
      }),
      trailingIcon: figma.boolean("Show trailing icon", {
        true: <Search />,
        false: undefined,
      }),
    },
    example: ({ label, placeholder, showLabel, showFieldImportance, showInlineText, leadingIcon, trailingIcon }) => (
      <Textarea
        label={label}
        placeholder={placeholder}
        showLabel={showLabel}
        showFieldImportance={showFieldImportance}
        showInlineText={showInlineText}
        leadingIcon={leadingIcon}
        trailingIcon={trailingIcon}
        helperText="Helping text"
        rows={3}
      />
    ),
  }
)
