export const brandConfig = {
  brand: {
    name: "Reputraq",
    tagline: "Your Reputation Matters"
  },
  colorPalette: {
    primary: {
      main: "#0093DD",
      light: "#4DB8E8",
      dark: "#006BA3",
      contrast: "#FFFFFF"
    },
    secondary: {
      main: "#004163",
      light: "#2D5A7A",
      dark: "#002A42",
      contrast: "#FFFFFF"
    },
    brandGradient: {
      start: "#0093DD",
      end: "#004163"
    },
    colors: {
      vibrantSky: {
        hex: "#0093DD",
        rgb: [0, 147, 221]
      },
      oceanDepth: {
        hex: "#004163",
        rgb: [0, 65, 99]
      },
      charcoalCore: {
        hex: "#101010",
        rgb: [16, 16, 16]
      },
      pureWhite: {
        hex: "#FFFFFF",
        rgb: [255, 255, 255]
      }
    }
  },
  typography: {
    primary: {
      font: "Helvetica",
      styles: ["Roman", "Bold"],
      usage: "Headlines, wordmark, key brand statements"
    },
    secondary: {
      font: "Montserrat",
      styles: ["Light", "Regular", "Medium", "Semi Bold", "Bold"],
      usage: "Subheadings, body text, digital content"
    }
  },
  brandVoice: {
    tone: ["Modern", "Trustworthy", "Approachable"],
    principles: [
      "Clarity in communication",
      "Professional but friendly",
      "Focus on reputation and trust"
    ]
  },
  uiGuidelines: {
    backgroundGradient: {
      direction: "top-to-bottom",
      colors: ["#FFFFFF", "#F8FAFC"]
    },
    textColorPrimary: "#101010",
    textColorSecondary: "#004163",
    linkColor: "#004163",
    button: {
      primary: {
        background: "#101010",
        text: "#FFFFFF"
      },
      secondary: {
        background: "#004163",
        text: "#FFFFFF"
      }
    }
  }
} as const;

export type BrandConfig = typeof brandConfig;
