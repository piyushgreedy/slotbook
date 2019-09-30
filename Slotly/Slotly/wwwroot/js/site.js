// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
// Sets dates for example reservations to always be on current day or after
var date = new Date(),
    day = date.getDate(),
    date1 = new Date(),
    date2 = new Date(),
    date3 = new Date();
date1.setDate(day);
// date2.setDate(day + 1);
// date3.setDate(day + 2);
date1 = date1.format('Y-m-d');
date2 = date2.format('Y-m-d');
date3 = date3.format('Y-m-d');

// Array of example date
var reservations = [
  {date: date3, start: '8:00', end: '13:00', row: 0}, 
];
// Array of sample items              
var printers = ['PC'];
// Initialize 
$("#scheduler").scheduler({items: printers, reservations: reservations, timeslotHeight: 70, timeslotWidth: 100});
// Allows for reservation deletion
$(document).on('click', ".reservation", function () {
    $(this).remove();
});