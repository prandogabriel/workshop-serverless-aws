import type { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { saveUrl } from "src/repositories/url-repository";

export const main: APIGatewayProxyHandlerV2 = async (event) => {
  const body = JSON.parse(event.body);
  const url = body.url;

  if (!url) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: `url is required`
      })
    }
  }

  const shortId = Math.random().toString(36).substring(7);

  await saveUrl(url, shortId);

  return {
    statusCode: 200,
    body: JSON.stringify({
      shortId: shortId,
      retrieveUrl: `${process.env.RETRIEVE_URL}/${shortId}`
    })
  }
};