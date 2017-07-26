// Open external links in new tabs

// $(document).ready(function() {

//   var website = window.location.hostname;

//   var internalLinkRegex = new RegExp('^((((http:\\/\\/|https:\\/\\/)(www\\.)?)?'
//                                      + website
//                                      + ')|(localhost:\\d{4})|(\\/.*))(\\/.*)?$', '');

//   $('a').filter(function() {
//     var href = $(this).attr('href');
//     return !internalLinkRegex.test(href);
//   })
//   .each(function() {
//     $(this).attr('target', '_blank');
//   });

// });

// Make the table headings sort using listjs

var options = {
  valueNames: [ 'title', 'publisher', 'type', 'subject', 'year' ]
};

var userList = new List('archive', options);


// Make the table row clickable using jQuery

$('tr[data-href]').on("click", function() {
    document.location = $(this).data('href');
});