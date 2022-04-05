import React from 'react'
// import ComponentsPage from '../../../components/Pages/Components'

const category = {
    id: 3,
    name: "Marketing",
    slug: "marketing",
    desc: "Héros de la page de destination, sections de fonctionnalités, formulaires d'inscription à la newsletter - tout ce dont vous avez besoin pour créer de beaux sites Web marketing.",
}

export const subCats = [
    { name: 'Blog', nb: 10, image: '', new: true, href: "#" },
    { name: "Appels à l'action", nb: 12, image: '', new: true, href: "#" },
    { name: 'Caractéristiques', nb: 7, image: '', new: false, href: "#" },
    { name: 'Menus', nb: 5, image: '', new: false, href: "#" },
    { name: 'Pieds de page', nb: 0, image: '', new: false, href: "#" },
    { name: 'Héros', nb: 1, image: '', new: true, href: "#" },
    { name: 'Grille de Logos', nb: 4, image: '', new: true, href: "#" },
    { name: 'Barre de navigation', nb: 8, image: '', new: false, href: "#" },
    { name: "Bulletins d'informations", nb: 7, image: '', new: false, href: "#" },
    { name: 'Tarifications', nb: 10, image: '', new: true, href: "#" },
    { name: 'Statistiques', nb: 15, image: '', new: true, href: "#" },
    { name: 'Équipes', nb: 2, image: '', new: true, href: "#" },
    { name: 'Témoignages', nb: 1, image: '', new: true, href: "#" },
]

export const ComponentsMarketing = () => {
    return <>
        {/* <ComponentsPage category={category} subCategories={subCats} /> */}
    </>
}

export default ComponentsMarketing