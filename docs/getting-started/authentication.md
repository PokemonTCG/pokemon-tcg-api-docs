---
sidebar_position: 1
---

# Authentication

The Pokémon TCG API uses API keys to authenticate requests. Sign up for an account at the [Pokémon TCG Developer Portal](https://dev.pokemontcg.io) to get your API key for free.

Your API keys carry many privileges, so be sure to keep them secure! Do not share your secret API keys in publicly accessible areas such as GitHub, client-side code, and so forth. If you feel as though your API key has been compromised, you can generate a new key at any time.

Authentication to the API is performed via the `X-Api-Key` header. Provide your API key in the headers of all requests to authenticate to the Pokémon TCG API.

All API requests must be made over HTTPS. Calls made over plain HTTP will redirect to HTTPS automatically. API requests without authentication won't fail, but your rate limits are drastically reduced.
