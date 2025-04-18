 const menuItems = [
        {
            title: "MENU",
            items: [
                {
                    icon: "/home.png",
                    label: "Home",
                    href: "/",
                    visible: ["admin", "teacher", "student"],
                },
                {
                    icon: "/teacher.png",
                    label: "Teachers",
                    href: "/list/teachers",
                    visible: ["admin", "teacher"],
                },
                {
                    icon: "/student.png",
                    label: "Students",
                    href: "/list/students",
                    visible: ["admin", "teacher"],
                },
             
                {
                    icon: "/class.png",
                    label: "Classes",
                    href: "/list/classes",
                    visible: ["admin", "teacher"],
                },
               
               
                {
                    icon: "/assignment.png",
                    label: "Assignments",
                    href: "/list/assignments",
                    visible: ["admin", "teacher", "student"],
                },
                {
                    icon: "/result.png",
                    label: "Results",
                    href: "/list/results",
                    visible: ["admin", "teacher", "student"],
                },
             
               
            ],
        },
        {
            title: "OTHER",
            items: [
                {
                    icon: "/profile.png",
                    label: "Profile",
                    href: "/profile",
                    visible: ["admin", "teacher", "student"],
                },
                {
                    icon: "/setting.png",
                    label: "Settings",
                    href: "/settings",
                    visible: ["admin", "teacher", "student"],
                },
                {
                    icon: "/logout.png",
                    label: "Logout",
                    href: "/logout",
                    visible: ["admin", "teacher", "student"],
                },
            ],
        },
    ];
export default menuItems;