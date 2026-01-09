export enum Browser {
  Chrome = "Chrome",
  Firefox = "Firefox",
  Safari = "Safari",
  Edge = "Edge",
  Opera = "Opera",
  Unknown = "Unknown",
}

const getBrowser = (): Browser => {
  if (typeof navigator === "undefined") {
    return Browser.Unknown;
  }

  // Fallback for browsers that do not support User-Agent Client Hints (Safari, Firefox)
  // Parsing userAgent is considered legacy, but still required for compatibility
  const userAgent = navigator.userAgent.toLowerCase();

  if (userAgent.includes("firefox") || userAgent.includes("fxios")) {
    return Browser.Firefox;
  }

  if (userAgent.includes("safari") && !userAgent.includes("chrome")) {
    return Browser.Safari;
  }

  // Modern approach: User-Agent Client Hints (supported by Chromium-based browsers)
  // Provides structured and more reliable browser identification than userAgent parsing
  const brands = navigator.userAgentData?.brands;

  if (brands) {
    const brandNames = brands.map((b) => b.brand.toLowerCase());

    if (brandNames.some((name) => name.includes("edge"))) {
      return Browser.Edge;
    }

    if (brandNames.some((name) => name.includes("opera"))) {
      return Browser.Opera;
    }

    if (brandNames.some((name) => name.includes("chrome"))) {
      return Browser.Chrome;
    }
  }

  if (userAgent.includes("edg")) {
    return Browser.Edge;
  }

  if (userAgent.includes("opr") || userAgent.includes("opera")) {
    return Browser.Opera;
  }

  if (userAgent.includes("chrome") || userAgent.includes("crios")) {
    return Browser.Chrome;
  }

  return Browser.Unknown;
};

export default getBrowser;
