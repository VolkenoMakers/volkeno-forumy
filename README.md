# volkeno-forumy

> Made with create-react-library

Volkeno Forumy gives you the possibility to integrate a discussion forum, while making it easier for you to adapt to each of your React JS projects.

##Descriptions

the forum has three levels of possible addition:

* the first concerns the addition of the subject you must add a title, an initial content, an id, a slug, a creation date, a first name and a last name.

* For the second level, you can add comments to a subject. You need the following fields: comment content, id, slug, creation date, first name and last name.

* And for the last level the user can reply to a comment with the same fields of level two

To take full advantage of the features of the forum the user must provide a structure similar to that of the image below

```
{
  initialTitle: string,
  initialContent: string,
  id: string | number,
  slug: string | string,
  created_at: string,
  author: {
      firstName: string,
      lastName:string,
      avatar: string,
  },
  first_level_response: [
    content: string,
    id:  string | number,
    slug:  string | number,
    created_at:  string,
    user: {
        firstName:  string,
        lastName:  string,
        avatar: string,
    },
    second_level_response: [
      content: string,
      id: string | number,
      slug: string | number,
      created_at: string,
      user: {
          firstName: string,
          lastName: string,
          avatar: string,
      }
    ]
  ]
}
```


![alt text](https://github.com/VolkenoMakers/volkeno-forumy/blob/add-response/src/components/img/dataForumStructure.png)


[![NPM](https://img.shields.io/npm/v/volkeno-forumy.svg)](https://www.npmjs.com/package/volkeno-forumy) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save volkeno-forumy
```

## Usage

```tsx
import React, { Component } from 'react'

import MyComponent from 'volkeno-forumy'
import 'volkeno-forumy/dist/index.css'

class Example extends Component {
  render() {
    return <MyComponent />
  }
}
```

## License

MIT © [khalifa-fall](https://github.com/khalifa-fall)
