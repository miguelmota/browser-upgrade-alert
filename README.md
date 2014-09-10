# Browser upgrade alert

![](https://github.com/miguelmota/browser-upgrade/blob/master/screenshot.png)

This is a fork of [https://code.google.com/p/ie6-upgrade-warning/](https://code.google.com/p/ie6-upgrade-warning/).

What I've added is browser detection, which you can set the allowed versions (`browser-upgrade.js`).

```javascript
var allowed = ['MSIE 9', 'Firefox 30', 'Safari 5.1', 'Opera 23', 'Chrome 27'];
```

# Usage

```html
<script src="browser-upgrade.js"></script><script>window.onload=function(){e('./')}</script>
```

`e` expects the image directory path.

# License

Released under the MIT License.
