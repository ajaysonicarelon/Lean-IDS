// url=https://www.figma.com/design/krtBe5bwqddbHpFjYC5S13/Lean---IDS?node-id=5238-12828&m=dev
import figma from "@figma/code-connect"
import { CheckCircle } from "@mui/icons-material"
import { Accordion } from "./Accordion"

// Figma property names fetched via: figma connect create --token ...
// Component name in Figma: "Accordion"
//
// Verified properties from Figma → code prop mapping:
//   "Show Lead Icon"   → boolean → showLeadIcon
//   "Show Footer"      → boolean → showFooter
//   "Show Description" → boolean → showDescription
//   "Show Footer Line" → boolean → showFooterLine
//   "Show Buttons"     → boolean → showButtons
//   "Show Heading"     → boolean (heading is always a string in code; skipped)
//   "Icon"             → instance swap → use MUI icon as default leadIcon (per DS rules)

figma.connect(
  Accordion,
  "https://www.figma.com/design/krtBe5bwqddbHpFjYC5S13/Lean---IDS?node-id=5238-12828&m=dev",
  {
    props: {
      showLeadIcon: figma.boolean("Show Lead Icon"),
      showDescription: figma.boolean("Show Description"),
      showFooter: figma.boolean("Show Footer"),
      showFooterLine: figma.boolean("Show Footer Line"),
      showButtons: figma.boolean("Show Buttons"),
    },
    example: ({ showLeadIcon, showDescription, showFooter, showFooterLine, showButtons }) => (
      <Accordion
        heading="Accordion Heading"
        description="Put a short description related to the accordion heading"
        leadIcon={<CheckCircle />}
        showLeadIcon={showLeadIcon}
        showDescription={showDescription}
        showFooter={showFooter}
        showFooterLine={showFooterLine}
        showButtons={showButtons}
        footerText="Footer one liner"
      />
    ),
  }
)
