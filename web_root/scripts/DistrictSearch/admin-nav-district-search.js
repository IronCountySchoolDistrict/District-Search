/*global $j*/
// Insert District Students Search template into leftnav People link list
(function () {
    'use strict';
    // Insert District Students Search template.
    var distSrchTemplate = $j($j('#dist-stu-template').html());
    var select = $j('#navParentSearch').parent();
    distSrchTemplate.insertAfter(select);
}());