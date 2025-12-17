import { useEffect, useRef, useState } from "react";
import IngredientsList from "./recipe/IngredientsList";
import { getRecipeFromLlama } from "../ai";
import LlamaRecipe from "./recipe/LlamaRecipe";

export default function MainContent() {
  const [ingredients, setIngredients] = useState<string[]>([]);

  function getIngredient(formData: FormData) {
    const formIngredient = formData.get("ingredient") as string;
    setIngredients((prevIngredients) => [...prevIngredients, formIngredient]);
  }

  const [recipe, setRecipe] = useState("");

  async function getRecipe() {
    const recipeMarkdown = await getRecipeFromLlama(ingredients);
    if (recipeMarkdown) {
      setRecipe(recipeMarkdown);
    }
  }

  const recipeSection = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (recipe !== "" && recipeSection.current !== null) {
      recipeSection.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [recipe]);

  return (
    <main>
      <form action={getIngredient} className="add-ingredient-form">
        <input type="text" placeholder="e.g. milk" name="ingredient" />
        <button>Add ingredient</button>
      </form>
      {ingredients.length > 0 && (
        <IngredientsList
          ingredients={ingredients}
          getRecipe={getRecipe}
          ref={recipeSection}
        />
      )}

      {recipe && <LlamaRecipe recipe={recipe} />}
    </main>
  );
}
