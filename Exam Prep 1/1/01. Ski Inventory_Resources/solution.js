function solve() {
   
   //Add product to Available products list
   
   let $inputName = document.querySelectorAll('#add-new input')[0];
   let $inputQuantity = document.querySelectorAll('#add-new input')[1];
   let $inputPrice = document.querySelectorAll('#add-new input')[2];
   let $availableProductsList = document.querySelector('#products ul');
   let $addProductFromInputButton = document.querySelector('#add-new button');

   $addProductFromInputButton.addEventListener('click', addProductToAvailableHandler);

   function addProductToAvailableHandler(event) {
      event.preventDefault();

      let $productLi = document.createElement('li');
      
      let $nameSpan = document.createElement('span');
      $nameSpan.textContent = $inputName.value;     
      $productLi.appendChild($nameSpan);

      let $quantityStrong = document.createElement('strong');
      $quantityStrong.textContent = `Available: ${$inputQuantity.value}`;
      $productLi.appendChild($quantityStrong);

      let $div = document.createElement('div');
      let $priceStrong = document.createElement('strong');
      $priceStrong.textContent = Number($inputPrice.value).toFixed(2);
      $div.appendChild($priceStrong);
      let $addToClientListButton = document.createElement('button');
      $addToClientListButton.textContent = `Add to Client's List`;

      $addToClientListButton.addEventListener('click', addToClientListHandler);

      $div.appendChild($addToClientListButton);
      $productLi.appendChild($div);

      $availableProductsList.appendChild($productLi);

      $inputName.value = '';
      $inputQuantity.value = '';
      $inputPrice.value = '';

   }

   // Filter Available products

   let $inputFilter = document.getElementById('filter');
   let $filterButton = document.querySelector('.filter button');

   $filterButton.addEventListener('click', filterAvailableProductsHandler);

   function filterAvailableProductsHandler() {
      
      let filterCriteria = $inputFilter.value;

      Array.from($availableProductsList.querySelectorAll('li'))
         .forEach(li => {
            let productName = li.querySelector('span');
            if (productName.textContent.toLowerCase().includes(filterCriteria.toLowerCase())) {
               li.style.display = 'block';
            } else {
               li.style.display = 'none';
            }
         });

         $inputFilter.value = '';

   }

   // Add product to Client List (increase Total Price + decrease Available quantity (remove if quantity is 0))

   let $clientProductsList = document.querySelector('#myProducts ul');
   let $totalPrice = document.getElementsByTagName('h1')[1];

   function addToClientListHandler(e) {
      let $clProductLi = document.createElement('li');
      
      let $currentProductLi =  e.target.parentNode.parentNode;
      let name = $currentProductLi.querySelector('span').textContent;
      let quantity = Number($currentProductLi.querySelector('strong').textContent.split(':')[1].trim());
      let price = Number($currentProductLi.querySelector('div strong').textContent);

      $clProductLi.textContent = name;
      let strong = document.createElement('strong');
      strong.textContent = price.toFixed(2);
      $clProductLi.appendChild(strong);
      
      $clientProductsList.appendChild($clProductLi);

      let currentPrice = Number($totalPrice.textContent.split(':')[1].trim());
      $totalPrice.textContent = `Total Price: ${(currentPrice + price).toFixed(2)}`;

      quantity--;
      if (quantity === 0) {
         $currentProductLi.parentNode.removeChild($currentProductLi);
      }
      $currentProductLi.querySelector('strong').textContent = `Available: ${quantity}`;

   }

   // Buy button => Empty Client List + Clear Total Price

   let $buyButton = document.querySelector('#myProducts button');

   $buyButton.addEventListener('click', buyProductsHandler);

   function buyProductsHandler() {
      $clientProductsList.innerHTML = '';
      let currentPrice = 0;
      $totalPrice.textContent = `Total Price: ${currentPrice.toFixed(2)}`;
   }

}