function solve(){
   
   let $author = document.getElementById('creator');
   let $title = document.getElementById('title');
   let $category = document.getElementById('category');
   let $content = document.getElementById('content');
   let $createButton = document.getElementsByTagName('button')[0];
   let $articlesList = document.querySelector('.site-content main section');
   let $archiveList = document.querySelector('.archive-section ul');

   $createButton.addEventListener('click', createArticleHandler);

   function createArticleHandler(event) {
      event.preventDefault();

      let article = document.createElement('article');

      let titleh1 = document.createElement('h1');
      titleh1.textContent = $title.value;
      article.appendChild(titleh1);

      let categoryP = document.createElement('p');
      categoryP.textContent = 'Category: '
      let strong = document.createElement('strong');
      strong.textContent = $category.value;
      categoryP.appendChild(strong);
      article.appendChild(categoryP);

      let authorP = document.createElement('p');
      authorP.textContent = 'Creator: ';
      let authStrong = document.createElement('strong');
      authStrong.textContent = $author.value;
      authorP.appendChild(authStrong);
      article.appendChild(authorP);

      let contentP = document.createElement('p');
      contentP.textContent = $content.value;
      article.appendChild(contentP);

      let buttonsDiv = document.createElement('div');
      buttonsDiv.classList.add('buttons');

      let deleteBtn = document.createElement('button');
      deleteBtn.classList.add('btn', 'delete');
      deleteBtn.textContent = 'Delete';

      deleteBtn.addEventListener('click', deleteArticleHandler);

      function deleteArticleHandler() {
         article.remove();
      }

      buttonsDiv.appendChild(deleteBtn);

      let archiveBtn = document.createElement('button');
      archiveBtn.classList.add('btn', 'archive');
      archiveBtn.textContent = 'Archive';

      archiveBtn.addEventListener('click', archiveArticleHandler);

      function archiveArticleHandler() {
         let li = document.createElement('li');
         //cherh referneces
         li.textContent = article.querySelector('h1').textContent;

         $archiveList.appendChild(li);

         Array.from($archiveList.children).sort((a1, a2) => a1.textContent.toLowerCase().localeCompare(a2.textContent.toLowerCase())).forEach(li => $archiveList.appendChild(li));

         article.remove();
      }
      
      buttonsDiv.appendChild(archiveBtn);

      article.appendChild(buttonsDiv);

      $articlesList.appendChild(article);

      $author.value = '';
      $title.value = '';
      $category.value = '';
      $content.value = '';
      
   }   

}
