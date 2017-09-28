window.addEventListener('DOMContentLoaded', function(event){
	//slide header
	var imageBox = document.getElementById('image-box');
	var listImages = imageBox.querySelector('.list-images');
	var indicator = document.getElementById('indicator');
	var inds = document.getElementsByClassName('ind');
	var indexHeader = -1;
	function handleIndexHeader(n)
	{
		indexHeader = indexHeader + n;
		if(indexHeader > 4){
			indexHeader = 0;
		}else{
			if(indexHeader < 0){
				indexHeader = 4;
			}
		}
	}
	function slideHeader(n)
	{
		handleIndexHeader(n);
		listImages.style.transition = 'transform 1s ease';
		listImages.style.transform = 'translateX(' + indexHeader* -960 + 'px)';
		for(var i =0; i< inds.length; i++){
			inds[i].className = inds[i].className.replace("active", "");
		}
		inds[indexHeader].className += " active";
	}
	function controlHeader()
	{
		slideHeader(1);
		setTimeout(controlHeader, 6000);
	}
	controlHeader();


	//slider
	var boxSlider = document.getElementById('box-slider');
	var listImageSlider = boxSlider.querySelector('.list-images-slider');
	var prev = document.getElementById('prev-slider');
	var next = document.getElementById('next-slider');

	var indexImageSlider = -1;
	function handlerIndexSlider(n)
	{
		indexImageSlider = indexImageSlider + n;
		if (indexImageSlider < 0) {
			indexImageSlider = 3;
		}else {
			if(indexImageSlider > 3){
				indexImageSlider = 0;
			}
		}
	}

	function slideSlider(n)
	{
		handlerIndexSlider(n);
		listImageSlider.style.transition = 'transform 1s ease';
		listImageSlider.style.transform = 'translateX(' + indexImageSlider* -321 + 'px)';
	}
	function plusImageSlider(n)
	{
		handlerIndexSlider(n);
		listImageSlider.style.transition = 'transform 1s ease';
		listImageSlider.style.transform = 'translateX(' + indexImageSlider* -321 + 'px)';
	}

	function controlSlider()
	{
		slideSlider(1);
		setTimeout(controlSlider, 5000);
	}
	controlSlider();
	prev.addEventListener('click', function(){
		slideSlider(-1);
	});
	next.addEventListener('click', function(){
		slideSlider(1);
	});
});