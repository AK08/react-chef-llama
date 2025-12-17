import { forwardRef } from "react";

type Props = {
  ingredients: string[];
  getRecipe: () => void;
};

const IngredientsList = forwardRef<HTMLDivElement, Props>(
  ({ ingredients, getRecipe }, ref) => {
    const ingredientsListItems = ingredients.map((ingredient) => (
      <li key={ingredient}>{ingredient}</li>
    ));

    return (
      <section>
        <h2>Ingredients on hand</h2>
        <ul className="ingredients-list">{ingredientsListItems}</ul>

        {ingredients.length > 3 && (
          <div className="get-recipe-container" ref={ref}>
            <div>
              <h3>Ready for a recipe?</h3>
              <p>Generate a recipe from your list of ingredients.</p>
            </div>
            <button onClick={getRecipe}>Get a recipe</button>
          </div>
        )}
      </section>
    );
  }
);

export default IngredientsList;
