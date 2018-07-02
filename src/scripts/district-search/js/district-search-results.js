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

      elem.dateOfBirth = new Date(elem.dateOfBirth.year, elem.dateOfBirth.month - 1, elem.dateOfBirth.day).toLocaleDateString('en-US');
      elem.entrydate = new Date(elem.entrydate.year, elem.entrydate.month - 1, elem.entrydate.day).toLocaleDateString('en-US');
      elem.exitdate = new Date(elem.exitdate.year, elem.exitdate.month - 1, elem.exitdate.day).toLocaleDateString('en-US');
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
