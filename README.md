# Misty ![GitHub package.json dynamic](https://img.shields.io/github/package-json/version/oaoong/misty)

Optional component rendering provider for [React].

See a [storybook] of the components.

[react]: https://facebook.github.io/react/
[storybook]: https://65a6952e03cb8a330c216a33-hvpphnoqji.chromatic.com/?path=/docs/ui-misty--docs

- [Quick Start](#quick-start)
  - [With webpack or create-react-app](#with-webpack-or-create-react-app)
- [Usage](#usage)
  - [Whether to expose body content to the DOM](#whether-to-expose-body-content-to-the-dom)
  - [Sizing](#sizing)
  - [Control open state](#control-open-state)
- [API reference](#api-reference)
  - [Exports](#exports)
  - [Props](#props)
  - [Methods](#methods)
- [Building and testing](#building-and-testing)
- [Browser support](#browser-support)
- [Changelog](#changelog)
- [License](#license)

---

💯 **Misty**

Misty provides the ability to temporarily cover body content to users.
Provides simple options for the following cases.

1. You do not want to provide content because certain conditions (such as membership) are not met.
2. When important guidance requiring user confirmation is required before accessing the main text.

---

## Quick Start

### With webpack or create-react-app

Make sure you have `react`.

```sh
npm install @oaoong/misty --save
```

```jsx
import React from 'react'
import { Misty, MistyBody, MistyClose, MistyDescription } from '@oaoong/misty'

function MyComponent() {
  return (
    <Misty contents={<div>contents for certified users</div>}>
      <MistyBody>
        <MistyClose />
        <MistyDescription>
          <h1>Hello</h1>
          <p>You need to be a certified user to see the contents.</p>
        </MistyDescription>
      </MistyBody>
    </Misty>
  )
}
```

## Usage

### Whether to expose body content to the DOM

Adjust the DOM exposure of the body content through the 'preload' prop (link).

1. If the body content needs to be exposed only to certain authenticated users.
   `preload = false` (default)

```jsx
<Misty contents={<div>contents for certified users</div>} preLoad={false}>
  ...
</Misty>
```

React elements delivered to the contents are not exposed to the DOM.

2. If you need a warning or an announcement message before checking the text content.
   `preload = true`

```jsx
<Misty contents={<div>contents for certified users</div>} preLoad={true}>
  ...
</Misty>
```

React elements delivered to the contents appear in the DOM as 'display: none'.

### Sizing

You can manually adjust the Misty size by entering values in the 'width' and 'height' profiles.
defulat value is both `100%`.

```jsx
<Misty contents={<div>contents for certified users</div>} width="500px" height="500px">
  ...
</Misty>
```

### Control open state

1. Set initial open state
   You can set the initial open state of Misty by entering a value in the 'isOpen' prop.
   default value is `true`.

```jsx
// contents are initially visible.
<Misty contents={<div>contents for certified users</div>} isOpen={false}>
  ...
</Misty>
```

2. Handle open state externally
   You can control the open state of Misty by using the 'useMistyProcess' hook.
   detail is [here](#methods).

```jsx
import React from 'react'
import { Misty, MistyBody, MistyClose, MistyDescription, useMistyProcess } from '@oaoong/misty'

function MyComponent() {
  const { isOpen, close } = useMistyProcess()

  return (
    <>
      <button type="button" onClick={close}>
        close Misty / now: {isOpen ? 'open' : 'close'}
      </button>
      <Misty contents={<div>contents for certified users</div>}>
        <MistyBody>
          <MistyClose />
          <MistyDescription>
            <h1>Hello</h1>
            <p>You need to be a certified user to see the contents.</p>
          </MistyDescription>
        </MistyBody>
      </Misty>
    </>
  )
}
```

## API reference

### Exports

```jsx
// ES6
import { Misty, MistyBody, MistyClose, MistyDescription, useMistyProcess } from '@oaoong/misty'
```

### Props

#### Misty

: The main Misty component. It is a wrapper around the Misty- component.

`children`
: ReactNode to be passed as Misty content.

- type: `React.ReactNode`

`contents`
: ReactNode to be passed as body content.

- type: `React.ReactNode`

`style`
: Style object to be passed to Misty.

- type: `React.CSSProperties`

`preLoad`
: Whether to expose the body content to the DOM in advance.

- default: `false`
- type: `boolean`

`isOpen`
: Initial open state of Misty.

- default: `true`
- type: `boolean`

`width` and `height`
: Size of Misty.

- default: `100%`
- type: `string`

#### MistyBody

: Misty body component. You can use it to wrap MistyClose and MistyDescription. Mainly used to adjust the layout and style of Misty's open state.

`children`
: ReactNode to be passed as Misty content.

- type: `React.ReactNode`

`style`
: Style object to be passed to MistyBody.

- type: `React.CSSProperties`

#### MistyClose

: Misty close button component. It is used to close Misty.

`style`
: Style object to be passed to Misty.

- type: `React.CSSProperties`

`position`
: Position of the close button.

- default: `right`
- type: 'left' | 'right'

#### MistyDescription

: Misty description component. It is used to display a message or warning to the user.

`children`
: ReactNode to be passed as description content.

- type: `React.ReactNode`

`style`
: Style object to be passed to MistyDescription.

- type: `React.CSSProperties`

### Methods

You can use `useMistyProcess` to control the open state of Misty.

`close()`
: Close Misty.

`open()`
: Open Misty.

`toggle()`
: Toggle the open state of Misty.

`isOpen`
: Current open state of Misty.

- type: `boolean`

<details>
<summary>Example</summary>

```jsx
import { Misty, MistyBody, MistyClose, MistyDescription, useMistyProcess } from '@oaoong/misty'

function App() {
  const { isOpen, close, open, toggle } = useMistyProcess();

  return (
    <>
      <div>
        { isOpen ? 'open' : 'close' }
      </div>
      <button type="button" onClick={close}>
        close Misty
      </button>
      <button type="button" onClick={open}>
        open Misty
      </button>
      <button type="button" onClick={toggle}>
        toggle Misty
      </button>
      <Misty
        contents={
          <div>
            contents for certified users
          </div>
        }
      >
        <MistyBody>
          <MistyClose />
          <MistyDescription>
            <p>
              You need to be a certified user to see the contents.
            </p>
          </MistyDescription>
        </MistyBody>
      </Misty>
    </div>
  );
}
```

</details>

## Building and testing

You can build libs, types and bundles:

```sh
npm build
```

You can also run the automated test suite:

```sh
npm test

# or, to run the tests in a browser(e2e)
npm cypress
```

## Browser support

The Misty distributable itself is ES5-compatible. Misty was built in the versions react 18.2.0, typecript 5.3.3, and rollup 4.9.4 and tested primarily in the Chrome version 122.0.6261.112 (official build) (64 bits).

## Changelog

[Full changelog](CHANGELOG.md)

## License

The MIT License (MIT)

Copyright (c) 2024, oaoong <pizzachicken@kakao.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
