// let imgArr = ['1','2','3','4','5','6','7','8','9'];
let imgArr = ['1','2','3'];

function pushImages() {
	imgArr.forEach(function (element) {
		let content = document.getElementById('content');
		let img = document.createElement('img');
		let imgWrap = document.createElement('div');
		imgWrap.className = 'img_wrap';
		img.src = ('img' + '/' + element + '.jpg');
		content.appendChild(imgWrap).appendChild(img);
	});
}

pushImages();

let btn = document.getElementById('btn');
let input = document.getElementById('input');
let form = document.getElementById('form');

btn.onclick = function() {
	let imgName = input.value;
	let img = document.createElement('img');
	let imgWrap = document.createElement('div');
	imgWrap.className = 'img_wrap';
	img.src = ('img' + '/' + imgName + '.jpg');
	imgArr.push(imgName);
	content.appendChild(imgWrap).appendChild(img);
	form.reset();
}
