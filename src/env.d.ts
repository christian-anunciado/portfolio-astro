/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PAYLOAD_URL: string;
  readonly PAYLOAD_SECRET: string;
  readonly UPLOADTHING_STORAGE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
