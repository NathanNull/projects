import { publish } from "gh-pages"

publish(
    "build",
    {
        branch: "gh-pages",
        repo: "https://github.com/NathanNull/projects.git",
        user: {
            name: "NathanNull",
            email: "nathanstrong777@gmail.com"
        },
        dotfiles: true
    },
    () => {
        console.log("Done!")
    }
);