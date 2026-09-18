// url=https://www.figma.com/design/krtBe5bwqddbHpFjYC5S13/Lean---IDS?node-id=1317-871&m=dev
import figma from "@figma/code-connect"
import { HelpingText } from "./HelpingText"

// Figma property names fetched via: figma connect create (token auto-read from .env)
// Component name in Figma: "Helping Text"
//
// Verified properties from Figma → code prop mapping:
//   "Inline helping text"  → string  → text
//   "Show leading icon"    → boolean → showIcon

figma.connect(
  HelpingText,
  "https://www.figma.com/design/krtBe5bwqddbHpFjYC5S13/Lean---IDS?node-id=1317-871&m=dev",
  {
    props: {
      text: figma.string("Inline helping text"),
      showIcon: figma.boolean("Show leading icon"),
    },
    example: ({ text, showIcon }) => (
      <HelpingText
        text={text}
        showIcon={showIcon}
        state="default"
        size="default"
      />
    ),
  }
)
