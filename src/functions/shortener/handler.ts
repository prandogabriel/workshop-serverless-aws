import type { APIGatewayProxyHandlerV2 } from "aws-lambda";

export const main: APIGatewayProxyHandlerV2 = async (event) => {
  const body = JSON.parse(event.body);

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `received: ${body.url}`
    })
  }
};