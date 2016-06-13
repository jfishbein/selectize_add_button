# add_button ([selectize.js](https://github.com/selectize/selectize.js) plugin)

See the [Selectize Plugin Docs](https://github.com/brianreavis/selectize.js/blob/master/docs/plugins.md) for general use instructions.

This plugin allows you to create an "add" button, or any other general purpose button, which calls a provided function to a selected item. At the moment it is meant to be used with the "remove_button" plugin due to that plugins reliance on absolute positioning and potential interaction issues when used together. A second callback can be provided to selectively decide whether to show the button for each item.

## Usage

```
  $('select').selectize({
   plugins: {
      'enhanced_selection': {
         func: function($item) {...} // function to be called when button is pushed
      }
   }
  });
```

### Parameters

 * `func` _(required)_ - function callback to be called when button is pressed. Received the a JQuery item as its only parameter.
 * `label` - Label for the unclicked button (Default: '+')
 * `title` - Tooltip title for the button (Default: 'Add')
 * `className` - Class name for the unclicked button. Clicked button will get this named with a "ed" appended. (Default: 'add')
 * `cond` - Optional condition callback function to be called to determine whether to display the item. Takes the selectize data item as its only parameter and must return true or false. If no function is provided, the button will show on every item.

# selectize.js

Selectize is an extensible jQuery-based custom &lt;select&gt; UI control. It's useful for tagging, contact lists, country selectors, and so on. It clocks in at around ~7kb (gzipped). The goal is to provide a solid & usable experience with a clean and powerful API.

- [Demos](http://brianreavis.github.io/selectize.js/)
- [Changelog](https://github.com/brianreavis/selectize.js/releases)
- [Examples](examples/)
- [Usage Documentation](docs/usage.md)
- [API Documentation](docs/api.md)
- [Plugin Documentation](docs/plugins.md)
