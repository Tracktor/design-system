# [Versions](https://github.com/Tracktor/design-system/releases)

## v3.11.3
### Fix
- Fixed an issue in ArticleImage component where the browser's broken image icon would briefly appear before the custom placeholder was displayed
- Improved image error handling by hiding the image until it's either successfully loaded or an error is detected
- Simplified the placeholder display logic for better reliability
- Added visibility control to prevent flash of broken image icon during loading failures
