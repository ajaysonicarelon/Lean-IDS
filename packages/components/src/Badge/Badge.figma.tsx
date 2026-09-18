// url=https://www.figma.com/design/krtBe5bwqddbHpFjYC5S13/Lean---IDS?m=auto&node-id=1316-32473&t=Ch32CcWzcL729oUe-1
import figma from "@figma/code-connect"
import { Badge } from "./Badge"

// Figma property names fetched via: figma connect create --token ...
// Component name in Figma: "Badges"
//
// Verified properties from Figma:
//   "Label"          → string  → label
//   "Show Lead Icon" → boolean → showLeadingIcon
//   "Show Trail Icon"→ boolean → showTrailingIcon
//   "Lead Icon"      → instance (icon swap, not mapped to a code prop)
//   "Trail Icon"     → instance (icon swap, not mapped to a code prop)

figma.connect(
  Badge,
  "https://www.figma.com/design/krtBe5bwqddbHpFjYC5S13/Lean---IDS?m=auto&node-id=1316-32473&t=Ch32CcWzcL729oUe-1",
  {
    props: {
      label: figma.string("Label"),
      showLeadingIcon: figma.boolean("Show Lead Icon"),
      showTrailingIcon: figma.boolean("Show Trail Icon"),
    },
    example: ({ label, showLeadingIcon, showTrailingIcon }) => (
      <Badge
        label={label}
        showLeadingIcon={showLeadingIcon}
        showTrailingIcon={showTrailingIcon}
      />
    ),
  }
)
