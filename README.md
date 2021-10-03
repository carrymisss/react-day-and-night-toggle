# react-day-and-night-toggle
🌞Day & Night🌛 (light/dark) theme switch with pretty cool animation for React.
> Made a React component from [Da_Woodhead codepen](https://codepen.io/Da_Woodhead/pen/VdaBwq "Da_Woodhead codepen").

<p align="center">
  <img width="350px" style="border-radius: 10px; box-shadow: 0 0 20px 1px rgba(0,0,0,.05)" src="https://github.com/carrymisss/react-day-and-night-toggle/blob/main/assets/demonstration.gif?raw=true">
</p>

## Live demo
[A demo is worth a thousand words](https://react-day-and-night-toggle.vercel.app/)

## Installation
Using **npm**:

```bash
npm install react-day-and-night-toggle
```
Using **yarn**:

```bash
yarn add react-day-and-night-toggle
```

## Usage
```jsx
import React, { useState } from 'react'
import DayNightToggle from 'react-day-and-night-toggle'

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    <DayNightToggle
      onChange={() => setIsDarkMode(!isDarkMode)}
      checked={isDarkMode}
    />
  )
}
```

## Props 
| Prop | Type  | Default  | Required | Description |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| onChange | `function` |  | yes | Callback for when the switch is checked, use this to set your state. |
| checked | `boolean` |  | yes | The state of the switch is passed here. |
| size | `number` | `32` | no | The size of the button that corresponds to its height (it is recommended to use an even integer number). The passed number will be automatically rounded down to the lowest integer. |
| startInactive | `boolean` | `false` | no | The button is disabled for 2 seconds after rendering (this can come in handy when some theme is enabled and your site is loading styles, and you don't want the user to change the theme during this). |
| animationInactive | `boolean` | `true` | no | The button is disabled after being pressed during animation (that's 2 seconds). |
| shadows | `boolean` | `true` | no | A shadow, dark at "day" mode and light at "night" mode, around the button. |
| className | `string` | `undefined` | no | Your own classnames. |

## License
MIT © [carrymisss](https://github.com/carrymisss)
