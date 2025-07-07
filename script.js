document.addEventListener('DOMContentLoaded', () => {
    const foodGallery = document.getElementById('foodGallery');
    const searchInput = document.getElementById('searchInput');
    const modal = document.getElementById('foodModal');
    const closeButton = document.querySelector('.close-button');

    const foods = [
        // --- SOUTH KARNATAKA FOODS ---
        {
            name: "Bisi Bele Bath",
            category: "vegetarian",
            image: "images/Bisi Bele Bath.jpg",
            description: "A popular, traditional, and wholesome dish from Karnataka, consisting of rice, lentils, and mixed vegetables cooked together with a special spice blend.",
            ingredients: [
                "1 cup rice",
                "1/2 cup Toor Dal (split pigeon peas)",
                "1 cup mixed vegetables (carrots, beans, peas, potatoes, capsicum)",
                "1 onion, chopped",
                "1 tomato, chopped",
                "1/4 cup tamarind pulp",
                "2 tbsp Bisi Bele Bath powder",
                "1 tsp mustard seeds",
                "1 tsp cumin seeds",
                "A pinch of asafoetida (hing)",
                "Curry leaves",
                "Ghee for tempering",
                "Salt to taste",
                "Coriander leaves for garnish"
            ],
            recipe: [
                "Wash rice and dal, soak for 20 minutes.",
                "Pressure cook rice, dal, and vegetables with enough water until soft.",
                "In a large pan, heat ghee. Add mustard seeds, cumin seeds, asafoetida, and curry leaves. Sauté chopped onion until translucent.",
                "Add chopped tomato and cook until soft.",
                "Add tamarind pulp and Bisi Bele Bath powder. Cook for a few minutes.",
                "Add the cooked rice, dal, and vegetables to the pan. Mix well.",
                "Add salt and adjust consistency with water if needed. Simmer for 10-15 minutes.",
                "Garnish with coriander leaves and serve hot with a dollop of ghee and boondi or potato chips."
            ],
            culturalSignificance: "A staple in many Karnataka households, often prepared for special occasions and a comforting one-pot meal."
        },
        {
            name: "Neer Dosa",
            category: "vegetarian",
            image: "images/neer-dosa.jpg",
            description: "A delicate, thin, and soft crepe from the coastal region of Karnataka, made from a watery rice batter.",
            ingredients: [
                "1 cup raw rice",
                "Salt to taste",
                "Water as needed",
                "Oil for cooking"
            ],
            recipe: [
                "Soak rice for at least 4-6 hours, or overnight.",
                "Drain the water and grind the soaked rice with enough fresh water to a very smooth, thin batter (like buttermilk consistency).",
                "Add salt to the batter and mix well. Ensure there are no lumps.",
                "Heat a non-stick tawa. Grease lightly with oil.",
                "Pour a ladleful of the watery batter onto the hot tawa, starting from the edges and moving towards the center to form a thin crepe. Do not spread it like a regular dosa.",
                "Cover with a lid and cook for 30-45 seconds until the dosa turns translucent. Do not brown it.",
                "Gently fold the dosa and remove it from the tawa. Repeat for the remaining batter.",
                "Serve hot with coconut chutney, sambar, or any curry."
            ],
            culturalSignificance: "A staple in Mangalorean cuisine, 'Neer' means water in Kannada, referring to the consistency of the batter. It's known for its simplicity and light texture."
        },
        {
            name: "Mysore Masala Dosa",
            category: "vegetarian",
            image: "images/Mysore Masala Dosa.jpg",
            description: "A crispy and savory crepe made from fermented rice and lentil batter, with a spicy red chutney spread inside and filled with a spiced potato mixture.",
            ingredients: [
                "Dosa batter (fermented rice and urad dal batter)",
                "For Red Chutney: Red chillies, garlic, onion, tamarind, jaggery, salt",
                "For Potato Filling: Boiled and mashed potatoes, onion, ginger, green chillies, curry leaves, mustard seeds, turmeric, salt",
                "Oil/Ghee for cooking"
            ],
            recipe: [
                "Prepare dosa batter (ideally fermented overnight).",
                "For red chutney: Grind red chillies, garlic, onion, a small piece of tamarind, jaggery, and salt to a smooth paste.",
                "For potato filling: Heat oil, temper with mustard seeds, add curry leaves, chopped ginger, green chillies, and onions. Sauté until onions are soft. Add turmeric, mashed potatoes, and salt. Mix well.",
                "Heat a tawa (griddle). Pour a ladleful of dosa batter and spread it thinly in a circular motion.",
                "Drizzle oil/Ghee around the edges. Once the dosa starts to cook, spread a thin layer of the red chutney on the inside.",
                "Place a spoonful of potato filling on one half of the dosa. Cook until golden brown and crispy.",
                "Fold the dosa in half and serve hot with sambar and coconut chutney."
            ],
            culturalSignificance: "Originating from Mysore, this dosa is a popular breakfast and snack item, known for its unique spicy flavor compared to regular masala dosa."
        },
        {
            name: "Akki Rotti",
            category: "vegetarian",
            image: "images/Akki Rotti.jpg",
            description: "A traditional flatbread made from rice flour, mixed with vegetables and spices, typically served for breakfast.",
            ingredients: [
                "1 cup rice flour",
                "1/2 cup finely chopped onion",
                "1/4 cup grated carrot (optional)",
                "2-3 green chillies, finely chopped",
                "A few curry leaves, chopped",
                "2 tbsp finely chopped coriander leaves",
                "1 tsp cumin seeds",
                "Salt to taste",
                "Hot water as needed",
                "Oil for cooking"
            ],
            recipe: [
                "In a large bowl, combine rice flour, chopped onion, grated carrot (if using), green chillies, curry leaves, coriander leaves, cumin seeds, and salt.",
                "Gradually add hot water to the mixture, mixing with a spoon initially, then knead with your hands to form a soft, pliable dough. Be careful as the water is hot.",
                "Divide the dough into equal portions.",
                "Grease a banana leaf or parchment paper with oil. Take one portion of dough and flatten it thinly using your palm, spreading it into a round roti.",
                "Heat a tawa (griddle) and lightly grease it with oil. Carefully transfer the Akki Rotti onto the hot tawa.",
                "Drizzle a little oil around the edges and cook on medium flame until golden brown spots appear on both sides.",
                "Serve hot with coconut chutney, tomato chutney, or a simple pickle."
            ],
            culturalSignificance: "A wholesome and common breakfast item in rural and urban Karnataka, often prepared fresh in homes. It's a versatile dish where different vegetables can be added."
        },
        {
            name: "Ragi Mudde & Soppu Saaru",
            category: "vegetarian",
            image: "images/Ragi Mudde & Soppu Saaru.jpg", // Add this image
            description: "Ragi Mudde (finger millet balls) is a staple, highly nutritious food of South Karnataka, especially rural areas, eaten with Soppu Saaru (a spicy green leafy vegetable curry) or other thin gravies.",
            ingredients: [
                "For Ragi Mudde: 1 cup Ragi flour (finger millet flour), 3 cups water, 1/2 tsp salt (optional)",
                "For Soppu Saaru: 1 bunch green leafy vegetables (e.g., spinach, dill, amaranth), 1/2 cup Toor Dal, 1 onion, 1 tomato, 2-3 green chillies, 1 small piece tamarind, 1 tbsp Sambar powder, For tempering: mustard seeds, cumin seeds, garlic, curry leaves, oil, salt."
            ],
            recipe: [
                "For Ragi Mudde: Bring 2.5 cups of water to a rolling boil with salt. Reduce flame, add Ragi flour to the remaining 0.5 cup cold water and mix without lumps. Add this paste to the boiling water, stirring continuously to prevent lumps. Cook on low flame, stirring and pressing lumps, until it forms a thick, smooth dough that pulls away from the sides of the pan. Wet your hands and shape into smooth balls.",
                "For Soppu Saaru: Cook Toor Dal with chopped greens until soft. In a pan, sauté chopped onion, tomato, and green chillies. Add tamarind pulp, Sambar powder, salt, and cooked dal and greens. Bring to a boil and simmer. Temper with mustard seeds, cumin seeds, crushed garlic, and curry leaves in oil. Add to the saaru.",
                "Serve Ragi Mudde hot with Soppu Saaru, usually by hand."
            ],
            culturalSignificance: "A very traditional and energy-rich meal, especially for farmers and laborers due to its sustained energy release. It's a symbol of traditional South Karnataka diet."
        },
        {
            name: "Vangi Bath",
            category: "vegetarian",
            image: "images/Vangi Bath.jpg", // Add this image
            description: "A flavorful and aromatic rice dish prepared with brinjal (eggplant) and a special spice blend (Vangi Bath powder), popular across Karnataka.",
            ingredients: [
                "1 cup cooked rice (preferably short-grain)",
                "2 medium brinjals (eggplant), diced",
                "1 onion, sliced",
                "1/2 cup tamarind extract",
                "1 tbsp Vangi Bath powder",
                "1/2 tsp turmeric powder",
                "1/2 tsp mustard seeds",
                "A pinch of asafoetida (hing)",
                "Curry leaves",
                "Oil/Ghee",
                "Salt to taste",
                "Coriander leaves for garnish"
            ],
            recipe: [
                "Heat oil in a pan. Add mustard seeds, let them splutter. Add asafoetida and curry leaves.",
                "Add sliced onions and sauté until translucent. Add diced brinjals and cook until tender.",
                "Add turmeric powder, Vangi Bath powder, and sauté for a minute until fragrant.",
                "Add tamarind extract, salt, and a little water. Cook until the gravy thickens slightly.",
                "Add the cooked rice and mix gently until well combined and heated through. Ensure the rice grains remain separate.",
                "Garnish with fresh coriander leaves and serve hot with raita or plain yogurt."
            ],
            culturalSignificance: "A common and beloved rice preparation for lunch or dinner, showcasing the use of local vegetables and aromatic spices unique to Karnataka cuisine."
        },
        {
            name: "Coorg Pandi Curry",
            category: "non-vegetarian",
            image: "images/Coorg Pandi Curry.jpg",
            description: "A signature dish of the Coorg (Kodagu) region, this intensely flavorful and tangy pork curry is known for its dark color, rich spice blend, and the unique use of Kachampuli (Coorg vinegar).",
            ingredients: [
                "1 kg pork, with fat, cut into small pieces",
                "2-3 large onions, finely chopped",
                "1 tbsp ginger-garlic paste",
                "2-3 green chillies, slit",
                "For Roasted Spice Powder (Coorg Masala): 1 tbsp whole black pepper, 1 tsp cumin seeds, 1/2 tsp fenugreek seeds, 3-4 cloves, 2-3 green cardamoms, 1-inch cinnamon stick, 8-10 dry red chillies (Byadagi for color, Guntur for heat), 1 tbsp coriander seeds",
                "2-3 sprigs curry leaves",
                "1/2 tsp turmeric powder",
                "Salt to taste",
                "3-4 tbsp Kachampuli (Coorg Vinegar/Kodagu dark vinegar) or regular dark vinegar",
                "Oil (if needed, pork fat renders enough)",
                "Coriander leaves for garnish"
            ],
            recipe: [
                "Prepare Spice Powder: Dry roast all ingredients for the Coorg Masala on a low flame until aromatic. Let cool and grind to a fine powder.",
                "Cook Pork: In a heavy-bottomed pan, add the pork with its fat. Add salt and turmeric powder. Cook on medium heat until the pork releases its fat and most of the water evaporates. This takes about 20-30 minutes. The pork should be partially cooked and slightly browned.",
                "Drain excess fat if too much, leaving enough to cook with.",
                "Add chopped onions, ginger-garlic paste, and green chillies to the pork. Sauté until onions turn golden brown.",
                "Add the prepared Coorg Masala powder and curry leaves. Sauté for 5-7 minutes on low flame until the spices are well roasted and aromatic.",
                "Add 1-1.5 cups of hot water, mix well, cover, and simmer on low flame until the pork is tender (this can take 45-60 minutes, or pressure cook for 20-25 minutes).",
                "Once the pork is tender and the curry has thickened, add the Kachampuli (Coorg vinegar). Simmer for another 5-10 minutes.",
                "Taste and adjust salt. Garnish with fresh coriander leaves.",
                "Serve hot with Kadambuttu (steamed rice dumplings), Akki Rotti, or plain rice."
            ],
            culturalSignificance: "The quintessential dish of the Kodava community, central to their festivals, weddings, and everyday meals. Kachampuli is the soul of this dish, giving it its unique sourness and deep color."
        },
        {
            name: "Korri Gassi",
            category: "non-vegetarian",
            image: "images/Korri Gassi.jpeg",
            description: "A fiery and rich chicken curry from the Tulu-speaking region of coastal Karnataka (Mangalore), characterized by its vibrant red color and coconut-based gravy. 'Korri' means chicken and 'Gassi' refers to curry in Tulu.",
            ingredients: [
                "500g chicken, cut into pieces",
                "2 large onions, finely chopped",
                "1 tbsp ginger-garlic paste",
                "2-3 green chillies, slit",
                "For Roasting & Grinding (Masala Paste): 1 cup grated fresh coconut, 10-12 Byadagi red chillies (or a mix of Byadagi for color and Guntur for heat), 1 tbsp coriander seeds, 1 tsp cumin seeds, 1/2 tsp fenugreek seeds, 5-6 black peppercorns, 4-5 cloves, 1-inch cinnamon stick, 1/2 tsp turmeric powder, Small ball of tamarind (lemon-sized), 1 onion, roughly chopped, 2-3 garlic cloves",
                "2-3 sprigs curry leaves",
                "Salt to taste",
                "Oil for cooking",
                "Coriander leaves for garnish"
            ],
            recipe: [
                "Prepare Masala Paste: In a pan, dry roast the red chillies, coriander seeds, cumin seeds, fenugreek seeds, peppercorns, cloves, and cinnamon until aromatic. Do not burn.",
                "Add the grated coconut, roughly chopped onion, and garlic to the pan (no oil). Roast until coconut turns light golden.",
                "Let the roasted ingredients cool. Grind them with turmeric powder and tamarind into a very smooth paste using a little water.",
                "Cook Chicken: In a large pot or pan, heat oil. Add finely chopped onions and sauté until golden brown.",
                "Add ginger-garlic paste and green chillies. Sauté for a minute until raw smell disappears.",
                "Add the chicken pieces and sauté on high heat for 5-7 minutes until they change color.",
                "Add the ground masala paste and mix well with the chicken. Cook for 5-10 minutes, stirring occasionally, allowing the raw smell of the masala to disappear.",
                "Add 1.5 - 2 cups of hot water (or as needed for desired consistency) and salt to taste. Bring to a boil.",
                "Reduce heat, cover, and simmer for 20-30 minutes, or until the chicken is tender and the oil separates on top.",
                "Add curry leaves and simmer for another 2-3 minutes.",
                "Garnish with fresh coriander leaves.",
                "Serve hot with Neer Dosa, rice, or Boiled Rice (Kudla Rice)."
            ],
            culturalSignificance: "A celebratory dish in Mangalorean homes, often served at feasts and functions. It exemplifies the rich, spicy, and coconut-heavy flavors of coastal Karnataka."
        },
        {
            name: "Koli Saaru",
            category: "non-vegetarian",
            image: "images/Koli Saaru.jpeg",
            description: "A more rustic and less creamy chicken curry, typical of the plain regions of Karnataka, focusing on fresh ground spices and a thin, flavorful gravy. 'Koli' means chicken and 'Saaru' means rasam/gravy.",
            ingredients: [
                "500g chicken, cut into pieces",
                "2 large onions, chopped (1 for sautéing, 1 for grinding)",
                "2 tomatoes, chopped (1 for sautéing, 1 for grinding)",
                "1.5 tbsp ginger-garlic paste",
                "2-3 green chillies, slit",
                "For Grinding (Masala Paste): 1/2 cup fresh grated coconut, 1 tbsp coriander seeds, 1 tsp cumin seeds, 1/2 tsp poppy seeds (khus khus), 5-6 dry red chillies (adjust to spice preference), 1-inch cinnamon stick, 3-4 cloves, 4-5 black peppercorns, 1/2 tsp turmeric powder, Small bunch of coriander leaves, 1 small onion, roughly chopped, 1 small tomato, roughly chopped",
                "2-3 sprigs curry leaves",
                "Salt to taste",
                "Oil for cooking"
            ],
            recipe: [
                "Prepare Masala Paste: In a small pan, dry roast coriander seeds, cumin seeds, poppy seeds, dry red chillies, cinnamon, cloves, and peppercorns until aromatic.",
                "Let cool. Grind these roasted spices along with grated coconut, turmeric powder, green chillies (if adding more), roughly chopped onion, tomato, and coriander leaves, using a little water to a very smooth paste.",
                "Cook Chicken: In a large pot or pressure cooker, heat oil. Add the remaining chopped onion and sauté until golden brown.",
                "Add ginger-garlic paste and green chillies. Sauté for a minute.",
                "Add the chicken pieces and sauté for 5-7 minutes until they change color.",
                "Add the ground masala paste and mix well with the chicken. Sauté for 5-10 minutes on a medium flame until the raw smell of the masala goes away and oil starts to separate.",
                "Add the chopped tomatoes (if using additional) and cook until soft.",
                "Add 1.5 - 2 cups of hot water (adjust for desired consistency) and salt to taste. Bring to a boil.",
                "If using a pressure cooker, cook for 1-2 whistles. If in a pot, cover and simmer for 20-30 minutes, or until the chicken is tender.",
                "Add curry leaves and simmer for a couple of minutes.",
                "Serve hot with Ragi Mudde, plain rice, or idli/dosa."
            ],
            culturalSignificance: "A common and comforting chicken curry across many parts of Karnataka, especially in the Old Mysore region. It's less heavy than coastal curries and often prepared for everyday meals."
        },
        // --- NORTH KARNATAKA FOODS ---
        {
            name: "Jolada Rotti",
            category: "vegetarian",
            image: "images/Jowar-Roti.jpg",
            description: "A staple flatbread from North Karnataka, made from jowar (sorghum) flour. It's known for being healthy, gluten-free, and traditionally eaten with spicy curries or chutneys.",
            ingredients: [
                "1 cup Jowar (Sorghum) flour",
                "1 cup boiling hot water (approximately, may vary slightly)",
                "Salt to taste",
                "Dry jowar flour for dusting"
            ],
            recipe: [
                "In a wide bowl, add the jowar flour and salt.",
                "Gradually add the boiling hot water to the flour, mixing with a wooden spoon or spatula until a shaggy dough forms. Be careful as the water is hot.",
                "Once cool enough to handle, knead the dough thoroughly for about 5-7 minutes until it's smooth and pliable. The consistency is key for soft rotis.",
                "Divide the dough into equal-sized balls.",
                "Dust your rolling surface (a clean counter or a wooden board) and your hands liberally with dry jowar flour.",
                "Place one dough ball on the dusted surface. Using the heel of your palm, gently press and rotate the dough outwards to flatten it into a thin round roti. Alternatively, you can use a rolling pin very gently.",
                "Heat a tawa (griddle) on medium-high heat.",
                "Carefully lift the roti and place it on the hot tawa.",
                "Wet your fingers and gently spread a thin layer of water over the top surface of the roti (this helps keep it soft).",
                "Cook for about 30 seconds until bubbles appear, then flip.",
                "Cook the other side for another minute until small brown spots appear. The roti should puff up if done correctly.",
                "Remove from tawa and serve hot with Badanekayi Ennegayi (stuffed brinjal curry), chutney powder, or any spicy North Karnataka curry."
            ],
            culturalSignificance: "The heart of North Karnataka's cuisine, representing its agricultural traditions. It's a daily bread for many and a symbol of robust, healthy eating."
        },
        {
            name: "Ennegayi (Stuffed Brinjal Curry)",
            category: "vegetarian",
            image: "images/Ennegayi (Stuffed Brinjal Curry).jpg", // Add this image
            description: "A signature spicy and tangy curry from North Karnataka made with small purple brinjals stuffed with a flavorful blend of roasted spices, peanuts, and tamarind.",
            ingredients: [
                "8-10 small brinjals (eggplant)",
                "For Stuffing Masala: 1/4 cup roasted peanuts, 2 tbsp grated dry coconut, 1 tbsp sesame seeds, 1 tbsp coriander seeds, 1 tsp cumin seeds, 1/2 tsp fenugreek seeds, 5-6 dry red chillies, 1/2 inch ginger, 3-4 garlic cloves, Small ball of tamarind, 1/2 tsp jaggery, Salt to taste",
                "1 large onion, chopped",
                "Oil for cooking",
                "Curry leaves",
                "Coriander leaves for garnish"
            ],
            recipe: [
                "Slit brinjals into four quarters from the bottom, keeping the stem intact. Soak in salt water to prevent discoloration.",
                "For Masala: Dry roast peanuts, dry coconut, sesame seeds, coriander seeds, cumin seeds, fenugreek seeds, and red chillies separately until aromatic. Cool.",
                "Grind the roasted ingredients with ginger, garlic, tamarind, jaggery, and salt, adding minimal water to a thick paste.",
                "Drain brinjals and pat dry. Generously stuff the prepared masala into each brinjal.",
                "Heat oil in a heavy-bottomed pan. Add curry leaves and chopped onion, sauté until golden.",
                "Carefully place the stuffed brinjals in the pan. Add any leftover masala paste and 1/2 to 1 cup water. Mix gently.",
                "Cover and cook on low flame, stirring occasionally, until brinjals are tender and the gravy thickens (about 15-20 minutes).",
                "Garnish with coriander leaves and serve hot with Jolada Rotti or chapati."
            ],
            culturalSignificance: "A quintessential North Karnataka dish, deeply rooted in its culinary identity. The process of stuffing and slow-cooking gives it a unique rich flavor."
        },
        {
            name: "Shenga Chutney Pudi (Groundnut Chutney Powder)",
            category: "vegetarian",
            image: "images/Shenga Chutney Pudi (Groundnut Chutney Powder).jpg", // Add this image
            description: "A popular, coarse, and spicy dry chutney powder from North Karnataka, made primarily from roasted groundnuts and various spices. It's a versatile condiment served with rotis, dosas, or rice.",
            ingredients: [
                "1 cup raw groundnuts (peanuts)",
                "8-10 dry red chillies (adjust to spice preference)",
                "1 tbsp cumin seeds",
                "1 tsp tamarind",
                "1/2 tsp asafoetida (hing)",
                "10-12 curry leaves",
                "Salt to taste",
                "1-2 garlic cloves (optional)"
            ],
            recipe: [
                "Dry roast groundnuts on a medium flame until well roasted and aromatic. Let them cool, then rub them to remove the skin (optional, but preferred for smoother texture).",
                "In the same pan, dry roast dry red chillies, cumin seeds, asafoetida, and curry leaves until aromatic.",
                "Combine the roasted groundnuts, roasted spices, tamarind, salt, and garlic (if using) in a dry grinder or mixer.",
                "Grind to a coarse powder. Do not over-grind, or it will turn into a paste due to oil release from peanuts. The texture should be slightly grainy.",
                "Store in an airtight container at room temperature. It stays fresh for several weeks.",
                "Serve with Jolada Rotti, Akki Rotti, Idli, Dosa, or mix with a spoonful of hot rice and ghee."
            ],
            culturalSignificance: "A staple in North Karnataka households, reflecting the region's reliance on groundnuts. It's a quick and flavorful accompaniment that adds a punch to any meal."
        },
        // --- SOUTH KARNATAKA SNACKS ---
        {
            name: "Maddur Vada",
            category: "snacks",
            image: "images/Maddur Vada.jpg",
            description: "A crispy and savory fried fritter, famous from the town of Maddur in Karnataka, made with semolina, rice flour, maida, and spices.",
            ingredients: [
                "1/2 cup fine semolina (rava)",
                "1/2 cup rice flour",
                "1/4 cup maida (all-purpose flour)",
                "1 large onion, finely chopped",
                "2-3 green chillies, finely chopped",
                "A few curry leaves, chopped",
                "1/2 inch ginger, grated",
                "A pinch of asafoetida (hing)",
                "Salt to taste",
                "Hot oil (from deep frying) for the dough",
                "Water as needed",
                "Oil for deep frying"
            ],
            recipe: [
                "In a mixing bowl, combine semolina, rice flour, maida, finely chopped onion, green chillies, curry leaves, grated ginger, asafoetida, and salt.",
                "Add 2-3 tablespoons of hot oil (from the oil heating for frying) to the mixture and mix well with a spoon. This helps in making the vada crispy.",
                "Gradually add water and knead into a firm but pliable dough. Do not make it too soft.",
                "Heat oil in a deep pan for frying.",
                "Take a small portion of the dough, flatten it slightly (like a small patty) on your palm or a greased surface. You can make a small hole in the center if desired.",
                "Gently drop the vadas into the hot oil. Fry on medium flame until golden brown and crispy on both sides.",
                "Remove with a slotted spoon and drain excess oil on paper towels.",
                "Serve hot with coconut chutney and filter coffee."
            ],
            culturalSignificance: "A popular railway station snack, particularly famous around Maddur town on the Bengaluru-Mysore highway. It's a common tea-time snack."
        },
        {
            name: "Mangaluru Buns",
            category: "snacks",
            image: "images/Mangaluru Buns.jpg",
            description: "A unique, slightly sweet, fluffy, and savory deep-fried puri-like bread made with overripe bananas, popular as a breakfast or tea-time snack in the Mangalore region.",
            ingredients: [
                "2 overripe bananas, mashed well",
                "1.5 cups maida (all-purpose flour)",
                "2 tbsp sugar",
                "1/4 tsp cumin seeds (jeera)",
                "1/4 tsp baking soda (optional, but recommended for fluffiness)",
                "2 tbsp curds/yogurt (plain)",
                "Salt to taste",
                "Oil for deep frying"
            ],
            recipe: [
                "In a large mixing bowl, mash the overripe bananas thoroughly until no lumps remain.",
                "Add sugar, cumin seeds, baking soda (if using), curds, and salt to the mashed bananas. Mix well to combine.",
                "Gradually add the maida to the banana mixture, kneading it into a soft, smooth dough. Do not add water. The moisture from the bananas and curd should be sufficient. The dough will be slightly sticky initially.",
                "Apply a little oil to your hands and the dough. Cover the bowl with a damp cloth and let it rest for at least 4-6 hours, or preferably overnight, for fermentation. This step is crucial for the texture.",
                "After resting, the dough will be softer and slightly fermented. Knead it lightly again.",
                "Heat oil in a deep pan for frying.",
                "Take small portions of the dough and gently roll them out into thick, slightly oval or round puris (about 4-5 inches in diameter and thicker than regular puris). They should be puffed up when fried.",
                "Carefully drop the rolled buns into the hot oil. Fry on medium flame, flipping occasionally, until golden brown and puffed up on both sides.",
                "Remove with a slotted spoon and drain excess oil on paper towels.",
                "Serve hot with coconut chutney, sambar, or as a sweet snack on its own."
            ],
            culturalSignificance: "A signature dish of Mangalorean breakfast, loved for its unique sweet and savory taste. It showcases the region's use of local produce like bananas."
        },
        {
            name: "Goli Bajji / Mangalore Bajji",
            category: "snacks",
            image: "images/Mangalore Bajji.jpg", // Add this image
            description: "Fluffy, crispy, and soft deep-fried fritters from the Mangalore region, made with maida (all-purpose flour), curd, green chillies, ginger, and curry leaves.",
            ingredients: [
                "1 cup maida (all-purpose flour)",
                "1/2 cup sour curd (yogurt)",
                "1-2 green chillies, finely chopped",
                "1/2 inch ginger, finely chopped or grated",
                "A few curry leaves, finely chopped",
                "1/4 tsp cumin seeds",
                "1 tbsp rice flour (for crispiness)",
                "A pinch of baking soda (optional)",
                "Salt to taste",
                "Water (if needed, very little)",
                "Oil for deep frying"
            ],
            recipe: [
                "In a mixing bowl, combine maida, rice flour, green chillies, ginger, curry leaves, cumin seeds, baking soda, and salt.",
                "Add sour curd and mix well. Gradually add very little water if needed, to form a thick, sticky batter. The batter should not be runny, but thick enough to drop by hand.",
                "Cover the bowl and let the batter rest for at least 30 minutes (or up to 1-2 hours for better fermentation and fluffiness).",
                "Heat oil in a deep pan for frying. The oil should be moderately hot.",
                "Wet your hands slightly. Take small portions of the batter with your fingers and gently drop them into the hot oil. They should be roughly spherical (like a 'goli' or ball).",
                "Fry on medium-low flame, stirring occasionally, until the bajjis are golden brown and cooked through. The low flame ensures even cooking inside.",
                "Remove with a slotted spoon and drain excess oil on paper towels.",
                "Serve hot with coconut chutney."
            ],
            culturalSignificance: "A very popular tea-time snack and breakfast item in the coastal parts of Karnataka. Its unique texture and mild spiciness make it a favorite."
        },
        {
            name: "Congress Kadlekai (Masala Peanuts)",
            category: "snacks",
            image: "images/Congress Kadlekai (Masala Peanuts).jpg", // Add this image
            description: "A highly addictive spicy and tangy roasted peanut snack, famous in Bangalore's bakeries and snack shops. 'Kadlekai' means peanut in Kannada.",
            ingredients: [
                "1 cup roasted peanuts (skin removed)",
                "1 tsp red chili powder (adjust to spice)",
                "1/2 tsp turmeric powder",
                "1/2 tsp chaat masala",
                "1/4 tsp amchur (dry mango) powder",
                "A pinch of asafoetida (hing)",
                "1-2 green chillies, finely chopped (optional)",
                "A few curry leaves, chopped",
                "1 tsp oil",
                "Salt to taste"
            ],
            recipe: [
                "If using raw peanuts, dry roast them first, cool, and remove skin.",
                "Heat oil in a pan. Add green chillies (if using) and curry leaves, sauté for a few seconds.",
                "Add roasted peanuts to the pan. Sauté for a minute.",
                "Lower the flame. Add red chili powder, turmeric powder, chaat masala, amchur powder, asafoetida, and salt. Mix well to coat the peanuts evenly with the spices.",
                "Sauté for another 2-3 minutes on low flame, ensuring the spices are cooked and adhere to the peanuts without burning.",
                "Remove from heat and let it cool completely. Store in an airtight container.",
                "Serve as a standalone snack with tea or coffee."
            ],
            culturalSignificance: "A beloved snack particularly famous in Bangalore, often found in bakeries and referred to as 'Congress' due to its distinct splitting pattern similar to political parties splitting (a humorous anecdote, not political)."
        },
        {
            name: "Akki Shavige",
            category: "vegetarian", // Categorizing as main food, but also served as snack/breakfast
            image: "images/Akki Shavige.jpg",
            description: "Thin, delicate rice vermicelli, often served with coconut milk (hasiru khara) or various spicy curries. It's a popular breakfast item, particularly in the Malnad and coastal regions.",
            ingredients: [
                "1 cup raw rice",
                "Water for soaking and cooking",
                "Salt to taste",
                "For Coconut Chutney (Hasiru Khara - common accompaniment): Grated coconut, green chillies, ginger, tamarind, roasted chana dal, salt."
            ],
            recipe: [
                "Prepare Rice Dough: Soak raw rice for 4-6 hours. Drain and grind it with just enough water to a very smooth, thick batter (thicker than dosa batter).",
                "Cook this batter on a medium flame, stirring continuously, until it thickens into a lump-free, glossy dough that pulls away from the sides of the pan. This is similar to making ragi mudde dough, but with rice.",
                "Allow the dough to cool slightly until it's warm enough to handle. Knead it well with oiled hands.",
                "Press Noodles: Use a traditional 'Shavige Mane' (a manual rice noodle press) or a modern idiyappam/sevai maker. Fill the press with a portion of the warm rice dough.",
                "Press the noodles directly into a steamer basket or idli molds. Steam for 5-7 minutes until cooked through and translucent.",
                "Carefully remove the steamed noodles. They should be soft and separate easily.",
                "Serve: Akki Shavige is very versatile. Sweet Version: Serve with sweetened coconut milk (mix coconut milk with jaggery/sugar and a pinch of cardamom). Savory Version: Serve with 'Hasiru Khara' (a green coconut chutney/curry), or any spicy vegetable/chicken/fish curry. For Hasiru Khara, grind coconut, green chillies, ginger, tamarind, roasted chana dal, and salt with a little water to a fine paste. Temper with mustard seeds and curry leaves."
            ],
            culturalSignificance: "A traditional and labor-intensive dish, often prepared for festivals and special occasions in many households, especially in regions with a strong rice cultivation history."
        },
        // --- NORTH KARNATAKA SNACKS ---
        {
            name: "Churmuri",
            category: "snacks",
            image: "images/Churmuri.jpg", // Add this image
            description: "A spicy, tangy, and crunchy street snack from North Karnataka, made with puffed rice, finely chopped onions, tomatoes, coriander, and a special spice blend.",
            ingredients: [
                "2 cups puffed rice (mandakki)",
                "1/2 onion, finely chopped",
                "1/2 tomato, finely chopped",
                "1/4 cup finely chopped cucumber (optional)",
                "2 tbsp finely chopped coriander leaves",
                "1-2 green chillies, finely chopped (adjust spice)",
                "1 tbsp grated carrot (optional)",
                "1 tsp roasted peanut powder (optional)",
                "1 tsp red chilli powder",
                "1/2 tsp cumin powder",
                "1/2 tsp chaat masala (optional)",
                "A pinch of black salt (kala namak)",
                "Juice of 1/2 lemon",
                "2 tbsp Bhel Puri chutney or spicy red chutney (optional, for extra flavor)",
                "Sev (thin crispy noodles) for garnish"
            ],
            recipe: [
                "In a large mixing bowl, combine puffed rice, chopped onion, tomato, cucumber, coriander leaves, green chillies, and grated carrot.",
                "Add red chilli powder, cumin powder, chaat masala, black salt, and peanut powder (if using).",
                "Add lemon juice and the Bhel Puri chutney (if using).",
                "Mix everything thoroughly and quickly, ensuring all ingredients are well combined and the puffed rice is coated with spices.",
                "Serve immediately in cones or bowls, garnished with sev. Churmuri tends to get soggy quickly, so it's best eaten fresh."
            ],
            culturalSignificance: "A popular and ubiquitous street food across Karnataka, especially in North Karnataka. It's a quick, refreshing, and spicy snack, perfect for a quick bite."
        },
        {
            name: "Mirchi Bajji",
            category: "snacks",
            image: "images/Mirchi Bajji.jpg", // Add this image
            description: "Large green chilies (bajji mirchi) coated in a thick, spiced gram flour (besan) batter and deep-fried until crispy. A popular hot snack, especially during monsoon or winter.",
            ingredients: [
                "8-10 large green chillies (bajji mirchi)",
                "1 cup besan (gram flour)",
                "2 tbsp rice flour (for crispiness)",
                "1/2 tsp red chilli powder",
                "1/4 tsp turmeric powder",
                "1/4 tsp asafoetida (hing)",
                "1/4 tsp carom seeds (ajwain), crushed (optional)",
                "A pinch of baking soda (optional, for fluffiness)",
                "Salt to taste",
                "Water as needed for batter",
                "Oil for deep frying"
            ],
            recipe: [
                "Wash and pat dry the large green chillies. Make a slit lengthwise on one side, ensuring not to cut through completely. Remove seeds if you prefer less spice.",
                "In a mixing bowl, combine besan, rice flour, red chilli powder, turmeric powder, asafoetida, carom seeds, baking soda, and salt.",
                "Gradually add water and whisk to form a thick, smooth batter of pouring consistency. It should be thick enough to coat the chillies well without dripping too much.",
                "Heat oil in a deep pan for deep frying.",
                "Dip each green chili into the prepared batter, ensuring it's evenly coated.",
                "Gently slide the coated chillies into the hot oil. Fry on medium flame, turning occasionally, until golden brown and crispy.",
                "Remove with a slotted spoon and drain excess oil on paper towels.",
                "Serve hot with coconut chutney, tamarind chutney, or as an accompaniment to churmuri."
            ],
            culturalSignificance: "A beloved snack, particularly common at street food stalls and during colder weather. It's a popular accompaniment to hot tea or coffee."
        },
        // --- SOUTH KARNATAKA SWEETS ---
        {
            name: "Mysore Pak",
            category: "sweets",
            image: "images/Mysore Pak.jpg",
            description: "Mysore Pak is among the top famous Karnataka food items that you must try while in Karnataka. A rich, sweet delicacy from Mysore, made from gram flour (besan), ghee, and sugar, with a melt-in-your-mouth texture.",
            ingredients: [
                "1 cup besan (gram flour)",
                "1.5 cups sugar",
                "1 cup water",
                "1.5 cups ghee (clarified butter)",
                "A pinch of cardamom powder (optional)"
            ],
            recipe: [
                "Sieve the besan to remove any lumps.",
                "In a heavy-bottomed pan, combine sugar and water. Bring to a boil and cook until it reaches a one-string consistency (when a drop of syrup forms a string between your thumb and forefinger).",
                "Meanwhile, gently heat the ghee in a separate pan.",
                "Reduce the flame of the sugar syrup. Gradually add the sieved besan to the syrup, whisking continuously to prevent lumps.",
                "Once the besan is fully incorporated and smooth, start adding the hot ghee, one spoonful at a time, stirring continuously. The mixture will absorb the ghee.",
                "Continue adding ghee and stirring until the mixture becomes frothy, porous, and leaves the sides of the pan. It should smell nutty and turn light golden.",
                "If using, add cardamom powder and mix.",
                "Pour the mixture into a greased tray and spread evenly.",
                "Let it cool slightly, then cut into desired shapes (squares or rectangles) while still warm. Allow to cool completely before serving."
            ],
            culturalSignificance: "A royal sweet, believed to have been invented in the kitchens of the Mysore Palace. It's a popular sweet for festivals and celebrations across Karnataka."
        },
        {
            name: "Obbattu / Holige (Puran Poli)",
            category: "sweets",
            image: "images/Obbattu.jpg", // Add this image
            description: "A traditional sweet flatbread, popular throughout Karnataka and other parts of South India. It consists of a thin, soft outer layer made from maida (all-purpose flour) or wheat flour, filled with a sweet stuffing, usually of cooked and mashed chana dal (split Bengal gram) and jaggery.",
            ingredients: [
                "For Outer Dough: 1 cup maida (all-purpose flour), 1/4 tsp turmeric powder, 1/4 tsp salt, Water as needed, Oil for kneading and soaking",
                "For Stuffing (Puran): 1 cup Chana Dal (split Bengal gram), 1 cup grated jaggery (adjust to sweetness), 1/2 tsp cardamom powder, A pinch of nutmeg powder (optional)"
            ],
            recipe: [
                "For Dough: Mix maida, turmeric, and salt. Gradually add water to make a soft, sticky dough. Knead well. Apply liberal amounts of oil and continue kneading until the dough is very soft, pliable, and elastic. Cover with oil and let it rest for at least 2-3 hours (or overnight). This makes it very stretchy.",
                "For Stuffing: Wash and cook Chana Dal in a pressure cooker with just enough water until soft but not mushy (about 2 whistles). Drain any excess water completely. Mash the dal well.",
                "In a pan, combine the mashed dal and jaggery. Cook on medium heat, stirring continuously, until the jaggery melts and the mixture thickens, leaving the sides of the pan. It should be a firm, non-sticky mass. Add cardamom and nutmeg powder. Let cool.",
                "Making Obbattu: Take a small portion of the rested dough. Flatten it slightly on a greased surface or a plastic sheet. Place a ball of the stuffing in the center.",
                "Bring the edges of the dough together to seal the stuffing inside, forming a ball. Flatten gently.",
                "Roll out gently and evenly into a thin disc using a little oil or rice flour for dusting. Be careful not to tear it.",
                "Cook: Heat a tawa (griddle). Gently place the rolled Obbattu on the hot tawa. Cook on both sides until golden brown spots appear, applying a little ghee. It should puff up slightly.",
                "Serve hot with a generous dollop of ghee, milk, or `obbattu saaru` (a thin, sweet, and tangy rasam made from the lentil water)."
            ],
            culturalSignificance: "A festive special, synonymous with Ugadi (Kannada New Year) and other major celebrations in Karnataka. Preparing Obbattu is a cherished tradition in many households."
        },
        {
            name: "Kesari Bath",
            category: "sweets",
            image: "images/Kesari Bath.jpg", // Add this image
            description: "A vibrant, sweet, and aromatic semolina (rava) pudding, colored with saffron and enriched with ghee and dry fruits. It's a popular breakfast item or dessert in South India, often served with Khara Bath as 'Chow-Chow Bath'.",
            ingredients: [
                "1 cup Bombay Rava (fine semolina)",
                "1/2 cup ghee (clarified butter)",
                "1 cup sugar (adjust to taste)",
                "3 cups hot water (or 2.5 cups hot water + 0.5 cup hot milk)",
                "A pinch of saffron strands (soaked in a tbsp of warm milk/water)",
                "1/4 tsp cardamom powder",
                "A handful of cashews and raisins",
                "A few drops of orange food color (optional, for vibrant color)"
            ],
            recipe: [
                "Heat 1-2 tbsp ghee in a heavy-bottomed pan. Add cashews and raisins and fry until golden. Remove and set aside.",
                "In the same pan, add the remaining ghee and then add the semolina (rava). Roast the rava on a low flame, stirring continuously, until it becomes aromatic and slightly golden. Be careful not to burn it.",
                "Meanwhile, have the hot water (and milk, if using) ready. Gradually pour the hot water/milk into the roasted rava, stirring continuously to prevent lumps. Be careful as it will splutter.",
                "Cover the pan and cook on low flame for 5-7 minutes until the rava absorbs all the water and cooks thoroughly.",
                "Add sugar, saffron milk, cardamom powder, and food color (if using). Mix well. The mixture will loosen up due to sugar melting.",
                "Continue cooking, stirring frequently, until the mixture thickens and leaves the sides of the pan. Add the fried cashews and raisins.",
                "Switch off the flame, cover, and let it rest for 5 minutes for flavors to meld. Serve warm."
            ],
            culturalSignificance: "A quintessential breakfast or dessert item in Karnataka, especially in the Old Mysore region. It's a comforting dish often served at celebrations, temples, and tiffin centers."
        },
        // --- NORTH KARNATAKA SWEETS ---
        {
            name: "Dharwad Peda",
            category: "sweets",
            image: "images/Dharwad Peda.jpg", // Add this image
            description: "A unique, caramelized, and granular milk fudge originating from Dharwad, North Karnataka. It's famous for its distinctive texture and rich, nutty flavor.",
            ingredients: [
                "1 litre full-fat milk",
                "1/2 cup sugar (adjust to taste)",
                "1/4 tsp cardamom powder",
                "1 tbsp ghee (clarified butter)",
                "Powdered sugar for dusting (optional)"
            ],
            recipe: [
                "In a large, heavy-bottomed pan, bring milk to a boil. Reduce heat and simmer, stirring frequently to prevent scorching, until it thickens and reduces to a semi-solid khoya/mawa (milk solids). This takes considerable time and patience.",
                "Once the milk has reduced significantly and starts leaving the sides of the pan, add sugar. Continue stirring. The sugar will melt and make the mixture liquidy again. Keep cooking on low flame.",
                "As the sugar caramelizes, the mixture will start changing color to a light brown and become grainy. Continue stirring until it forms a soft, crumbly mass that comes together.",
                "Add ghee and cardamom powder. Mix well and cook for a few more minutes until the ghee separates slightly and the mixture is well browned and crumbly.",
                "Remove from heat and let it cool slightly. While still warm, pinch small portions and shape them into pedas. You can roll them in powdered sugar if desired.",
                "Store in an airtight container."
            ],
            culturalSignificance: "A sweet with a Geographical Indication (GI) tag, renowned specifically from Dharwad. It's a culinary heritage item, highly sought after and unique to the region."
        },
        {
            name: "Gokak Karadantu",
            category: "sweets",
            image: "images/Gokak Karadantu.jpg", // Add this image
            description: "A highly nutritious and traditional sweet originating from Gokak, North Karnataka. It's a dense, chewy sweet made from edible gum (antu), jaggery, and a variety of nuts and dry fruits.",
            ingredients: [
                "1 cup edible gum (Gond/Antu), fried and crushed",
                "1 cup mixed dry fruits (almonds, cashews, pistachios, dates), chopped",
                "1/2 cup mixed seeds (melon seeds, poppy seeds, sesame seeds)",
                "1/4 cup dry coconut, grated and roasted",
                "1 cup jaggery, grated",
                "1/2 cup ghee (clarified butter)",
                "1/4 cup wheat flour (optional, for binding)",
                "1/2 tsp cardamom powder",
                "Water as needed for jaggery syrup"
            ],
            recipe: [
                "Heat 1-2 tbsp ghee in a pan. Fry the edible gum until it puffs up and becomes crispy. Crush it once cooled.",
                "In the same pan, lightly roast dry fruits, seeds, and grated dry coconut separately until aromatic. Set aside.",
                "In a heavy-bottomed pan, melt ghee. Add wheat flour (if using) and roast until aromatic.",
                "Add grated jaggery and a splash of water (about 1/4 cup). Cook until the jaggery melts and forms a thick, sticky syrup (reaching a soft ball consistency or one-string).",
                "Remove from heat. Quickly add the fried edible gum, roasted dry fruits, seeds, coconut, and cardamom powder to the jaggery syrup. Mix everything very quickly and thoroughly.",
                "Immediately transfer the mixture to a greased tray and press down firmly to flatten it evenly. You can use a greased bowl or back of a spoon.",
                "While still warm, cut into squares or diamond shapes. Let cool completely before serving.",
                "Store in an airtight container. It has a long shelf life."
            ],
            culturalSignificance: "A health-conscious traditional sweet, especially popular during winters due to its warming ingredients. It's a specialty of Gokak, known for its unique blend of nutritious elements."
        }
    ];

    function displayFoods(filteredFoods) {
        foodGallery.innerHTML = ''; // Clear existing cards
        if (filteredFoods.length === 0) {
            foodGallery.innerHTML = '<p class="no-results">No food items found matching your criteria.</p>';
            return;
        }
        filteredFoods.forEach(food => {
            const foodCard = document.createElement('div');
            foodCard.classList.add('food-card');
            foodCard.dataset.category = food.category; // For filtering
            foodCard.innerHTML = `
                <img src="${food.image}" alt="${food.name}">
                <h3>${food.name}</h3>
                <p>${food.description.substring(0, 100)}...</p>
            `;
            foodCard.addEventListener('click', () => openModal(food));
            foodGallery.appendChild(foodCard);
        });
    }

    function openModal(food) {
        document.getElementById('modalFoodName').textContent = food.name;
        document.getElementById('modalFoodImage').src = food.image;
        document.getElementById('modalFoodImage').alt = food.name;
        document.getElementById('modalFoodDescription').textContent = food.description;

        const ingredientsList = document.getElementById('modalIngredientsList');
        ingredientsList.innerHTML = '';
        food.ingredients.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            ingredientsList.appendChild(li);
        });

        const recipeSteps = document.getElementById('modalRecipeSteps');
        recipeSteps.innerHTML = '';
        food.recipe.forEach(step => {
            const li = document.createElement('li');
            li.textContent = step;
            recipeSteps.appendChild(li);
        });

        document.getElementById('modalCulturalSignificance').textContent = `Cultural Significance: ${food.culturalSignificance}`;

        modal.style.display = 'flex'; // Show the modal
    }

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none'; // Hide the modal
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none'; // Hide modal if clicked outside
        }
    });

    // Filtering functionality
    window.filterFoods = function(category) {
        let filtered = [];
        if (category === 'all') {
            filtered = foods;
        } else {
            filtered = foods.filter(food => food.category === category);
        }
        displayFoods(filtered);
    };

    // Search functionality
    searchInput.addEventListener('keyup', (event) => {
        const searchTerm = event.target.value.toLowerCase();
        const filtered = foods.filter(food =>
            food.name.toLowerCase().includes(searchTerm) ||
            food.description.toLowerCase().includes(searchTerm) ||
            food.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchTerm))
        );
        displayFoods(filtered);
    });

    // Initial display of all foods
    displayFoods(foods);
});