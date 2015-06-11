/*global $j,_,require*/
var dataTables = 'https://cdnjs.cloudflare.com/ajax/libs/datatables/1.9.4/jquery.dataTables.min.js';
require(['underscore', dataTables], function() {
    'use strict';
    var psData = $j.parseJSON($j('#ps-data').data().ps);
    _.each(psData.searchResults, function(elem, index, list) {
        if (elem.status === 'Active') {
            elem.statusClass = 'active';
        } else if (elem.status === 'Transferred Out') {
            elem.statusClass = 'transferred-out';
        } else if (elem.status === 'Pre-Registered') {
            elem.statusClass = 'pre-registered';
        } else if (elem.status === 'Graduated' || elem.status === 'Imported as Historical') {
            elem.statusClass = 'grad-or-imported';
        }
        list[index] = elem;
    });

    var tableTemplate = $j('#results-template').html();
    var tableSelect = $j('.box-round');
    var renderedTableTemplate = _.template(tableTemplate, {rows: psData.searchResults});
    tableSelect.html(renderedTableTemplate);

    $j('.box-round table').dataTable({
        "bPaginate": false,
        "bFilter": true,
        "bJQueryUI": true
    });
    $j('.dataTables_wrapper').css({'display': 'inline-block'});
});