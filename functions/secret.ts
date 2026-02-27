export const onRequest = async (context: any) => {
  return new Response(JSON.stringify(context.env.SECRET), {
    headers: { "Content-Type": "application/json" },
  });
};