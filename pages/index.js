import Link from "next/link"
import { useRouter } from "next/router"

const Home = () => {
    const router = useRouter()
    const handleClick = () => {
        console.log("placing your order")
        // router.replace("/product")
        router.push("/product")
    }
    return (
        <div>
            <h1>Home Page</h1>
            <Link href="/blog">
                Blog
            </Link>
            <br />
            <Link href="/product">Products</Link>
            <button onClick={handleClick}>Place order</button>
        </div>
    )
}

export default Home