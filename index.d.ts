declare module 'hastebin-gen' {
  export default function hastebin(text: string, options?: HasteBinOptions): Promise<string>;

  export interface HasteBinOptions {
    url?: string;
    extension?: string;
  }
}
