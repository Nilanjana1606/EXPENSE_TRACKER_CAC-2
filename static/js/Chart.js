document.addEventListener('DOMContentLoaded', function () {
    // Function to handle adding items
    function addItem() {
      // Your existing code to add items
    }
  
    // Your existing functions for updating recent data and summary data
  
    // Event listener for the "Add Items" button
    document.getElementById('addItemButton').addEventListener('click', addItem);
  
    // Function to update the expense summary chart
    function updateExpenseChart() {
      var expenses = [/* Populate your expense data here */];
      var labels = [/* Populate your label data here */];
  
      var ctx = document.getElementById('expenseChart').getContext('2d');
      var expenseChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
            label: 'Expenses',
            data: expenses,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  
    // Call the function to update the expense summary chart
    updateExpenseChart();
  });
  