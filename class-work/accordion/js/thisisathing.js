<script type="text/javascript">
$(function(){		  
			  var mainContainer=$('#alfaLinks');
			  // $('.alfa').hide();    //hide all alfa
			  var closeAllExistingOpen =function (){
							  var $allOpen= $('.open');
							  //close alfa
							  $allOpen.removeClass('open');
							  // $allOpen.find('.alfa').fadeOut(1000);
							  //$allOpen.find('.answer').fadeIn(1000);
			  }
			  //click on answer
			  // $('.answer').click(function(){
							  // var $this=$(this);
							  // $this.hide();
							  // closeAllExistingOpen(); // close all open 
							  // var item =$this.closest('.item');
							  // item.addClass('open');
							  // item.find('.alfa').fadeIn(1000);
			  // });
			  
			  // click on close
			  $('.close').click(function(){
							  var $this=$(this);
							  var item=$this.closest('.item');
							  item.removeClass('open');
							  // item.find('.alfa').fadeOut(1000);
							  // item.find('.answer').fadeIn(1000);
			  });
			  
			  //data one
			   var $dataOneLinks = $('#dataOneLinks a'),
					$dataOne = $('.dataOne');
				$dataOne.hide();
				// Show first link on load only
				$('#one').show("slow");
				//$dataOneLinks[0].click();
				// Show first one only

				$dataOneLinks.click(function() {
					closeAllExistingOpen(); // close all open 
					var $elm = $(this),
						childId = $elm.data('child');
					// Hide all (only one is visible, though)
					$dataOne.hide("slow");
					// Reset and set .current class on links
					$dataOneLinks.removeClass('current');
					$elm.addClass('current');
					// Show related
					$('#' + childId).show("slow");

					return false;
				});
});
</script> 