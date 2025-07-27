import { create } from 'zustand';

const filterByTerm = (recipes, term) => {
  if (!term) return recipes;
  return recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(term.toLowerCase())
  );
};

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  filteredRecipes: [],
  searchTerm: '',
  favorites: [],            // <-- Added favorites state
  recommendations: [],      // <-- Added recommendations state

  addRecipe: (newRecipe) =>
    set((state) => {
      const updatedRecipes = [...state.recipes, newRecipe];
      return {
        recipes: upd
