# Deno fullstack app example

This is a fullstack app example using Deno, Hono, and Solid.

## Workspaces

This project uses workspaces to allow RPC type inference between frontend and
backend. Backend exports types from `main.ts` which are then imported in
`frontend/src/api.ts`. `hono/client` is used to make RPC calls and provides
end-to-end type safety.

## Run the app

Services are intended to be run in separate processes.

```bash
deno task dev:fe
deno task dev:be
```

## Testing

```bash
deno task test:be
```

## Further improvements

Drizzle and zod may be used to define database schemas and models. Such setup
could provide a single source of truth for API schemas, database schemas, and
validation. Frontend may just reuse those declarations to ensure type safety.
