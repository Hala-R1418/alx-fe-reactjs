import { useState } from 'react';
import { useRecipeStore } from '../recipeStore';

const EditRecipeForm = ({ recipe, onFinish }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe({ id: recipe.id, title, description });
    onFinish();
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        style={{ display: 'block', marginBottom: '0.5rem', width: '300px' }}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        style={{ display: 'block', marginBottom: '0.5rem', width: '300px', height: '100px' }}
      />
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditRecipeForm;
