import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditRecipe = () => {
    const { id } = useParams();

    const [recipeDetails, setRecipeDetails] = useState();
    const [categories, setCategories] = useState();

    useEffect(() => {
        async function load() {
            const CategoriesData = await axios.get('http://localhost:3000/categories ')
            if (CategoriesData.status == 200) {
                setCategories(CategoriesData?.data)
            }

            const recipeData = await axios.get(`http://localhost:3000/recipes/${id}`)
            if (recipeData?.status == 200) {
                setRecipeDetails(recipeData?.data)
            }
        }
        load();
    }, [id])

    const handleCreateRecipe = async (e) => {
        e.preventDefault();

        const form = e.target;
        const title = form.title.value;
        const price = form.price.value;
        const description = form.description.value;
        const category = form.category.value;

        const recipeData = {
            id,
            title,
            price,
            description,
            category
        };
        console.log(recipeData)
        const EditSuccess = await axios.patch(`http://localhost:3000/recipes/${id}`, recipeData);
        if (EditSuccess) {
            // alert('Do you want to update/edit a product ?')
        }
        toast.success("Product Updated Successfully....!")
    }


    return (
        <div>
            <h1 className="text-4xl font-semibold">Add Product</h1>
            <form onSubmit={handleCreateRecipe}>

                <div>
                    <input type="text" placeholder="Title"
                        name='title'
                        defaultValue={recipeDetails?.title}
                        className="input input-bordered w-full max-w-xs" />
                </div>
                <div>
                    <input type="number" placeholder="Price"
                        id="price"
                        defaultValue={recipeDetails?.price}
                        className="input input-bordered w-full max-w-xs" />
                </div>
                <div>
                    <input
                        name="description"
                        defaultValue={recipeDetails?.description}
                        type="text" placeholder="Description" className="input input-bordered input-lg w-full max-w-xs" />
                </div>
                <div >
                    <select name="category"

                        id="" className="input input-bordered w-full max-w-xs">
                        {
                            categories?.map(category => <option
                                selected={categories?.title == recipeDetails?.category}
                                key={category} value={category?.title}>{category?.title}</option>)
                        }
                    </select>
                </div>
                <div>
                    <input
                        name="image"
                        defaultValue={recipeDetails?.image}
                        type="text" placeholder="Description" className="input input-bordered input-lg w-full max-w-xs" />
                </div>

                <div>
                    <input
                        className="w-full py-5 px-5 border btn"
                        type="submit"
                        value={'Add Recipe'}
                    />

                </div>
            </form>
            <ToastContainer />

        </div>
    );
};

export default EditRecipe;