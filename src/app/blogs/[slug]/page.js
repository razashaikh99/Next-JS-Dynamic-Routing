const blogs = [
    {
        id: 1,
        title: "Blog Number 01",
        slug: "blog_number_01",
        description: "This is the Blog Number 01, Next JS",
    },
    {
        id: 2,
        title: "Blog Number 02",
        slug: "blog_number_02",
        description: "This is the Blog Number 02, Next JS",
    },
    {
        id: 3,
        title: "Blog Number 03",
        slug: "blog_number_03",
        description: "This is the Blog Number 03, Next JS",
    },
    {
        id: 4,
        title: "Blog Number 04",
        slug: "blog_number_04",
        description: "This is the Blog Number 04, Next JS",
    },
    {
        id: 5,
        title: "Blog Number 05",
        slug: "blog_number_05",
        description: "This is the Blog Number 05, Next JS",
    },
    {
        id: 6,
        title: "Blog Number 06",
        slug: "blog_number_06",
        description: "This is the Blog Number 06, Next JS",
    },
]

export default function BlogDetail({ params }) {
    const blog = blogs.find((data) => data.slug == params.slug);
    return (
        <div className="container mx-auto text-center p-20">
            <h1 className="font-bold text-4xl p-2 px-3 text-center my-2">
                { blog.title }
            </h1>
            <h1 className="font-medium text-2xl p-2 px-3 text-center my-2">
                { blog.description }
            </h1>
        </div>
    );
} 