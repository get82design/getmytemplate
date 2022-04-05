import React from 'react'
// import ComponentsPage from '../../../components/Pages/Components'

const category = {
    id: 2,
    name: "e-Commerce",
    slug: "e-commerce",
    desc: "Pages de paiement, paniers d'achat, galeries d'images, critiques - tout ce dont vous avez besoin pour créer de belles boutiques en ligne.",
}

export const subCats = [
    { name: 'Vitrine de catégories', nb: 10, image: '', new: true, href: "#" },
    { name: 'Page de paiements', nb: 12, image: '', new: true, href: "#" },
    { name: 'Compte à rebours', nb: 7, image: '', new: false, href: "#" },
    { name: "Galerie d'images", nb: 5, image: '', new: false, href: "#" },
    { name: 'Détails du produit', nb: 0, image: '', new: false, href: "#" },
    { name: 'Filtre de produits', nb: 1, image: '', new: true, href: "#" },
    { name: 'Grilles de produits', nb: 4, image: '', new: true, href: "#" },
    { name: 'Sélecteur de produits', nb: 8, image: '', new: false, href: "#" },
    { name: 'Vue rapide du produit', nb: 7, image: '', new: false, href: "#" },
    { name: 'Commentaires', nb: 10, image: '', new: true, href: "#" },
    { name: 'Panier', nb: 15, image: '', new: true, href: "#" },
    { name: 'Navigation en magasin', nb: 2, image: '', new: true, href: "#" },
    { name: 'Popups magasin', nb: 10, image: '', new: true, href: "#" },
]

export const ComponentsECommerce = () => {
    return <>
        {/* <ComponentsPage category={category} subCategories={subCats} /> */}
    </>
}

export default ComponentsECommerce