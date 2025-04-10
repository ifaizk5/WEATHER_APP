# Weather App

## Description

This is a simple Weather App that allows users to select a city and get the current weather conditions.

## Features

-   Select a city from the dropdown list.
-   Get the current weather conditions for the selected city.
-   Displays weather information with relevant emoji.

## Technologies Used

-   HTML
-   CSS
-   JavaScript

## Installation

1.  Clone the repository:

    ```
    git clone &lt;repository-url&gt;
    ```

2.  Open `index.html` in your browser.

## Usage

1.  Select a city from the dropdown list.
2.  Click the "Get Weather" button.
3.  The weather details for the selected city will be displayed.

## CSS Styling

The styling is done using CSS in the `style.css` file. It includes:

-   Background gradient.
-   Styling for the container, navigation, and weather information.
-   Responsive design for different screen sizes.

## JavaScript Functionality

The JavaScript functionality is implemented in the `script.js` file. It includes:

-   Populating the city list on DOMContentLoaded.
-   Fetching weather data from the AccuWeather API.
-   Displaying weather information with corresponding emoji.

## API Key

The API key is required to fetch weather data from AccuWeather. Replace `"wioQWOcBNCCw1XLw49fxdlYyLmDGLulG"` in the `script.js` file with your own API key.

## City List

The city list is hardcoded in the `script.js` file. You can modify the `cities` array to include more cities.

## Files Included

-   `index.html`: The main HTML file.
-   `style.css`: The CSS file for styling.
-   `script.js`: The JavaScript file for functionality.
-   `file.prettierrc`: Configuration file for Prettier code formatter.

## Example

```

<html>
<head>
<title>Weather App</title>
<link rel="stylesheet" href="style.css" />
</head>
<body>
<div>
<nav>
<h1>Weather App</h1>
</nav>
<div>
<label for="cityList">Select a City:</label>
<input
type="search"
list="cityList"
id="cityKeyInput"
name="cityKeyInput"
/>
<datalist id="cityList"></datalist>
<button onclick="getWeather()">Get Weather</button>
</div>
<div>Weather details will appear here.</div>
</div>
<script src="script.js"></script>
</body>
</html>

```

## Contributing

Feel free to contribute to this project by submitting issues or pull requests.

## License

[MIT](https://opensource.org/licenses/MIT)
```

<div>⁂</div>

[^1]: https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/61116656/af8c9931-8857-4faa-88a4-f9006c27f589/style.css

[^2]: https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/61116656/059940ea-5b0b-48ad-a7e8-6c4763d39611/script.js

[^3]: https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/61116656/19558f47-3991-4581-8cbf-d505c6ca2875/index.html

[^4]: https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/61116656/ffd8cf57-22d1-4e4b-9fd4-9c775396ad2a/file.prettierrc

