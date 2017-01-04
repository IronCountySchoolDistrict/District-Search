/*global $,_,require*/
import _ from 'underscore';
import $ from 'jquery';

export default function() {
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

  var tableTemplate = $('#results-template').html();
  var tableSelect = $('.box-round');
  var compiledTemplate = _.template(tableTemplate);
  tableSelect.html(compiledTemplate({rows: psData.searchResults}));

  $('.box-round table').dataTable({
      "bPaginate": false,
      "bFilter": true,
      "bJQueryUI": true
  });
  $('.dataTables_wrapper').css({'display': 'inline-block'});
}
