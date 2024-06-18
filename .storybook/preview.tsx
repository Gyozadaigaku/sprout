import type { Preview } from "@storybook/react";
import "../src/styles/globals.css";
import {Toaster} from "../src/components/ui/toaster"

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        method: 'alphabetical',
        order: ["Introduction","Examples","Shadcn","Colors","Typography"],
      },
    }
  },
}

export default preview;
