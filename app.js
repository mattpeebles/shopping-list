//toggles check class
$('ul').on('click', '.shopping-item-toggle', function(event){
		var $parentDiv = $(this).closest("div");
		var $parentSpan = $($parentDiv).prev();
		$parentSpan.toggleClass("shopping-item__checked")
})

//Deletes items
$('ul').on('click', '.shopping-item-delete', function(event){
	var $parent = $(this).closest("li");
	$parent.remove();
})


//creates newItem which replaces the span text in the clone
//with the new item. it then appends it to the end of the list.
//finally it resets the input to clear it after the form has been
//submitted
var newItem =function(){
	$("#js-shopping-list-form").submit(function(event){
		event.preventDefault();
		var newClone = $('li:first').clone()
		var newItem = newClone.children('.shopping-item')
		.text( $("#shopping-list-entry").val());
		newClone.children('.shopping-item').replaceWith(newItem);
		newClone.appendTo(".shopping-list");
		this.reset();
	})
}

$(function (){
	newItem();
})