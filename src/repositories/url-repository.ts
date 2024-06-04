import { DynamoDBClient, GetItemCommand, GetItemCommandInput, PutItemCommand, PutItemCommandInput } from "@aws-sdk/client-dynamodb";


const client = new DynamoDBClient({ region: "us-east-1" });

const TableName = "urls"

export const saveUrl = async (url: string, shortUrl: string): Promise<void> => {
  const params: PutItemCommandInput = {
    TableName,
    Item: {
      shortUrl: { S: shortUrl },
      url: { S: url },
    },
  };
  await client.send(new PutItemCommand(params));
};

export const getUrl = async (shortUrl: string): Promise<string | null> => {
  const params: GetItemCommandInput = { TableName, Key: { shortUrl: { S: shortUrl } } };

  const result = await client.send(new GetItemCommand(params));

  if (result.Item === undefined) {
    return null;
  }

  return result.Item.url.S ?? null;
};
