import axios from "axios";
import { useEffect, useState } from "react";

const AddRecipe = () => {

    const [categories, setCategories] = useState();

    useEffect(() => {
        async function load() {
            const data = await axios.get('http://localhost:3000/categories ')
            if (data.status == 200) {
                setCategories(data?.data)
            }
        }
        load();
    }, [])

    const handleCreateRecipe = async (e) => {
        e.preventDefault();

        const form = e.target;
        const id = form.id.value;
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
        }
        console.log(recipeData)
        await axios.post('http://localhost:3000/recipes', recipeData);
    }


    return (
        <div>
            <h1 className="text-4xl font-semibold">Add Product</h1>
            <form onSubmit={handleCreateRecipe}>
                <div>
                    <input type="number" placeholder="ID"
                        name='id' className="input input-bordered w-full max-w-xs" />
                </div>
                <div>
                    <input type="text" placeholder="Title"
                        name='title'
                        className="input input-bordered w-full max-w-xs" />
                </div>
                <div>
                    <input type="number" placeholder="Price"
                        id="price"
                        className="input input-bordered w-full max-w-xs" />
                </div>
                <div>
                    <input
                        name="description"
                        type="text" placeholder="Description" className="input input-bordered input-lg w-full max-w-xs" />
                </div>
                <div >
                    <select name="category" id="" className="input input-bordered w-full max-w-xs">
                        {
                            categories?.map(category => <option key={category} value={category?.title}>{category?.title}</option>)
                        }
                    </select>
                </div>

                <div>
                    <input
                        className="w-full py-5 px-5 border btn"
                        type="submit"
                        value={'Add Recipe'}
                    />

                </div>
            </form>


        </div>
    );
};

export default AddRecipe;