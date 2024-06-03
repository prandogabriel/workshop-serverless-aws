
export const main = async (event) => {
  const body = JSON.parse(event.body);

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello ${body.name}, welcome to the exciting Serverless world!`,
      event,
    })
  }
};