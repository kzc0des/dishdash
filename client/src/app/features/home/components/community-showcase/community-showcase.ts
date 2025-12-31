import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

interface MealSuggestion {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  createdBy: string;
}

@Component({
  selector: 'app-community-showcase',
  standalone: true,
  templateUrl: './community-showcase.html',
  styleUrls: ['./community-showcase.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommunityShowcase implements OnInit {
  suggestions: MealSuggestion[] = [];

  private allDishes: Omit<MealSuggestion, 'id' | 'createdBy'>[] = [
    { title: 'Spicy Thai Green Curry', description: 'A vibrant and aromatic curry with chicken, coconut milk, and fresh basil.', imageUrl: 'https://www.kitchensanctuary.com/wp-content/uploads/2019/06/Thai-Green-Chicken-Curry-Square-FS.jpg' },

    { title: 'Mediterranean Quinoa Salad', description: 'Healthy and refreshing with quinoa, cucumbers, tomatoes, and a lemon-herb vinaigrette.', imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop' },
    { title: 'Classic Beef Lasagna', description: 'Layers of rich meat sauce, creamy béchamel, and tender pasta baked to perfection.', imageUrl: 'https://www.recipetineats.com/tachyon/2017/05/Lasagne-recipe-3-landscape.jpg' },
    { title: 'Japanese A5 Wagyu', description: 'The highest grade of Japanese beef, known for its marbling, tenderness, and rich flavor.', imageUrl: 'https://images.unsplash.com/photo-1560781290-7dc94c0f8f4f?q=80&w=2070&auto=format&fit=crop' },

    { title: 'Avocado Toast with Egg', description: 'A simple, nutritious breakfast with creamy avocado and a perfectly fried egg on sourdough.', imageUrl: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=1910&auto=format&fit=crop' },
    { title: 'Smoked Salmon Blinis', description: 'Elegant and savory bites, perfect for appetizers, featuring smoked salmon on small pancakes.', imageUrl: 'https://www.recipetineats.com/tachyon/2022/12/Blini-with-smoked-salmom-close-up.jpg' },

    { title: 'Chocolate Lava Cakes', description: 'Decadent individual chocolate cakes with a gooey, molten center.', imageUrl: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=1978&auto=format&fit=crop' },
    { title: 'Gourmet Pizza', description: 'Artisanal pizza with a crispy crust, fresh mozzarella, and high-quality toppings.', imageUrl: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65?q=80&w=1928&auto=format&fit=crop' },
    { title: 'Fresh Pasta Carbonara', description: 'A classic Roman pasta dish with eggs, hard cheese, cured pork, and black pepper.', imageUrl: 'https://supervalu.ie/image/var/files/real-food/recipes/fettuccine-carbonara-recipe.jpg' },
    { title: 'BBQ Pulled Pork Sandwich', description: 'Slow-cooked, tender pulled pork in a tangy BBQ sauce, served on a brioche bun.', imageUrl: 'https://saltpepperskillet.com/wp-content/uploads/pulled-pork-sandwiches-on-butcher-paper-horizontal.jpg' },
  ];

  private usernames: string[] = [
    'ChefKenzo',
    'FoodieVidal',
    'GourmetGuru',
    'SauceSavvy',
    'KitchenKing',
    'MealMaster',
    'FlavorFanatic',
    'RecipeRebel',
    'HungryHacker',
    'CuisineCrafter'
  ];

  ngOnInit(): void {
    this.generateRandomSuggestions();
  }

  private generateRandomSuggestions(): void {
    const shuffledDishes = this.shuffleArray([...this.allDishes]);
    const shuffledUsernames = this.shuffleArray([...this.usernames]);

    this.suggestions = shuffledDishes.slice(0, 4).map((dish, index) => ({
      ...dish,
      id: index + 1,
      createdBy: shuffledUsernames[index % shuffledUsernames.length],
    }));
  }

  private shuffleArray<T>(array: T[]): T[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}