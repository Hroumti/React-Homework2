import { createContext, useState } from "react";


const Context = createContext()

export function ContextProvider({children}){
    const mealList = [
  {
    id:1,
    meal: "Grilled Chicken Breast",
    kcal: 165,
    protein: 31,
    carbohydrates: 0,
    lipids: 3.6
  },
  {
    id:2,
    meal: "Cooked White Rice",
    kcal: 130,
    protein: 2.7,
    carbohydrates: 28.2,
    lipids: 0.3
  },
  {
    id:3,
    meal: "Steamed Broccoli",
    kcal: 35,
    protein: 2.4,
    carbohydrates: 7.2,
    lipids: 0.3
  },
  {
    id:4,
    meal: "Lentil Soup",
    kcal: 116,
    protein: 9.0,
    carbohydrates: 18.0,
    lipids: 1.0
  },
  {
    id:5,
    meal: "Scrambled Eggs (with butter)",
    kcal: 153,
    protein: 10.8,
    carbohydrates: 1.1,
    lipids: 11.2
  }
]

    const [meals, setMeals] = useState([])
    
    function updateMeals({id, quantity}){
        const existingMeal = meals.find(m => m.id === id);
        if (existingMeal) {
            setMeals(meals.map(m => 
                m.id === id 
                    ? {...m, quantity: m.quantity + quantity}
                    : m
            ));
        } else {
            const mealToAdd = mealList.find(meal => meal.id === id);
            if (mealToAdd) {
                setMeals([...meals, {...mealToAdd, quantity}]);
            }
        }
    }

    function removeMeal(id){
        setMeals(meals.filter(m=>m.id!==id))

    }

    return(
        <Context.Provider value={{mealList, meals, updateMeals, removeMeal}}>
            {children}
        </Context.Provider>
    )
}

export default Context