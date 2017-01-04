import $ from 'jquery';

export default function() {
    // Insert District Students Search template into leftnav People link list
    $("#navParentSearch").parent().after('<li><a href="/admin/district-search.html">District Search</a></li>');
}
