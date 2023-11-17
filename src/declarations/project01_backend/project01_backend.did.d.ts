import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface _SERVICE {
  'calculateBMI' : ActorMethod<[number, number], [number, string]>,
}
