---
sidebar_position: 2
sidebar_label: V1 to V2 Migration
---

# V1 to V2 Migration

Version 2 of this API has quite a few differences:

## Usage

- Support for more advanced queries with more operators
- New `q` parameter for performing queries. Individual fields are no longer used as query string parameters. Look at the `/cards` endpoint documentation for more details.
- API Keys now accepted to get access to better rate limits (and the potential to be changed on a per user basis). Provide API keys via the `X-Api-Key` header. Signup for an API Key at [https://dev.pokemontcg.io](https://dev.pokemontcg.io). If you encounter issues, feel free to contact me at andrew@pokemontcg.io or on Discord.

## Card JSON Response Changes

- `subtype` is now `subtypes` (array of strings)
- `ability` is now `abilities` to support cards with multiple abilities
- `nationalPokedexNumber` is now `nationalPokedexNumbers` to support cards that feature more than one pokemon on them (like TAG TEAM)
- `imageUrl` and `imageUrlHiRes` have been replaced by an `images` section which currently has `small` and `large` fields on it. This could potentially hold other art like unlimited versions, etc.
- `legalities` has been added to each card. Every card will now specify what format it is legal or banned in. If the legality does not exist on a given card, that means it is simply not a legal card for that format. {"standard": "Banned", "expanded": "Legal", "unlimited": "Legal"}
- set info is now embedded in a card, instead of having a `setCode` and a `set` (name) field.
- Pagination info is now included in the body of response versus the headers. You can access the `page`, `pageSize`, `count` and `totalCount` from here.
- ALL card/set response bodies will be inside a `data` element in the response body, versus `sets` or `cards`. It will now always be `data` (same with other endpoints like `/subtypes`).
- `text` is now `rules`. In a similar manner to `text`, `rules` contains any rule information on a given card.
- `tcgplayer` contains pricing information from TCGPlayer, and the URL to the page to purchase the card.
- `legalities` is a new field specifying the legality of a card in Standard, Expanded, Or legal. If a legality does not exist on a given card, that means it is simply not a legal card for that format (different from banned.) If Legal or Banned, it will be specified.
- `flavorText` contains the flavor text for a card.
- `evolvesTo` is an array of strings for which pokemon the card evolves to

## Set JSON Response Changes

- `legalities` has replaced all legality info, similar to the `card` response. `standardLegal` and `expandedLegal` fields have been removed.
- `printedTotal` is the total shown on a card. This replaces `totalCards`.
- `total` is the printed total PLUS the additional secret rares or any other card actually part of this set
- `images` is a new field that contains a `symbol` and `logo`. This replaces the `symbolUrl` and `logoUrl` fields.

## General Updates

ALL endpoints that return data all have their data in a `data` field, versus having a `cards` or `sets` or `subtypes` field.

## Data Changes

BREAKING - Aquapolis and Skyridge H1-H32 cards have new IDs. The new IDs follow the expected pattern of {set id}-{card number}. Examples include ecard2-H1, ecard3-H32, etc.

Full rebuild - Every single set has been rebuilt with tons of updates ranging from typos, to missing attacks, to simply incorrect data.
