import { useNavigate } from 'react-router-dom'; // ✅ Make sure this is here
import { useRecipeStore } from '../stores/recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate(); // ✅ This is what the error is referring to

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate('/'); // ✅ Navigates back to homepage after deletion
  };

  return <button onClick={handleDelete}>Delete Recipe</button>;
};

export default DeleteRecipeButton;
