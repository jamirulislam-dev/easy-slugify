import { describe, it, expect } from 'vitest';
import { slugify } from '../src/index';

describe('slugify', () => {
  it('should throw a TypeError if the input is not a string', () => {
    // @ts-expect-error - testing invalid runtime input
    expect(() => slugify(null)).toThrow(TypeError);
    // @ts-expect-error - testing invalid runtime input
    expect(() => slugify(undefined)).toThrow(TypeError);
    // @ts-expect-error - testing invalid runtime input
    expect(() => slugify(123)).toThrow(TypeError);
    // @ts-expect-error - testing invalid runtime input
    expect(() => slugify({})).toThrow(TypeError);
  });

  it('should convert all uppercase letters to lowercase', () => {
    expect(slugify('HELLO')).toBe('hello');
    expect(slugify('MixedCase')).toBe('mixedcase');
    expect(slugify('SlugifyMeNow')).toBe('slugifymenow');
  });

  it('should trim whitespace at the beginning and end of the string', () => {
    expect(slugify('  hello  ')).toBe('hello');
    expect(slugify('\tworld\n')).toBe('world');
    expect(slugify('   trimmed string   ')).toBe('trimmed-string');
  });

  it('should remove special characters/punctuation (like !, ?, ., ,, @)', () => {
    expect(slugify('hello! world?')).toBe('hello-world');
    expect(slugify('hello.world,')).toBe('helloworld');
    expect(slugify('user@domain.com')).toBe('userdomaincom');
    expect(slugify('what is this? #hashtag')).toBe('what-is-this-hashtag');
    expect(slugify('special&*()_+{}|:"<>?characters')).toBe('specialcharacters');
  });

  it('should replace spaces between words with a single hyphen', () => {
    expect(slugify('hello world')).toBe('hello-world');
    expect(slugify('a b c d')).toBe('a-b-c-d');
  });

  it('should handle duplicate spaces and output only one hyphen', () => {
    expect(slugify('hello  world')).toBe('hello-world');
    expect(slugify('hello   multiple    spaces')).toBe('hello-multiple-spaces');
    expect(slugify('  leading  and  trailing  spaces  ')).toBe('leading-and-trailing-spaces');
  });

  it('should clean up duplicate and leading/trailing hyphens', () => {
    expect(slugify('-hello-world-')).toBe('hello-world');
    expect(slugify('--multiple---hyphens--')).toBe('multiple-hyphens');
    expect(slugify(',hello, world!')).toBe('hello-world');
  });

  it('should handle empty strings and strings containing only spaces or punctuation', () => {
    expect(slugify('')).toBe('');
    expect(slugify('   ')).toBe('');
    expect(slugify('!?,.@')).toBe('');
  });

  it('should handle complex mixed input cases correctly', () => {
    expect(slugify('  @Hello,   World! This is a TEST?  ')).toBe('hello-world-this-is-a-test');
  });
});
