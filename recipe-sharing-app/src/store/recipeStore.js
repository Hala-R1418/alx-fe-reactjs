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

  addRecipe: (newRecipe) =>
    set((state) => {
      const updatedRecipes = [...state.recipes, newRecipe];
      return {
        recipes: updatedRecipes,
        filteredRecipes: filterByTerm(updatedRecipes, state.searchTerm),
      };
    }),

  deleteRecipe: (id) =>
    set((state) => {
      const updatedRecipes = state.recipes.filter((r) => r.id !== id);
      return {
        recipes: updatedRecipes,
        filteredRecipes: filterByTerm(updatedRecipes, state.searchTerm),
      };
    }),

  updateRecipe: (updatedRecipe) =>
    set((state) => {
      const updatedRecipes = state.recipes.map((r) =>
        r.id === updatedRecipe.id ? updatedRecipe : r
      );
      return {
        recipes: updatedRecipes,
        filteredRecipes: filterByTerm(updatedRecipes, state.searchTerm),
      };
    }),

  setSearchTerm: (term) =>
    set((state) => ({
      searchTerm: term,
      filteredRecipes: filterByTerm(state.recipes, term),
    })),

  setRecipes: (recipes) =>
    set((state) => ({
      recipes,
      filteredRecipes: filterByTerm(recipes, state.searchTerm),
    })),
}));

"setSearchTerm", "searchTerm"