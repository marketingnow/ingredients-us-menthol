import { createFileRoute } from "@tanstack/react-router";
import MentholPage from "@/components/MentholPage";

export const Route = createFileRoute("/menthol")({
  head: () => ({
    meta: [
      { title: "Menthol: The Cooling Power Behind TERRAFREEZE" },
      {
        name: "description",
        content:
          "How menthol delivers fast cooling relief for jaw pain, stiff muscles, and everyday aches — backed by FDA monograph and TRPM8 receptor research.",
      },
      {
        property: "og:title",
        content: "Menthol: The Cooling Power Behind TERRAFREEZE",
      },
      {
        property: "og:description",
        content:
          "Fast cooling relief for jaw pain, stiff muscles, and everyday aches — no burn, no mess.",
      },
    ],
    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap",
      },
    ],
  }),
  component: MentholPage,
});