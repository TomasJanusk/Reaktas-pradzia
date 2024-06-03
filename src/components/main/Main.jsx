import Article from "../article/Article";
import Category from "../category/Category";
import Search from "../search/Search";
import Section from "../section/Section";
import Sidewidget from "../sidewidget/Sidewidget";


const Main = () => {
    return (
        <main>
            <div class="container mt-5">
                <div class="row">
                    <div class="col-lg-8">
                       <Article/> 
                       <Section/>
                    </div>
                    <div class="col-lg-4">
                        <Search/>
                        <Category/>
                        <Sidewidget/>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main