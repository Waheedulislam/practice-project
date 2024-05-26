import axios from "axios";
import { useEffect, useState } from "react";
import RecipeCardEdit from "../../components/Card/RecipeCardEdit";

const ManageAllRecepi = () => {
    const [recipes, setRecipes] = useState();


    useEffect(() => {
        async function load() {
            const data = await axios.get('http://localhost:3000/recipes')
            if (data?.status == 200) {
                setRecipes(data?.data)
            }
        }
        load();
    }, [])

    const handleDeleteRecipe = (id) => {
        setRecipes(recipes.filter((recipe) => recipe.id !== id));
    }

    return (
        <div>
            <h1 className="text-center text-5xl py-6">ALL Products</h1>
            <div className="grid grid-cols-3 gap-5 pt-10">

                {
                    recipes?.map((recipe) => <RecipeCardEdit key={recipe} recipe={recipe} oneDelete={handleDeleteRecipe}></RecipeCardEdit>)
                }
            </div>
        </div>

    );
};

export default ManageAllRecepi;