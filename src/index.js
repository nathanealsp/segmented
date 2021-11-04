const useragent = require('useragent');
const uaparser = require('ua-parser-js');

export default function extractDeviceTypeFromUA(ua, app_id) {
  if (app_id && mobileAppIDs.includes(app_id)) {
    return 'mobile';
  }

  let parsedAgent = useragent.parse(ua);
  if (
    parsedAgent &&
    parsedAgent.device &&
    parsedAgent.device.family === 'Spider'
  ) {
    return 'bot';
  }

  const parsedUAWithDeviceType = uaparser(ua);
  let device = 'desktop';

  if (parsedUAWithDeviceType && parsedUAWithDeviceType.device) {
    if (parsedUAWithDeviceType.device.type === 'mobile') device = 'mobile_web';
    if (parsedUAWithDeviceType.device.type === 'tablet') device = 'tablet';
  }

  return device;
}
