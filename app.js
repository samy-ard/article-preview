(function($) {
	$(document).ready( function() {
		$('.share-btn').on('click', function(e) {
			e.preventDefault();
			$('.card-share').toggle();
		})
	});
})(jQuery);