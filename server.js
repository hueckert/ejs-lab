const express = require('express');
const app = express();

const RESTAURANT = {
    name: 'The Green Byte Bistro',
    isOpen: true,
    address: '742 Evergreen Rd, Mapleview, OS 45502',
    phone: '555-321-9876',
    menu: [
      { 
        id: 1,
        name: 'Quantum Quinoa Mushroom Burger',
        price: 13.00,
        rating: 4,
        category: 'mains',
        details: 'A vegetarian burger made with a quinoa and mushroom patty, it will take you to another realm.'
      },
      { 
        id: 2,
        name: 'Binary Berry Cheesecake',
        price: 10.11,
        rating: 3,
        category: 'desserts',
        details: 'A creamy cheesecake bursting with flavor. A mix of berries in every byte.'
      },
      { 
        id: 3,
        name: 'Recursive Rigatoni',
        price: 17.00,
        rating: 5,
        category: 'mains',
        details: 'A classic rigatoni pasta dish, layered with rich tomato sauce and herbs. You\'ll keep coming back for more.'
      },
      { 
        id: 4,
        name: 'Pumpkin Pi Squared',
        price: 3.14,
        rating: 5,
        category: 'desserts',
        details: 'A delightful pumpkin dessert, squared and spiced to perfection.'
      },
      { 
        id: 5,
        name: 'Fibonacci String Bean Fries',
        price: 11.23,
        rating: 5,
        category: 'sides',
        details: 'Crispy and lightly seasoned string bean fries, served in a pattern for a fun twist.'
      }
    ]
  }
  

// server.js

app.get('/', (req, res) => {
    // Pass the RESTAURANT object to locals
    res.locals.RESTAURANT = RESTAURANT;
    res.render('home.ejs');
  });

  app.get('/menu', (req, res) => {
    res.locals.RESTAURANT = RESTAURANT;
    res.render('menu.ejs'); // Render the menu view
  });

  // Route for Menu by Category
app.get('/menu/:category', (req, res) => {
    const category = req.params.category.toLowerCase();
    
    // Filter menu items by category
    const menuItems = RESTAURANT.menu.filter(item => item.category.toLowerCase() === category);
  
    // Capitalize the first letter of the category for better UI
    const formattedCategory = category.charAt(0).toUpperCase() + category.slice(1);
  
    // Send data to the view
    res.locals.menuItems = menuItems;
    res.locals.category = formattedCategory;
    res.locals.RESTAURANT = RESTAURANT;
    res.render('category.ejs');
  });
  
  const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});