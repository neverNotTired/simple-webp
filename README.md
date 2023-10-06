# simple-webp

A simple webp converter for node.js.  
I'm sure there are thousands like it but I scripted this specifically to convert local file images.

**Note:** This only works with directories not sigle files.

## Pre-requisites
Node.js 14+

## Installation

```bash
npm install -g simple-webp
```

## Usage

```bash
simplewebp <input-directory ...> <output-directory ...> <quality>
```

## Example

```bash
simplewebp ./images ./images/webp 80
```