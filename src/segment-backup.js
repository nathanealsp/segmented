// Learn more about source functions API at
// https://segment.com/docs/connections/sources/source-functions

/**
 * Handle incoming HTTP request
 *
 * @param  {FunctionRequest} request
 * @param  {FunctionSettings} settings
 */
async function onRequest(request, settings) {
  console.log(request);
  const body = request.json();
  console.log(body);

  const deviceType = body.properties['device'];
  if (deviceType && deviceType === 'a') {
    body.properties['device'] = 'm';
  }

  // See https://segment.com/docs/connections/spec/track/
  Segment.track({
    event: request.event,
    userId: request.userId,
    properties: properties,
  });
}
