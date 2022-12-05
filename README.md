# React Utility Components

Reusable react components to maximize your coding efficiency.

## Install

```shell
npm i @melmahdi/reactuc
```

## Components

- If
- Image
- Iterate
- Table

## Usage

### If

Conditional rendering component

```ts
import { If } from "@melmahdi/reactuc";

<If condition={condition: 1 | 0} otherwise={otherwise: ReactNode}>
  ...
</If>
```

### Image

Component to handle broken images

```ts
import { Image } from "@melmahdi/reactuc";

<Image fallback={...} src="..." alt="..." />
```

### Iterate

Component to handle iterations.

Display list of paragraph (with html tag):

```ts
import { Iterate } from '@melmahdi/reactuc';

<Iterate data={['...', '...', '...']} element="p" />;
```

Display list of objects (with component):

```ts
import { Iterate } from "@melmahdi/reactuc";

const cards = [
  { id: '75ebc192', title: 'Lira Fresh Optimization' },
  ...
];

<Iterate data={users} element={UserComponent} />;
```

### Table

Table component

```ts
import { Table } from "@melmahdi/reactuc";

const tableData = {
  head: ['First', <button type="button">Action</button>],
  body: [
    ['One', 'Two'],
    ...,
  ]
};

<Table {...data} />
```
