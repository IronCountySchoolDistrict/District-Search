/*global $j*/
(function() {
    'use strict';
    var searchTemplate = $j($j('#dist-search-template').html());
    var searchSelect = $j('.tabs').children().last();
    searchTemplate.insertAfter(searchSelect);
}());