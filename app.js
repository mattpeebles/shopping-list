//Toggles items
var itemToggle = function(){
	$('.shopping-item-toggle').click(function(){
		var $parentDiv = $(this).closest("div");
		var $parentSpan = $($parentDiv).prev();
		$parentSpan.toggleClass("shopping-item__checked")
	})
}

//adding this line makes user double click for action
//but ensures all new elements have the functionality
$('ul').on('click', '.shopping-item-toggle', function(event){
	itemToggle();
})

//Deletes items
var itemDelete = function(){
	$('.shopping-item-delete').click(function(){
		var $parent = $(this).closest("li");
		$parent.remove();
	})
}

//same issue - requires double click
$('ul').on('click', '.shopping-item-delete', function(event){
	itemDelete();
})


//copies the entire ul as it appears on screen. if there's
//nothing on screen, nothing will appear when button is used
var newItem =function(){
	$("#js-shopping-list-form").submit(function(event){
		event.preventDefault();
		$("li").clone().appendTo(".shopping-list");
	})
}

$(function (){
	itemToggle();
	itemDelete();
	newItem();
})