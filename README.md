- Compare between the three types of quantifiers in regular expressions (?, +, \*).
  - `? is used as to match the previous character to be 0 or 1`
  - `+ is used to match the previous character to be 1 or more`
  - `* is used to match 0 or more characters`

- What are the characters that can be represented by \w and \b in a regular expression?
  `any letter (A-Z,a-z,0-9) can be represented by \w`
  `\b assert position at a word boundary`
- Compare between the Map and WeakMap according to the way they save keys and values.
    - Maps :
      - `key type can be any (primative or object)`
      - `can cause memory leaks`
      - `prevents Garbage collection`
    - WeakMaps:
      - ` key type can only be objects`
      - `helps prevents memory leaks`
      -  `doesn't prevent garbage collection`
- Write an example of a string which matches the following pattern:
  `const regex = /^(0[1-9]|[12]\d|3[01])[-\/](0[1-9]|1[0-2])[-\/]\d{4}$/;`
  ** solution **
  02-10-2025
  and write another string that violates the following pattern:
  `const regex = /^(?!.*\bieee\b).+$/i;`
** solution **
  ieee welcome here
