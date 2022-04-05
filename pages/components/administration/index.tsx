import React from 'react'
// import ComponentsPage from '../../../components/Pages/Components'

const category = {
    id: 4,
    name: "Administration",
    slug: "administration",
    desc: "Héros de la page de destination, sections de fonctionnalités, formulaires d'inscription à la newsletter - tout ce dont vous avez besoin pour créer de beaux sites Web marketing.",
}

export const subCats = [
    { name: 'Satistiques', nb: 10, image: '', new: true, href: "#" },
    { name: "Graphiques", nb: 12, image: '', new: true, href: "#" },
    { name: "Tableau de Bord", nb: 12, image: '', new: true, href: "#" },
]

export const ComponentsAdministration = () => {
    return <>
        {/* <ComponentsPage category={category} subCategories={subCats} /> */}
    </>
}

export default ComponentsAdministration