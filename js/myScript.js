function articles() {
	$(document).ready(function () {

		$('ul.lista li').click(function () {
			var tab_id = $(this).attr('data-tab');

			$('ul.lista li').removeClass('current');
			$('.content').removeClass('current');

			$(this).addClass('current');
			$("#" + tab_id).addClass('current');


			// $('.lista1 li').each(function () {
			// 	$('#kat1').html();
			// })
			// $('.lista1 li').each(function () {
			// 	$('#kat2').html();
			// })
			// $('.lista1 li').each(function () {
			// 	$('#kat3').html();
			// })
		})

	});
}
articles();


