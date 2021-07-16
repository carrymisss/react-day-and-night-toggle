# react-day-and-night-toggler
🌞Day & Night🌛 (light/dark) theme switch with pretty cool animation for React.
> Made a React component from [Da_Woodhead codepen](https://codepen.io/Da_Woodhead/pen/VdaBwq "Da_Woodhead codepen").

## Installation
Using **npm**:

```bash
npm install react-day-and-night-toggler
```

## Usage
```jsx
import React, { useState } from 'react'
import DayNightToggler from 'react-day-and-night-toggler'

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState()

  return (
    <DayNightToggler
	  onChange={() => setIsDarkMode(!isDarkMode)}
	  checked={isDarkMode}
	/>
  )
}
```

## Props 
| Prop | Type  | Default  | Required | Description |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| onChange | `function`  |  | yes | Callback for when the switch is checked, use this to set your state. |
| checked | `boolean` |  | yes | The state of the switch is passed here. |
| size | `number` | `32` | no | The size of the button that corresponds to its height (it is recommended to use an even integer number). The passed number will be automatically rounded down to the lowest integer. |
| startInactive | `boolean` | `false` | no | The button is disabled for 2 seconds after rendering (this can come in handy when some theme is enabled and your site is loading styles, and you don't want the user to change the theme). |
| animationInactive | `boolean` | `true` | no | The button is disabled after being pressed during animation (that's 2 seconds). |
| shadows | `boolean` | `true` | no | A shadow, dark at "day" and light at "night", around the button. |
| className | `string` | `null` | no | Your own classnames. |

## License
MIT © [carrymisss](https://github.com/carrymisss)