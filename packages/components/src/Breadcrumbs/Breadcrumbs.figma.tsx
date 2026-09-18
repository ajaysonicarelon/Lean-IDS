// url=https://www.figma.com/design/krtBe5bwqddbHpFjYC5S13/Lean---IDS?node-id=1102-871&m=dev
import figma from "@figma/code-connect"
import { Breadcrumbs } from "./Breadcrumbs"

// Figma property names fetched via: figma connect create (token auto-read from .env)
// Component name in Figma: "Breadcrumbs"
//
// The Figma node has no mapped Figma properties (confirmed via CLI scaffold — props: {}).
// `items` is a code-only array prop with no Figma equivalent.
// `separator` is a code-only enum with no Figma equivalent.
// Both are hardcoded as realistic defaults in the example below.

figma.connect(
  Breadcrumbs,
  "https://www.figma.com/design/krtBe5bwqddbHpFjYC5S13/Lean---IDS?node-id=1102-871&m=dev",
  {
    props: {},
    example: () => (
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Section", href: "/section" },
          { label: "Current Page" },
        ]}
        separator="slash"
      />
    ),
  }
)
