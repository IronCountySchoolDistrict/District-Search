import $ from 'jquery';

export default function() {
    var searchTemplate = $($('#dist-search-template').html());
    var searchSelect = $('.tabs').children().last();
    searchTemplate.insertAfter(searchSelect);
}
