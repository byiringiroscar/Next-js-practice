import Link from "next/link"

const Home = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <Link href="/blog">
                Blog
            </Link>
            <br />
            <Link href="/product">Products</Link>
        </div>
    )
}

export default Home