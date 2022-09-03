import React, {useEffect, useState} from "react";

import clock from "../../assets/clock.svg";
import img from "../../assets/buger.jpg";
import addBtn from "../../assets/add-btn.svg";


import s from "./AddNewRecipe.module.scss";
import SubHeader from "../../components/common/SubHeader/SubHeader";

type Input = {
    id: number;
    text: string;
}

interface RecipeProps {

}


const AddNewRecipe: React.FC<RecipeProps> = () => {

    const [title, setTitle] = useState("Recipe Title");
    const [summary, setSummary] = useState("");
    const [prepTime, setPrepTime] = useState(0);
    const [cookTime, setCookTime] = useState(0);
    const [ingredientsList, setIngredientsList] = useState<Input[]>([]);
    const [ingredient, setIngredient] = useState("");

    const [instructionsList, setInstructionsList] = useState<Input[]>([]);

    const [instruction, setInstruction] = useState("");

    const onClickIngredient = () => {
        const obj = {
            id: ingredientsList.length,
            text: ingredient
        }
        setIngredientsList(prev => [...prev, obj]);
        setIngredient("");
        console.log(obj)
    }

    const onClickInstruction = () => {
        const obj = {
            id: instructionsList.length,
            text: instruction
        }
        setInstructionsList(prev => [...prev, obj]);
        setInstruction("");
        console.log(obj)
    }

    const onClickSubmit = () => {
        console.log(instructionsList.map(ing => ing.text).join(";"));
        ingredientsList.map((ing, inx) => {
            return {
                id: inx,
                text: ing
            }

        });

        console.log({
            title,
            summary,
            prepTime,
            cookTime,
            ingredientsList,
            instructionsList,

        })
    }


    return (
        <>
            <div className={s.recipe}>
                <SubHeader title={title}/>
                <div className={s.recipeContent}>
                    <div className={s.shortInfo}>


                        <div className={s.inputBlock}>
                            <label>Title</label>
                            <input type="text"
                                   value={title}
                                   onChange={(e) => setTitle(e.target.value)}

                            />
                        </div>
                        <div className={s.inputBlock}>
                            <label>Summary</label>
                            <textarea
                                placeholder={"Summary..."}
                                value={summary}
                                onChange={(e) => setSummary(e.target.value)}/>
                        </div>

                        <div className={s.imgContainer}>
                            <img
                                src="https://storage.googleapis.com/download/storage/v1/b/laravel-fb-fb148.appspot.com/o/Images%2Frecipe_1649705186.png?generation=1649705188250826&alt=media"
                                alt="recipePhoto"/>
                            <input type="file" name="image" className="form-control"/>
                        </div>
                        <div className={s.timeBlock}>
                            <ul>
                                <li>
                                    <img src={clock} alt=""/>
                                    <span>
                                        <p>PREP TIME</p>
                                        <p><input type="number" value={prepTime}
                                                  onChange={(e) => setPrepTime(+e.target.value)}/>
                                            min</p>
                                    </span>

                                </li>
                                <li>
                                    <img src={clock} alt=""/>
                                    <span>
                                        <p>COOK TIME</p>
                                    <p><input type="number" value={cookTime}
                                              onChange={(e) => setCookTime(+e.target.value)}/>
                                            min</p>
                                    </span>

                                </li>
                                <li>
                                    <img src={clock} alt=""/>

                                    <span>
                                        <p>TOTAL TIME</p>
                                    <p>{prepTime + cookTime} min</p>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={s.ingredients}>
                        <h2>Ingredients: </h2>

                        <ul>
                            {
                                ingredientsList && ingredientsList?.map(ing => {
                                    return (
                                        <li key={ing.id}>
                                            <input type="checkbox" id={ing.id.toString()} autoFocus={false}
                                                   required={false}/>
                                            <label htmlFor={ing.id.toString()}>{ing.text}</label>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <div className={s.addIng}>
                            <input type="text"
                                   onChange={(e) => setIngredient(e.target.value)}
                                   value={ingredient}
                                   onKeyUp={(e) => {
                                       e.preventDefault();
                                       if (e.keyCode == 13) {
                                           onClickIngredient();
                                       }
                                   }}
                            />

                            <img src={addBtn} alt=""
                                 onClick={onClickIngredient}
                                 width={28}
                                 height={28}

                            />

                        </div>
                    </div>
                    <div className={s.instructions}>
                        <h2>
                            Instructions:
                        </h2>
                        <div className={s.steps}>
                            <ul>
                                {
                                    instructionsList && instructionsList?.map((s, i) => {
                                        return (
                                            <li key={i}>
                                                <span>{s.id}</span>
                                                <p>
                                                    {s.text}
                                                </p>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                            <div className={s.addIng}>
                                <input type="text"
                                       onChange={(e) => setInstruction(e.target.value)}
                                       value={instruction}
                                       onKeyUp={(e) => {
                                           e.preventDefault();
                                           if (e.keyCode == 13) {
                                               onClickInstruction();
                                           }
                                       }}
                                />

                                <img src={addBtn} alt=""
                                     onClick={onClickInstruction}
                                     width={28}
                                     height={28}
                                />

                            </div>
                        </div>

                    </div>
                    <button className={s.greenBtn} onClick={onClickSubmit}>Submit</button>
                </div>
            </div>

        </>


    );
}

export default AddNewRecipe;

