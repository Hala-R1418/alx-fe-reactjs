import { useRecipeStore } from '../recipeStore';
import { useParams, useNavigate } from 'react-router-dom';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';
import { useState } from 'react';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipeId = Number(id);
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === recipeId)
  );
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  if (!recipe) {
    return <p>Recipe not found.</p>;
  }

  return (
    <div style={{ padding: '1rem' }}>
      {isEditing ? (
        <EditRecipeForm
          recipe={recipe}
          onFinish={() => setIsEditing(false)}
        />
      ) : (
        <>
          <h1>{recipe.title}</h1>
          <p>{recipe.description}</p>
          <button onClick={() => setIsEditing(true)}>Edit Recipe</button>
          <DeleteRecipeButton recipeId={recipe.id} onDelete={() => navigate('/')} />
        </>
      )}
    </div>
  );
};

export default RecipeDetails;
