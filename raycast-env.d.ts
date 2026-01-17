/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** API Endpoint - Your Rote backend API URL (e.g., https://rote-backend.example.com) */
  "apiEndpoint": string,
  /** Web URL - Your Rote frontend URL for opening notes in browser (e.g., https://rote.example.com) */
  "webUrl"?: string,
  /** Username - Your Rote username or email */
  "username": string,
  /** Password - Your Rote password */
  "password": string,
  /** Quick Add Default Tag - Default tag for Quick Add notes (e.g., excerpt, clip) */
  "quickAddTag"?: string
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `search-notes` command */
  export type SearchNotes = ExtensionPreferences & {}
  /** Preferences accessible in the `create-note` command */
  export type CreateNote = ExtensionPreferences & {}
  /** Preferences accessible in the `quick-add` command */
  export type QuickAdd = ExtensionPreferences & {}
  /** Preferences accessible in the `list-notes` command */
  export type ListNotes = ExtensionPreferences & {}
  /** Preferences accessible in the `random-note` command */
  export type RandomNote = ExtensionPreferences & {}
  /** Preferences accessible in the `config-quick-add` command */
  export type ConfigQuickAdd = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `search-notes` command */
  export type SearchNotes = {}
  /** Arguments passed to the `create-note` command */
  export type CreateNote = {}
  /** Arguments passed to the `quick-add` command */
  export type QuickAdd = {}
  /** Arguments passed to the `list-notes` command */
  export type ListNotes = {}
  /** Arguments passed to the `random-note` command */
  export type RandomNote = {}
  /** Arguments passed to the `config-quick-add` command */
  export type ConfigQuickAdd = {}
}

