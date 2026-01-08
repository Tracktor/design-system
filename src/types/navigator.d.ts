interface NavigatorUADataBrand {
  brand: string;
  version: string;
}

interface NavigatorUAData {
  brands: readonly NavigatorUADataBrand[];
  mobile: boolean;
  platform: string;
}

interface Navigator {
  userAgentData?: NavigatorUAData;
}
