# 🎯 Guide des Modifications - Issues #1 à #7

## ✨ Issue #1 - Navbar (Header)

### Modifications à faire :
1. Traduire les liens en français
2. Améliorer l'effet hover
3. Ajouter une bordure au hover

### Commandes :
```bash
git checkout develop
git pull origin develop
git checkout -b feature/navbar-improvements
```

### Fichier : `components/Header.tsx`

**Changements :**
- Ligne 24 : `Home` → `Accueil`
- Ligne 25 : `Room` → `Chambres`
- Ligne 26 : `Facilities` → `Équipements`
- Ligne 27 : `About us` → `À propos`
- Ligne 28 : `Contact` → `Contact`
- Ligne 38 : `Book your stay` → `Réserver`
- Ligne 24-28 : Changer le hover de `hover:text-gray-200` à `hover:text-yellow-400 hover:underline`

### Git :
```bash
git add components/Header.tsx
git commit -m "feat: traduction navbar en français et amélioration hover closes #1"
git push -u origin feature/navbar-improvements
```

### Pull Request :
- Base: `develop`
- Compare: `feature/navbar-improvements`
- Titre: `feat: Amélioration navbar - traduction FR (#1)`

---

## ✨ Issue #2 - Hero Section

### Modifications à faire :
1. Ajouter un sous-titre
2. Améliorer le bouton CTA

### Commandes :
```bash
git checkout develop
git pull origin develop
git checkout -b feature/hero-improvements
```

### Fichier : `components/HeroSection.tsx`

**Ajouts :**
Après la ligne 20 (après le `</h1>`), ajouter :
```tsx
<p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
  Découvrez nos hôtels de luxe dans les plus belles destinations du monde
</p>
```

Changer ligne 24-26 le bouton pour :
```tsx
<button className="bg-white text-black px-10 py-4 rounded-full text-lg font-semibold hover:bg-yellow-400 hover:scale-105 transition-all duration-300 shadow-2xl">
  Découvrir nos hôtels
</button>
```

### Git :
```bash
git add components/HeroSection.tsx
git commit -m "feat: ajout sous-titre et amélioration CTA hero section closes #2"
git push -u origin feature/hero-improvements
```

---

## ✨ Issue #3 - Product Overview (Hotel Picks)

### Modifications à faire :
1. Traduire le titre et la description
2. Ajouter un badge "Populaire"

### Commandes :
```bash
git checkout develop
git pull origin develop
git checkout -b feature/hotel-picks-improvements
```

### Fichier : `components/HotelPicksSection.tsx`

**Changements :**
- Ligne 37 : `Our Hotel Picks` → `Nos Hôtels Sélectionnés`
- Ligne 40-42 : Remplacer la description par :
```tsx
<p className="text-gray-600 max-w-2xl">
  Découvrez notre sélection d'établissements d'exception, choisis pour leur qualité de service et leur cadre unique
</p>
```

### Git :
```bash
git add components/HotelPicksSection.tsx
git commit -m "feat: traduction section hôtels en français closes #3"
git push -u origin feature/hotel-picks-improvements
```

---

## ✨ Issue #4 - Product Page (Detail)

### Modifications à faire :
1. Traduire le bouton "Back"
2. Améliorer la section équipements

### Commandes :
```bash
git checkout develop
git pull origin develop
git checkout -b feature/product-page-improvements
```

### Fichier : `app/hotel/[id]/page.tsx`

**Changements :**
- Ligne 29 : `Retour à l'accueil` → `← Retour aux hôtels`
- Ligne 72 : `À propos de cet établissement` → `Découvrez cet établissement d'exception`
- Ligne 80 : `Équipements & Services` → `🌟 Équipements & Services Premium`

### Git :
```bash
git add app/hotel/[id]/page.tsx
git commit -m "feat: amélioration traduction page détail hôtel closes #4"
git push -u origin feature/product-page-improvements
```

---

## ✨ Issue #5 - Confidence Section

### Modifications à faire :
1. Traduire et améliorer le titre
2. Rendre le texte plus accrocheur

### Commandes :
```bash
git checkout develop
git pull origin develop
git checkout -b feature/confidence-improvements
```

### Fichier : `components/ConfidenceSection.tsx`

**Changements :**
- Ligne 31 : `Choose with Confidence` → `Réservez en Toute Confiance`
- Lignes 35-41 : Remplacer les paragraphes par :
```tsx
<p className="text-gray-600 leading-relaxed">
  Dans nos Resorts et Résidences, nous créons des expériences uniques qui favorisent 
  le bien-être et l'harmonie. Chaque séjour est une invitation à la détente et à la découverte.
</p>
<p className="text-gray-600 leading-relaxed">
  Notre attention portée aux détails et notre service d'excellence garantissent 
  un impact positif sur votre corps et votre esprit tout au long de votre séjour.
</p>
```

### Git :
```bash
git add components/ConfidenceSection.tsx
git commit -m "feat: amélioration section confiance avec meilleurs textes closes #5"
git push -u origin feature/confidence-improvements
```

---

## ✨ Issue #6 - Footer (À créer)

### Modifications à faire :
1. Créer un composant Footer
2. L'ajouter à la page principale

### Commandes :
```bash
git checkout develop
git pull origin develop
git checkout -b feature/footer
```

### Nouveau fichier : `components/Footer.tsx`

```tsx
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-serif mb-4">Stayava</h3>
            <p className="text-gray-400 mb-4 max-w-md">
              Votre destination pour des séjours d'exception dans les plus beaux hôtels du monde.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-yellow-400 transition">Facebook</a>
              <a href="#" className="hover:text-yellow-400 transition">Instagram</a>
              <a href="#" className="hover:text-yellow-400 transition">Twitter</a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-white transition">Accueil</a></li>
              <li><a href="#rooms" className="hover:text-white transition">Chambres</a></li>
              <li><a href="#about" className="hover:text-white transition">À propos</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>+01 782 7886 12</li>
              <li>contact@stayava.com</li>
              <li>123 Luxury Avenue<br/>Paradise City</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2026 Stayava. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
```

### Fichier : `app/page.tsx`

Ajouter l'import en haut :
```tsx
import Footer from '@/components/Footer'
```

Ajouter avant la balise `</main>` fermante :
```tsx
<Footer />
```

### Git :
```bash
git add components/Footer.tsx app/page.tsx
git commit -m "feat: ajout footer avec liens et informations closes #6"
git push -u origin feature/footer
```

---

## ✨ Issue #7 - Newsletter

### Modifications à faire :
1. Créer une section newsletter
2. L'ajouter avant le footer

### Commandes :
```bash
git checkout develop
git pull origin develop
git checkout -b feature/newsletter
```

### Nouveau fichier : `components/NewsletterSection.tsx`

```tsx
'use client'

import { Mail } from 'lucide-react'
import { useState } from 'react'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Merci ! Vous êtes inscrit avec : ${email}`)
    setEmail('')
  }

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-cyan-500 to-blue-600">
      <div className="container mx-auto max-w-4xl text-center text-white">
        <Mail className="w-16 h-16 mx-auto mb-6" />
        <h2 className="text-4xl md:text-5xl font-serif mb-6">
          Restez Informés de nos Offres
        </h2>
        <p className="text-xl mb-8 text-white/90">
          Inscrivez-vous à notre newsletter et recevez en exclusivité nos meilleures offres et nouveautés
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Votre adresse email"
            required
            className="flex-1 px-6 py-4 rounded-full text-gray-900 outline-none focus:ring-4 focus:ring-white/50"
          />
          <button
            type="submit"
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition shadow-lg"
          >
            S'inscrire
          </button>
        </form>
      </div>
    </section>
  )
}
```

### Fichier : `app/page.tsx`

Ajouter l'import :
```tsx
import NewsletterSection from '@/components/NewsletterSection'
```

Ajouter avant `<Footer />` :
```tsx
<NewsletterSection />
```

### Git :
```bash
git add components/NewsletterSection.tsx app/page.tsx
git commit -m "feat: ajout section newsletter avec formulaire closes #7"
git push -u origin feature/newsletter
```

---

## 🎯 Ordre Recommandé

Faites-les dans cet ordre (du plus simple au plus complexe) :

1. ✅ **Issue #1** - Navbar (traduction simple)
2. ✅ **Issue #2** - Hero (ajout texte)
3. ✅ **Issue #5** - Confidence (texte)
4. ✅ **Issue #3** - Hotel Picks (traduction)
5. ✅ **Issue #4** - Product Page (traduction)
6. ✅ **Issue #6** - Footer (nouveau composant)
7. ✅ **Issue #7** - Newsletter (nouveau composant)

---

## 📝 Checklist pour Chaque Issue

- [ ] Créer la branche feature
- [ ] Faire les modifications
- [ ] Tester localement (`npm run dev`)
- [ ] Commit avec message qui référence l'issue
- [ ] Push vers GitHub
- [ ] Créer la Pull Request
- [ ] Attendre que la CI passe (✅ vert)
- [ ] Merger la PR
- [ ] Vérifier que l'issue se ferme automatiquement
- [ ] Vérifier le déploiement automatique

---

**Commencez par l'Issue #1 maintenant !** 🚀

