
export const CATEGORIES = [
    { id: 'starters', name: 'Starters', image: require('../assets/dishes/risotto.jpg') },
    { id: 'mains', name: 'Main Course', image: require('../assets/dishes/pasta.jpg') },
    { id: 'desserts', name: 'Desserts', image: require('../assets/dishes/tiramisu.jpg') },
    { id: 'drinks', name: 'Drinks', image: require('../assets/dishes/spritz.jpg') },
];

export const MENU_ITEMS = {
    starters: [
        { id: 's1', name: 'Mushroom Risotto', description: 'Creamy Arborio rice with wild mushrooms, parmesan crisp, and truffle oil.', price: 18, image: require('../assets/dishes/risotto.jpg') },
        { id: 's2', name: 'Crispy Calamari', description: 'Golden fried squid rings served with lemon and spicy marinara dip.', price: 16, image: require('../assets/dishes/calamari.jpg') },
        { id: 's3', name: 'Bruschetta Trio', description: 'Toasted ciabatta with tomatoes, olive tapenade, and ricotta toppings.', price: 14, image: require('../assets/dishes/bruschetta.jpg') },
        { id: 's4', name: 'Beef Carpaccio', description: 'Thinly sliced raw beef filet with arugula, capers, and parmesan shavings.', price: 19, image: require('../assets/dishes/risotto.jpg') },
        { id: 's5', name: 'Caprese Salad', description: 'Fresh buffalo mozzarella, vine tomatoes, and sweet basil glaze.', price: 15, image: require('../assets/dishes/caprese.jpg') },
        { id: 's6', name: 'Arancini Balls', description: 'Fried saffron risotto balls stuffed with ragu and mozzarella.', price: 12, image: require('../assets/dishes/risotto.jpg') },
        { id: 's7', name: 'Garlic Prawns', description: 'Sautéed king prawns in white wine, garlic, and chili butter sauce.', price: 20, image: require('../assets/dishes/calamari.jpg') },
        { id: 's8', name: 'Antipasto Platter', description: 'Selection of cured meats, cheeses, olives, and pickled vegetables.', price: 24, image: require('../assets/dishes/bruschetta.jpg') }
    ],
    mains: [
        { id: 'm1', name: 'Pasta Carbonara', description: 'Authentic Roman pasta with guanciale, pecornio romano, egg yolk, and pepper.', price: 24, image: require('../assets/dishes/pasta.jpg') },
        { id: 'm2', name: 'Lasagna Bolognese', description: 'Layers of fresh pasta, slow-cooked beef ragu, béchamel, and parmesan.', price: 22, image: require('../assets/dishes/lasagna.jpg') },
        { id: 'm3', name: 'Pizza Margherita', description: 'Wood-fired dough, San Marzano tomato sauce, fresh mozzarella di bufala, basil.', price: 20, image: require('../assets/dishes/pizza.jpg') },
        { id: 'm4', name: 'Osso Buco', description: 'Braised veal shanks cooked with vegetables, white wine and broth.', price: 32, image: require('../assets/dishes/lasagna.jpg') },
        { id: 'm5', name: 'Truffle Ravioli', description: 'Handmade ravioli filled with ricotta and black truffle cream sauce.', price: 26, image: require('../assets/dishes/pasta.jpg') },
        { id: 'm6', name: 'Grilled Sea Bass', description: 'Fresh Mediterranean sea bass fillet served with roasted vegetables.', price: 29, image: require('../assets/dishes/seabass.jpg') },
        { id: 'm7', name: 'Lamb Ragu', description: 'Pappardelle pasta tossed in a rich, slow-braised lamb shoulder sauce.', price: 25, image: require('../assets/dishes/pasta.jpg') },
        { id: 'm8', name: 'Quattro Formaggi Pizza', description: 'White base pizza with mozzarella, gorgonzola, fontina, and parmesan.', price: 21, image: require('../assets/dishes/pizza.jpg') }
    ],
    desserts: [
        { id: 'd1', name: 'Classic Tiramisu', description: 'Espresso-soaked ladyfingers and mascarpone cream, dusted with cocoa.', price: 14, image: require('../assets/dishes/tiramisu.jpg') },
        { id: 'd2', name: 'Sicilian Cannoli', description: 'Crispy pastry shells filled with sweet ricotta and pistachio ends.', price: 9, image: require('../assets/dishes/cannoli.jpg') },
        { id: 'd3', name: 'Panna Cotta', description: 'Silky vanilla bean custard served with mixed berry coulis.', price: 11, image: require('../assets/dishes/tiramisu.jpg') },
        { id: 'd4', name: 'Gelato Trio', description: 'Three scoops of artisanal Italian ice cream: Pistachio, Chocolate, Hazelnut.', price: 10, image: require('../assets/dishes/gelato.jpg') },
        { id: 'd5', name: 'Lemon Sorbet', description: 'Refreshing frozen dessert served in a natural lemon shell.', price: 8, image: require('../assets/dishes/gelato.jpg') },
        { id: 'd6', name: 'Affogato', description: 'Vanilla gelato "drowned" in a shot of hot espresso.', price: 7, image: require('../assets/dishes/espresso.jpg') },
        { id: 'd7', name: 'Chocolate Fondant', description: 'Warm chocolate cake with a molten center, served with cream.', price: 13, image: require('../assets/dishes/tiramisu.jpg') },
        { id: 'd8', name: 'Ricotta Cheesecake', description: 'Traditional Italian cheesecake made with fresh ricotta and lemon zest.', price: 12, image: require('../assets/dishes/cannoli.jpg') }
    ],
    drinks: [
        { id: 'dr1', name: 'Aperol Spritz', description: 'Prosecco, Aperol, and soda water, garnished with an orange slice.', price: 12, image: require('../assets/dishes/spritz.jpg') },
        { id: 'dr2', name: 'Negroni', description: 'Equal parts Gin, Vermouth Rosso, and Campari, served over ice.', price: 14, image: require('../assets/dishes/spritz.jpg') },
        { id: 'dr3', name: 'Italian Lemonade', description: 'Sparkling lemon soda with fresh mint and crushed ice.', price: 6, image: require('../assets/dishes/spritz.jpg') },
        { id: 'dr4', name: 'Espresso Martini', description: 'Vodka, coffee liqueur, and fresh espresso shaken to perfection.', price: 15, image: require('../assets/dishes/espresso.jpg') },
        { id: 'dr5', name: 'Chianti Classico', description: 'Glass of robust red wine from Tuscany, notes of cherry and earth.', price: 11, image: require('../assets/dishes/redwine.jpg') },
        { id: 'dr6', name: 'Pinot Grigio', description: 'Crisp and refreshing white wine with hints of green apple.', price: 10, image: require('../assets/dishes/redwine.jpg') },
        { id: 'dr7', name: 'Limoncello', description: 'Chilled lemon liqueur digestif, sweet and zesty.', price: 8, image: require('../assets/dishes/spritz.jpg') },
        { id: 'dr8', name: 'San Pellegrino', description: 'Premium sparkling mineral water from the Italian Alps.', price: 5, image: require('../assets/dishes/spritz.jpg') }
    ],
};
