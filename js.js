document.addEventListener('DOMContentLoaded', function(){
					Typed.new('#typed', {
						stringsElement: document.getElementById('typed-strings'),
						typeSpeed: 1
					});
					window.setInterval(function() {
					  var elem = document.getElementById('typedContainer');
					  elem.scrollTop = elem.scrollHeight;
					  var hiddenOverflow = document.getElementById('hiddenOverflow');
					  // $('hiddenOverflow').css("overflow", "hidden");
					  // $('typedContainer').css({"overflow":"auto", "padding-right":"20px"});
					  var parent = document.getElementById('typedContainer');
						var child = document.getElementById('hiddenOverflow');
						child.style.paddingRight = child.offsetWidth - child.clientWidth + "px";
						console.log(child.style.paddingRight);
						console.log(child.clientWidth);
					  // console.log(elem.scrollHeight);
					  // console.log(elem.scrollTop);
					}, 200);
				});