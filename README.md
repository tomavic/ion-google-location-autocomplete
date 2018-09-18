ion-google-location-autocomplete
================

This is a simple directive for Ionic 1 that allows you to add an input text element that enables user to select a place from Google Places with its details in a convenient Ionic Modal


# Installation

`npm install ion-google-location-autocomplete --save-dev`


`bower install ion-google-location-autocomplete --save-dev`


# Usage

1. Include the library and Google Places in your index.html (remember to replace your_api_key by your Google API Key:



```html
    <script src="lib/ion-google-location-autocomplete/dist/ion-google-location-autocomplete.js"></script>
    <script src="http://maps.googleapis.com/maps/api/js?key=your_api_key&libraries=places"></script>
```

**you can either include the minfied version of the library**

```html
    <script src="lib/ion-google-location-autocomplete/dist/ion-google-location-autocomplete.min.js"></script>
    <script src="http://maps.googleapis.com/maps/api/js?key=your_api_key&libraries=places"></script>
```


2. Add the `ion-google-location-autocomplete` module to your app module dependencies.


3. In your controller initialize data and options


```javascript
    $scope.data = {};
    
    //Optional
    $scope.countryCode = '';
    
    //Optional
    $scope.onAddressSelection = function (location) {
        // do whatever you want with location object
        console.log("Location selected is: ", location)
    };
```


4. Add the `google-location-autocomplete` attribute to your text input field

```html
    <input 
        type="text" 
        placeholder="Change address" 
        location="data.location" 
        country-code="{{countryCode}}" 
        on-selection="onAddressSelection(location)" 
        ng-model="data.location.formatted_address" 
        readonly 
        required 
        google-location-autocomplete />
```

## Configurable options

### The `location`
Required
A object property where place details returned by Google are stored. For example, you can use `$scope.data.location.geometry.location.lat()` to get latitude of the selected place


### The `country-code`
Optional
Use as componentRestrictions, see [here](https://developers.google.com/places/web-service/autocomplete)


### The `on-selection`
Optional
This option receives a function called when a place is selected using the modal. Receives a paramter location with the places details returned by Google.

```javascript
$scope.onAddressSelection = function (location) {
    // do whatever you want with location object
    console.log("Location selected is: ", location)
};
```

License
-------------
MIT

# Credits

Made with ❤️ by Hatem. Follow me on [Twitter](https://twitter.com/toomavic) to get the latest news first! I will be happy to receive your feedback! We're always happy to hear your feedback.
Enjoy!



    ░░░░░░░░░░░░░▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄ 
    ░░░░░░░░░░█░░░░░░▀█▄▀▄▀██████░░░▀█▄▀▄▀██████ 
    ░░░░░░░░ ░░░░░░░░░░▀█▄█▄███▀░░░░░░▀█▄█▄███▀░

   All copyrights reserved © 2018 | TOmas™ Inc.  
