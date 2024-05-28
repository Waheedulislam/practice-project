import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
    const { id } = useParams();
    const [recipeDetails, setRecipeDetails] = useState();
    console.log(recipeDetails)

    useEffect(() => {
        async function load() {

            const recipeData = await axios.get(`http://localhost:3000/recipes/${id}`)
            if (recipeData?.status == 200) {
                setRecipeDetails(recipeData?.data)
            }
        }
        load();
    }, [id])

    return (
        <div>
            <div className="hero  ">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={recipeDetails?.image} className="w-96 h-96 rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold flex">Name : <h4 className="text-3xl py-3 pl-2">{recipeDetails?.title}</h4></h1>
                        <h6 className="text-3xl font-bold flex">
                            Price :  <p className=" text-2xl py-1 pl-2">{recipeDetails?.price}</p>
                        </h6>
                        <h6 className="text-3xl font-bold">Category : {recipeDetails?.category}</h6>
                        <p className="py-6">{recipeDetails?.description}</p>
                        <button className="btn btn-primary">Buy Product</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ProductDetails;