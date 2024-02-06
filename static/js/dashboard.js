
document.addEventListener('DOMContentLoaded', function () {
	// Function to handle adding items
	function addItem() {
	  var itemType = document.getElementById('itemType').value;
	  var name = document.getElementById('name').value;
	  var amount = document.getElementById('amount').value;
  
	  if (name.trim() === '' || amount.trim() === '') {
		alert('Please enter both name and amount.');
		return;
	  }
  
	  // Update recent data based on item type
	  if (itemType === '0') {
		// Expense
		updateRecentData('recent_data_expense', name);
	  } else if (itemType === '1') {
		// Income
		updateRecentData('recent_data_income', name);
	  }
  
	  // Update summary data based on item type
	  updateSummaryData(itemType, amount);
  
	  // Clear input fields
	  document.getElementById('name').value = '';
	  document.getElementById('amount').value = '0';
	}
  
	// Function to update recent data
	function updateRecentData(listId, itemName) {
	  var list = document.querySelector('.' + listId);
	  var listItem = document.createElement('li');
	  listItem.textContent = itemName;
	  list.appendChild(listItem);
	}
  
	// Function to update summary data
	function updateSummaryData(itemType, amount) {
	  var summaryElement;
  
	  if (itemType === '0') {
		// Expense
		summaryElement = document.querySelector('.summary-section .card:nth-child(2) .summary');
	  } else if (itemType === '1') {
		// Income
		summaryElement = document.querySelector('.summary-section .card:nth-child(4) .summary');
	  }
  
	  var currentAmount = parseFloat(summaryElement.textContent.replace('Rs ', ''));
	  currentAmount += parseFloat(amount);
	  summaryElement.textContent = 'Rs ' + currentAmount.toFixed(2);
	}
  
	// Event listener for the "Add Items" button
	document.getElementById('addItemButton').addEventListener('click', addItem);
  });
  

 

