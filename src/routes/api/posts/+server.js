
export const GET = () => {

  const json = {
    hello: "world"
  }

  return new Response(JSON.stringify(json))
}
