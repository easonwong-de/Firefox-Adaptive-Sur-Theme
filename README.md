# Firefox Adaptive Sur Theme

A macOS-styled Firefox CSS theme based on [Firefox WhiteSur theme](https://github.com/AdamXweb/WhiteSurFirefoxThemeMacOS) with [Adaptive Tab Bar Colour](https://github.com/easonwong-de/Adaptive-Tab-Bar-Colour) support.

**Note:** This CSS theme is optimised for the **release version of Firefox on macOS**. Compatibility with other platforms or Firefox versions is not guaranteed. As this theme is actively used on my primary device, graphical issues and regressions will be addressed promptly.

<img width="45%" src="assets/adaptive-sur-2.png"> <img width="45%" src="assets/adaptive-sur-3.png">

## Installation

1. Go to `about:support` in Firefox → _Application Basics_ → _Profile Folder_ → Open the folder.
1. If a `chrome` folder does not already exist in your profile directory, create one.
1. Clone this repository into the `chrome` folder.
1. Go to `about:config` and enable:

    - `toolkit.legacyUserProfileCustomizations.stylesheets`
    - `svg.context-properties.content.enabled`
    - `layout.css.color-mix.enabled`
    - `layout.css.color-mix.color-spaces.enabled` (optional)
    - `layout.css.backdrop-filter.force-enabled` (optional)

1. Restart Firefox.

## Theme Customisation

Configuration is done through `userChrome.css` and `userContent.css`. Available modules include:

### `userChrome.css`

-   `extension-menu-in-grid.css` (enabled by default)  
    <img width="50%" src="assets/extension-menu-in-grid.png">

-   `hide-single-tab.css` (requires removing buttons from the tab bar)  
    <img width="50%" src="assets/hide-single-tab.png">

-   `mini-tabbar.css`  
    <img width="50%" src="assets/mini-tabbar.png">

### `userContent.css`

-   `apple-style-homepage.css`
-   `apple-style-twp-popup.css`

Full list of modules is available in `chrome/theme/customs`.

## Credits

This project is based on the original [Firefox WhiteSur theme](https://github.com/AdamXweb/WhiteSurFirefoxThemeMacOS) by AdamXweb. Additional adaptations and maintenance by [easonwong-de](https://github.com/easonwong-de).
