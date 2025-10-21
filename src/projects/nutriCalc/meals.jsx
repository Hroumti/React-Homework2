import { useContext, useState } from "react";
import Context from "./context";

function MealItem({ meal }) {
    const { updateMeals } = useContext(Context);
    const [qua, setQua] = useState('');

    return (
        <div className="meal-container">
            <h3>{meal.meal}</h3>
            <p>Per 100g : {meal.kcal}Kcal | {meal.protein} prot | {meal.carbohydrates} carbohydrates | {meal.lipids} lipids</p>
            <form className="quantity-form" onSubmit={(e) => {
                e.preventDefault();
                if (qua && qua > 0) {
                    updateMeals({ id: meal.id, quantity: parseInt(qua) });
                    setQua('');
                }
            }}>
                <input 
                    type="number" 
                    min={50} 
                    max={10000} 
                    step={10} 
                    placeholder="Quantity consumed" 
                    value={qua}
                    onChange={(e)=>setQua(e.target.value)}
                />
                <input type="submit" value={'Add to Meals'} />
            </form>
        </div>
    );
}

export default function Meals(){
    const {mealList} = useContext(Context)

    return(
        <div className="meals-container">
            <h1 color="white">Meals</h1>
            {mealList&&mealList.map(m=>(
                <MealItem key={m.id} meal={m} />
            ))}
        </div>
    )
}