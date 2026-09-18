// url=https://www.figma.com/design/krtBe5bwqddbHpFjYC5S13/Lean---IDS?node-id=1336-1936&m=dev
import figma from "@figma/code-connect"
import { CheckCircle, Close } from "@mui/icons-material"
import { Chip } from "./Chip"

// Figma property names fetched via: figma connect create (token auto-read from .env)
// Component name in Figma: "Chips"
//
// Verified properties from Figma → code prop mapping:
//   "Text"           → string  → label
//   "Lead Icon"      → boolean → leadingIcon (mapped: true → <CheckCircle />, false → undefined)
//   "Trail Icon"     → boolean → trailingIcon (mapped: true → <Close />, false → undefined)
//   "Label"          → boolean → skip (label is always required in code)
//   "Lead Icon (s)"  → instance swap → skip props, <CheckCircle /> hardcoded in example
//   "Trail Icon (s)" → instance swap → skip props, <Close /> hardcoded in example

figma.connect(
  Chip,
  "https://www.figma.com/design/krtBe5bwqddbHpFjYC5S13/Lean---IDS?node-id=1336-1936&m=dev",
  {
    props: {
      label: figma.string("Text"),
      leadingIcon: figma.boolean("Lead Icon", {
        true: <CheckCircle />,
        false: undefined,
      }),
      trailingIcon: figma.boolean("Trail Icon", {
        true: <Close />,
        false: undefined,
      }),
    },
    example: ({ label, leadingIcon, trailingIcon }) => (
      <Chip
        label={label}
        leadingIcon={leadingIcon}
        trailingIcon={trailingIcon}
      />
    ),
  }
)
