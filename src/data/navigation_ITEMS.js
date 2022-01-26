const mainNavItems = [
    {
        to: "/",
        className: "linkClassName",
        title: "Home"
    },
    {
        to: "/about",
        className: "linkClassName",
        title: "About"
    },
    {
        to: "/products/",
        className: "dropdown",
        title: "Products",
        dropdown: true,
        items: [
            {
                to: "products/guitar",
                className: "linkClassName",
                title: "Guitar"
            },
            {
                to: "products/recording",
                className: "linkClassName",
                title: "Recording"
            },
        ]
    },
    {
        to: "/contact",
        className: "linkClassName",
        title: "Contact"
    },
]

export default mainNavItems