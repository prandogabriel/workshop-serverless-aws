import type { APIGatewayProxyHandlerV2 } from "aws-lambda";

export const main: APIGatewayProxyHandlerV2 = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `received: ${event.pathParameters?.shortId}`,
    })
  }
};