import React from 'react'

const IngredientsSection = ({ingredients, showRecipe, recipeReference}) => {

const ingredientsInnerHtml = ingredients.map(oneIngredient => (<li key={oneIngredient}>{oneIngredient}</li>))

  return (
    <div>
      <section>
      <h2>Ingredients on hand:</h2>
        <ul id="ingredients-ul" className="ingredients-list">
            {ingredientsInnerHtml}
        </ul>
      </section>
      {ingredients.length > 2 && 
        <div className="get-recipe-container" ref={recipeReference}>
            <div>
                <h3>Ready for a recipe?</h3>
                <p>Generate a recipe from your list of ingredients.</p>
            </div>
            <button onClick={showRecipe}>Get a recipe</button>
        </div>
      
      }
    </div>
  )
}

export default IngredientsSection
