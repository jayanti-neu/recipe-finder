import { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const RecipeFinder = () => {
  // Sample recipe database
  const recipes = [
    {
      id: 1,
      name: "Pasta Carbonara",
      ingredients: ["pasta", "eggs", "bacon", "parmesan", "black pepper"],
      instructions:
        "1. Cook pasta\n2. Fry bacon\n3. Mix eggs and cheese\n4. Combine all ingredients",
    },
    {
      id: 2,
      name: "Simple Pancakes",
      ingredients: ["flour", "milk", "eggs", "butter", "sugar"],
      instructions:
        "1. Mix dry ingredients\n2. Add wet ingredients\n3. Cook on griddle",
    },
    {
      id: 3,
      name: "Basic Omelette",
      ingredients: ["eggs", "milk", "salt", "butter", "cheese"],
      instructions:
        "1. Beat eggs with milk\n2. Melt butter in pan\n3. Cook eggs\n4. Add cheese",
    },
    {
      id: 4,
      name: "Grilled Cheese Sandwich",
      ingredients: ["bread", "cheese", "butter"],
      instructions:
        "1. Butter the bread\n2. Place cheese between slices\n3. Grill until golden brown",
    },
    {
      id: 14,
      name: "Grilled Cheese Sandwich",
      ingredients: ["bread", "cheese"],
      instructions:
        "1. Butter the bread\n2. Place cheese between slices\n3. Grill until golden brown",
    },
    {
      id: 5,
      name: "Caesar Salad",
      ingredients: [
        "romaine lettuce",
        "croutons",
        "parmesan",
        "caesar dressing",
      ],
      instructions:
        "1. Chop lettuce\n2. Add croutons and parmesan\n3. Toss with caesar dressing",
    },
    {
      id: 6,
      name: "Tomato Soup",
      ingredients: ["tomatoes", "onion", "garlic", "broth", "cream"],
      instructions:
        "1. Sauté onion and garlic\n2. Add tomatoes and broth\n3. Simmer and blend\n4. Stir in cream",
    },
    {
      id: 7,
      name: "Avocado Toast",
      ingredients: ["bread", "avocado", "salt", "pepper", "lemon juice"],
      instructions:
        "1. Toast bread\n2. Mash avocado\n3. Spread on bread\n4. Season with salt, pepper, and lemon juice",
    },
    {
      id: 8,
      name: "Chocolate Chip Cookies",
      ingredients: ["flour", "butter", "sugar", "eggs", "chocolate chips"],
      instructions:
        "1. Cream butter and sugar\n2. Add eggs\n3. Mix in dry ingredients\n4. Stir in chocolate chips\n5. Bake at 350°F for 10-12 minutes",
    },
    {
      id: 9,
      name: "Vegetable Stir-Fry",
      ingredients: [
        "mixed vegetables",
        "soy sauce",
        "ginger",
        "garlic",
        "oil",
        "rice",
      ],
      instructions:
        "1. Heat oil in a wok\n2. Sauté garlic and ginger\n3. Add vegetables and stir-fry\n4. Add soy sauce\n5. Serve with rice",
    },
    {
      id: 10,
      name: "Banana Smoothie",
      ingredients: ["banana", "milk", "yogurt", "honey", "ice"],
      instructions:
        "1. Combine all ingredients in blender\n2. Blend until smooth",
    },
  ];

  const [ingredients, setIngredients] = useState("");
  const [searchResults, setSearchResults] = useState<
    { id: number; name: string; ingredients: string[]; instructions: string }[]
  >([]);
  // const [recipesWithOneOrMoreMissingIngredient, setRecipesWithOneOrMoreMissingIngredient] = useState<string[]>([]);
  // const [recipesWithReplacableIngredients, setRecipesWithReplacableIngredients] = useState<string[]>([]);

  const handleSearch = () => {
    const searchIngredients = ingredients
      .toLowerCase()
      .split(",")
      .map((i) => i.trim())
      .filter((i) => i !== "");

    const results = recipes.filter((recipe) => {
      const matchedIngredients = searchIngredients.filter((ingredient) =>
        recipe.ingredients.includes(ingredient)
      );
      // Show recipes that match at least one ingredient
      return matchedIngredients.length == recipe.ingredients.length;
    });

    setSearchResults(results);
  };

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Recipe Finder</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Input
              placeholder="Enter ingredients (comma-separated)"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              className="flex-1"
            />
            <Button onClick={handleSearch}>Search</Button>
          </div>

          <div className="space-y-4">
            {searchResults.map((recipe) => (
              <Card key={recipe.id}>
                <CardHeader>
                  <CardTitle className="text-lg">{recipe.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex flex-wrap gap-2">
                      {recipe.ingredients.map((ing) => (
                        <Badge
                          key={ing}
                          variant={
                            ingredients.toLowerCase().includes(ing)
                              ? "default"
                              : "secondary"
                          }
                        >
                          {ing}
                        </Badge>
                      ))}
                    </div>
                    <div className="mt-2 text-sm whitespace-pre-line">
                      {recipe.instructions}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RecipeFinder;
