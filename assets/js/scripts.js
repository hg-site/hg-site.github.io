// Open external links in new tabs

$(document).ready(function(){
 $("a[href^='http']").attr('target','_blank');
});

// Make the table headings sort using listjs

var options = {
  valueNames: [ 'title', 'publisher', 'type', 'subject', 'year' ]
};

var userList = new List('archive', options);


// Make the table row clickable using jQuery

$('tr[data-href]').on("click", function() {
    document.location = $(this).data('href');
});