import { Context, APIGatewayProxyEvent, APIGatewayProxyResult } from "https://deno.land/x/lambda/mod.ts";

export async function handler(event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> {
  return {
    statusCode: 200,
    body: `Welcome to deno ${Deno.version.deno} 🦕`
  };
}
