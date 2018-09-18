(function () {
  'use strict';

  angular
    .module('ion-google-location-autocomplete')
    .factory('googleLocationAutocompleteService', factory)

  factory.$inject = ['$q'];

  function factory($q) {
    var autocompleteService = new google.maps.places.AutocompleteService();
    var detailsService = new google.maps.places.PlacesService(document.createElement("input"));
    var service = {
      searchAddress: searchAddress,
      getDetails: getDetails
    };

    return service;


    /**
     * @function searchAddress
     * @description Search an address from an input and and option country restriction
     * @param required input string
     * @param optional countryCode two letters code
     * @returns {promise}
     */
    function searchAddress(input, countryCode) {

      var dfd = $q.defer();

      autocompleteService.getPlacePredictions({
        input: input,
        componentRestrictions: countryCode ? {
          country: countryCode
        } : undefined
      }, function (result, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
          dfd.resolve(result);
        } else
          dfd.reject(status);
      });
      return dfd.promise;
    }


    /**
     * @function getDetails
     * @description Gets the details of a placeId
     * @param required placeId
     * @returns {promise}
     */
    function getDetails(placeId) {

      var dfd = $q.defer();

      detailsService.getDetails({
        placeId: placeId
      }, function (result) {
        dfd.resolve(result);
      });
      return dfd.promise;
    }


  }
})();