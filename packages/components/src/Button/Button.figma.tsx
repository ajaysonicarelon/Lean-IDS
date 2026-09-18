// url=https://www.figma.com/design/krtBe5bwqddbHpFjYC5S13/Lean---IDS?node-id=1318-1597&m=dev
import figma from "@figma/code-connect"
import { ArrowForward } from "@mui/icons-material"
import { Button } from "./Button"

// Figma property names fetched via: figma connect create (token auto-read from .env)
// Component name in Figma: "Buttons"
//
// Verified properties from Figma → code prop mapping:
//   "Label Text"       → string  → children
//   "Label"            → boolean → showLabel
//   "Show Lead Icon"   → boolean → leadingIcon (mapped: true=<ArrowForward />, false=undefined)
//   "Show Trail Icon"  → boolean → trailingIcon (mapped: true=<ArrowForward />, false=undefined)
//   "Lead Icon"        → instance swap → skipped (no code equivalent)
//   "Trail Icon"       → instance swap → skipped (no code equivalent)
//   "Lead Icon 2"      → instance swap → skipped (no code equivalent)
//   "Trail Icon 2"     → instance swap → skipped (no code equivalent)

figma.connect(
  Button,
  "https://www.figma.com/design/krtBe5bwqddbHpFjYC5S13/Lean---IDS?node-id=1318-1597&m=dev",
  {
    props: {
      children: figma.string("Label Text"),
      showLabel: figma.boolean("Label"),
      leadingIcon: figma.boolean("Show Lead Icon", {
        true: <ArrowForward />,
        false: undefined,
      }),
      trailingIcon: figma.boolean("Show Trail Icon", {
        true: <ArrowForward />,
        false: undefined,
      }),
    },
    example: ({ children, showLabel, leadingIcon, trailingIcon }) => (
      <Button
        variant="primary"
        size="medium"
        buttonType="default"
        showLabel={showLabel}
        leadingIcon={leadingIcon}
        trailingIcon={trailingIcon}
      >
        {children}
      </Button>
    ),
  }
)
