function createArticle() {
	
	let headingText = document.getElementById('createTitle').value;
	let contentText = document.getElementById('createContent').value;

	if (headingText.trim() && contentText.trim()) {
		let article = document.createElement('article');
	
		let heading = document.createElement('h3');
		heading.innerHTML = headingText;
		article.appendChild(heading);
	
		
		let content = document.createElement('p');
		content.innerHTML = contentText;
		article.appendChild(content);
		
		document.getElementById('articles').appendChild(article);
	}

	document.getElementById('createTitle').value = '';
	document.getElementById('createContent').value = '';
}