import type { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { getUrl } from "src/repositories/url-repository";

export const main: APIGatewayProxyHandlerV2 = async (event) => {
  const shortId = event.pathParameters?.shortId;

  if (!shortId) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: `shortId is required`
      })
    }
  }

  const url = await getUrl(shortId);

  if (!url) {
    return {
      statusCode: 404,
      body: JSON.stringify({
        message: `url not found`
      })
    }
  }

  return {
    statusCode: 301,
    headers: {
      Location: url
    }
  }
};