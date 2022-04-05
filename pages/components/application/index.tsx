import React from 'react'
// import ComponentsPage from '../../../components/Pages/Components'

const category = {
    id: 1,
    name: "Application",
    slug: "application",
    desc: "Éléments de formulaire, tableaux, coquilles de page, notifications, barres latérales - tout ce dont vous avez besoin pour créer de belles applications Web réactives.",
}

const subCats = [
    { name: 'Authentification', nb: 0, image: '', new: true, href: "/components/application/authentification" },
    { name: 'Bannières', nb: 0, image: '', new: true, href: "/components/application/banners" },
    { name: 'Card Headers', nb: 0, image: '', new: false, href: "/components/application/header-cards" },
    { name: 'Cards', nb: 0, image: '', new: false, href: "/components/application/cards" },
    { name: 'Divider', nb: 0, image: '', new: false, href: "/components/application/divider" },
    { name: 'Éléments formulaire', nb: 0, image: '', new: true, href: "/components/application/form-elements" },
    { name: 'Layouts formulaire', nb: 0, image: '', new: true, href: "/components/application/form-layouts" },
    { name: 'Listes', nb: 0, image: '', new: false, href: "/components/application/lists" },
    { name: 'Navbar', nb: 0, image: '', new: false, href: "/components/application/navbar" },
    { name: 'Notifications', nb: 0, image: '', new: true, href: "/components/application/notifications" },
    { name: 'Page Headers', nb: 1, image: '', new: true, href: "/components/application/page-headers" },
    { name: 'Section headers', nb: 0, image: '', new: true, href: "/components/application/section-headers" },
    { name: 'Layouts', nb: 0, image: '', new: true, href: "/components/application/layouts" },
    { name: 'Sidebars', nb: 0, image: '', new: true, href: "/components/application/sidebars" },
    { name: 'Statistiques', nb: 0, image: '', new: false, href: "/components/application/stats" },
    { name: 'Progress steps', nb: 0, image: '', new: true, href: "/components/application/progress-step" },
    { name: 'Tables', nb: 0, image: '', new: false, href: "/components/application/tables" },
    { name: 'Cards utilisateur', nb: 3, image: '', new: true, href: "/components/application/user-cards" },
]

export const ComponentsApplication = () => {
    return <>
        {/* <ComponentsPage category={category} subCategories={subCats} /> */}
    </>
}

export default ComponentsApplication