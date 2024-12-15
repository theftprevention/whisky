export interface Whisky {
  readonly name: string;
  readonly proof: number;
  readonly mix?: boolean;
  readonly age?: number;
  readonly region?: string;
}
