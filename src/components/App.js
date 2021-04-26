import React, { useState } from 'react'
import RecipeList from './RecipeList'
import '../css/app.css'
import { v4 as uuidv4 } from 'uuid';

export const RecipeContext = React.createContext()

function App() {
  const [recipes, setRecipes] = useState(sampleRecipes)
  
  const recipeContextValue = {
    handleRecipeAdd,
    handleRecipeDelete
  }

  function handleRecipeAdd() {
    const newRecipe = {
      id: uuidv4(),
      name: 'New',
      servings: 1,
      cookTime: '1:00',
      instructions: 'Instr.',
      ingredients: [
        { id: uuidv4(), name: 'Name', amount: '1 Tbs' }
      ]
    }
  
    setRecipes([...recipes, newRecipe])
  }

  function handleRecipeDelete(id) {
    setRecipes(recipes.filter(recipe => recipe.id !== id))
  }

  return (
    <RecipeContext.Provider value={recipeContextValue}>
      <RecipeList recipes = {recipes} />
    </RecipeContext.Provider>
  )
}



const sampleRecipes = [
  {
    id: 1,
    name: 'Plain Chicken',
    servings: 3,
    cookTime: '1:45',
    instructions: '1. Put salt on Chicken\n2. Rub the chicken sensually\n3. Poop on the chicken.',
    ingredients: [
      {
        id: 1,
        name: 'chicken',
        amount: '1 kg'
      },
      {
        id: 2,
        name: 'lard',
        amount: 'until you are satiated'
      }
    ]
  },
  {
    id: 2,
    name: 'Shitty Pork',
    servings: 5,
    cookTime: '2:02',
    instructions: '1. Pork and pap the pork\n2. Squeeze it\n3. Poop on the pork.',
    ingredients: [
      {
        id: 1,
        name: 'pork',
        amount: '500 lbs'
      },
      {
        id: 2,
        name: 'extra stank',
        amount: 'season to taste'
      }
    ]
  }
]

export default App;
