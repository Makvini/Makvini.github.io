/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        14: "repeat(14, minmax(0, 1fr))",
        16: "repeat(14, minmax(0, 1fr))",
        20: "repeat(14, minmax(0, 1fr))",
        24: "repeat(14, minmax(0, 1fr))",
      },
      colors: {
        yellow: {
          main: "#EFE58A",
          ultraLivery:
            "linear-gradient(180deg, #EFE58A 41.84%, #ECE180 100%), #F7FAF7",
          dark: {
            10: "#B8AB35",
          },
        },
        gray: {
          10: "#F0F5F0",
          20: "#E1E8E2",
          30: "#CFD8D1",
          40: "#B6C2BA",
          50: "#97A59D",
          60: "#74857D",
          70: "#52645E",
          80: "#364944",
          100: "#152928",
          110: "#0D1E1F",
        },
        purple: "#8B78FA",
        peach: "#EDA48A",
        pink: "#DF93F9",
        light_purple: "rgba(139, 120, 250, 0.14)",
        light_pink: "rgba(223, 147, 249, 0.14)",
        light_white: "rgba(255, 255, 255, 0.08)",
        "purple-gradient":
          "linear-gradient(90deg, #8B78FA 0%, rgba(139, 120, 250, 0.50) 70.00%, rgba(139, 120, 250, 0.00) 100%)",
        "awesome-bg":
          "linear-gradient(90deg, #8B78FA 0%, rgba(139, 120, 250, 0.50) 70.00%, rgba(139, 120, 250, 0.00) 100%)",
      },
      fontFamily: {
        roboto: "Roboto Serif",
        kalam: "Kalam",
      },
      fontWeight: {
        semibold: "650",
        650: "650",
        550: "550",
        500: "500",
      },
      fontSize: {
        "text-2.5xl": "28px",
      },
      margin: {
        "20px": "20px",
      },
      backgroundImage: {
        eventBannerDesktop:
          'url("./new-assets/backgrounds/desktop/event-banner.png")',
        eventBannerMobile:
          'url("./new-assets/backgrounds/mobile/event-banner.png")',
        pricing: 'url("./new-assets/backgrounds/desktop/pricing.png")',
        mpricing: 'url("./new-assets/backgrounds/desktop/mpricing.png")',
        designedProducts:
          'url("./new-assets/backgrounds/desktop/designed-products.png")',
        mobileDesignedProducts:
          'url("./new-assets/backgrounds/mobile/designed-products.png")',
        designedProductsMembership:
          'url("./new-assets/membership/bg_card_membership.png")',
        mobileDesignedProductsMembership:
          'url("./new-assets/membership/bg_card_membership.png")',
        ultraLivery:
          'url("./new-assets/backgrounds/desktop/ultralivery-bg.png")',
        forWhomFirstDesktop:
          'url("./new-assets/backgrounds/desktop/for_whom-01.png")',
        forWhomSecondDesktop:
          'url("./new-assets/backgrounds/desktop/for_whom-02.png")',
        forWhomThirdDesktop:
          'url("./new-assets/backgrounds/desktop/for_whom-03.png")',
        forWhomFirstMobile:
          'url("./new-assets/backgrounds/mobile/for_whom-01.png")',
        forWhomSecondMobile:
          'url("./new-assets/backgrounds/mobile/for_whom-02.png")',
        forWhomThirdMobile:
          'url("./new-assets/backgrounds/mobile/for_whom-03.png")',
        howItHappenFirstDesktop:
          'url("./new-assets/backgrounds/desktop/process-bg-01.png")',
        howItHappenSecondDesktop:
          'url("./new-assets/backgrounds/desktop/process-bg-02.png")',
        howItHappenThirdDesktop:
          'url("./new-assets/backgrounds/desktop/process-bg-03.png")',
        howItHappenFourthDesktop:
          'url("./new-assets/backgrounds/desktop/process-bg-04.png")',
        howItHappenFirstMobile:
          'url("./new-assets/backgrounds/mobile/process-bg-01.png")',
        howItHappenSecondMobile:
          'url("./new-assets/backgrounds/mobile/process-bg-02.png")',
        howItHappenThirdMobile:
          'url("./new-assets/backgrounds/mobile/process-bg-03.png")',
        howItHappenFourthMobile:
          'url("./new-assets/backgrounds/mobile/process-bg-04.png")',
        awesomeDesktop:
          'url("./new-assets/backgrounds/desktop/ready-to-create.png")',
      },
      borderColor: {
        "light-gray": "rgba(21, 41, 40, 0.08)",
        "dark-gray": "rgba(255, 255, 255, 0.08)",
      },
      animation: {
        "pause-on-hover": "animation-play-state: pause",
        "ready-to-create-cta": "readyToCarousel infinite linear",
      },
    },
  },
  plugins: [],
};
