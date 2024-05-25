import { useEffect } from "react";
import Banner from "../components/Home/Banner";
import { useState } from "react";
import RecipeCard from "../components/Card/RecipeCard";
import CatagorieCard from "../components/Card/CatagorieCard";

const Home = () => {
    const [recipes, setRecipes] = useState();
    const [catagories, setCatagories] = useState();

    //Recipes
    useEffect(() => {
        // fetch('http://localhost:3000/recipes')
        //     .then((res) => res.json())
        //     .then((data) => setRecipes(data))

        async function load() {
            // get recipes
            const recipeRes = await fetch('http://localhost:3000/recipes')
            const recipeData = await recipeRes.json();
            setRecipes(recipeData);

            // get catagories
            const catagoriesRes = await fetch('http://localhost:3000/categories')
            const catagoriesData = await catagoriesRes.json()
            setCatagories(catagoriesData)
        }
        load();

        // fetch('http://localhost:3000/categories')
        //     .then((res) => res.json())
        //     .then((data) => setCatagories(data))


    }, []);


    return (
        <div>
            <Banner />
            <div className="px-16">

                {/* catagories */}
                <div>
                    <h1 className="text-5xl my-20 text-center">Our New Recipes Catagories</h1>
                    <div className="grid grid-cols-3 gap-2">
                        {
                            catagories?.map((catagories) => <CatagorieCard key={catagories.id} catagories={catagories} />)
                        }
                    </div>
                </div>

                {/* Recipes  */}
                <div>
                    <h1 className="text-5xl my-20 text-center">Our New Recipes</h1>
                    <div className="grid grid-cols-3 gap-2">
                        {
                            recipes?.reverse()?.slice(0, 6).map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;