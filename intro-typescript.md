# TypeScript Documentation
Official site: [https://www.typescriptlang.org/](https://www.typescriptlang.org/)

---

## Install TypeScript Globally
```
npm install -g typescript
```

## What is Typescript
TypeScript is a superset of JavaScript that adds static typing and compiles to plain JavaScript.


## Why use Typescript
- Adds type safety
- Improves tooling and developer experience
- Helps maintain large projects
- Supports modern JavaScript features

## How to Compile a TypeScript File to JavaScript
```bash
tsc filename.ts
```

## How to Add Restriction if Errors Exist
```
{
  "compilerOptions": {
    "strict": true,
    "noEmitOnError": true
  }
}
```

## 01-basics.ts
Demonstrates **type inference**, **explicit typing**, and what happens when assigning mismatched types.

## 02-vanilla-js-types.js
Shows how JavaScript’s `typeof` operator works to check variable types at runtime.

## 03-flexible-types.ts
Illustrates the `any` type, allowing reassignment to different types and showing its flexibility (and risks).

## 04-arrays-objects.ts
Covers arrays with union types, object typing with nested properties, and the `Record` type for flexible objects.

## 05-enum.ts
Introduces enums, specifically string enums, and shows how to assign `enum` values properly.

## 06-alternative-to-enum.ts
Literal types are basically a picky version of data types, it's fixed and won't alternate once stated. 

## 07-custom-type-role.ts
Type aliases creates strict 'blueprint' for users, roles and etc, ensuring that once it's called, it can only process a pre-defined set of valid categories.

## 08-functions.ts
The LOCs of this file demonstrates strict rules of function behavior by defining the return types enforcing specific callback structures for asynchronous-style logic, and integrating functions as typed methods within object blueprints.

## 09-special-types.ts
The script utilizes `Union Types` and `Strict Null Checks` to know what is intentionally empty or unintitialized state. It also covers the `maybe` pattern where you'll see `string | null` where it basically says 'Im an empty placeholder at first but not for long once i receive data'

## 10-form.html and 10-type-narrowing.ts
This script shows how to determine uncertainty of whether an HTML element exist using this `!` and this `?` or `if(...)`

This `!` is a non-null assertion where you tell TS that its there
This `?` is optional chaining, if the element is missing it simply return undefined instead of throwing an error
This `if(...)` or type narrowing is a way of proving whether the element is existing before returning

## 11-optional.ts
-Optional Parameters/Properties(`?`) Adding this just means that a variable is allowed to be undefined
-Falsy(`||`): its commonly used in profiles (e.g., `user.name || "Unknown"`) where you check for falsy values
-Nullish Coalescing(`??`): this is used when a variable is null or undefined, hence making this operator more precise (e.g., when input = "" then input ?? null, this respects that the empty string is still a null)


