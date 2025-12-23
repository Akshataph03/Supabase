// hello-world.js
export default () => {
  return new Response("Hello from Supabase via file_url!", {
    status: 200,
    headers: { "Content-Type": "text/plain" },
  });
};

