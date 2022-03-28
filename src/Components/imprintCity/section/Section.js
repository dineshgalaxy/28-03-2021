import React from "react"
import TopSection from "./topsection/TopSection";
import RecipeReviewCard from './topsection/MainProduct';
import Product from "../product/Product";
import CustomApparel from "./customAppareal/CustomAppareal";
import Categories from "./categories/Categories";

const Section = () => {
    return (
        <>
            <TopSection/>
            <RecipeReviewCard/>
            <Product/>
            <CustomApparel/>
            <Categories/>
        </>
    )
}

export default Section;