import { allBlogs } from "@/.contentlayer/generated";
import Categories from "@/src/components/Blog/Categories";
import { slug } from "github-slugger";






const Categorypage = ({params}) => {

    const allcategories = ['all'];
    const blogs = allBlogs.filter((blog) => {
        return blog.tags.some(tag =>{
            const slugified = slug(tag);
            if(!allcategories.includes(slugified)){
                allcategories.push(slugified)
            }
            if(params.slug === "all"){
                return true;
            }
            return slugified === params.slug
        })
    }
    )
    

    return <article>
        <div>
            <h1>
                #{params.slug}
            </h1>
            <span>
                Discover more categories and expand your knowledge!
            </span>
            <Categories categories = {allcategories} currentSlug={params.slug} />
        </div>
    </article>
}

export default Categorypage;