# deno on AWS Lambda

The `mod.ts` offers the types for writing handler functions (see all in `types.d.ts`):

```ts
import { APIGatewayProxyEvent, Context } from "https://deno.land/x/lambda/mod.ts";

export async function handler(event: APIGatewayProxyEvent, context: Context) {
  return {
    statusCode: 200,
    body: `Welcome to deno ${Deno.version.deno} 🦕`
  };
}
```

_See the [homepage](https://github.com/hayd/deno-lambda) for more info._

---

The `bootstrap` script is the entrypoint used by AWS Lambda.

To use the deno custom runtime create a
[lambda layer](https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html)
with [`deno-lambda-layer.zip`](https://github.com/hayd/deno-lambda/releases).
