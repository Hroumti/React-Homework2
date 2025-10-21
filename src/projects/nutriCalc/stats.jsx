import { useContext } from "react";
import Context from "./context";

export default function Stats(){
    const { meals, removeMeal } = useContext(Context);

    const totalValues = meals.reduce((totals, meal) => {
        const multiplier = meal.quantity / 100;
        return {
            calories: totals.calories + (meal.kcal * multiplier),
            protein: totals.protein + (meal.protein * multiplier),
            carbohydrates: totals.carbohydrates + (meal.carbohydrates * multiplier),
            lipids: totals.lipids + (meal.lipids * multiplier)
        };
    }, { calories: 0, protein: 0, carbohydrates: 0, lipids: 0 });

    const dailyRecommended = {
        calories: 2000,
        protein: 50,
        carbohydrates: 300,
        lipids: 65
    };

    return (
        <div className="stats-container">
            <h2>Added Meals</h2>
            
            

            {meals.length === 0 ? (
                <p>No meals added yet. Add some meals to see them here!</p>
            ) : (
                <div className="added-meals">
                    {meals.map(meal => (
                        <div key={meal.id} className="added-meal-item">
                            <div className="meal-info">
                                <h3>{meal.meal}</h3>
                                <p>Quantity: {meal.quantity}g</p>
                                <p>Total Calories: {Math.round((meal.kcal * meal.quantity) / 100)} kcal</p>
                                <p>Total Protein: {Math.round((meal.protein * meal.quantity) / 100)}g</p>
                                <p>Total Carbs: {Math.round((meal.carbohydrates * meal.quantity) / 100)}g</p>
                                <p>Total Lipids: {Math.round((meal.lipids * meal.quantity) / 100)}g</p>
                            </div>
                            <button 
                                className="remove-btn"
                                onClick={() => removeMeal(meal.id)}
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            )}
            <div className="values-container">
                
                
                <div className="progress-section">
                    <h4>Daily Progress</h4>
                    <div className="progress-item">
                        <label>Calories: {Math.round(totalValues.calories)} / {dailyRecommended.calories}</label>
                        <div className="progress-bar">
                            <div 
                                className="progress-fill" 
                                style={{width: `${Math.min((totalValues.calories / dailyRecommended.calories) * 100, 100)}%`}}
                            ></div>
                        </div>
                    </div>
                    <div className="progress-item">
                        <label>Protein: {Math.round(totalValues.protein)}g / {dailyRecommended.protein}g</label>
                        <div className="progress-bar">
                            <div 
                                className="progress-fill" 
                                style={{width: `${Math.min((totalValues.protein / dailyRecommended.protein) * 100, 100)}%`}}
                            ></div>
                        </div>
                    </div>
                    <div className="progress-item">
                        <label>Carbs: {Math.round(totalValues.carbohydrates)}g / {dailyRecommended.carbohydrates}g</label>
                        <div className="progress-bar">
                            <div 
                                className="progress-fill" 
                                style={{width: `${Math.min((totalValues.carbohydrates / dailyRecommended.carbohydrates) * 100, 100)}%`}}
                            ></div>
                        </div>
                    </div>
                    <div className="progress-item">
                        <label>Lipids: {Math.round(totalValues.lipids)}g / {dailyRecommended.lipids}g</label>
                        <div className="progress-bar">
                            <div 
                                className="progress-fill" 
                                style={{width: `${Math.min((totalValues.lipids / dailyRecommended.lipids) * 100, 100)}%`}}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}